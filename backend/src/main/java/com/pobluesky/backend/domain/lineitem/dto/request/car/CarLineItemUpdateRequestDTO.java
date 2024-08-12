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
    Integer quantity
) {
}