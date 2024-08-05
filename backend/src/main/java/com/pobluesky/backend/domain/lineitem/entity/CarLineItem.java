package com.pobluesky.backend.domain.lineitem.entity;

import com.pobluesky.backend.domain.lineitem.entity.type.CoatingAnotherCondition;
import com.pobluesky.backend.domain.lineitem.entity.type.CoatingCondition;
import com.pobluesky.backend.domain.lineitem.entity.type.CoatingUnit;
import com.pobluesky.backend.domain.lineitem.entity.type.Direction;
import com.pobluesky.backend.domain.lineitem.entity.type.IxPlate;
import com.pobluesky.backend.domain.lineitem.entity.type.Lab;
import com.pobluesky.backend.domain.lineitem.entity.type.Order;
import com.pobluesky.backend.domain.lineitem.entity.type.PostTreatment;
import com.pobluesky.backend.domain.lineitem.entity.type.Kind;
import com.pobluesky.backend.domain.lineitem.entity.type.RaAnotherUnit;
import com.pobluesky.backend.domain.lineitem.entity.type.RaUnit;
import com.pobluesky.backend.domain.lineitem.entity.type.Regulation;
import com.pobluesky.backend.domain.lineitem.entity.type.StandardOrg;
import com.pobluesky.backend.domain.review.entity.ContractType;
import com.pobluesky.backend.domain.inquiry.entity.Inquiry;

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
@Table(name = "car_line_items")
public class CarLineItem extends LineItem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long lineItemId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "inquiry_id")
    private Inquiry inquiry;

    @Enumerated(EnumType.STRING)
    private Lab lab;

    @Enumerated(EnumType.STRING)
    private Kind kind;

    @Enumerated(EnumType.STRING)
    private StandardOrg standardOrg;

    private String pjtName;

    private String salesVehicleName;

    private String partName;

    @Enumerated(EnumType.STRING)
    private IxPlate ixPlate;

    private String thickness;

    private String width;

    private Integer quantity;

    private Date desiredDeliveryDate;

    private String deliveryDestination;

    @Enumerated(EnumType.STRING)
    private Order orders;

    @Enumerated(EnumType.STRING)
    private CoatingCondition coatingCondition;

    @Enumerated(EnumType.STRING)
    private CoatingAnotherCondition coatingAnotherCondition;

    private ContractType contract;

    private Date sop;

    private String fcAmount;

    private String bcAmount;

    @Enumerated(EnumType.STRING)
    private CoatingUnit coatingUnit;

    @Enumerated(EnumType.STRING)
    private PostTreatment postTreatment;

    @Enumerated(EnumType.STRING)
    private Direction direction;

    private String raTarget;

    private Integer mTolerance;

    private Integer pTolerance;

    @Enumerated(EnumType.STRING)
    private RaUnit raUnit;

    @Enumerated(EnumType.STRING)
    private RaAnotherUnit raAnotherUnit;

    private String qsRequirement;

    private String expensePerYear;

    private String customerName;

    private String completeVehicle;

    @Enumerated(EnumType.STRING)
    private Regulation regulation;

    @Builder
    public CarLineItem(
        Inquiry inquiry,
        Lab lab,
        Kind kind,
        StandardOrg standardOrg,
        String pjtName,
        String salesVehicleName,
        String partName,
        IxPlate ixPlate,
        String thickness,
        String width,
        Integer quantity,
        Date desiredDeliveryDate,
        String deliveryDestination,
        Order order,
        CoatingCondition coatingCondition,
        CoatingAnotherCondition coatingAnotherCondition,
        ContractType contract,
        Date sop,
        String fcAmount,
        String bcAmount,
        CoatingUnit coatingUnit,
        PostTreatment postTreatment,
        Direction direction,
        String raTarget,
        Integer mTolerance,
        Integer pTolerance,
        RaUnit raUnit,
        RaAnotherUnit raAnotherUnit,
        String qsRequirement,
        String expensePerYear,
        String customerName,
        String completeVehicle,
        Regulation regulation
    ) {
        this.inquiry=inquiry;
        this.lab = lab;
        this.kind = kind;
        this.standardOrg = standardOrg;
        this.pjtName = pjtName;
        this.salesVehicleName = salesVehicleName;
        this.partName = partName;
        this.ixPlate = ixPlate;
        this.thickness = thickness;
        this.width = width;
        this.quantity = quantity;
        this.pTolerance = pTolerance;
        this.raUnit = raUnit;
        this.raAnotherUnit = raAnotherUnit;
        this.qsRequirement = qsRequirement;
        this.expensePerYear = expensePerYear;
        this.customerName = customerName;
        this.completeVehicle = completeVehicle;
        this.regulation = regulation;
        this.desiredDeliveryDate = desiredDeliveryDate;
        this.deliveryDestination = deliveryDestination;
        this.orders = order;
        this.coatingCondition = coatingCondition;
        this.coatingAnotherCondition = coatingAnotherCondition;
        this.contract = contract;
        this.sop = sop;
        this.fcAmount = fcAmount;
        this.bcAmount = bcAmount;
        this.coatingUnit = coatingUnit;
        this.postTreatment = postTreatment;
        this.direction = direction;
        this.raTarget = raTarget;
        this.mTolerance = mTolerance;
        this.isActivated = true;
    }


    public void updateCarLineItem(
        Lab lab,
        Kind kind,
        StandardOrg standardOrg,
        String pjtName,
        String salesVehicleName,
        String partName,
        IxPlate ixPlate,
        String thickness,
        String width,
        Integer quantity,
        Date desiredDeliveryDate,
        String deliveryDestination,
        Order order,
        CoatingCondition coatingCondition,
        CoatingAnotherCondition coatingAnotherCondition,
        ContractType contract,
        Date sop,
        String fcAmount,
        String bcAmount,
        CoatingUnit coatingUnit,
        PostTreatment postTreatment,
        Direction direction,
        String raTarget,
        Integer mTolerance,
        Integer pTolerance,
        RaUnit raUnit,
        RaAnotherUnit raAnotherUnit,
        String qsRequirement,
        String expensePerYear,
        String customerName,
        String completeVehicle,
        Regulation regulation
    ) {
        this.lab = lab;
        this.kind = kind;
        this.standardOrg = standardOrg;
        this.pjtName = pjtName;
        this.salesVehicleName = salesVehicleName;
        this.partName = partName;
        this.ixPlate = ixPlate;
        this.thickness = thickness;
        this.width = width;
        this.quantity = quantity;
        this.pTolerance = pTolerance;
        this.raUnit = raUnit;
        this.raAnotherUnit = raAnotherUnit;
        this.qsRequirement = qsRequirement;
        this.expensePerYear = expensePerYear;
        this.customerName = customerName;
        this.completeVehicle = completeVehicle;
        this.regulation = regulation;
        this.desiredDeliveryDate = desiredDeliveryDate;
        this.deliveryDestination = deliveryDestination;
        this.orders = order;
        this.coatingCondition = coatingCondition;
        this.coatingAnotherCondition = coatingAnotherCondition;
        this.contract = contract;
        this.sop = sop;
        this.fcAmount = fcAmount;
        this.bcAmount = bcAmount;
        this.coatingUnit = coatingUnit;
        this.postTreatment = postTreatment;
        this.direction = direction;
        this.raTarget = raTarget;
        this.mTolerance = mTolerance;
    }
}
