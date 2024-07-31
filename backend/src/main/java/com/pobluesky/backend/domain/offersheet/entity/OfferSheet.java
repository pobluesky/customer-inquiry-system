package com.pobluesky.backend.domain.offersheet.entity;

import com.pobluesky.backend.domain.inquiry.entity.Inquiry;
import com.pobluesky.backend.domain.user.entity.Customer;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import java.time.LocalDate;
import java.time.LocalDateTime;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "offersheet")
public class OfferSheet {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long offerSheetNo;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "inquiry_no")
    private Inquiry inquiry;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "customer_no")
    private Customer customer;

    private String product;

    private String specification;

    private String surfaceFinish;

    private String usage;

    private String thickness;

    private String diameter;

    private String width;

    private String quantity;

    private String price;

    private String unitMinWeight;

    private String unitMaxWeight;

    private String edge;

    private String priceTerms;

    private String paymentTerms;

    private LocalDate shipment;

    private LocalDate validity;

    private String destination;
}
