package com.pobluesky.backend.domain.lineitem.dto.request.wirerod;

import com.pobluesky.backend.domain.inquiry.entity.Inquiry;
import com.pobluesky.backend.domain.lineitem.entity.WireRodLineItem;
import com.pobluesky.backend.domain.lineitem.entity.type.wirerod.InqName;
import com.pobluesky.backend.domain.lineitem.entity.type.wirerod.Kind;
import java.util.Date;

public record WireRodLineItemCreateRequestDTO(
    Kind kind,
    InqName inqName,
    String orderCategory,
    String diameter,
    Integer quantity,
    Date expectedDeadline,
    Integer initialQuantity,
    String customerProcessing,
    String finalUse
) {

    public WireRodLineItem toWireRodLineItem(
        Inquiry inquiry
    ) {
        return WireRodLineItem.builder()
            .inquiry(inquiry)
            .kind(kind)
            .inqName(inqName)
            .orderCategory(orderCategory)
            .diameter(diameter)
            .quantity(quantity)
            .expectedDeadline(expectedDeadline)
            .initialQuantity(initialQuantity)
            .customerProcessing(customerProcessing)
            .finalUse(finalUse)
            .build();

    }
}
