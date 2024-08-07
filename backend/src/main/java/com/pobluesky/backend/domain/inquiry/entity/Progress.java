package com.pobluesky.backend.domain.inquiry.entity;

import lombok.Getter;

@Getter
public enum Progress {

    RECEIPT("Receipt"),
    FIRST_REVIEW("First Review"),
    QUALITY_REVIEW("Quality Review"),
    FINAL_REVIEW("Final Review");

    private final String value;

    Progress(String value) {
        this.value = value;
    }


}
