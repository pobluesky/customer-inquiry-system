package com.pobluesky.backend.domain.lineitem.dto.response.car;

import com.pobluesky.backend.domain.inquiry.dto.response.InquirySummaryResponseDTO;
import com.pobluesky.backend.domain.lineitem.dto.response.LineItemResponseDTO;
import com.pobluesky.backend.domain.lineitem.entity.CarLineItem;
import com.pobluesky.backend.domain.lineitem.entity.type.car.Kind;
import com.pobluesky.backend.domain.lineitem.entity.type.car.StandardOrg;

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
            InquirySummaryResponseDTO.from(carLineItem.getInquiry());

        return CarLineItemSummaryResponseDTO.builder()
            .lineItemId(carLineItem.getLineItemId())
            .inquirySummaryResponseDTO(inquiryDTO)
            .kind(carLineItem.getKind())
            .standardOrg(carLineItem.getStandardOrg())
            .pjtName(carLineItem.getPjtName())
            .thickness(carLineItem.getThickness())
            .width(carLineItem.getWidth())
            .isActivated(carLineItem.getIsActivated())
            .build();
    }
}
