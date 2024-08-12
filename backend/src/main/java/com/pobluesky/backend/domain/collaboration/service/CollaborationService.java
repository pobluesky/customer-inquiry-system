package com.pobluesky.backend.domain.collaboration.service;

import com.pobluesky.backend.domain.collaboration.dto.request.CollaborationCreateRequestDTO;
import com.pobluesky.backend.domain.collaboration.dto.request.CollaborationUpdateRequestDTO;
import com.pobluesky.backend.domain.collaboration.dto.response.CollaborationDetailResponseDTO;
import com.pobluesky.backend.domain.collaboration.dto.response.CollaborationResponseDTO;
import com.pobluesky.backend.domain.collaboration.entity.ColStatus;
import com.pobluesky.backend.domain.collaboration.entity.Collaboration;
import com.pobluesky.backend.domain.collaboration.repository.CollaborationRepository;
import com.pobluesky.backend.domain.question.entity.Question;
import com.pobluesky.backend.domain.question.entity.QuestionStatus;
import com.pobluesky.backend.domain.question.repository.QuestionRepository;
import com.pobluesky.backend.domain.user.entity.Manager;
import com.pobluesky.backend.domain.user.repository.ManagerRepository;
import com.pobluesky.backend.domain.user.service.CustomUserDetailsService;
import com.pobluesky.backend.global.error.CommonException;
import com.pobluesky.backend.global.error.ErrorCode;

import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

import lombok.RequiredArgsConstructor;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class CollaborationService {

    private final CustomUserDetailsService customUserDetailsService;

    private final CollaborationRepository collaborationRepository;

    private final QuestionRepository questionRepository;

    private final ManagerRepository managerRepository;

    @Transactional(readOnly = true)
    public List<CollaborationResponseDTO> getAllCollaborations(String token) {
        Long userId = customUserDetailsService.parseToken(token);

        Manager manager = managerRepository.findById(userId)
            .orElseThrow(() -> new CommonException(ErrorCode.USER_NOT_FOUND));

        List<Collaboration> collaborations =
            collaborationRepository.findAllByColRequestManagerOrColResponseManager(manager);

        return collaborations.stream()
            .map(CollaborationResponseDTO::from)
            .collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    public CollaborationResponseDTO getCollaborationById(
        String token,
        Long questionId,
        Long collaborationId
    ) {
        Long userId = customUserDetailsService.parseToken(token);

        managerRepository.findById(userId)
            .orElseThrow(() -> new CommonException(ErrorCode.USER_NOT_FOUND));

        Question question = questionRepository.findById(questionId)
            .orElseThrow(() -> new CommonException(ErrorCode.QUESTION_NOT_FOUND));

        Collaboration collaboration = collaborationRepository.findByIdAndQuestion(
                collaborationId,
                question
            ).orElseThrow(() -> new CommonException(ErrorCode.COLLABORATION_NOT_FOUND));

        return CollaborationResponseDTO.from(collaboration);
    }

    @Transactional
    public CollaborationResponseDTO createCollaboration(
        String token,
        Long questionId,
        CollaborationCreateRequestDTO requestDTO
    ) {
        Long userId = customUserDetailsService.parseToken(token);

        managerRepository.findById(userId)
            .orElseThrow(() -> new CommonException(ErrorCode.USER_NOT_FOUND));

        Question question = questionRepository.findById(questionId)
            .orElseThrow(() -> new CommonException(ErrorCode.QUESTION_NOT_FOUND));

        Manager reqManager = managerRepository.findById(requestDTO.colReqId())
            .orElseThrow(() -> new CommonException(ErrorCode.REQ_MANAGER_NOT_FOUND));

        Manager resManager = managerRepository.findById(requestDTO.colResId())
            .orElseThrow(() -> new CommonException(ErrorCode.RES_MANAGER_NOT_FOUND));

        if(collaborationRepository
            .findByRequestManagerAndResponseManager(reqManager, resManager)
            .isPresent()
        ) {
            throw new CommonException(ErrorCode.COLLABORATION_ALREADY_EXISTS);
        }

        Collaboration collaborationEntity = requestDTO.toCollaborationEntity(
            reqManager,
            resManager,
            question
        );

        Collaboration savedCollaboration = collaborationRepository.save(collaborationEntity);

        return CollaborationResponseDTO.from(savedCollaboration);
    }

    @Transactional
    public CollaborationDetailResponseDTO updateCollaborationStatus(
        String token,
        Long collaborationId,
        CollaborationUpdateRequestDTO requestDTO
    ) {
        Long userId = customUserDetailsService.parseToken(token);

        managerRepository.findById(userId)
            .orElseThrow(() -> new CommonException(ErrorCode.USER_NOT_FOUND));

        Manager reqManager = managerRepository.findById(requestDTO.colReqId())
            .orElseThrow(() -> new CommonException(ErrorCode.USER_NOT_FOUND));

        Manager resManager = managerRepository.findById(requestDTO.colResId())
            .orElseThrow(() -> new CommonException(ErrorCode.USER_NOT_FOUND));

        Collaboration foundCollaboration =
            collaborationRepository.findByRequestManagerAndResponseManager(reqManager, resManager)
            .orElseThrow(() -> new CommonException(ErrorCode.COLLABORATION_NOT_FOUND));

        if(!userId.equals(foundCollaboration.getColResponseManager().getManagerId()))
            throw new CommonException(ErrorCode.RESMANAGER_NOT_MACHED);

        Collaboration collaboration = validateCollaboration(collaborationId);

        collaboration.writeColReply(requestDTO.colReply());
        collaboration.decideCollaboration(requestDTO.isAccepted());

        return CollaborationDetailResponseDTO.from(collaboration);
    }

    @Transactional
    public CollaborationDetailResponseDTO completeCollaboration(
        String token,
        Long collaborationId
    ) {
        Long userId = customUserDetailsService.parseToken(token);

        managerRepository.findById(userId)
            .orElseThrow(() -> new CommonException(ErrorCode.USER_NOT_FOUND));

        Collaboration collaboration = validateCollaboration(collaborationId);

        if(!userId.equals(collaboration.getColResponseManager().getManagerId()))
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
