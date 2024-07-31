package com.pobluesky.backend.domain.inquiry.entity;


import com.pobluesky.backend.domain.user.entity.Customer;
import com.pobluesky.backend.domain.user.entity.Department;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
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
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "inquiry")
public class Inquiry {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long inquiryNo;

    private long userNo;

    @Enumerated(EnumType.STRING)
    private Country country;

    private String corporate;

    private String salesPerson;

    private Industry industry;

    private Progress progress;

    private ProductType productType;

    private String qualityManager;

    private Department department;

    private String salesManager;

    private String customerRequestDate;

    private String responseDeadline;

    private String elapsedDays;

    private String corporationCode="(주) 포스코";

    private String files;

    private InquiryType inquiryType;

    @Builder
    private Inquiry(
        Country country,
        String corporate,
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
        String corporationCode,
        String files,
        InquiryType inquiryType
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
    }




    public void updateInquiry(
        Country country,
        String corporate,
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
        String corporationCode,
        String files,
        InquiryType inquiryType
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
    }










}
