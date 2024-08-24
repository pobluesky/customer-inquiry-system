package com.pobluesky.backend.domain.review.dto.request;

public record ReviewUpdateRequestDTO (
    SalesInfoDTO salesInfo,
    String reviewText,
    String finalReviewText,
    String tsReviewReq
){

}
