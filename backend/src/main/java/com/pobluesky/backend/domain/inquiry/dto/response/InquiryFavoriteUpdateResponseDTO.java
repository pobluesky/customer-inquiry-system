package com.pobluesky.backend.domain.inquiry.dto.response;

import com.pobluesky.backend.domain.inquiry.entity.Inquiry;
import lombok.Builder;

@Builder
public record InquiryFavoriteUpdateResponseDTO(
    Long inquiryId,
    Boolean isFavorite
) {
    public static InquiryFavoriteUpdateResponseDTO from(Inquiry inquiry) {
        return InquiryFavoriteUpdateResponseDTO.builder()
            .inquiryId(inquiry.getInquiryId())
            .isFavorite(inquiry.getIsFavorite())
            .build();
    }
}
