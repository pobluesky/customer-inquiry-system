package com.pobluesky.backend.domain.inquiry.dto.response;

import com.pobluesky.backend.domain.inquiry.entity.Inquiry;
import com.pobluesky.backend.domain.lineitem.dto.response.LineItemResponseDTO;
import java.util.List;
import lombok.Builder;

@Builder
public record InquiryFavoriteLineItemResponseDTO(
    Long inquiryId,
    List<LineItemResponseDTO> lineItemList
) {
    public static InquiryFavoriteLineItemResponseDTO of(Inquiry inquiry, List<LineItemResponseDTO> lineItems) {
        return InquiryFavoriteLineItemResponseDTO.builder()
            .inquiryId(inquiry.getInquiryId())
            .lineItemList(lineItems)
            .build();
    }
}
