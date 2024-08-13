package com.pobluesky.backend.domain.lineitem.dto.response.thickplate;

import com.pobluesky.backend.domain.inquiry.dto.response.InquirySummaryResponseDTO;
import com.pobluesky.backend.domain.lineitem.dto.response.LineItemResponseDTO;
import com.pobluesky.backend.domain.lineitem.entity.ThickPlateLineItem;
import lombok.Builder;
import lombok.Getter;

@Builder
@Getter
public class ThickPlateLineItemSummaryResponseDTO extends LineItemResponseDTO {

    private Long lineItemId;

    private InquirySummaryResponseDTO inquirySummaryResponseDTO;

    private String generalDetails;

    private String orderInfo;

    private String ladleIngredient;

    private String productIngredient;

    private String seal;

    private Boolean grainSizeAnalysis;

    private String show;

    private String curve;

    private String additionalRequests;

    private Boolean isActivated;

    public static ThickPlateLineItemSummaryResponseDTO of(ThickPlateLineItem thickPlateLineItem){

        InquirySummaryResponseDTO inquiryDTO =
            InquirySummaryResponseDTO.from(thickPlateLineItem.getInquiry());

        return ThickPlateLineItemSummaryResponseDTO.builder()
            .lineItemId(thickPlateLineItem.getLineItemId())
            .inquirySummaryResponseDTO(inquiryDTO)
            .ladleIngredient(thickPlateLineItem.getLadleIngredient())
            .productIngredient(thickPlateLineItem.getProductIngredient())
            .seal(thickPlateLineItem.getSeal())
            .show(thickPlateLineItem.getShow())
            .curve(thickPlateLineItem.getCurve())
            .isActivated(thickPlateLineItem.getIsActivated())
            .build();
    }

}
