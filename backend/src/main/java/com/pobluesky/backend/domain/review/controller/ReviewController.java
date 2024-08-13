package com.pobluesky.backend.domain.review.controller;

import com.pobluesky.backend.domain.review.dto.request.ReviewCreateRequestDTO;
import com.pobluesky.backend.domain.review.dto.response.ReviewResponseDTO;
import com.pobluesky.backend.domain.review.service.ReviewService;
import com.pobluesky.backend.global.util.ResponseFactory;
import com.pobluesky.backend.global.util.model.JsonResult;

import io.swagger.v3.oas.annotations.Operation;
import lombok.RequiredArgsConstructor;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/reviews")
public class ReviewController {

    private final ReviewService reviewService;

    @GetMapping("/{reviewId}")
    @Operation(summary = "1차 검토 조회", description = "1차 검토는 담당자만 조회가 가능하다.")
    public ResponseEntity<JsonResult> getReviewById(
        @RequestHeader String token,
        @PathVariable Long reviewId
    ) {
        ReviewResponseDTO reviewById = reviewService.getReviewById(token, reviewId);

        return ResponseEntity.status(HttpStatus.OK)
            .body(ResponseFactory.getSuccessJsonResult(reviewById));
    }

    @PostMapping("/{inquiryId}")
    @Operation(summary = "1차 검토 생성", description = "판매 담당자는 해당 Inquiry에 대한 1차 검토를 시작한다.")
    public ResponseEntity<JsonResult> createReview(
        @RequestHeader String token,
        @RequestBody ReviewCreateRequestDTO request,
        @PathVariable Long inquiryId
    ) {
        ReviewResponseDTO review = reviewService.createReview(
            token,
            request,
            inquiryId
        );

        return ResponseEntity.status(HttpStatus.OK)
            .body(ResponseFactory.getSuccessJsonResult(review));
    }
}
