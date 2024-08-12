package com.pobluesky.backend.domain.lineitem.dto.request.car;

import com.pobluesky.backend.domain.inquiry.entity.Inquiry;
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
