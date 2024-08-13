package com.pobluesky.backend.domain.lineitem.dto.response.wirerod;

import com.pobluesky.backend.domain.inquiry.dto.response.InquirySummaryResponseDTO;
import com.pobluesky.backend.domain.lineitem.dto.response.LineItemResponseDTO;
import com.pobluesky.backend.domain.lineitem.entity.WireRodLineItem;
import com.pobluesky.backend.domain.lineitem.entity.type.wirerod.Kind;
import java.util.Date;
import lombok.Builder;
import lombok.Getter;

@Builder
@Getter
public class WireRodLineItemSummaryResponseDTO extends LineItemResponseDTO {

    private Long lineItemId;

    private InquirySummaryResponseDTO inquirySummaryResponseDTO;

    private Kind kind;

    private String orderCategory;

    private String diameter;

    private Integer quantity;

    private Date expectedDeadLine;

    private Integer initialQuantity;

    private String customerProcessing;

    private String finalUse;

    private Boolean isActivated;

    public static WireRodLineItemSummaryResponseDTO of(WireRodLineItem wireRodLineItem) {

        InquirySummaryResponseDTO inquiryDTO =
            InquirySummaryResponseDTO.from(wireRodLineItem.getInquiry());

        return WireRodLineItemSummaryResponseDTO.builder()
            .lineItemId(wireRodLineItem.getLineItemId())
            .inquirySummaryResponseDTO(inquiryDTO)
            .kind(wireRodLineItem.getKind())
            .orderCategory(wireRodLineItem.getOrderCategory())
            .diameter(wireRodLineItem.getDiameter())
            .quantity(wireRodLineItem.getQuantity())
            .expectedDeadLine(wireRodLineItem.getExpectedDeadline())
            .initialQuantity(wireRodLineItem.getInitialQuantity())
            .customerProcessing(wireRodLineItem.getCustomerProcessing())
            .finalUse(wireRodLineItem.getFinalUse())
            .isActivated(wireRodLineItem.getIsActivated())
            .build();
    }

}
