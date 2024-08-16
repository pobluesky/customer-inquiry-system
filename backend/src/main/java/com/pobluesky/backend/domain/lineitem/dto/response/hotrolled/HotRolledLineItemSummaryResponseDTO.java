package com.pobluesky.backend.domain.lineitem.dto.response.hotrolled;

import com.pobluesky.backend.domain.inquiry.dto.response.InquirySummaryResponseDTO;
import com.pobluesky.backend.domain.inquiry.entity.Inquiry;
import com.pobluesky.backend.domain.lineitem.dto.response.LineItemResponseDTO;
import com.pobluesky.backend.domain.lineitem.entity.HotRolledLineItem;
import com.pobluesky.backend.domain.lineitem.entity.type.hotrolled.Kind;

import lombok.Builder;
import lombok.Getter;

@Builder
@Getter
public class HotRolledLineItemSummaryResponseDTO extends LineItemResponseDTO {

    private Long lineItemId;

    private InquirySummaryResponseDTO inquirySummaryResponseDTO;

    private Kind kind;

    private String thickness;

    private String width;

    private Integer quantity;

    private Boolean isActivated;

    public static HotRolledLineItemSummaryResponseDTO of(HotRolledLineItem hotRolledLineItem){

        InquirySummaryResponseDTO inquiryDTO =
            InquirySummaryResponseDTO.from(hotRolledLineItem.getInquiry());

        return HotRolledLineItemSummaryResponseDTO.builder()
            .lineItemId(hotRolledLineItem.getLineItemId())
            .inquirySummaryResponseDTO(inquiryDTO)
            .kind(hotRolledLineItem.getKind())
            .thickness(hotRolledLineItem.getThickness())
            .width(hotRolledLineItem.getWidth())
            .quantity(hotRolledLineItem.getQuantity())
            .isActivated(hotRolledLineItem.getIsActivated())
            .build();
    }
}
