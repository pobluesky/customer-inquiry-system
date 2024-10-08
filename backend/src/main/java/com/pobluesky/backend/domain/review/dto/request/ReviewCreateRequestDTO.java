package com.pobluesky.backend.domain.review.dto.request;

import com.pobluesky.backend.domain.inquiry.entity.Inquiry;
import com.pobluesky.backend.domain.review.entity.Review;

public record ReviewCreateRequestDTO(
    SalesInfoDTO salesInfo,
    String reviewText,
    String finalReviewText,
    String tsReviewReq
)
{
    public Review toReviewEntity(Inquiry inquiry) {
        return Review.builder()
            .inquiry(inquiry)
            .salesInfo(salesInfo.toSalesInfoEntity())
            .reviewText(reviewText)
            .attachmentFileName(inquiry.getFileName())
            .attachmentFilePath(inquiry.getFilePath())
            .finalReviewText(finalReviewText)
            .tsReviewReq(tsReviewReq)
            .build();
    }
}
