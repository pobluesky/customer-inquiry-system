package com.pobluesky.backend.domain.question.repository;

import com.pobluesky.backend.domain.question.dto.response.QuestionSummaryResponseDTO;
import com.pobluesky.backend.domain.question.entity.QuestionStatus;

import com.pobluesky.backend.domain.question.entity.QuestionType;
import java.time.LocalDate;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface QuestionRepositoryCustom {
    Page<QuestionSummaryResponseDTO> findQuestionsByManager(
        Pageable pageable,
        QuestionStatus status,
        QuestionType type,
        String title,
        Long questionId,
        String customerName,
        Boolean isActivated,
        LocalDate startDate,
        LocalDate endDate,
        Long managerId,
        String sortBy
    );

    Page<QuestionSummaryResponseDTO> findQuestionsByCustomer(
        Pageable pageable,
        Long userId,
        QuestionStatus status,
        QuestionType type,
        String title,
        Long questionId,
        LocalDate startDate,
        LocalDate endDate,
        String sortBy
    );
}
