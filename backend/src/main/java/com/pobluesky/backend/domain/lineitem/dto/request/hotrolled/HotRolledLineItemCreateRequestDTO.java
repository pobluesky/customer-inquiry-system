package com.pobluesky.backend.domain.lineitem.dto.request.hotrolled;

import com.pobluesky.backend.domain.inquiry.entity.Inquiry;
import com.pobluesky.backend.domain.lineitem.entity.HotRolledLineItem;
import com.pobluesky.backend.domain.lineitem.entity.type.hotrolled.InqName;
import com.pobluesky.backend.domain.lineitem.entity.type.hotrolled.Kind;


public record HotRolledLineItemCreateRequestDTO(
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

    public HotRolledLineItem toHotRolledLineItem(
        Inquiry inquiry
    ) {
        return HotRolledLineItem.builder()
            .inquiry(inquiry)
            .kind(kind)
            .inqName(inqName)
            .orderCategory(orderCategory)
            .thickness(thickness)
            .width(width)
            .hardness(hardness)
            .flatness(flatness)
            .orderEdge(orderEdge)
            .quantity(quantity)
            .build();
    }

}
