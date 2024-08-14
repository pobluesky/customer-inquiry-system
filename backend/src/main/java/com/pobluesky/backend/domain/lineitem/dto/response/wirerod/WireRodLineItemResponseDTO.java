package com.pobluesky.backend.domain.lineitem.dto.response.wirerod;

import com.pobluesky.backend.domain.lineitem.dto.response.LineItemResponseDTO;
import com.pobluesky.backend.domain.lineitem.entity.WireRodLineItem;
import com.pobluesky.backend.domain.lineitem.entity.type.wirerod.InqName;
import com.pobluesky.backend.domain.lineitem.entity.type.wirerod.Kind;

import java.time.LocalDate;

import lombok.Builder;
import lombok.Getter;

@Builder
@Getter
public class WireRodLineItemResponseDTO extends LineItemResponseDTO {

    private Long lineItemId;

    private Long inquiryId;

    private Long customerId;

    private String customerName;

    private Kind kind;

    private InqName inqName;

    private String orderCategory;

    private String diameter;

    private Integer quantity;

    private LocalDate expectedDeadLine;

    private Integer initialQuantity;

    private String customerProcessing;

    private String finalUse;

    private Boolean isActivated;

    public static WireRodLineItemResponseDTO of(WireRodLineItem wireRodLineItem) {

        return WireRodLineItemResponseDTO.builder()
            .lineItemId(wireRodLineItem.getLineItemId())
            .inquiryId(wireRodLineItem.getInquiry().getInquiryId())
            .customerId(wireRodLineItem.getCustomer().getUserId())
            .customerName(wireRodLineItem.getCustomer().getCustomerName())
            .kind(wireRodLineItem.getKind())
            .orderCategory(wireRodLineItem.getOrderCategory())
            .diameter(wireRodLineItem.getDiameter())
            .expectedDeadLine(wireRodLineItem.getExpectedDeadline())
            .initialQuantity(wireRodLineItem.getInitialQuantity())
            .customerProcessing(wireRodLineItem.getCustomerProcessing())
            .finalUse(wireRodLineItem.getFinalUse())
            .isActivated(wireRodLineItem.getIsActivated())
            .build();
    }
}
