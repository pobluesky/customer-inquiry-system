package com.pobluesky.backend.domain.inquiry.entity;

import lombok.Getter;

@Getter
public enum ProductType {

    COLD_ROLLED("Cold Rolled"),
    HOT_ROLLED("Hot Rolled"),
    WIRE_ROD("Wire Rod"),
    THICK_PLATE("Thick Plate"),
    SURFACE_TREATED_GENERAL("Surface Treated (General)"),
    SURFACE_TREATED_HOME_APPLIANCES("Surface Treated (Home Appliances)"),
    STAINLESS("Stainless"),
    SLAB("Slab"),
    CAR("Car");

    private final String type;

    ProductType(String type) {
        this.type = type;
    }
}
