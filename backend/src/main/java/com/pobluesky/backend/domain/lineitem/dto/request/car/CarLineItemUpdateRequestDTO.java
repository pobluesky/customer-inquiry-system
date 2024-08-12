package com.pobluesky.backend.domain.lineitem.dto.request.car;

import com.pobluesky.backend.domain.lineitem.entity.type.car.IxPlate;
import com.pobluesky.backend.domain.lineitem.entity.type.car.Kind;
import com.pobluesky.backend.domain.lineitem.entity.type.car.Lab;
import com.pobluesky.backend.domain.lineitem.entity.type.car.StandardOrg;
import com.pobluesky.backend.domain.review.entity.ContractType;

import java.util.Date;

public record CarLineItemUpdateRequestDTO(
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
}
