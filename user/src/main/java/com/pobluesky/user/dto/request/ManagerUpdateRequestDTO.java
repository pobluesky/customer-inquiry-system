package com.pobluesky.user.dto.request;

import com.pobluesky.user.entity.Department;
import com.pobluesky.user.entity.UserRole;

public record ManagerUpdateRequestDTO(
    String name,
    String email,
    String password,
    String phone,
    UserRole role,
    Department department
) {
}
