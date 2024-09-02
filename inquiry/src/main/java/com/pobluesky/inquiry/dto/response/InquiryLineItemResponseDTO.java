package com.pobluesky.inquiry.dto.response;

import com.pobluesky.lineitem.dto.response.LineItemResponseDTO;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

@Builder
@Getter
@AllArgsConstructor
public class InquiryLineItemResponseDTO {

    private InquirySummaryResponseDTO inquiryInfo;

    private LineItemResponseDTO lineItemInfo;

    public static InquiryLineItemResponseDTO of(
        InquirySummaryResponseDTO inquiryInfo,
        LineItemResponseDTO lineItemInfo
    ) {
        return InquiryLineItemResponseDTO.builder()
            .inquiryInfo(inquiryInfo)
            .lineItemInfo(lineItemInfo)
            .build();
    }
}
