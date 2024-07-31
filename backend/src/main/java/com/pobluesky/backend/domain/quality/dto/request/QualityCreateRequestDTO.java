package com.pobluesky.backend.domain.quality.dto.request;

import com.pobluesky.backend.domain.quality.entity.Quality;
import com.pobluesky.backend.domain.quality.entity.QualityReviewInfo;

public record QualityCreateRequestDTO(
    QualityReviewInfo qualityReviewInfo,
    String requireAddContents
) {
    // dto -> entity
    public Quality toQualityEntity() {
        return Quality.builder()
            .qualityReviewInfo(qualityReviewInfo)
            .requireAddContents(requireAddContents)
            .build();
    }
}
