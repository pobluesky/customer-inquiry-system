package com.pobluesky.backend.domain.quality.dto.response;

import com.pobluesky.backend.domain.quality.entity.Quality;
import com.pobluesky.backend.domain.quality.entity.QualityReviewInfo;
import lombok.Builder;

@Builder
public record QualityResponseDTO(
    Long qualityId,
    Long inquiryId,
    QualityReviewInfo qualityReviewInfo,
    String qualityComments
) {
    // entity -> dto
    public static QualityResponseDTO from(Quality quality) {
        return QualityResponseDTO.builder()
            .qualityId(quality.getQualityId())
            .inquiryId(quality.getInquiry().getInquiryId())
            .qualityReviewInfo(quality.getQualityReviewInfo())
            .qualityComments(quality.getQualityComments())
            .build();
    }
}