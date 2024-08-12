package com.pobluesky.backend.domain.inquiry.entity;

import lombok.Getter;

@Getter
public enum ProductType {

    COLD_ROLLED("Cold Rolled"),
    ELECTRICAL_STEEL("Electrical Steel"),
    HOT_ROLLED_GENERAL("Hot Rolled (General)"),
    HOT_ROLLED_ENERGY_PIPE("Hot Rolled (Energy Pipe)"),
    HOT_ROLLED_CONSTRUCTION("Hot Rolled (Construction)"),
    WIRE_ROD("Wire Rod"),
    HEAVY_PLATE_GENERAL("Heavy Plate (General/Classification Society)"),
    HEAVY_PLATE_ENERGY_PIPE("Heavy Plate (Energy Pipe)"),
    HEAVY_PLATE_CONSTRUCTION("Heavy Plate (Construction)"),
    HEAVY_PLATE_ONSHORE_PLANT("Heavy Plate (Onshore Plant)"),
    HEAVY_PLATE_SHIPBUILDING_OFFSHORE_PLANT("Heavy Plate (Shipbuilding/Offshore Plant)"),
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
