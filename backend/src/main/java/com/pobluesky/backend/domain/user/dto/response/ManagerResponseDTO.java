package com.pobluesky.backend.domain.user.dto.response;

import com.pobluesky.backend.domain.user.entity.Department;
import com.pobluesky.backend.domain.user.entity.Manager;

import com.pobluesky.backend.domain.user.entity.UserRole;
import lombok.Builder;

@Builder
public record ManagerResponseDTO(
    Long userId,
    String name,
    String email,
    String password,
    String phone,
    String empNo,
    UserRole role,
    Department department,

    Boolean isActivated
) {
    public static ManagerResponseDTO from(Manager manager) {

        return ManagerResponseDTO.builder()
            .userId(manager.getUserId())
            .name(manager.getName())
            .email(manager.getEmail())
            .password(manager.getPassword())
            .phone(manager.getPhone())
            .empNo(manager.getEmpNo())
            .role(manager.getRole())
            .department(manager.getDepartment())
            .isActivated(manager.getIsActivated())
            .build();
    }
}
