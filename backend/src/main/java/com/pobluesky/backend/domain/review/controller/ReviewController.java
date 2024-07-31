package com.pobluesky.backend.domain.review.controller;

import com.pobluesky.backend.domain.review.dto.request.ReviewCreateRequestDTO;
import com.pobluesky.backend.domain.review.dto.response.ReviewResponseDTO;
import com.pobluesky.backend.domain.review.service.ReviewService;
import com.pobluesky.backend.global.util.model.JsonResult;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/review")
public class ReviewController {
    private final ReviewService reviewService;

    @GetMapping("/{reviewNo}")
    public ResponseEntity<JsonResult> getReviewByNo(@PathVariable Long reviewNo) {
        ReviewResponseDTO reviewByNo = reviewService.getReviewByNo(reviewNo);

        return ResponseEntity.status(HttpStatus.OK)
            .body(JsonResult.success(reviewByNo));
    }

    @PostMapping("/{inquiryNo}")
    public ResponseEntity<JsonResult> createReview(
        @RequestBody ReviewCreateRequestDTO dto,
        @PathVariable Long inquiryNo) {
        ReviewResponseDTO review = reviewService.createReview(dto, inquiryNo);

        return ResponseEntity.status(HttpStatus.OK)
            .body(JsonResult.success(review));
    }
}
