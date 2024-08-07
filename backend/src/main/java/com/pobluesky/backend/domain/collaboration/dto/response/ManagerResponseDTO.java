package com.pobluesky.backend.domain.collaboration.dto.response;

import com.pobluesky.backend.domain.user.entity.Department;
import com.pobluesky.backend.domain.user.entity.Manager;

import lombok.Builder;

@Builder
public record ManagerResponseDTO(
    Long managerId,
    String empNo,
    String name,
    Department department
) {

    public static ManagerResponseDTO from(Manager manager) {
        return ManagerResponseDTO.builder()
            .managerId(manager.getManagerId())
            .empNo(manager.getEmpNo())
            .name(manager.getName())
            .department(manager.getDepartment())
            .build();
    }
}
