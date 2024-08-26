package com.pobluesky.backend.domain.question.repository;

import com.pobluesky.backend.domain.question.dto.response.QuestionSummaryResponseDTO;
import com.pobluesky.backend.domain.question.entity.QuestionStatus;

import com.pobluesky.backend.domain.question.entity.QuestionType;
import java.time.LocalDate;

import java.util.List;

public interface QuestionRepositoryCustom {
    List<QuestionSummaryResponseDTO> findAllQuestionsByCustomerWithoutPaging(
        Long userId,
        QuestionStatus status,
        QuestionType type,
        String title,
        Long questionId,
        LocalDate startDate,
        LocalDate endDate,
        String sortBy
    );

    List<QuestionSummaryResponseDTO> findAllQuestionsByManagerWithoutPaging(
        QuestionStatus status,
        QuestionType type,
        String title,
        Long questionId,
        String customerName,
        LocalDate startDate,
        LocalDate endDate,
        String sortBy
    );
}
