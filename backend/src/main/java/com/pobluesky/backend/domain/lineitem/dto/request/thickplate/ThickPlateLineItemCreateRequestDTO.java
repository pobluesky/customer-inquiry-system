package com.pobluesky.backend.domain.lineitem.dto.request.thickplate;

import com.pobluesky.backend.domain.inquiry.entity.Inquiry;
import com.pobluesky.backend.domain.lineitem.entity.ThickPlateLineItem;


public record ThickPlateLineItemCreateRequestDTO(
    String generalDetails,
    String orderInfo,
    String ladleIngredient,
    String productIngredient,
    String seal,
    Boolean grainSizeAnalysis,
    String show,
    String extraShow,
    String agingShow,
    String curve,
    String additionalRequests,
    String hardness,
    Boolean dropWeightTest,
    Boolean ultrasonicTransducer
) {

    public ThickPlateLineItem toThickPlateLineItemEntity(Inquiry inquiry) {

        return ThickPlateLineItem.builder()
            .inquiry(inquiry)
            .generalDetails(generalDetails)
            .orderInfo(orderInfo)
            .ladleIngredient(ladleIngredient)
            .productIngredient(productIngredient)
            .seal(seal)
            .grainSizeAnalysis(grainSizeAnalysis)
            .show(show)
            .extraShow(extraShow)
            .agingShow(agingShow)
            .curve(curve)
            .additionalRequests(additionalRequests)
            .hardness(hardness)
            .dropWeightTest(dropWeightTest)
            .ultrasonicTransducer(ultrasonicTransducer)
            .build();

    }

}
