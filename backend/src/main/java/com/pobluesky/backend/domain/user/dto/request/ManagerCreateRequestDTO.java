package com.pobluesky.backend.domain.user.dto.request;

import com.pobluesky.backend.domain.user.entity.Department;
import com.pobluesky.backend.domain.user.entity.Manager;
import com.pobluesky.backend.domain.user.entity.UserRole;

public record ManagerCreateRequestDTO(
    String name,
    String email,
    String password,
    String phone,
    String empNo,
    UserRole role,
    Department department
) {
    public Manager toManagerEntity(String encodedPassword, String securityRole) {

        return Manager.builder()
            .name(name)
            .email(email)
            .password(encodedPassword)
            .phone(phone)
            .empNo(empNo)
            .role(role)
            .department(department)
            .securityRole(securityRole)
            .build();
    }
}
