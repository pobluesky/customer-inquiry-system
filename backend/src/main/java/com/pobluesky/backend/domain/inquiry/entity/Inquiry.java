package com.pobluesky.backend.domain.inquiry.entity;

import com.pobluesky.backend.domain.lineitem.entity.CarLineItem;
import com.pobluesky.backend.domain.user.entity.Customer;
import com.pobluesky.backend.domain.user.entity.Department;
import com.pobluesky.backend.global.BaseEntity;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import java.util.ArrayList;
import java.util.List;
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
    @JoinColumn(name = "customer_id")
    private Customer customer;

    @OneToMany(mappedBy = "inquiry", cascade = CascadeType.REMOVE)
    private List<CarLineItem> carLineItemList = new ArrayList<>();

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

    @Enumerated(EnumType.STRING)
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
        Boolean isActivated,
        String additionalRequests
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
        this.isActivated = isActivated;
        this.additionalRequests = additionalRequests;
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
        String files,
        InquiryType inquiryType,
        String additionalRequests
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
        this.files = files;
        this.inquiryType = inquiryType;
        this.additionalRequests = additionalRequests;
    }
    public void deleteInquiry() {
        this.isActivated = false;
    }
}
