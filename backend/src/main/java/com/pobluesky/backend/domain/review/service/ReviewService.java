package com.pobluesky.backend.domain.review.service;

import com.pobluesky.backend.domain.inquiry.entity.Inquiry;
import com.pobluesky.backend.domain.inquiry.repository.InquiryRepository;
import com.pobluesky.backend.domain.review.dto.request.ReviewCreateRequestDTO;
import com.pobluesky.backend.domain.review.dto.response.ReviewResponseDTO;
import com.pobluesky.backend.domain.review.entity.Review;
import com.pobluesky.backend.domain.review.repository.ReviewRepository;

import com.pobluesky.backend.global.error.CommonException;
import com.pobluesky.backend.global.error.ErrorCode;

import lombok.RequiredArgsConstructor;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ReviewService {
    private final ReviewRepository reviewRepository;
    private final InquiryRepository inquiryRepository;

    @Transactional(readOnly = true)
    public List<ReviewResponseDTO> getAllReviews(){
        List<Review> reviews = reviewRepository.findAll();

        return reviews.stream()
            .map(ReviewResponseDTO::from)
            .collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    public ReviewResponseDTO getReviewById(Long reviewId){
        Review review = reviewRepository.findById(reviewId)
            .orElseThrow(() -> new CommonException(ErrorCode.REVIEW_NOT_FOUND));

        return ReviewResponseDTO.from(review);
    }

    @Transactional
    public ReviewResponseDTO createReview(ReviewCreateRequestDTO dto, Long inquiryId) {
        Inquiry inquiry = inquiryRepository.findById(inquiryId)
            .orElseThrow(() -> new CommonException(ErrorCode.INQUIRY_NOT_FOUND));
        Review review = dto.toReviewEntity(inquiry);

        Review savedReview = reviewRepository.save(review);

        return ReviewResponseDTO.from(savedReview);
    }
}
