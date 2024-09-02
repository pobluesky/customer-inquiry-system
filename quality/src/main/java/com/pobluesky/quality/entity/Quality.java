package com.pobluesky.quality.entity;

import com.pobluesky.config.global.BaseEntity;
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
@Entity
@Getter
@Table(name = "quality")
@NoArgsConstructor
@AllArgsConstructor
public class Quality extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long qualityId; // 품질번호

    @JoinColumn(name = "inquiry_id")
    private Long inquiryId; // 문의번호

    @Embedded
    private QualityReviewInfo qualityReviewInfo; // 품질검토정보

    @Column(columnDefinition = "TEXT")
    private String qualityComments; // 추가요청내용

    @Builder
    private Quality(
        Long inquiryId,
        QualityReviewInfo qualityReviewInfo,
        String qualityComments
    ) {
        this.inquiryId = inquiryId;
        this.qualityReviewInfo = qualityReviewInfo;
        this.qualityComments = qualityComments;
    }

    public void updateQuality(
        QualityReviewInfo qualityReviewInfo,
        String qualityComments
    ) {
        this.qualityReviewInfo = qualityReviewInfo;
        this.qualityComments = qualityComments;
    }
}
