package com.pobluesky.backend.domain.lineitem.dto.request;

import com.pobluesky.backend.domain.inquiry.entity.Inquiry;
import com.pobluesky.backend.domain.lineitem.entity.CarLineItem;
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

import java.util.Date;

public record CarLineItemCreateRequestDTO(
    Lab lab,
    Kind kind,
    StandardOrg standardOrg,
    String pjtName,
    String salesVehicleName,
    String partName,
    IxPlate ixPlate,
    String thickness,
    String width,
    int quantity,
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
    int mTolerance,
    int pTolerance,
    RaUnit raUnit,
    RaAnotherUnit raAnotherUnit,
    String qsRequirement,
    String expensePerYear,
    String customerName,
    String completeVehicle,
    Regulation regulation
) {

    public CarLineItem toCarLineItemEntity(Inquiry inquiry) {

        return CarLineItem.builder()
            .inquiry(inquiry)
            .lab(lab)
            .kind(kind)
            .standardOrg(standardOrg)
            .pjtName(pjtName)
            .salesVehicleName(salesVehicleName)
            .partName(partName)
            .ixPlate(ixPlate)
            .thickness(thickness)
            .width(width)
            .quantity(quantity)
            .desiredDeliveryDate(desiredDeliveryDate)
            .deliveryDestination(deliveryDestination)
            .order(order)
            .coatingCondition(coatingCondition)
            .coatingAnotherCondition(coatingAnotherCondition)
            .contract(contract)
            .sop(sop)
            .fcAmount(fcAmount)
            .bcAmount(bcAmount)
            .coatingUnit(coatingUnit)
            .postTreatment(postTreatment)
            .direction(direction)
            .raTarget(raTarget)
            .mTolerance(mTolerance)
            .pTolerance(pTolerance)
            .raUnit(raUnit)
            .raAnotherUnit(raAnotherUnit)
            .qsRequirement(qsRequirement)
            .expensePerYear(expensePerYear)
            .customerName(customerName)
            .completeVehicle(completeVehicle)
            .regulation(regulation)
            .build();
    }
}
