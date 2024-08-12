package com.pobluesky.backend.domain.lineitem.dto.response;

import com.pobluesky.backend.domain.lineitem.entity.CarLineItem;
import com.pobluesky.backend.domain.lineitem.entity.type.car.CoatingAnotherCondition;
import com.pobluesky.backend.domain.lineitem.entity.type.car.CoatingCondition;
import com.pobluesky.backend.domain.lineitem.entity.type.car.CoatingUnit;
import com.pobluesky.backend.domain.lineitem.entity.type.car.Direction;
import com.pobluesky.backend.domain.lineitem.entity.type.car.IxPlate;
import com.pobluesky.backend.domain.lineitem.entity.type.car.Lab;
import com.pobluesky.backend.domain.lineitem.entity.type.car.Order;
import com.pobluesky.backend.domain.lineitem.entity.type.car.PostTreatment;
import com.pobluesky.backend.domain.lineitem.entity.type.car.Kind;
import com.pobluesky.backend.domain.lineitem.entity.type.car.RaAnotherUnit;
import com.pobluesky.backend.domain.lineitem.entity.type.car.RaUnit;
import com.pobluesky.backend.domain.lineitem.entity.type.car.Regulation;
import com.pobluesky.backend.domain.lineitem.entity.type.car.StandardOrg;

import com.pobluesky.backend.domain.review.entity.ContractType;

import java.util.Date;

import lombok.Builder;
import lombok.Getter;

@Builder
@Getter
public class CarLineItemResponseDTO extends LineItemResponseDTO {

    private Long lineItemId;

    private Long inquiryId;

    private Lab lab;

    private Kind kind;

    private StandardOrg standardOrg;

    private String pjtName;

    private String salesVehicleName;

    private String partName;

    private IxPlate ixPlate;

    private String thickness;

    private String width;

    private Integer quantity;

    private Date desiredDeliveryDate;

    private String deliveryDestination;

    private Order order;

    private CoatingCondition coatingCondition;

    private CoatingAnotherCondition coatingAnotherCondition;

    private ContractType contract;

    private Date sop;

    private String fcAmount;

    private String bcAmount;

    private CoatingUnit coatingUnit;

    private PostTreatment postTreatment;

    private Direction direction;

    private String raTarget;

    private Integer mTolerance;

    private Integer pTolerance;

    private RaUnit raUnit;

    private RaAnotherUnit raAnotherUnit;

    private String qsRequirement;

    private String expensePerYear;

    private String customerName;

    private String completeVehicle;

    private Regulation regulation;

    private Boolean isActivated;

    public static CarLineItemResponseDTO of(CarLineItem carLineItem) {

        return CarLineItemResponseDTO.builder()
            .lineItemId(carLineItem.getLineItemId())
            .inquiryId(carLineItem.getInquiry().getInquiryId())
            .lab(carLineItem.getLab())
            .kind(carLineItem.getKind())
            .standardOrg(carLineItem.getStandardOrg())
            .pjtName(carLineItem.getPjtName())
            .salesVehicleName(carLineItem.getSalesVehicleName())
            .partName(carLineItem.getPartName())
            .ixPlate(carLineItem.getIxPlate())
            .thickness(carLineItem.getThickness())
            .width(carLineItem.getWidth())
            .quantity(carLineItem.getQuantity())
            .desiredDeliveryDate(carLineItem.getDesiredDeliveryDate())
            .deliveryDestination(carLineItem.getDeliveryDestination())
            .order(carLineItem.getOrders())
            .coatingCondition(carLineItem.getCoatingCondition())
            .coatingAnotherCondition(carLineItem.getCoatingAnotherCondition())
            .contract(carLineItem.getContract())
            .sop(carLineItem.getSop())
            .fcAmount(carLineItem.getFcAmount())
            .bcAmount(carLineItem.getBcAmount())
            .coatingUnit(carLineItem.getCoatingUnit())
            .postTreatment(carLineItem.getPostTreatment())
            .direction(carLineItem.getDirection())
            .raTarget(carLineItem.getRaTarget())
            .mTolerance(carLineItem.getMTolerance())
            .pTolerance(carLineItem.getPTolerance())
            .raUnit(carLineItem.getRaUnit())
            .raAnotherUnit(carLineItem.getRaAnotherUnit())
            .qsRequirement(carLineItem.getQsRequirement())
            .expensePerYear(carLineItem.getExpensePerYear())
            .customerName(carLineItem.getCustomerName())
            .completeVehicle(carLineItem.getCompleteVehicle())
            .regulation(carLineItem.getRegulation())
            .isActivated(carLineItem.getIsActivated())
            .build();
    }
}
