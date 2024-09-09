package com.pobluesky.backend.domain.lineitem.dto.response.car;

import com.pobluesky.backend.domain.lineitem.dto.response.LineItemResponseDTO;
import com.pobluesky.backend.domain.lineitem.entity.CarLineItem;
import com.pobluesky.backend.domain.lineitem.entity.type.car.IxPlate;
import com.pobluesky.backend.domain.lineitem.entity.type.car.Lab;
import com.pobluesky.backend.domain.lineitem.entity.type.car.Kind;
import com.pobluesky.backend.domain.lineitem.entity.type.car.StandardOrg;

import java.time.LocalDate;

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

    private String salesVehicleName;

    private String partName;

    private IxPlate ixPlate;

    private String thickness;

    private String width;

    private Integer quantity;

    private Boolean isActivated;

    private String expectedDeliveryDate;

    private String transportationDestination;

    private String orderEdge;

    private String tolerance;

    private String annualCost;

    public static CarLineItemResponseDTO from(CarLineItem carLineItem) {

        return CarLineItemResponseDTO.builder()
            .lineItemId(carLineItem.getLineItemId())
            .inquiryId(carLineItem.getInquiry().getInquiryId())
            .lab(carLineItem.getLab())
            .kind(carLineItem.getKind())
            .standardOrg(carLineItem.getStandardOrg())
            .salesVehicleName(carLineItem.getSalesVehicleName())
            .partName(carLineItem.getPartName())
            .ixPlate(carLineItem.getIxPlate())
            .thickness(carLineItem.getThickness())
            .width(carLineItem.getWidth())
            .quantity(carLineItem.getQuantity())
            .isActivated(carLineItem.getIsActivated())
            .expectedDeliveryDate(carLineItem.getExpectedDeliveryDate())
            .transportationDestination(carLineItem.getTransportationDestination())
            .orderEdge(carLineItem.getOrderEdge())
            .tolerance(carLineItem.getTolerance())
            .annualCost(carLineItem.getAnnualCost())
            .build();
    }
}
