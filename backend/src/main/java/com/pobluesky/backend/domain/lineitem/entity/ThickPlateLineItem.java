package com.pobluesky.backend.domain.lineitem.entity;

import com.pobluesky.backend.domain.inquiry.entity.Inquiry;
import com.pobluesky.backend.domain.user.entity.Customer;
import jakarta.persistence.Entity;
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

@Entity
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "thickplate_line_items")
public class ThickPlateLineItem extends LineItem{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long lineItemId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "inquiry_id")
    private Inquiry inquiry;

    private String generalDetails;

    private String orderInfo;

    private String ladleIngredient;

    private String productIngredient;

    private String seal;

    private Boolean grainSizeAnalysis;

    private String show;

    private String curve;

    private String additionalRequests;

    @Builder
    public ThickPlateLineItem(
        Inquiry inquiry,
        String generalDetails,
        String orderInfo,
        String ladleIngredient,
        String productIngredient,
        String seal,
        Boolean grainSizeAnalysis,
        String show,
        String curve,
        String additionalRequests
    ){
        this.inquiry = inquiry;
        this.generalDetails = generalDetails;
        this.orderInfo = orderInfo;
        this.ladleIngredient = ladleIngredient;
        this.productIngredient = productIngredient;
        this.seal = seal;
        this.grainSizeAnalysis = grainSizeAnalysis;
        this.show = show;
        this.curve = curve;
        this.additionalRequests = additionalRequests;
    }

    public void updateThickPlateLineItem(
        String generalDetails,
        String orderInfo,
        String ladleIngredient,
        String productIngredient,
        String seal,
        Boolean grainSizeAnalysis,
        String show,
        String curve,
        String additionalRequests
    ){
        this.generalDetails = generalDetails;
        this.orderInfo = orderInfo;
        this.ladleIngredient = ladleIngredient;
        this.productIngredient = productIngredient;
        this.seal = seal;
        this.grainSizeAnalysis = grainSizeAnalysis;
        this.show = show;
        this.curve = curve;
        this.additionalRequests = additionalRequests;
    }

    public Customer getCustomer(){
        return this.inquiry.getCustomer();
    }

}
