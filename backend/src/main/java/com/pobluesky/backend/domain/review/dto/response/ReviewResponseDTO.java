package com.pobluesky.backend.domain.review.dto.response;

import com.pobluesky.backend.domain.review.entity.Review;
import com.pobluesky.backend.domain.review.entity.SalesInfo;

import lombok.Builder;

@Builder
public record ReviewResponseDTO (
    Long inquiryId,
    SalesInfo salesInfo,
    String reviewText,
    String attachmentFileName,
    String attachmentFilePath,
    String finalReviewText,
    String tsReviewReq
) {
    public static ReviewResponseDTO from(Review review) {
        return ReviewResponseDTO.builder()
            .inquiryId(review.getInquiry().getInquiryId())
            .salesInfo(review.getSalesInfo())
            .reviewText(review.getReviewText())
            .attachmentFileName(review.getAttachmentFileName())
            .attachmentFilePath(review.getAttachmentFilePath())
            .finalReviewText(review.getFinalReviewText())
            .tsReviewReq(review.getTsReviewReq())
            .build();
    }
}
