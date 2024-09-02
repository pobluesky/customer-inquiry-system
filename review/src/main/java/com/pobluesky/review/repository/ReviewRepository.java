package com.pobluesky.review.repository;

import com.pobluesky.review.entity.Review;
import com.pobluesky.review.feign.Inquiry;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReviewRepository extends JpaRepository<Review, Long> {

    // inquiryId를 기반으로 리뷰를 찾도록 수정
    Optional<Review> findByInquiryId(Long inquiryId);

    // inquiryId를 기반으로 리뷰가 존재하는지 확인하도록 수정
    boolean existsByInquiryId(Long inquiryId);
}
