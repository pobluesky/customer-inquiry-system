package com.pobluesky.backend.domain.lineitem.entity;

import com.pobluesky.backend.domain.inquiry.entity.Inquiry;
import com.pobluesky.backend.domain.lineitem.entity.type.wirerod.InqName;
import com.pobluesky.backend.domain.lineitem.entity.type.wirerod.Kind;
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
import java.util.Date;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "wirerod_line_items")
public class WireRodLineItem {

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

    private String diameter;

    private Integer quantity;

    private Date expectedDeadline;

    private Integer initialQuantity;

    private String customerProcessing;

    private String finalUse;

    @Builder
    public WireRodLineItem(
        Inquiry inquiry,
        Kind kind,
        InqName inqName,
        String orderCategory,
        String diameter,
        Integer quantity,
        Date expectedDeadline,
        Integer initialQuantity,
        String customerProcessing,
        String finalUse
    ){
        this.inquiry = inquiry;
        this.kind = kind;
        this.inqName = inqName;
        this.orderCategory = orderCategory;
        this.diameter = diameter;
        this.quantity = quantity;
        this.expectedDeadline = expectedDeadline;
        this.initialQuantity = initialQuantity;
        this.customerProcessing = customerProcessing;
        this.finalUse = finalUse;
    }

    public void updateWireRodLineItem(
        Kind kind,
        InqName inqName,
        String orderCategory,
        String diameter,
        Integer quantity,
        Date expectedDeadline,
        Integer initialQuantity,
        String customerProcessing,
        String finalUse
    ){
        this.kind = kind;
        this.inqName = inqName;
        this.orderCategory = orderCategory;
        this.diameter = diameter;
        this.quantity = quantity;
        this.expectedDeadline = expectedDeadline;
        this.initialQuantity = initialQuantity;
        this.customerProcessing = customerProcessing;
        this.finalUse = finalUse;
    }


}