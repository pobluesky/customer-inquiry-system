package com.pobluesky.backend.domain.user.dto.request;

import com.pobluesky.backend.domain.user.entity.Department;
import com.pobluesky.backend.domain.user.entity.ManagerRole;

public record ManagerUpdateRequestDTO(
    String name,
    String email,
    String password,
    String phone,
    ManagerRole role,
    Department department
) {
}