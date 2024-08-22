package com.pobluesky.backend.domain.question.dto.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class QuestionSummaryResponseDTO {
    private List<QuestionSummaryDTO> inqQuestions;

    private List<QuestionSummaryDTO> siteQuestions;

    private List<QuestionSummaryDTO> etcQuestions;

    private Long totalQuestionCount;
}
