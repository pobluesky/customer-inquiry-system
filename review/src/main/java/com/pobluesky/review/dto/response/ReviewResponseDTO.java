package com.pobluesky.review.dto.response;

import com.pobluesky.review.entity.Review;
import com.pobluesky.review.entity.SalesInfo;
import com.pobluesky.review.feign.Inquiry;
import com.pobluesky.review.feign.InquiryClient;
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
    public static ReviewResponseDTO from(Review review, InquiryClient inquiryClient,String token) {
        Inquiry inquiry = inquiryClient.getInquiryDetailForManager(token,review.getInquiryId());

        return ReviewResponseDTO.builder()
            .inquiryId(inquiry.getInquiryId())
            .salesInfo(review.getSalesInfo())
            .reviewText(review.getReviewText())
            .attachmentFileName(review.getAttachmentFileName())
            .attachmentFilePath(review.getAttachmentFilePath())
            .finalReviewText(review.getFinalReviewText())
            .tsReviewReq(review.getTsReviewReq())
            .build();
    }
}
