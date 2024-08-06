package com.pobluesky.backend.domain.review.entity;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum ContractType {
    TEST("test"),
    TEST_LAB("test2");

    private final String key;
}
