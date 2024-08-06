package com.pobluesky.backend.domain.voc.dto.request;

import com.pobluesky.backend.domain.voc.entity.Question;
import com.pobluesky.backend.domain.inquiry.entity.Inquiry;
import com.pobluesky.backend.domain.voc.entity.QuestionStatus;

public record VocQuestionCreateRequestDTO(
    String title,
    String contents,
    String files,
    QuestionStatus status
) {
    public Question toQuestionEntity(Inquiry inquiry) {
        return Question.builder()
            .inquiry(inquiry)
            .title(title)
            .contents(contents)
            .files(files)
            .status(status)
            .build();
    }
}
