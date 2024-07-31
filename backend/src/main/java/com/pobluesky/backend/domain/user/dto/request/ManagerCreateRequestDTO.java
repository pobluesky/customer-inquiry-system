package com.pobluesky.backend.domain.user.dto.request;

import com.pobluesky.backend.domain.user.entity.Customer;
import com.pobluesky.backend.domain.user.entity.Department;
import com.pobluesky.backend.domain.user.entity.Manager;
import com.pobluesky.backend.domain.user.entity.ManagerRole;
import jakarta.persistence.Embedded;

public record ManagerCreateRequestDTO(
    String name,
    String email,
    String password,
    String phone,
    String empNo,

    ManagerRole role,

    Department department
) {
    public Manager toManagerEntity() {
        return Manager.builder()
            .name(name)
            .email(email)
            .password(password)
            .phone(phone)
            .empNo(empNo)
            .role(role)
            .department(department)
            .build();
    }
}
