package com.pobluesky.backend.domain.inquiry.dto.response;

import com.pobluesky.backend.domain.inquiry.entity.Inquiry;
import com.pobluesky.backend.domain.inquiry.entity.Progress;
import lombok.Builder;

@Builder
public record InquiryProgressResponseDTO(
    Long inquiryId,
    Progress progress
) {
    public static InquiryProgressResponseDTO from(Inquiry inquiry) {
        return InquiryProgressResponseDTO.builder()
            .inquiryId(inquiry.getInquiryId())
            .progress(inquiry.getProgress())
            .build();
    }
}
