package com.pobluesky.backend.domain.voc.entity;

import lombok.Getter;

@Getter
public enum QuestionStatus {

    READY("ready"),
    COMPLETED("completed");

    private final String status;
    QuestionStatus(String status) {
        this.status = status;
    }
}
