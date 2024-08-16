package com.pobluesky.backend.domain.lineitem.dto.response.coldrolled;

import com.pobluesky.backend.domain.lineitem.dto.response.LineItemResponseDTO;
import com.pobluesky.backend.domain.lineitem.entity.ColdRolledLineItem;
import com.pobluesky.backend.domain.lineitem.entity.type.coldrolled.InqName;
import com.pobluesky.backend.domain.lineitem.entity.type.coldrolled.Kind;

import java.time.LocalDate;

import lombok.Builder;
import lombok.Getter;
import org.springframework.cglib.core.Local;

@Builder
@Getter
public class ColdRolledLineItemResponseDTO extends LineItemResponseDTO {

    private Long lineItemId;

    private Long inquiryId;

    private Long userId;

    private String CustomerName;

    private Kind kind;

    private InqName inqName;

    private String orderCategory;

    private String thickness;

    private String width;

    private Integer quantity;

    private LocalDate expectedDeadline;

    private String orderEdge;

    private String inDiameter;

    private String outDiameter;

    private Boolean isActivated;

    public static ColdRolledLineItemResponseDTO of(ColdRolledLineItem coldRolledLineItem) {

        return ColdRolledLineItemResponseDTO.builder()
            .lineItemId(coldRolledLineItem.getLineItemId())
            .inquiryId(coldRolledLineItem.getInquiry().getInquiryId())
            .userId(coldRolledLineItem.getCustomer().getUserId())
            .CustomerName(coldRolledLineItem.getCustomer().getCustomerName())
            .kind(coldRolledLineItem.getKind())
            .inqName(coldRolledLineItem.getInqName())
            .orderCategory(coldRolledLineItem.getOrderCategory())
            .thickness(coldRolledLineItem.getThickness())
            .width(coldRolledLineItem.getWidth())
            .quantity(coldRolledLineItem.getQuantity())
            .expectedDeadline(coldRolledLineItem.getExpectedDeadline())
            .orderEdge(coldRolledLineItem.getOrderEdge())
            .inDiameter(coldRolledLineItem.getInDiameter())
            .outDiameter(coldRolledLineItem.getOutDiameter())
            .isActivated(coldRolledLineItem.getIsActivated())
            .build();
    }
}
