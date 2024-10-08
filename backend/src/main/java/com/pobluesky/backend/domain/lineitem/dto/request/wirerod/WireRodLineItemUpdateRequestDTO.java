package com.pobluesky.backend.domain.lineitem.dto.request.wirerod;

import com.pobluesky.backend.domain.lineitem.entity.type.InqName;
import com.pobluesky.backend.domain.lineitem.entity.type.wirerod.Kind;

public record WireRodLineItemUpdateRequestDTO(
    Kind kind,
    InqName inqName,
    String orderCategory,
    String diameter,
    Integer quantity,
    String expectedDeadline,
    Integer initialQuantity,
    String customerProcessing,
    String finalUse,
    String transportationDestination,
    String annualCost,
    String legalRegulatoryReview,
    String legalRegulatoryReviewDetail,
    String finalCustomer
) {
}
