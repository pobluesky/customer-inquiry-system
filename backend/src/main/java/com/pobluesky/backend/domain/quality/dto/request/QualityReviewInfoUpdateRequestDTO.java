package com.pobluesky.backend.domain.quality.dto.request;

public record QualityReviewInfoUpdateRequestDTO (
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
}