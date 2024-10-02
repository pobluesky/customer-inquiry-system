package com.pobluesky.backend.domain.review.service;

import com.pobluesky.backend.domain.file.dto.FileInfo;
import com.pobluesky.backend.domain.file.service.FileService;
import com.pobluesky.backend.domain.inquiry.dto.response.InquiryResponseDTO;
import com.pobluesky.backend.domain.inquiry.entity.Inquiry;
import com.pobluesky.backend.domain.inquiry.repository.InquiryRepository;
import com.pobluesky.backend.domain.review.dto.request.ReviewCreateRequestDTO;
import com.pobluesky.backend.domain.review.dto.request.ReviewUpdateRequestDTO;
import com.pobluesky.backend.domain.review.dto.response.ReviewResponseDTO;
import com.pobluesky.backend.domain.review.entity.Review;
import com.pobluesky.backend.domain.review.repository.ReviewRepository;
import com.pobluesky.backend.domain.user.entity.Manager;
import com.pobluesky.backend.domain.user.entity.UserRole;
import com.pobluesky.backend.domain.user.repository.CustomerRepository;
import com.pobluesky.backend.domain.user.repository.ManagerRepository;
import com.pobluesky.backend.domain.user.service.SignService;
import com.pobluesky.backend.global.error.CommonException;
import com.pobluesky.backend.global.error.ErrorCode;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class ReviewService {

    private final SignService signService;

    private final ReviewRepository reviewRepository;

    private final ManagerRepository managerRepository;

    private final CustomerRepository customerRepository;

    private final InquiryRepository inquiryRepository;


    @Transactional(readOnly = true)
    public ReviewResponseDTO getReviewByInquiry(String token, Long inquiryId){
        Long userId = signService.parseToken(token);

        if (!customerRepository.existsById(userId) && !managerRepository.existsById(userId)) {
            throw new CommonException(ErrorCode.USER_NOT_FOUND);
        }

        Inquiry inquiry = inquiryRepository.findById(inquiryId)
            .orElseThrow(() -> new CommonException(ErrorCode.INQUIRY_NOT_FOUND));

        Review review = reviewRepository.findByInquiry(inquiry)
            .orElseThrow(() -> new CommonException(ErrorCode.REVIEW_NOT_FOUND));

        return ReviewResponseDTO.from(review);
    }

    @Transactional
    public ReviewResponseDTO createReview(
        String token,
        Long inquiryId,
        ReviewCreateRequestDTO dto
        ) {
        Long userId = signService.parseToken(token);

        Manager manager = managerRepository.findById(userId)
            .orElseThrow(() -> new CommonException(ErrorCode.USER_NOT_FOUND));

        if(manager.getRole() != UserRole.SALES)
            throw new CommonException(ErrorCode.USER_NOT_MATCHED);

        Inquiry inquiry = inquiryRepository.findById(inquiryId)
            .orElseThrow(() -> new CommonException(ErrorCode.INQUIRY_NOT_FOUND));

        if(reviewRepository.existsByInquiry(inquiry)) {
            throw new CommonException(ErrorCode.REVIEW_ALREADY_EXISTS);
        }

        Review review = dto.toReviewEntity(inquiry);
        Review savedReview = reviewRepository.save(review);

        return ReviewResponseDTO.from(savedReview);
    }

    @Transactional
    public ReviewResponseDTO updateReview(
        String token,
        Long inquiryId,
        ReviewUpdateRequestDTO request) {

        Long userId = signService.parseToken(token);

        Manager manager = managerRepository.findById(userId)
            .orElseThrow(() -> new CommonException(ErrorCode.USER_NOT_FOUND));

        if(manager.getRole() != UserRole.SALES)
            throw new CommonException(ErrorCode.USER_NOT_MATCHED);

        Inquiry inquiry = inquiryRepository.findById(inquiryId)
            .orElseThrow(() -> new CommonException(ErrorCode.INQUIRY_NOT_FOUND));

        Review review = reviewRepository.findByInquiry(inquiry)
            .orElseThrow(() -> new CommonException(ErrorCode.REVIEW_NOT_FOUND));

        review.updateReview(request.finalReviewText());

        return ReviewResponseDTO.from(review);
    }

    // 모바일 검토 조회
    @Transactional(readOnly = true)
    public ReviewResponseDTO getReviewByInquiry(Long inquiryId){
        Inquiry inquiry = inquiryRepository.findById(inquiryId)
                .orElseThrow(() -> new CommonException(ErrorCode.INQUIRY_NOT_FOUND));

        Review review = reviewRepository.findByInquiry(inquiry)
                .orElseThrow(() -> new CommonException(ErrorCode.REVIEW_NOT_FOUND));

        return ReviewResponseDTO.from(review);
    }
}
