package com.pobluesky.backend.domain.lineitem.dto.request.thickplate;

public record ThickPlateLineItemUpdateRequestDTO(
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

}
