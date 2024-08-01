package com.pobluesky.backend.domain.quality.dto.response;

import com.pobluesky.backend.domain.quality.entity.Quality;
import com.pobluesky.backend.domain.quality.entity.QualityReviewInfo;
import lombok.Builder;

@Builder
public record QualityResponseDTO(
    Long qualityId,
    Long inquiryId,
    Long userId,
    QualityReviewInfo qualityReviewInfo,
    String requireAddContents
) {
    // entity -> dto
    public static QualityResponseDTO from(Quality quality) {
        return QualityResponseDTO.builder()
            .qualityId(quality.getQualityId())
            .inquiryId(quality.getInquiry().getInquiryId())
            .qualityReviewInfo(quality.getQualityReviewInfo())
            .requireAddContents(quality.getRequireAddContents())
            .build();
    }
}
