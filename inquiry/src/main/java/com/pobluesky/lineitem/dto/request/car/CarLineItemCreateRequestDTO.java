package com.pobluesky.lineitem.dto.request.car;

import com.pobluesky.inquiry.entity.Inquiry;
import com.pobluesky.lineitem.entity.CarLineItem;
import com.pobluesky.lineitem.entity.type.car.IxPlate;
import com.pobluesky.lineitem.entity.type.car.Lab;
import com.pobluesky.lineitem.entity.type.car.StandardOrg;
import com.pobluesky.lineitem.entity.type.car.Kind;

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
    String edge,
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
            .edge(edge)
            .tolerance(tolerance)
            .annualCost(annualCost)
            .build();
    }
}
