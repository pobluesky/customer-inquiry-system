package com.pobluesky.backend.domain.collaboration.service;

import com.pobluesky.backend.domain.collaboration.dto.request.CollaborationCreateRequestDTO;
import com.pobluesky.backend.domain.collaboration.dto.request.CollaborationUpdateRequestDTO;
import com.pobluesky.backend.domain.collaboration.dto.response.CollaborationDetailResponseDTO;
import com.pobluesky.backend.domain.collaboration.dto.response.CollaborationResponseDTO;
import com.pobluesky.backend.domain.collaboration.dto.response.CollaborationSummaryResponseDTO;
import com.pobluesky.backend.domain.collaboration.entity.ColStatus;
import com.pobluesky.backend.domain.collaboration.entity.Collaboration;
import com.pobluesky.backend.domain.collaboration.repository.CollaborationRepository;
import com.pobluesky.backend.domain.file.dto.FileInfo;
import com.pobluesky.backend.domain.file.service.FileService;
import com.pobluesky.backend.domain.question.entity.Question;
import com.pobluesky.backend.domain.question.entity.QuestionStatus;
import com.pobluesky.backend.domain.question.repository.QuestionRepository;
import com.pobluesky.backend.domain.user.entity.Manager;
import com.pobluesky.backend.domain.user.entity.UserRole;
import com.pobluesky.backend.domain.user.repository.ManagerRepository;
import com.pobluesky.backend.domain.user.service.SignService;
import com.pobluesky.backend.global.error.CommonException;
import com.pobluesky.backend.global.error.ErrorCode;

import java.time.LocalDate;

import java.util.List;
import lombok.RequiredArgsConstructor;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

@Service
@RequiredArgsConstructor
public class CollaborationService {

    private final SignService signService;

    private final CollaborationRepository collaborationRepository;

    private final QuestionRepository questionRepository;

    private final ManagerRepository managerRepository;

    private final FileService fileService;

    @Transactional(readOnly = true)
    public Page<CollaborationSummaryResponseDTO> getAllCollaborations(
        String token,
        int page,
        int size,
        String sortBy,
        ColStatus colStatus,
        String colReqManager,
        Long colReqId,
        LocalDate startDate,
        LocalDate endDate
    ) {
        Long userId = signService.parseToken(token);

        Manager manager = managerRepository.findById(userId)
            .orElseThrow(() -> new CommonException(ErrorCode.USER_NOT_FOUND));

        if(manager.getRole() == UserRole.CUSTOMER)
            throw new CommonException(ErrorCode.UNAUTHORIZED_USER_MANAGER);

        Pageable pageable = PageRequest.of(page, size);

        return collaborationRepository.findAllCollaborationsRequest(
            pageable,
            colStatus,
            colReqManager,
            colReqId,
            startDate,
            endDate,
            sortBy
        );
    }

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
        Long userId = signService.parseToken(token);

        Manager manager = managerRepository.findById(userId)
            .orElseThrow(() -> new CommonException(ErrorCode.USER_NOT_FOUND));

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
        Long userId = signService.parseToken(token);

        managerRepository.findById(userId)
            .orElseThrow(() -> new CommonException(ErrorCode.USER_NOT_FOUND));

        Question question = questionRepository.findById(questionId)
            .orElseThrow(() -> new CommonException(ErrorCode.QUESTION_NOT_FOUND));

        Collaboration collaboration = collaborationRepository.findByIdAndQuestion(
                collaborationId,
                question
            ).orElseThrow(() -> new CommonException(ErrorCode.COLLABORATION_NOT_FOUND));

        return CollaborationDetailResponseDTO.from(collaboration);
    }

    @Transactional
    public CollaborationResponseDTO createCollaboration(
        String token,
        Long questionId,
        MultipartFile file,
        CollaborationCreateRequestDTO requestDTO
        ) {
        Long userId = signService.parseToken(token);

        managerRepository.findById(userId)
            .orElseThrow(() -> new CommonException(ErrorCode.USER_NOT_FOUND));

        Question question = questionRepository.findById(questionId)
            .orElseThrow(() -> new CommonException(ErrorCode.QUESTION_NOT_FOUND));

        Manager reqManager = managerRepository.findById(requestDTO.colReqId())
            .orElseThrow(() -> new CommonException(ErrorCode.REQ_MANAGER_NOT_FOUND));

        Manager resManager = managerRepository.findById(requestDTO.colResId())
            .orElseThrow(() -> new CommonException(ErrorCode.RES_MANAGER_NOT_FOUND));

        String fileName = null;
        String filePath = null;

        if (file != null) {
            FileInfo fileInfo = fileService.uploadFile(file);
            fileName = fileInfo.getOriginName();
            filePath = fileInfo.getStoredFilePath();
        }

        Collaboration collaborationEntity = requestDTO.toCollaborationEntity(
            reqManager,
            resManager,
            question,
            fileName,
            filePath
        );

        Collaboration savedCollaboration = collaborationRepository.save(collaborationEntity);

        return CollaborationResponseDTO.from(savedCollaboration);
    }

    @Transactional
    public CollaborationDetailResponseDTO updateCollaborationStatus(
        String token,
        Long collaborationId,
        MultipartFile file,
        CollaborationUpdateRequestDTO requestDTO
        ) {
        Long userId = signService.parseToken(token);

        managerRepository.findById(userId)
            .orElseThrow(() -> new CommonException(ErrorCode.USER_NOT_FOUND));

        Manager reqManager = managerRepository.findById(requestDTO.colReqId())
            .orElseThrow(() -> new CommonException(ErrorCode.USER_NOT_FOUND));

        Manager resManager = managerRepository.findById(requestDTO.colResId())
            .orElseThrow(() -> new CommonException(ErrorCode.USER_NOT_FOUND));

        Collaboration foundCollaboration =
            collaborationRepository.findByRequestManagerAndResponseManager(reqManager, resManager)
            .orElseThrow(() -> new CommonException(ErrorCode.COLLABORATION_NOT_FOUND));

        if(!userId.equals(foundCollaboration.getColResponseManager().getUserId()))
            throw new CommonException(ErrorCode.RESMANAGER_NOT_MACHED);

        Collaboration collaboration = validateCollaboration(collaborationId);

        collaboration.writeColReply(requestDTO.colReply());
        collaboration.decideCollaboration(requestDTO.isAccepted());

        String fileName = null;
        String filePath = null;

        if (file != null) {
            FileInfo fileInfo = fileService.uploadFile(file);
            fileName = fileInfo.getOriginName();
            filePath = fileInfo.getStoredFilePath();
        }

        collaboration.updateFiles(fileName, filePath);

        return CollaborationDetailResponseDTO.from(collaboration);
    }

    @Transactional
    public CollaborationDetailResponseDTO completeCollaboration(
        String token,
        Long collaborationId
    ) {
        Long userId = signService.parseToken(token);

        managerRepository.findById(userId)
            .orElseThrow(() -> new CommonException(ErrorCode.USER_NOT_FOUND));

        Collaboration collaboration = validateCollaboration(collaborationId);

        if(!userId.equals(collaboration.getColResponseManager().getUserId()))
            throw new CommonException(ErrorCode.RESMANAGER_NOT_MACHED);

        collaboration.completeCollaboration();

        return CollaborationDetailResponseDTO.from(collaboration);
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
