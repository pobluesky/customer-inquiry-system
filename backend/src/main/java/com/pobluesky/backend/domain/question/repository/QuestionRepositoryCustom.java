package com.pobluesky.backend.domain.question.repository;

import com.pobluesky.backend.domain.question.dto.response.QuestionSummaryResponseDTO;
import com.pobluesky.backend.domain.question.entity.QuestionStatus;
import java.time.LocalDate;
import org.springframework.data.domain.Pageable;

public interface QuestionRepositoryCustom {
    QuestionSummaryResponseDTO findQuestionsByCustomer(
        Long userId, Pageable pageable, QuestionStatus status,
        LocalDate startDate, LocalDate endDate);
}
