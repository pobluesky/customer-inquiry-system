package com.pobluesky.backend.domain.lineitem.dto.response.hotrolled;

import com.pobluesky.backend.domain.lineitem.dto.response.LineItemResponseDTO;
import com.pobluesky.backend.domain.lineitem.entity.HotRolledLineItem;
import com.pobluesky.backend.domain.lineitem.entity.LineItem;
import com.pobluesky.backend.domain.lineitem.entity.type.hotrolled.InqName;
import com.pobluesky.backend.domain.lineitem.entity.type.hotrolled.Kind;
import lombok.Builder;
import lombok.Getter;

@Builder
@Getter
public class HotRolledLineItemResponseDTO extends LineItemResponseDTO {

    private Long lineItemId;

    private Long inquiryId;

    private Long CustomerId;

    private String CustomerName;

    private Kind kind;

    private InqName inqName;

    private String orderCategory;

    private String thickness;

    private String width;

    private String hardness;

    private String flatness;

    private String orderEdge;

    private Integer quantity;

    private Boolean isActivated;

    public static HotRolledLineItemResponseDTO of(HotRolledLineItem hotRolledLineItem) {

        return HotRolledLineItemResponseDTO.builder()
            .lineItemId(hotRolledLineItem.getLineItemId())
            .inquiryId(hotRolledLineItem.getInquiry().getInquiryId())
            .CustomerId(hotRolledLineItem.getCustomer().getCustomerId())
            .CustomerName(hotRolledLineItem.getCustomer().getCustomerName())
            .kind(hotRolledLineItem.getKind())
            .inqName(hotRolledLineItem.getInqName())
            .orderCategory(hotRolledLineItem.getOrderCategory())
            .thickness(hotRolledLineItem.getThickness())
            .width(hotRolledLineItem.getWidth())
            .hardness(hotRolledLineItem.getHardness())
            .flatness(hotRolledLineItem.getFlatness())
            .orderEdge(hotRolledLineItem.getOrderEdge())
            .quantity(hotRolledLineItem.getQuantity())
            .build();
    }

}