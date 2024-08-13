package com.pobluesky.backend.domain.lineitem.dto.request.hotrolled;

import com.pobluesky.backend.domain.lineitem.entity.type.hotrolled.InqName;
import com.pobluesky.backend.domain.lineitem.entity.type.hotrolled.Kind;

public record HotRolledLineItemUpdateRequestDTO(
    Kind kind,
    InqName inqName,
    String orderCategory,
    String thickness,
    String width,
    String hardness,
    String flatness,
    String orderEdge,
    Integer quantity
) {
}
