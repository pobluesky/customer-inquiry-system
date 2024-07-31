package com.pobluesky.backend.domain.quality.dto.response;

import com.pobluesky.backend.domain.quality.entity.Quality;
import com.pobluesky.backend.domain.quality.entity.QualityReviewInfo;
import lombok.Builder;

@Builder
public record QualityResponseDTO(
    Long qualityNo,
    Long inquiryNo,
    Long userNo,
    QualityReviewInfo qualityReviewInfo,
    String requireAddContents
) {
    // entity -> dto
    public static QualityResponseDTO from(Quality quality) {
        return QualityResponseDTO.builder()
            .qualityNo(quality.getQualityNo())
            .inquiryNo(quality.getInquiryNo())
            .userNo(quality.getUserNo())
            .qualityReviewInfo(quality.getQualityReviewInfo())
            .requireAddContents(quality.getRequireAddContents())
            .build();
    }
}
