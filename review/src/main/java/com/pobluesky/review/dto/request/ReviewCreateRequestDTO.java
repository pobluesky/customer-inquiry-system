package com.pobluesky.review.dto.request;

import com.pobluesky.review.entity.Review;
import com.pobluesky.review.feign.Inquiry;
import com.pobluesky.review.feign.InquiryClient;

public record ReviewCreateRequestDTO(
    SalesInfoDTO salesInfo,
    String reviewText,
    String finalReviewText,
    String tsReviewReq
)
{
    public Review toReviewEntity(Long inquiryId,InquiryClient inquiryClient) {

        Inquiry inquiry = inquiryClient.getInquiryById(inquiryId);

        return Review.builder()
            .inquiryId(inquiryId)
            .salesInfo(salesInfo.toSalesInfoEntity())
            .reviewText(reviewText)
            .attachmentFileName(inquiry.getFileName())
            .attachmentFilePath(inquiry.getFilePath())
            .finalReviewText(finalReviewText)
            .tsReviewReq(tsReviewReq)
            .build();
    }
}
