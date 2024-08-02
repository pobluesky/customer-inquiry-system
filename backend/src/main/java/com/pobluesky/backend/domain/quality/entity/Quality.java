package com.pobluesky.backend.domain.quality.entity;

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
@Entity
@Getter
@Table(name = "quality")
@NoArgsConstructor
@AllArgsConstructor
public class Quality {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long qualityId; // 품질번호

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "inquiry_id")
    private Inquiry inquiry; // 문의번호

    @Embedded
    private QualityReviewInfo qualityReviewInfo; // 품질검토정보

    @Column(columnDefinition = "TEXT")
    private String requireAddContents; // 추가요청내용
    /*
      Builder Pattern
     */
    @Builder
    private Quality(
        Inquiry inquiry,
        QualityReviewInfo qualityReviewInfo,
        String requireAddContents
    ) {
        this.inquiry = inquiry;
        this.qualityReviewInfo = qualityReviewInfo;
        this.requireAddContents = requireAddContents;
    }
    public void updateQuality(
        QualityReviewInfo qualityReviewInfo,
        String requireAddContents
    ) {
        this.qualityReviewInfo = qualityReviewInfo;
        this.requireAddContents = requireAddContents;
    }
}