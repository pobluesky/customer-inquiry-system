package com.pobluesky.backend.domain.quality.dto.request;

import com.pobluesky.backend.domain.inquiry.entity.Inquiry;
import com.pobluesky.backend.domain.quality.entity.Quality;
import com.pobluesky.backend.domain.quality.entity.QualityReviewInfo;

public record QualityCreateRequestDTO(
    QualityReviewInfoCreateRequestDTO qualityReviewInfo,
    String qualityComments
) {
    // dto -> entity
    public Quality toQualityEntity(Inquiry inquiry, String filePath, String fileName) {
        QualityReviewInfo qualityReviewInfoEntity = qualityReviewInfo.toQualityReviewInfoEntity(filePath, fileName);

        return Quality.builder()
            .inquiry(inquiry)
            .qualityReviewInfo(qualityReviewInfoEntity)
            .qualityComments(qualityComments)
            .build();
    }
}

