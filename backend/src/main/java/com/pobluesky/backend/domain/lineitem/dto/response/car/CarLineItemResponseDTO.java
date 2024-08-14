package com.pobluesky.backend.domain.lineitem.dto.response.car;

import com.pobluesky.backend.domain.lineitem.dto.response.LineItemResponseDTO;
import com.pobluesky.backend.domain.lineitem.entity.CarLineItem;
import com.pobluesky.backend.domain.lineitem.entity.type.car.IxPlate;
import com.pobluesky.backend.domain.lineitem.entity.type.car.Lab;
import com.pobluesky.backend.domain.lineitem.entity.type.car.Kind;
import com.pobluesky.backend.domain.lineitem.entity.type.car.StandardOrg;

import lombok.Builder;
import lombok.Getter;

@Builder
@Getter
public class CarLineItemResponseDTO extends LineItemResponseDTO {

    private Long lineItemId;

    private Long inquiryId;

    private Long CustomerId;

    private String CustomerName;

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

    private Boolean isActivated;

    public static CarLineItemResponseDTO of(CarLineItem carLineItem) {

        return CarLineItemResponseDTO.builder()
            .lineItemId(carLineItem.getLineItemId())
            .inquiryId(carLineItem.getInquiry().getInquiryId())
            .CustomerId(carLineItem.getCustomer().getUserId())
            .CustomerName(carLineItem.getCustomer().getCustomerName())
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
            .isActivated(carLineItem.getIsActivated())
            .build();
    }
}
