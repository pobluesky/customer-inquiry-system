package com.pobluesky.backend.domain.lineitem.entity.type.car;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum StandardOrg {

    ASTM("ASTM"),
    ANSI("ANSI");

    private String name;
}
