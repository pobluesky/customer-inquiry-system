package com.pobluesky.backend.domain.collaboration.entity;

import lombok.Getter;

@Getter
public enum ColStatus {
    READY("ready"),
    INPROGRESS("inprogress"),
    REFUSED("refused"),
    COMPLETED("completed");

    private String status;

    ColStatus(String status) {
        this.status = status;
    }
}
