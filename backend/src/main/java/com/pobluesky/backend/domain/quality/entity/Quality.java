package com.pobluesky.backend.domain.quality.entity;

import com.pobluesky.backend.global.BaseEntity;
import jakarta.persistence.Column;
import jakarta.persistence.Embedded;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
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
    private Long qualityNo; // 품질번호

    private Long inquiryNo; // 문의번호

    private Long userNo; // 고객사번호

    @Embedded
    private QualityReviewInfo qualityReviewInfo; // 품질검토정보

    @Column(columnDefinition = "TEXT")
    private String requireAddContents; // 추가요청내용
}
