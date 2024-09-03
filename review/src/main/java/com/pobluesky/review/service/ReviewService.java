package com.pobluesky.review.service;

import com.pobluesky.config.global.error.CommonException;
import com.pobluesky.config.global.error.ErrorCode;
import com.pobluesky.config.global.security.UserRole;
import com.pobluesky.review.dto.request.ReviewCreateRequestDTO;
import com.pobluesky.review.dto.request.ReviewUpdateRequestDTO;
import com.pobluesky.review.dto.response.ReviewResponseDTO;
import com.pobluesky.review.entity.Review;
import com.pobluesky.review.feign.Inquiry;
import com.pobluesky.review.feign.InquiryClient;
import com.pobluesky.review.feign.UserClient;
import com.pobluesky.review.feign.Manager;
import com.pobluesky.review.repository.ReviewRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class ReviewService {

    private final ReviewRepository reviewRepository;

    private final InquiryClient inquiryClient;

    private final UserClient userClient;


    @Transactional(readOnly = true)
    public ReviewResponseDTO getReviewByInquiry(String token, Long inquiryId){
        Long userId = userClient.parseToken(token);

        boolean customerExists = userClient.customerExistsById(userId);
        boolean managerExists = userClient.managerExistsById(userId);

        if (!customerExists && !managerExists) {
            throw new CommonException(ErrorCode.USER_NOT_FOUND);
        }

        Boolean inquiryExists = inquiryClient.checkInquiryExists(inquiryId);
        if (!inquiryExists) {
            throw new CommonException(ErrorCode.INQUIRY_NOT_FOUND);
        }

        Review review = reviewRepository.findByInquiryId(inquiryId)
            .orElseThrow(() -> new CommonException(ErrorCode.REVIEW_NOT_FOUND));

        return ReviewResponseDTO.from(review,inquiryClient);
    }

    @Transactional
    public ReviewResponseDTO createReview(
        String token,
        Long inquiryId,
        ReviewCreateRequestDTO dto
        ) {
        Long userId = userClient.parseToken(token);

        boolean customerExists = userClient.customerExistsById(userId);
        boolean managerExists = userClient.managerExistsById(userId);

        if (!customerExists && !managerExists) {
            throw new CommonException(ErrorCode.USER_NOT_FOUND);
        }

        Manager manager = userClient.getManagerById(userId);

        if(manager.getRole() != UserRole.SALES)
            throw new CommonException(ErrorCode.USER_NOT_MATCHED);

        Boolean inquiryExists = inquiryClient.checkInquiryExists(inquiryId);
        if (!inquiryExists) {
            throw new CommonException(ErrorCode.INQUIRY_NOT_FOUND);
        }

        if(reviewRepository.existsByInquiryId(inquiryId)) {
            throw new CommonException(ErrorCode.REVIEW_ALREADY_EXISTS);
        }

        Review review = dto.toReviewEntity(inquiryId,inquiryClient);
        Review savedReview = reviewRepository.save(review);

        return ReviewResponseDTO.from(savedReview,inquiryClient);
    }

    @Transactional
    public ReviewResponseDTO updateReview(
        String token,
        Long inquiryId,
        ReviewUpdateRequestDTO request) {

        Long userId = userClient.parseToken(token);

        boolean customerExists = userClient.customerExistsById(userId);
        boolean managerExists = userClient.managerExistsById(userId);

        if (!customerExists && !managerExists) {
            throw new CommonException(ErrorCode.USER_NOT_FOUND);
        }

        Manager manager = userClient.getManagerById(userId);

        if(manager.getRole() != UserRole.SALES)
            throw new CommonException(ErrorCode.USER_NOT_MATCHED);

        Boolean inquiryExists = inquiryClient.checkInquiryExists(inquiryId);
        if (!inquiryExists) {
            throw new CommonException(ErrorCode.INQUIRY_NOT_FOUND);
        }

        Review review = reviewRepository.findByInquiryId(inquiryId)
            .orElseThrow(() -> new CommonException(ErrorCode.REVIEW_NOT_FOUND));

        review.updateReview(request.finalReviewText());

        return ReviewResponseDTO.from(review,inquiryClient);
    }
}
