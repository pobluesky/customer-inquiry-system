package com.pobluesky.backend.domain.offersheet.entity;

import com.pobluesky.backend.domain.inquiry.entity.Inquiry;

import com.pobluesky.backend.domain.receipt.entity.Receipt;
import jakarta.persistence.CollectionTable;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import java.time.LocalDate;

import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

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

    @ElementCollection
    @CollectionTable(name = "order_receipts", joinColumns = @JoinColumn(name = "order_id"))
    private List<Receipt> receipts;

    private String priceTerms;

    private String paymentTerms;

    private LocalDate shipment;

    private LocalDate validity;

    private String destination;

    private String remark;

    @Builder
    public OfferSheet(
        Inquiry inquiry,
        List<Receipt> receipts,
        String priceTerms,
        String paymentTerms,
        LocalDate shipment,
        LocalDate validity,
        String destination,
        String remark
    ) {
        this.inquiry = inquiry;
        this.receipts = receipts;
        this.priceTerms = priceTerms;
        this.paymentTerms = paymentTerms;
        this.shipment = shipment;
        this.validity = validity;
        this.destination = destination;
        this.remark = remark;
    }

    public void updateOfferSheet(
        String priceTerms,
        String paymentTerms,
        LocalDate shipment,
        LocalDate validity,
        String destination,
        String remark
    ) {
        this.priceTerms = priceTerms;
        this.paymentTerms = paymentTerms;
        this.shipment = shipment;
        this.validity = validity;
        this.destination = destination;
        this.remark = remark;
    }

}
