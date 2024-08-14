package com.pobluesky.backend.domain.lineitem.dto.response.thickplate;

import com.pobluesky.backend.domain.inquiry.dto.response.InquirySummaryResponseDTO;
import com.pobluesky.backend.domain.lineitem.dto.response.LineItemResponseDTO;
import com.pobluesky.backend.domain.lineitem.entity.ThickPlateLineItem;
import lombok.Builder;
import lombok.Getter;

@Builder
@Getter
public class ThickPlateLineItemResponseDTO extends LineItemResponseDTO {

    private Long lineItemId;

    private Long inquiryId;

    private Long userId;

    private String customerName;

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

    public  static ThickPlateLineItemResponseDTO of(ThickPlateLineItem thickPlateLineItem){

        return ThickPlateLineItemResponseDTO.builder()
            .lineItemId(thickPlateLineItem.getLineItemId())
            .inquiryId(thickPlateLineItem.getInquiry().getInquiryId())
            .userId(thickPlateLineItem.getCustomer().getUserId())
            .customerName(thickPlateLineItem.getCustomer().getCustomerName())
            .generalDetails(thickPlateLineItem.getGeneralDetails())
            .orderInfo(thickPlateLineItem.getOrderInfo())
            .ladleIngredient(thickPlateLineItem.getLadleIngredient())
            .productIngredient(thickPlateLineItem.getProductIngredient())
            .seal(thickPlateLineItem.getSeal())
            .grainSizeAnalysis(thickPlateLineItem.getGrainSizeAnalysis())
            .show(thickPlateLineItem.getShow())
            .curve(thickPlateLineItem.getCurve())
            .additionalRequests(thickPlateLineItem.getAdditionalRequests())
            .isActivated(thickPlateLineItem.getIsActivated())
            .build();
    }
}
