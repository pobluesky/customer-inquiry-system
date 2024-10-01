package com.pobluesky.backend.domain.question.dto.request;

import com.pobluesky.backend.domain.inquiry.entity.Inquiry;
import com.pobluesky.backend.domain.question.entity.QuestionStatus;
import com.pobluesky.backend.domain.question.entity.QuestionType;

public record QuestionUpdateRequestDTO(

    Inquiry inquiry,

    String title,

    String contents,

    QuestionStatus status,

    QuestionType type,

    Boolean isFileDeleted
) {
}
