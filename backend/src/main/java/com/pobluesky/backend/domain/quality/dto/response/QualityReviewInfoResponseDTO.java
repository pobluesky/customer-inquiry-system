package com.pobluesky.backend.domain.quality.dto.response;

import lombok.Builder;

@Builder
public record QualityReviewInfoResponseDTO (
    Long qualityReviewInfoNo,
    String finalResult,
    String finalResultDetails,
    Long standard,
    String orderCategory,
    String coatingMetalQuantity,
    String coatingOilQuantity,
    String thicknessTolerance,
    String orderEdge,
    String customerQReq,
    Boolean availableLab
) {
    // entity -> dto
    public static QualityReviewInfoResponseDTO from(com.pobluesky.backend.domain.quality.entity.QualityReviewInfo qualityReviewInfo) {
        return QualityReviewInfoResponseDTO.builder()
            .qualityReviewInfoNo(qualityReviewInfo.getQualityReviewInfoNo())
            .finalResult(qualityReviewInfo.getFinalResult())
            .finalResultDetails(qualityReviewInfo.getFinalResultDetails())
            .standard(qualityReviewInfo.getStandard())
            .orderCategory(qualityReviewInfo.getOrderCategory())
            .coatingMetalQuantity(qualityReviewInfo.getCoatingMetalQuantity())
            .coatingOilQuantity(qualityReviewInfo.getCoatingOilQuantity())
            .thicknessTolerance(qualityReviewInfo.getThicknessTolerance())
            .orderEdge(qualityReviewInfo.getOrderEdge())
            .customerQReq(qualityReviewInfo.getCustomerQReq())
            .availableLab(qualityReviewInfo.getAvailableLab())
            .build();
    }
}
