package com.pobluesky.backend.domain.inquiry.entity;

import com.pobluesky.backend.domain.user.entity.Customer;
import com.pobluesky.backend.global.BaseEntity;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
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
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "inquiry")
public class Inquiry extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long inquiryId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private Customer customer;

    @Enumerated(EnumType.STRING)
    private Country country;

    private String corporate;

    private String salesPerson;

    @Enumerated(EnumType.STRING)
    private InquiryType inquiryType;

    @Enumerated(EnumType.STRING)
    private Industry industry;

    private String corporationCode;

    @Enumerated(EnumType.STRING)
    private ProductType productType;

    @Enumerated(EnumType.STRING)
    private Progress progress;

    private String customerRequestDate;

    private String additionalRequests;

    private String fileName;

    private String filePath;

    private String responseDeadline;

    private Boolean isActivated;

    @Builder
    private Inquiry(
        Customer customer,
        Country country,
        String corporate,
        String  salesPerson,
        InquiryType inquiryType,
        Industry industry,
        String corporationCode,
        ProductType productType,
        Progress progress,
        String customerRequestDate,
        String additionalRequests,
        String fileName,
        String filePath,
        String responseDeadline
    ){
        this.customer = customer;
        this.country = country;
        this.corporate = corporate;
        this.salesPerson = salesPerson;
        this.inquiryType = inquiryType;
        this.industry = industry;
        this.corporationCode = corporationCode;
        this.productType = productType;
        this.progress = progress;
        this.customerRequestDate = customerRequestDate;
        this.additionalRequests = additionalRequests;
        this.fileName = fileName;
        this.filePath = filePath;
        this.responseDeadline = responseDeadline;
        this.isActivated = true;
    }

    public void updateInquiry(
        Country country,
        String corporate,
        String  salesPerson,
        InquiryType inquiryType,
        Industry industry,
        ProductType productType,
        Progress progress,
        String customerRequestDate,
        String additionalRequests,
        String fileName,
        String filePath,
        String responseDeadline
    ){
        this.country = country;
        this.corporate = corporate;
        this.salesPerson = salesPerson;
        this.inquiryType = inquiryType;
        this.industry = industry;
        this.productType = productType;
        this.progress = progress;
        this.customerRequestDate = customerRequestDate;
        this.additionalRequests = additionalRequests;
        this.fileName = fileName;
        this.filePath = filePath;
        this.responseDeadline = responseDeadline;
    }

    public void deleteInquiry() {
        this.isActivated = false;
    }
}
