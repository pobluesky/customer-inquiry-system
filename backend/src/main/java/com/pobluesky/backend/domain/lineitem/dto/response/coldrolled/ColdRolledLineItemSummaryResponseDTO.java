package com.pobluesky.backend.domain.lineitem.dto.response.coldrolled;

import com.pobluesky.backend.domain.inquiry.dto.response.InquirySummaryResponseDTO;
import com.pobluesky.backend.domain.lineitem.dto.response.LineItemResponseDTO;
import com.pobluesky.backend.domain.lineitem.entity.ColdRolledLineItem;
import com.pobluesky.backend.domain.lineitem.entity.type.coldrolled.Kind;

import lombok.Builder;
import lombok.Getter;

@Builder
@Getter
public class ColdRolledLineItemSummaryResponseDTO extends LineItemResponseDTO {

    private Long lineItemId;

    private InquirySummaryResponseDTO inquirySummaryResponseDTO;

    private Kind kind;

    private String thickness;

    private String width;

    private Integer quantity;

    public static ColdRolledLineItemSummaryResponseDTO of(ColdRolledLineItem coldRolledLineItem) {

        InquirySummaryResponseDTO inquiryDTO =
            InquirySummaryResponseDTO.from(coldRolledLineItem.getInquiry());

        return ColdRolledLineItemSummaryResponseDTO.builder()
            .lineItemId(coldRolledLineItem.getLineItemId())
            .inquirySummaryResponseDTO(inquiryDTO)
            .kind(coldRolledLineItem.getKind())
            .thickness(coldRolledLineItem.getThickness())
            .width(coldRolledLineItem.getWidth())
            .quantity(coldRolledLineItem.getQuantity())
            .build();
    }





}
