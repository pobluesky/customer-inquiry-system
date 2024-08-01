package com.pobluesky.backend.domain.user.dto.response;

import com.pobluesky.backend.domain.user.entity.Customer;
import com.pobluesky.backend.domain.user.entity.Department;
import com.pobluesky.backend.domain.user.entity.Manager;
import com.pobluesky.backend.domain.user.entity.ManagerRole;
import lombok.Builder;

@Builder
public record ManagerResponseDTO(
    Long userId,
    String name,
    String email,
    String password,
    String phone,
    String empNo,
    ManagerRole role,
    Department department
) {
    public static ManagerResponseDTO from(Manager manager) {
        return ManagerResponseDTO.builder()
            .userId(manager.getManagerId())
            .name(manager.getName())
            .email(manager.getEmail())
            .password(manager.getPassword())
            .phone(manager.getPhone())
            .empNo(manager.getEmpNo())
            .role(manager.getRole())
            .department(manager.getDepartment())
            .build();
    }
}
