package com.pobluesky.backend.domain.lineitem.dto.request.thickplate;

import com.pobluesky.backend.domain.lineitem.entity.type.wirerod.InqName;
import com.pobluesky.backend.domain.lineitem.entity.type.wirerod.Kind;
import java.util.Date;

public record ThickPlateLineItemUpdateRequestDTO(
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

}
