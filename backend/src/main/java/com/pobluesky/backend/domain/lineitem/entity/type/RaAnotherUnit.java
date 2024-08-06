package com.pobluesky.backend.domain.lineitem.entity.type;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum RaAnotherUnit {

    TEST("예시"),
    TEST_LAB("예시2");

    private String name;
}
