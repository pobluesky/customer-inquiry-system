package com.pobluesky.backend.domain.collaboration.entity;

import lombok.Getter;

@Getter
public enum ColStatus {
    READY("ready"),
    INPROGRESS("inprogress"),
    REFUSE("refuse"),
    FINISH("finish"),
    COMPLETE("complete");

    private String status;

    ColStatus(String status) {
        this.status = status;
    }
}
