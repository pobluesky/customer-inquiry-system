package com.pobluesky.backend.domain.lineitem.entity.type.car;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum Kind {

    CAR("자동차"),
    STEEL("철");

    private String name;
}
