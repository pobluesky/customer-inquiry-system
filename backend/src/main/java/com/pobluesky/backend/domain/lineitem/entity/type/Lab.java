package com.pobluesky.backend.domain.lineitem.entity.type;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@AllArgsConstructor
public enum Lab {

    TEST("광양소"),
    TEST_LAB("예시2");

    private String name;
}
