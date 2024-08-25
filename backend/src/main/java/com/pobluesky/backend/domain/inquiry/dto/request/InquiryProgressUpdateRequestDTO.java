package com.pobluesky.backend.domain.inquiry.dto.request;

import com.pobluesky.backend.domain.inquiry.entity.Progress;

public record InquiryProgressUpdateRequestDTO(
    Progress progress
) {
}
