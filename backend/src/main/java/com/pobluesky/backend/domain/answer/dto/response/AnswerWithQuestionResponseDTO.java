package com.pobluesky.backend.domain.answer.dto.response;

import com.pobluesky.backend.domain.answer.entity.Answer;
import com.pobluesky.backend.domain.question.entity.Question;
import com.pobluesky.backend.domain.question.dto.response.QuestionResponseDTO;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class AnswerWithQuestionResponseDTO {

    private final QuestionResponseDTO question;

    private final AnswerResponseDTO answer;

    public static AnswerWithQuestionResponseDTO from(Question question, Answer answer) {
        AnswerResponseDTO response = answer != null ? AnswerResponseDTO.from(answer) : null;

        return AnswerWithQuestionResponseDTO.builder()
            .question(QuestionResponseDTO.from(question))
            .answer(response)
            .build();
    }
}
