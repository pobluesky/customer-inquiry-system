package com.pobluesky.backend.domain.inquiry.entity;

import lombok.Getter;

@Getter
public enum InquiryType {
    QUALITY_INQUIRY("Quality Inquiry"),
    QUOTE_INQUIRY("Quote Inquiry"),
    COMMON_INQUIRY("General (Quote/Quality Inquiry)");

    private final String type;

    InquiryType(String type) {
        this.type = type;
    }
}
