package com.pobluesky.backend.domain.lineitem.dto.request.coldrolled;

import com.pobluesky.backend.domain.lineitem.entity.type.coldrolled.InqName;
import com.pobluesky.backend.domain.lineitem.entity.type.coldrolled.Kind;
import java.util.Date;

public record ColdRolledLineItemUpdateRequestDTO(
    Kind kind,
    InqName inqName,
    String orderCategory,
    String thickness,
    String width,
    Integer quantity,
    Date expectedDeadline,
    String orderEdge,
    String inDiameter,
    String outDiameter
) {
}
