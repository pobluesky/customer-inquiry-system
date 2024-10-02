package com.pobluesky.backend.domain.review.controller;

import com.pobluesky.backend.domain.review.dto.response.ReviewResponseDTO;
import com.pobluesky.backend.domain.review.service.ReviewService;

import lombok.RequiredArgsConstructor;

import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/mobile/api/reviews/{inquiryId}")
public class MobileReviewController {

    private final ReviewService reviewService;

    @GetMapping
    public ReviewResponseDTO getReviewByInquiry(@PathVariable Long inquiryId) {

        return reviewService.getReviewByInquiry(inquiryId);
    }
}
