package com.pobluesky.backend.domain.lineitem.entity;

import com.pobluesky.backend.domain.inquiry.entity.Inquiry;


import com.pobluesky.backend.domain.lineitem.entity.type.hotrolled.InqName;
import com.pobluesky.backend.domain.lineitem.entity.type.hotrolled.Kind;
import com.pobluesky.backend.domain.user.entity.Customer;
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

@Entity
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "hotrolled_line_items")
public class HotRolledLineItem extends LineItem{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long lineItemId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "inquiry_id")
    private Inquiry inquiry;

    @Enumerated(EnumType.STRING)
    private Kind kind;

    @Enumerated(EnumType.STRING)
    private InqName inqName;

    private String orderCategory;

    private String thickness;

    private String width;

    private String hardness;

    private String flatness;

    private String orderEdge;

    private Integer quantity;

    @Builder
    public HotRolledLineItem(
        Inquiry inquiry,
        Kind kind,
        InqName inqName,
        String orderCategory,
        String thickness,
        String width,
        String hardness,
        String flatness,
        String orderEdge,
        Integer quantity
    ){
        this.inquiry = inquiry;
        this.kind = kind;
        this.inqName = inqName;
        this.orderCategory = orderCategory;
        this.thickness = thickness;
        this.width = width;
        this.hardness = hardness;
        this.flatness = flatness;
        this.orderEdge = orderEdge;
        this.quantity = quantity;
        this.isActivated = true;

    }

    public void updateHotRolledLineItem(
        Kind kind,
        InqName inqName,
        String orderCategory,
        String thickness,
        String width,
        String hardness,
        String flatness,
        String orderEdge,
        Integer quantity
    ){
        this.kind = kind;
        this.inqName = inqName;
        this.orderCategory = orderCategory;
        this.thickness = thickness;
        this.width = width;
        this.hardness = hardness;
        this.flatness = flatness;
        this.quantity = quantity;
        this.orderEdge = orderEdge;
    }


    public Customer getCustomer() {
        return this.inquiry.getCustomer();
    }

}