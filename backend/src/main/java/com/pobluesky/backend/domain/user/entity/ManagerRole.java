package com.pobluesky.backend.domain.user.entity;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum ManagerRole {
    SALES("ROLE_SALES"),
    QUALITY("ROLE_QUALITY");

    private final String role;
}
