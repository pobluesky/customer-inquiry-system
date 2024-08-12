package com.pobluesky.backend.domain.lineitem.dto.request.thickplate;

import com.pobluesky.backend.domain.inquiry.entity.Inquiry;
import com.pobluesky.backend.domain.lineitem.entity.ThickPlateLineItem;
import com.pobluesky.backend.domain.lineitem.entity.WireRodLineItem;
import com.pobluesky.backend.domain.lineitem.entity.type.wirerod.InqName;
import com.pobluesky.backend.domain.lineitem.entity.type.wirerod.Kind;
import java.util.Date;

public record ThickPlateLineItemCreateRequestDTO(
    String generalDetails,
    String orderInfo,
    String ladleIngredient,
    String productIngredient,
    String seal,
    Boolean grainSizeAnalysis,
    String show,
    String curve,
    String additionalRequests
) {

    public ThickPlateLineItem toThickPlateLineItem(
        Inquiry inquiry
    ) {
        return ThickPlateLineItem.builder()
            .inquiry(inquiry)
            .generalDetails(generalDetails)
            .orderInfo(orderInfo)
            .ladleIngredient(ladleIngredient)
            .productIngredient(productIngredient)
            .seal(seal)
            .grainSizeAnalysis(grainSizeAnalysis)
            .show(show)
            .curve(curve)
            .additionalRequests(additionalRequests)
            .build();

    }

}
