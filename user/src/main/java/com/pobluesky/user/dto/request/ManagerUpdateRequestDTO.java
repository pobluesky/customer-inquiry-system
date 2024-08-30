package com.pobluesky.user.dto.request;

import com.pobluesky.config.global.security.UserRole;
import com.pobluesky.user.entity.Department;

public record ManagerUpdateRequestDTO(
    String name,
    String email,
    String password,
    String phone,
    UserRole role,
    Department department
) {
}
