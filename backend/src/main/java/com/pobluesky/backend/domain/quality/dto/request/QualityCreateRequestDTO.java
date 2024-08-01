package com.pobluesky.backend.domain.quality.dto.request;

import com.pobluesky.backend.domain.inquiry.entity.Inquiry;
import com.pobluesky.backend.domain.quality.entity.Quality;
import com.pobluesky.backend.domain.quality.entity.QualityReviewInfo;

public record QualityCreateRequestDTO(
    QualityReviewInfo qualityReviewInfo,
    String requireAddContents
) {
    // dto -> entity
    public Quality toQualityEntity(Inquiry inquiry) {
        return Quality.builder()
            .inquiry(inquiry)
            .qualityReviewInfo(qualityReviewInfo)
            .requireAddContents(requireAddContents)
            .build();
    }
}

