package com.pobluesky.backend.domain.lineitem.dto.request.coldrolled;

import com.pobluesky.backend.domain.inquiry.entity.Inquiry;
import com.pobluesky.backend.domain.lineitem.entity.ColdRolledLineItem;
import com.pobluesky.backend.domain.lineitem.entity.type.coldrolled.InqName;
import com.pobluesky.backend.domain.lineitem.entity.type.coldrolled.Kind;
import java.time.LocalDate;

public record ColdRolledLineItemCreateRequestDTO(
    Kind kind,
    InqName inqName,
    String orderCategory,
    String thickness,
    String width,
    Integer quantity,
    LocalDate expectedDeadline,
    String orderEdge,
    String inDiameter,
    String outDiameter,
    String sleeveThickness,
    String yieldingPoint,
    String tensileStrength,
    String elongationRatio,
    String hardness
) {
    public ColdRolledLineItem toColdRolledLineItemEntity(Inquiry inquiry)
    {

        return ColdRolledLineItem.builder()
            .inquiry(inquiry)
            .kind(kind)
            .inqName(inqName)
            .orderCategory(orderCategory)
            .thickness(thickness)
            .width(width)
            .quantity(quantity)
            .expectedDeadline(expectedDeadline)
            .orderEdge(orderEdge)
            .inDiameter(inDiameter)
            .outDiameter(outDiameter)
            .sleeveThickness(sleeveThickness)
            .yieldingPoint(yieldingPoint)
            .tensileStrength(tensileStrength)
            .elongationRatio(elongationRatio)
            .hardness(hardness)
            .build();
    }
}
