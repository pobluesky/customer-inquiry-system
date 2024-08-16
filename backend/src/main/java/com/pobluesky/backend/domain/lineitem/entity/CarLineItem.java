package com.pobluesky.backend.domain.lineitem.entity;

import com.pobluesky.backend.domain.lineitem.entity.type.car.IxPlate;
import com.pobluesky.backend.domain.lineitem.entity.type.car.Lab;
import com.pobluesky.backend.domain.lineitem.entity.type.car.Kind;
import com.pobluesky.backend.domain.lineitem.entity.type.car.StandardOrg;
import com.pobluesky.backend.domain.inquiry.entity.Inquiry;
import com.pobluesky.backend.domain.user.entity.Customer;

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
        Integer quantity
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
        Integer quantity
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
    }

    public Customer getCustomer() {
        return this.inquiry.getCustomer();
    }
}
