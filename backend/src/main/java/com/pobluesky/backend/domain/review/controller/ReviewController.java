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
@RequestMapping("/api/reviews/{inquiryId}")
public class ReviewController {

    private final ReviewService reviewService;

    @Operation(summary = "1차 검토 조회")
    @GetMapping
    public ResponseEntity<JsonResult> getReviewByInquiry(
        @RequestHeader("Authorization") String token,
        @PathVariable Long inquiryId
    ) {
        ReviewResponseDTO response = reviewService.getReviewByInquiry(token, inquiryId);

        return ResponseEntity.status(HttpStatus.OK)
            .body(ResponseFactory.getSuccessJsonResult(response));
    }
  
    @Operation(summary = "1차 검토 생성", description = "판매 담당자는 해당 Inquiry에 대한 1차 검토를 시작한다.")
    @PostMapping
    public ResponseEntity<JsonResult> createReview(
        @RequestHeader("Authorization") String token,
        @RequestBody ReviewCreateRequestDTO request,
        @PathVariable Long inquiryId
    ) {
        ReviewResponseDTO response = reviewService.createReview(
            token,
            request,
            inquiryId
        );

        return ResponseEntity.status(HttpStatus.OK)
            .body(ResponseFactory.getSuccessJsonResult(response));
    }
}
