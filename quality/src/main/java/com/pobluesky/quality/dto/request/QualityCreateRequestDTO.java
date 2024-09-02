package com.pobluesky.quality.dto.request;

import com.pobluesky.quality.entity.Quality;
import com.pobluesky.quality.entity.QualityReviewInfo;

public record QualityCreateRequestDTO(
    QualityReviewInfoCreateRequestDTO qualityReviewInfo,
    String qualityComments
) {
    // dto -> entity
    public Quality toQualityEntity(Long inquiryId, String fileName, String filePath) {
        QualityReviewInfo qualityReviewInfoEntity = qualityReviewInfo.toQualityReviewInfoEntity(fileName, filePath);

        return Quality.builder()
            .inquiryId(inquiryId)
            .qualityReviewInfo(qualityReviewInfoEntity)
            .qualityComments(qualityComments)
            .build();
    }
}

