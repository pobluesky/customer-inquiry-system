package com.pobluesky.backend.domain.review.entity;

import com.pobluesky.backend.domain.inquiry.entity.Inquiry;
import jakarta.persistence.Column;
import jakarta.persistence.Embedded;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
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
public class Review {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long reviewId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "inquiry_id")
    private Inquiry inquiry;

    @Embedded
    private SalesInfo salesInfo;

    @Column(nullable = false, columnDefinition="TEXT")
    private String reviewText;

    @Column(nullable = false, columnDefinition="TEXT")
    private String attachmentFile;

    @Column(nullable = false, columnDefinition="TEXT")
    private String finalReviewText;

    @Column(nullable = false, columnDefinition="TEXT")
    private String tsReviewReq;

    @Builder
    public Review(
        Inquiry inquiry,
        SalesInfo salesInfo,
        String reviewText,
        String attachmentFile,
        String finalReviewText,
        String tsReviewReq
    ) {
        this.inquiry = inquiry;
        this.salesInfo = salesInfo;
        this.reviewText = reviewText;
        this.attachmentFile = attachmentFile;
        this.finalReviewText = finalReviewText;
        this.tsReviewReq = tsReviewReq;
    }

}
