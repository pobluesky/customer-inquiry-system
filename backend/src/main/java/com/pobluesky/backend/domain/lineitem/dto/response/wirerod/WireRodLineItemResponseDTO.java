package com.pobluesky.backend.domain.lineitem.dto.response.wirerod;

import com.pobluesky.backend.domain.lineitem.dto.response.LineItemResponseDTO;
import com.pobluesky.backend.domain.lineitem.entity.WireRodLineItem;
import com.pobluesky.backend.domain.lineitem.entity.type.wirerod.InqName;
import com.pobluesky.backend.domain.lineitem.entity.type.wirerod.Kind;

import lombok.Builder;
import lombok.Getter;

@Builder
@Getter
public class WireRodLineItemResponseDTO extends LineItemResponseDTO {

    private Long lineItemId;

    private Long inquiryId;

    private Kind kind;

    private InqName inqName;

    private String orderCategory;

    private String diameter;

    private Integer quantity;

    private String expectedDeadLine;

    private Integer initialQuantity;

    private String customerProcessing;

    private String finalUse;

    private Boolean isActivated;

    private String transportationDestination;

    private String annualCost;

    public static WireRodLineItemResponseDTO from(WireRodLineItem wireRodLineItem) {

        return WireRodLineItemResponseDTO.builder()
            .lineItemId(wireRodLineItem.getLineItemId())
            .inquiryId(wireRodLineItem.getInquiry().getInquiryId())
            .kind(wireRodLineItem.getKind())
            .inqName(wireRodLineItem.getInqName())
            .orderCategory(wireRodLineItem.getOrderCategory())
            .diameter(wireRodLineItem.getDiameter())
            .quantity(wireRodLineItem.getQuantity())
            .expectedDeadLine(wireRodLineItem.getExpectedDeadline())
            .initialQuantity(wireRodLineItem.getInitialQuantity())
            .customerProcessing(wireRodLineItem.getCustomerProcessing())
            .finalUse(wireRodLineItem.getFinalUse())
            .isActivated(wireRodLineItem.getIsActivated())
            .transportationDestination(wireRodLineItem.getTransportationDestination())
            .annualCost(wireRodLineItem.getAnnualCost())
            .build();
    }
}
