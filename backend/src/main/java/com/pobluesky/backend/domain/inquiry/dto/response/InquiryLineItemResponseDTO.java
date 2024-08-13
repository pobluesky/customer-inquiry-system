package com.pobluesky.backend.domain.inquiry.dto.response;

import com.pobluesky.backend.domain.lineitem.dto.response.LineItemResponseDTO;
import lombok.Builder;
import lombok.Getter;

@Builder
@Getter
public class InquiryLineItemResponseDTO {
    private InquirySummaryResponseDTO inquiryInfo;
    private LineItemResponseDTO lineItemInfo;

    public static InquiryLineItemResponseDTO of(InquirySummaryResponseDTO inquiryInfo, LineItemResponseDTO lineItemInfo) {
        return InquiryLineItemResponseDTO.builder()
            .inquiryInfo(inquiryInfo)
            .lineItemInfo(lineItemInfo)
            .build();
    }
}
