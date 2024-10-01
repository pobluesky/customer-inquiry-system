package com.pobluesky.backend.domain.answer.dto.request;

public record AnswerUpdateRequestDTO (

    String title,

    String contents,

    String fileName,

    String filePath,

    Boolean isFileDeleted
) {
}
