package com.pobluesky.backend.domain.inquiry.entity;

import com.pobluesky.backend.domain.user.entity.Customer;
import com.pobluesky.backend.domain.user.entity.Department;
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
public class Inquiry {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long inquiryId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "customer_id")
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

    private String qualityManager;

    private Department department;

    private String salesManager;

    private String files;

    private String responseDeadline;

    private String elapsedDays;

    private Boolean isActivated;

    @Builder
    private Inquiry(
        Country country,
        String corporate,
        String corporationCode,
        String  salesPerson,
        Industry industry,
        Progress progress,
        ProductType productType,
        String qualityManager,
        Department department,
        String salesManager,
        String customerRequestDate,
        String responseDeadline,
        String elapsedDays,
        String files,
        InquiryType inquiryType,
        Boolean isActivated
    ){
        this.country = country;
        this.corporate = corporate;
        this.salesPerson = salesPerson;
        this.industry = industry;
        this.progress = progress;
        this.productType = productType;
        this.qualityManager = qualityManager;
        this.department = department;
        this.salesManager = salesManager;
        this.customerRequestDate = customerRequestDate;
        this.responseDeadline = responseDeadline;
        this.elapsedDays = elapsedDays;
        this.corporationCode = corporationCode;
        this.files = files;
        this.inquiryType = inquiryType;
        this.isActivated = true;
    }

    public void updateInquiry(
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
        String qualityManager,
        Department department,
        String salesManager,
        String files,
        String responseDeadline,
        String elapsedDays,
        Boolean isActivated
    ){
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
        this.qualityManager = qualityManager;
        this.department = department;
        this.salesManager = salesManager;
        this.files = files;
        this.responseDeadline = responseDeadline;
        this.elapsedDays = elapsedDays;
        this.isActivated = isActivated;
    }

    public void deleteInquiry() {
        this.isActivated = false;
    }
}
