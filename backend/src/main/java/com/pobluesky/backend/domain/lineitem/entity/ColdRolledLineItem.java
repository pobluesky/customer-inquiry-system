package com.pobluesky.backend.domain.lineitem.entity;

import com.pobluesky.backend.domain.inquiry.entity.Inquiry;
import com.pobluesky.backend.domain.lineitem.entity.type.coldrolled.InqName;
import com.pobluesky.backend.domain.lineitem.entity.type.coldrolled.Kind;
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
@Table(name = "coldrolled_line_items")
public class ColdRolledLineItem extends LineItem{

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

    private Integer quantity;

    private String expectedDeadline;

    private String orderEdge;

    private String inDiameter;

    private String outDiameter;

    private String sleeveThickness;

    private String yieldingPoint;

    private String tensileStrength;

    private String elongationRatio;

    private String hardness;

    @Builder
    public ColdRolledLineItem(
        Inquiry inquiry,
        Kind kind,
        InqName inqName,
        String orderCategory,
        String thickness,
        String width,
        Integer quantity,
        String expectedDeadline,
        String orderEdge,
        String inDiameter,
        String outDiameter,
        String sleeveThickness,
        String yieldingPoint,
        String tensileStrength,
        String elongationRatio,
        String hardness
    ){
        this.inquiry = inquiry;
        this.kind = kind;
        this.inqName = inqName;
        this.orderCategory = orderCategory;
        this.thickness = thickness;
        this.width = width;
        this.quantity = quantity;
        this.expectedDeadline = expectedDeadline;
        this.orderEdge = orderEdge;
        this.inDiameter = inDiameter;
        this.outDiameter = outDiameter;
        this.isActivated = true;
        this.sleeveThickness = sleeveThickness;
        this.yieldingPoint = yieldingPoint;
        this.tensileStrength = tensileStrength;
        this.elongationRatio = elongationRatio;
        this.hardness = hardness;
    }
}
