package com.pobluesky.backend.domain.lineitem.dto.request.car;

import com.pobluesky.backend.domain.inquiry.entity.Inquiry;
import com.pobluesky.backend.domain.lineitem.entity.CarLineItem;
import com.pobluesky.backend.domain.lineitem.entity.type.car.IxPlate;
import com.pobluesky.backend.domain.lineitem.entity.type.car.Lab;
import com.pobluesky.backend.domain.lineitem.entity.type.car.Kind;
import com.pobluesky.backend.domain.lineitem.entity.type.car.StandardOrg;

public record CarLineItemCreateRequestDTO(
    Lab lab,
    Kind kind,
    StandardOrg standardOrg,
    String salesVehicleName,
    String partName,
    IxPlate ixPlate,
    String thickness,
    String width,
    Integer quantity,
    String expectedDeliveryDate,
    String transportationDestination,
    String orderEdge,
    String tolerance,
    String annualCost
) {
    public CarLineItem toCarLineItemEntity(Inquiry inquiry) {

        return CarLineItem.builder()
            .inquiry(inquiry)
            .lab(lab)
            .kind(kind)
            .standardOrg(standardOrg)
            .salesVehicleName(salesVehicleName)
            .partName(partName)
            .ixPlate(ixPlate)
            .thickness(thickness)
            .width(width)
            .quantity(quantity)
            .expectedDeliveryDate(expectedDeliveryDate)
            .transportationDestination(transportationDestination)
            .orderEdge(orderEdge)
            .tolerance(tolerance)
            .annualCost(annualCost)
            .build();
    }
}
