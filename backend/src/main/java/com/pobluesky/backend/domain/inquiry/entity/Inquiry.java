package com.pobluesky.backend.domain.inquiry.entity;


import com.pobluesky.backend.domain.user.entity.Customer;
import com.pobluesky.backend.domain.user.entity.Department;
import com.pobluesky.backend.domain.user.entity.Manager;
import com.pobluesky.backend.domain.user.entity.User;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.PrePersist;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.ColumnDefault;

@Entity
@Getter
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

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "manager_id")
    private Manager manager;

    @Enumerated(EnumType.STRING)
    private Country country;

    private String corporate;

    private String salesPerson;

    @Enumerated(EnumType.STRING)
    private Industry industry;

    @Enumerated(EnumType.STRING)
    private Progress progress;

    @Enumerated(EnumType.STRING)
    private ProductType productType;

    private String qualityManager;

    private Department department;

    private String salesManager;

    private String customerRequestDate;

    private String responseDeadline;

    private String elapsedDays;

    private String corporationCode;

    private String files;

    @Enumerated(EnumType.STRING)
    private InquiryType inquiryType;

    private boolean isDeleted;

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
        boolean isDeleted
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
        this.isDeleted = isDeleted;
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
        InquiryType inquiryType,
        boolean isDeleted
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
        this.isDeleted = isDeleted;
    }




    public void markAsDeleted() {
        this.isDeleted = true;
    }







}
