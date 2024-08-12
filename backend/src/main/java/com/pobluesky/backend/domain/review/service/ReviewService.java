package com.pobluesky.backend.domain.review.service;

import com.pobluesky.backend.domain.inquiry.entity.Inquiry;
import com.pobluesky.backend.domain.inquiry.repository.InquiryRepository;
import com.pobluesky.backend.domain.review.dto.request.ReviewCreateRequestDTO;
import com.pobluesky.backend.domain.review.dto.response.ReviewResponseDTO;
import com.pobluesky.backend.domain.review.entity.Review;
import com.pobluesky.backend.domain.review.repository.ReviewRepository;

import com.pobluesky.backend.domain.user.entity.Manager;
import com.pobluesky.backend.domain.user.entity.ManagerRole;
import com.pobluesky.backend.domain.user.repository.ManagerRepository;
import com.pobluesky.backend.domain.user.service.CustomUserDetailsService;
import com.pobluesky.backend.global.error.CommonException;
import com.pobluesky.backend.global.error.ErrorCode;

import lombok.RequiredArgsConstructor;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class ReviewService {

    private final CustomUserDetailsService userDetailsService;

    private final ReviewRepository reviewRepository;

    private final ManagerRepository managerRepository;

    private final InquiryRepository inquiryRepository;

    @Transactional(readOnly = true)
    public ReviewResponseDTO getReviewById(String token, Long reviewId){
        Long userId = userDetailsService.parseToken(token);

        Manager manager = managerRepository.findById(userId)
            .orElseThrow(() -> new CommonException(ErrorCode.USER_NOT_FOUND));

        Review review = reviewRepository.findById(reviewId)
            .orElseThrow(() -> new CommonException(ErrorCode.REVIEW_NOT_FOUND));

        return ReviewResponseDTO.from(review);
    }

    @Transactional
    public ReviewResponseDTO createReview(
        String token,
        ReviewCreateRequestDTO dto,
        Long inquiryId
    ) {
        Long userId = userDetailsService.parseToken(token);

        Manager manager = managerRepository.findById(userId)
            .orElseThrow(() -> new CommonException(ErrorCode.USER_NOT_FOUND));

        if(manager.getRole() != ManagerRole.SALES)
            throw new CommonException(ErrorCode.USER_NOT_MATCHED);

        Inquiry inquiry = inquiryRepository.findById(inquiryId)
            .orElseThrow(() -> new CommonException(ErrorCode.INQUIRY_NOT_FOUND));

        Review review = dto.toReviewEntity(inquiry);
        Review savedReview = reviewRepository.save(review);

        return ReviewResponseDTO.from(savedReview);
    }
}
