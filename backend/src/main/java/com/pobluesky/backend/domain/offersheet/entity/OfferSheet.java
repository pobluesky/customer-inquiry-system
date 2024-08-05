package com.pobluesky.backend.domain.offersheet.entity;

import com.pobluesky.backend.domain.inquiry.entity.Inquiry;
import com.pobluesky.backend.domain.offersheet.dto.request.OfferSheetUpdateRequestDTO;
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
import org.hibernate.annotations.DynamicUpdate;

@Entity
@Getter
@DynamicUpdate
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "offersheet")
public class OfferSheet {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long offerSheetId;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "inquiry_id")
    private Inquiry inquiry;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "customer_id")
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

    @Builder
    public OfferSheet(
        Inquiry inquiry,
        Customer customer,
        String product,
        String specification,
        String surfaceFinish,
        String usage,
        String thickness,
        String diameter,
        String width,
        String quantity,
        String price,
        String unitMinWeight,
        String unitMaxWeight,
        String edge,
        String priceTerms,
        String paymentTerms,
        LocalDate shipment,
        LocalDate validity,
        String destination
    ) {
        this.inquiry = inquiry;
        this.customer = customer;
        this.product = product;
        this.specification = specification;
        this.surfaceFinish = surfaceFinish;
        this.usage = usage;
        this.thickness = thickness;
        this.diameter = diameter;
        this.width = width;
        this.quantity = quantity;
        this.price = price;
        this.unitMinWeight = unitMinWeight;
        this.unitMaxWeight = unitMaxWeight;
        this.edge = edge;
        this.priceTerms = priceTerms;
        this.paymentTerms = paymentTerms;
        this.shipment = shipment;
        this.validity = validity;
        this.destination = destination;
    }

    public void updateOfferSheet(
        String product,
        String specification,
        String surfaceFinish,
        String usage,
        String thickness,
        String diameter,
        String width,
        String quantity,
        String price,
        String unitMinWeight,
        String unitMaxWeight,
        String edge,
        String priceTerms,
        String paymentTerms,
        LocalDate shipment,
        LocalDate validity,
        String destination
    ) {
        this.product = product;
        this.specification = specification;
        this.surfaceFinish = surfaceFinish;
        this.usage = usage;
        this.thickness = thickness;
        this.diameter = diameter;
        this.width = width;
        this.quantity = quantity;
        this.price = price;
        this.unitMinWeight = unitMinWeight;
        this.unitMaxWeight = unitMaxWeight;
        this.edge = edge;
        this.priceTerms = priceTerms;
        this.paymentTerms = paymentTerms;
        this.shipment = shipment;
        this.validity = validity;
        this.destination = destination;
    }
}
