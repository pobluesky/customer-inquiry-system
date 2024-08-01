package com.pobluesky.backend.domain.inquiry.entity;

import lombok.Getter;

@Getter
public enum Progress {

    INITIAL_REVIEW("Initial Review"),
    INITIAL_REVIEW_COMPLETED("Initial Review Completed"),
    QUALITY_REQUESTED("Quality Requested"),
    QUALITY_REVIEW_COMPLETED("Quality Review Completed"),
    FINAL_REVIEW_COMPLETED("Final Review Completed");

    private final String value;

    Progress(String value) {
        this.value = value;
    }


}
