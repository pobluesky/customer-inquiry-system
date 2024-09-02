package com.pobluesky.review.entity;

import com.pobluesky.config.global.BaseEntity;
import jakarta.persistence.Column;
import jakarta.persistence.Embedded;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "reviews")
public class Review extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long reviewId;

    @JoinColumn(name = "inquiry_id")
    private Long inquiryId;

    @Embedded
    private SalesInfo salesInfo;

    @Column(nullable = false, columnDefinition="TEXT")
    private String reviewText;

    @Column(columnDefinition="TEXT")
    private String attachmentFileName;

    @Column(columnDefinition="TEXT")
    private String attachmentFilePath;

    @Column(columnDefinition="TEXT")
    private String finalReviewText;

    @Column(columnDefinition="TEXT")
    private String tsReviewReq;

    @Builder
    public Review(
        Long inquiryId,
        SalesInfo salesInfo,
        String reviewText,
        String attachmentFileName,
        String attachmentFilePath,
        String finalReviewText,
        String tsReviewReq
    ) {
        this.inquiryId = inquiryId;
        this.salesInfo = salesInfo;
        this.reviewText = reviewText;
        this.attachmentFileName = attachmentFileName;
        this.attachmentFilePath = attachmentFilePath;
        this.finalReviewText = finalReviewText;
        this.tsReviewReq = tsReviewReq;
    }

    public void updateReview(
        String finalReviewText
    ){
        this.finalReviewText = finalReviewText;
    }
}
