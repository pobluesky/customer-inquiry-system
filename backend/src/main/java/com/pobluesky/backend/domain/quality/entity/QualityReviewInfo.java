package com.pobluesky.backend.domain.quality.entity;

import com.pobluesky.backend.global.BaseEntity;
import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Embeddable
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class QualityReviewInfo extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long qualityReviewInfoNo; // 품질검토번호

    @Column(columnDefinition = "TEXT")
    private String finalResult; // 종합결과

    @Column(columnDefinition = "TEXT")
    private String finalResultDetails; // 종합결과세부사항

    private Long standard; // 제품규격

    private String orderCategory; // 주문용도

    private String coatingMetalQuantity; // 도금량(코드)

    private String coatingOilQuantity; // 도유량(코드)

    private String thicknessTolerance; // 두께공차

    private String orderEdge; // 주문 edge

    private String customerQReq; // 고객품질요구사항

    private Boolean availableLab; // 생산가능소구분

    /*
      Builder Pattern
     */
    @Builder
    private QualityReviewInfo(
        Long qualityReviewInfoNo,
        String finalResult,
        String finalResultDetails,
        Long standard,
        String orderCategory,
        String coatingMetalQuantity,
        String coatingOilQuantity,
        String thicknessTolerance,
        String orderEdge,
        String customerQReq,
        Boolean availableLab
    ) {
        this.qualityReviewInfoNo = qualityReviewInfoNo;
        this.finalResult = finalResult;
        this.finalResultDetails = finalResultDetails;
        this.standard = standard;
        this.orderCategory = orderCategory;
        this.coatingMetalQuantity = coatingMetalQuantity;
        this.coatingOilQuantity = coatingOilQuantity;
        this.thicknessTolerance = thicknessTolerance;
        this.orderEdge = orderEdge;
        this.customerQReq = customerQReq;
        this.availableLab = availableLab;
    }

    public void updateQualityReviewInfo(
        String finalResult,
        String finalResultDetails,
        Long standard,
        String orderCategory,
        String coatingMetalQuantity,
        String coatingOilQuantity,
        String thicknessTolerance,
        String orderEdge,
        String customerQReq,
        Boolean availableLab
    ) {
        this.finalResult = finalResult;
        this.finalResultDetails = finalResultDetails;
        this.standard = standard;
        this.orderCategory = orderCategory;
        this.coatingMetalQuantity = coatingMetalQuantity;
        this.coatingOilQuantity = coatingOilQuantity;
        this.thicknessTolerance = thicknessTolerance;
        this.orderEdge = orderEdge;
        this.customerQReq = customerQReq;
        this.availableLab = availableLab;
    }
}
