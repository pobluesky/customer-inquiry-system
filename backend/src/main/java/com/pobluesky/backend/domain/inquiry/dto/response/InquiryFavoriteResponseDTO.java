package com.pobluesky.backend.domain.inquiry.dto.response;

import com.pobluesky.backend.domain.inquiry.entity.Industry;
import com.pobluesky.backend.domain.inquiry.entity.Inquiry;
import com.pobluesky.backend.domain.inquiry.entity.ProductType;
import com.pobluesky.backend.domain.lineitem.dto.response.LineItemResponseDTO;
import java.util.List;
import lombok.Builder;

@Builder
public record InquiryFavoriteResponseDTO(
    Long inquiryId,
    String salesPerson,
    Industry industry,
    String customerName,
    ProductType productType,
    List<LineItemResponseDTO> lineItemList,
    Boolean isFavorite
) {
    public static InquiryFavoriteResponseDTO of(Inquiry inquiry, List<LineItemResponseDTO> lineItems) {
        return InquiryFavoriteResponseDTO.builder()
            .inquiryId(inquiry.getInquiryId())
            .salesPerson(inquiry.getSalesPerson())
            .industry(inquiry.getIndustry())
            .customerName(inquiry.getCustomer().getCustomerName())
            .productType(inquiry.getProductType())
            .lineItemList(lineItems)
            .isFavorite(inquiry.getIsFavorite())
            .build();
    }
}
