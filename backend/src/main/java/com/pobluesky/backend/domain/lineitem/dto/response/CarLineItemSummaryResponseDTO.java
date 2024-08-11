package com.pobluesky.backend.domain.lineitem.dto.response;

import com.pobluesky.backend.domain.inquiry.dto.response.InquirySummaryResponseDTO;
import com.pobluesky.backend.domain.lineitem.entity.CarLineItem;
import com.pobluesky.backend.domain.lineitem.entity.type.Kind;
import com.pobluesky.backend.domain.lineitem.entity.type.StandardOrg;

import lombok.Builder;
import lombok.Getter;

@Builder
@Getter
public class CarLineItemSummaryResponseDTO extends LineItemResponseDTO {

    private Long lineItemId;

    private InquirySummaryResponseDTO inquirySummaryResponseDTO;

    private Kind kind;

    private StandardOrg standardOrg;

    private String pjtName;

    private String thickness;

    private String width;

    private String customerName;

    private Boolean isActivated;

    public static CarLineItemSummaryResponseDTO of(CarLineItem carLineItem) {

        InquirySummaryResponseDTO inquiryDTO =
            InquirySummaryResponseDTO.from(carLineItem.getInquiry(), carLineItem);

        return CarLineItemSummaryResponseDTO.builder()
            .lineItemId(carLineItem.getLineItemId())
            .inquirySummaryResponseDTO(inquiryDTO)
            .kind(carLineItem.getKind())
            .standardOrg(carLineItem.getStandardOrg())
            .pjtName(carLineItem.getPjtName())
            .thickness(carLineItem.getThickness())
            .width(carLineItem.getWidth())
            .customerName(carLineItem.getCustomerName())
            .isActivated(carLineItem.getIsActivated())
            .build();
    }
}
