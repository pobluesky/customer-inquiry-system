package com.pobluesky.backend.domain.question.repository;

import com.pobluesky.backend.domain.question.dto.response.QuestionSummaryDTO;
import com.pobluesky.backend.domain.question.dto.response.QuestionSummaryResponseDTO;
import com.pobluesky.backend.domain.question.entity.QuestionStatus;

import com.pobluesky.backend.domain.question.entity.QuestionType;
import java.time.LocalDate;

import java.util.List;
import org.springframework.data.domain.Pageable;

public interface QuestionRepositoryCustom {
    QuestionSummaryResponseDTO findQuestionsByCustomer(
        Long userId,
        Pageable pageable,
        QuestionStatus status,
        LocalDate startDate,
        LocalDate endDate,
        String sortBy);

    QuestionSummaryResponseDTO findQuestionsByManager(
        Pageable pageable,
        QuestionStatus status,
        LocalDate startDate,
        LocalDate endDate,
        String sortBy
    );

    List<QuestionSummaryDTO> findAllQuestionsByCustomerWithoutPaging(
        Long userId,
        QuestionStatus status,
        QuestionType type,
        String title,
        Long questionId,
        LocalDate startDate,
        LocalDate endDate,
        String sortBy
    );

    List<QuestionSummaryDTO> findAllQuestionsByManagerWithoutPaging(
        QuestionStatus status,
        QuestionType type,
        String title,
        Long questionId,
        LocalDate startDate,
        LocalDate endDate,
        String sortBy
    );
}
