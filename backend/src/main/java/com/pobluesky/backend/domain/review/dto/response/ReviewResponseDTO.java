package com.pobluesky.backend.domain.review.dto.response;

import com.pobluesky.backend.domain.review.entity.Review;
import com.pobluesky.backend.domain.review.entity.SalesInfo;
import lombok.Builder;

@Builder
public record ReviewResponseDTO (
    Long inquiryNo,
    SalesInfo salesInfo,
    String reviewText,
    String attachmentFile,
    String finalReviewText,
    String tsReviewReq
) {
    public static ReviewResponseDTO from(Review review) {
        return ReviewResponseDTO.builder()
            .inquiryNo(review.getInquiry().getInquiryId())
            .salesInfo(review.getSalesInfo())
            .reviewText(review.getReviewText())
            .attachmentFile(review.getAttachmentFile())
            .finalReviewText(review.getFinalReviewText())
            .tsReviewReq(review.getTsReviewReq())
            .build();
    }
}
