package com.pobluesky.voc.collaboration.service;


import com.pobluesky.config.global.error.CommonException;
import com.pobluesky.config.global.error.ErrorCode;
import com.pobluesky.config.global.security.UserRole;
import com.pobluesky.voc.collaboration.dto.request.CollaborationCreateRequestDTO;
import com.pobluesky.voc.collaboration.dto.request.CollaborationUpdateRequestDTO;
import com.pobluesky.voc.collaboration.dto.response.CollaborationDetailResponseDTO;
import com.pobluesky.voc.collaboration.dto.response.CollaborationResponseDTO;
import com.pobluesky.voc.collaboration.dto.response.CollaborationSummaryResponseDTO;
import com.pobluesky.voc.collaboration.entity.ColStatus;
import com.pobluesky.voc.collaboration.entity.Collaboration;
import com.pobluesky.voc.collaboration.repository.CollaborationRepository;
import com.pobluesky.voc.feign.FileClient;
import com.pobluesky.voc.feign.FileInfo;
import com.pobluesky.voc.feign.Manager;
import com.pobluesky.voc.feign.UserClient;
import com.pobluesky.voc.question.entity.Question;
import com.pobluesky.voc.question.entity.QuestionStatus;
import com.pobluesky.voc.question.repository.QuestionRepository;
import java.time.LocalDate;
import java.util.List;
import lombok.RequiredArgsConstructor;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

@Service
@RequiredArgsConstructor
public class CollaborationService {



    private final CollaborationRepository collaborationRepository;

    private final QuestionRepository questionRepository;

    private final UserClient userClient;

    private final FileClient fileClient;

    // 협업 조회 without paging
    @Transactional(readOnly = true)
    public List<CollaborationSummaryResponseDTO> getAllCollaborationsWithoutPaging(
        String token,
        String sortBy,
        ColStatus colStatus,
        String colReqManager,
        Long colReqId,
        LocalDate startDate,
        LocalDate endDate
    ) {
        Long userId = userClient.parseToken(token);

        Manager manager = userClient.getManagerDetails(userId);
        if (manager == null) {
            throw new CommonException(ErrorCode.USER_NOT_FOUND);
        }

        if(manager.getRole() == UserRole.CUSTOMER)
            throw new CommonException(ErrorCode.UNAUTHORIZED_USER_MANAGER);

        return collaborationRepository.findAllCollaborationsRequestWithoutPaging(
            colStatus,
            colReqManager,
            colReqId,
            startDate,
            endDate,
            sortBy
        );
    }

    @Transactional(readOnly = true)
    public CollaborationDetailResponseDTO getCollaborationById(
        String token,
        Long questionId,
        Long collaborationId
    ) {
        Long userId = userClient.parseToken(token);

        Manager manager = userClient.getManagerDetails(userId);
        if (manager == null) {
            throw new CommonException(ErrorCode.USER_NOT_FOUND);
        }

        Question question = questionRepository.findById(questionId)
            .orElseThrow(() -> new CommonException(ErrorCode.QUESTION_NOT_FOUND));

        Collaboration collaboration = collaborationRepository.findByIdAndQuestion(
                collaborationId,
                question
            ).orElseThrow(() -> new CommonException(ErrorCode.COLLABORATION_NOT_FOUND));

        return CollaborationDetailResponseDTO.from(collaboration,userClient);
    }

    @Transactional
    public CollaborationResponseDTO createCollaboration(
        String token,
        Long questionId,
        MultipartFile file,
        CollaborationCreateRequestDTO requestDTO
        ) {
        Long userId = userClient.parseToken(token);

        Manager manager = userClient.getManagerDetails(userId);
        if (manager == null) {
            throw new CommonException(ErrorCode.USER_NOT_FOUND);
        }

        Question question = questionRepository.findById(questionId)
            .orElseThrow(() -> new CommonException(ErrorCode.QUESTION_NOT_FOUND));

        // 요청한 Manager 정보 가져오기
        Manager reqManager = userClient.getManagerDetails(requestDTO.colReqId());
        if (reqManager == null) {
            throw new CommonException(ErrorCode.REQ_MANAGER_NOT_FOUND);
        }

        // 응답할 Manager 정보 가져오기
        Manager resManager = userClient.getManagerDetails(requestDTO.colResId());
        if (resManager == null) {
            throw new CommonException(ErrorCode.RES_MANAGER_NOT_FOUND);
        }

        String fileName = null;
        String filePath = null;

        if (file != null) {
            FileInfo fileInfo = fileClient.uploadFile(file);
            fileName = fileInfo.getOriginName();
            filePath = fileInfo.getStoredFilePath();
        }

        Collaboration collaborationEntity = requestDTO.toCollaborationEntity(
            reqManager.getUserId(),
            resManager.getUserId(),
            question,
            fileName,
            filePath
        );

        Collaboration savedCollaboration = collaborationRepository.save(collaborationEntity);

        return CollaborationResponseDTO.from(savedCollaboration,userClient);
    }

    @Transactional
    public CollaborationDetailResponseDTO updateCollaborationStatus(
        String token,
        Long collaborationId,
        MultipartFile file,
        CollaborationUpdateRequestDTO requestDTO
    ) {
        Long userId = userClient.parseToken(token);

        Collaboration collaboration = validateCollaboration(collaborationId);

        if (collaboration.getColStatus() == ColStatus.INPROGRESS) {
            throw new CommonException(ErrorCode.COLLABORATION_STATUS_INPROGRESS);
        }

        Manager manager = userClient.getManagerDetails(userId);
        if (manager == null) {
            throw new CommonException(ErrorCode.USER_NOT_FOUND);
        }

        // 요청한 Manager 정보 가져오기
        Manager reqManager = userClient.getManagerDetails(requestDTO.colReqId());
        if (reqManager == null) {
            throw new CommonException(ErrorCode.REQ_MANAGER_NOT_FOUND);
        }

        // 응답할 Manager 정보 가져오기
        Manager resManager = userClient.getManagerDetails(requestDTO.colResId());
        if (resManager == null) {
            throw new CommonException(ErrorCode.RES_MANAGER_NOT_FOUND);
        }

        // Manager의 ID를 비교하여 검증
        if (!collaboration.getColRequestManagerId().equals(reqManager.getUserId()) ||
            !collaboration.getColResponseManagerId().equals(resManager.getUserId())) {
            throw new CommonException(ErrorCode.COLLABORATION_INFO_MISMATCH);
        }

        // 응답 매니저가 현재 인증된 사용자와 일치하는지 확인
        if (!userId.equals(resManager.getUserId())) {
            throw new CommonException(ErrorCode.RESMANAGER_NOT_MACHED);
        }

        collaboration.writeColReply(requestDTO.colReply());
        collaboration.decideCollaboration(requestDTO.isAccepted());

        String fileName = null;
        String filePath = null;

        if (file != null) {
            FileInfo fileInfo = fileClient.uploadFile(file);
            fileName = fileInfo.getOriginName();
            filePath = fileInfo.getStoredFilePath();
        }

        collaboration.updateFiles(fileName, filePath);

        return CollaborationDetailResponseDTO.from(collaboration,userClient);
    }

    @Transactional
    public CollaborationDetailResponseDTO completeCollaboration(
        String token,
        Long collaborationId
    ) {
        Long userId = userClient.parseToken(token);

        Manager manager = userClient.getManagerDetails(userId);
        if (manager == null) {
            throw new CommonException(ErrorCode.USER_NOT_FOUND);
        }

        Collaboration collaboration = validateCollaboration(collaborationId);

        if(!userId.equals(collaboration.getColResponseManagerId()))
            throw new CommonException(ErrorCode.RESMANAGER_NOT_MACHED);

        collaboration.completeCollaboration();

        return CollaborationDetailResponseDTO.from(collaboration,userClient);
    }

    private Collaboration validateCollaboration(Long collaborationId) {
        Collaboration collaboration = collaborationRepository
            .findById(collaborationId)
            .orElseThrow(() -> new CommonException(ErrorCode.COLLABORATION_NOT_FOUND));

        if (collaboration.getColStatus() == ColStatus.COMPLETE) {
            throw new CommonException(ErrorCode.COLLABORATION_STATUS_COMPLETED);
        } else if (collaboration.getColStatus() == ColStatus.REFUSE) {
            throw new CommonException(ErrorCode.COLLABORATION_STATUS_REFUSED);
        }

        Question question = questionRepository.findById(collaboration.getQuestion().getQuestionId())
            .orElseThrow(() -> new CommonException(ErrorCode.QUESTION_NOT_FOUND));

        if(question.getStatus() == QuestionStatus.COMPLETED) {
            throw new CommonException(ErrorCode.QUESTION_STATUS_COMPLETED);
        }

        return collaboration;
    }
}
