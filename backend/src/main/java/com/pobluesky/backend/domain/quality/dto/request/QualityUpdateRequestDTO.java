package com.pobluesky.backend.domain.quality.dto.request;

import com.pobluesky.backend.domain.quality.entity.QualityReviewInfo;

public record QualityUpdateRequestDTO(
    QualityReviewInfo qualityReviewInfo,
    String requireAddContents
) {
}
