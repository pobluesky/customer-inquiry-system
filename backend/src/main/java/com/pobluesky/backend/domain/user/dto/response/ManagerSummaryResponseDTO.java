package com.pobluesky.backend.domain.user.dto.response;

import com.pobluesky.backend.domain.user.entity.Department;
import com.pobluesky.backend.domain.user.entity.Manager;

import com.pobluesky.backend.domain.user.entity.UserRole;
import lombok.Builder;

@Builder
public record ManagerSummaryResponseDTO(
    Long userId,
    String name,
    String empNo,
    String email,
    Department department
) {

    public static ManagerSummaryResponseDTO from(Manager manager) {
        if (manager == null) return null;
        else {
            return ManagerSummaryResponseDTO.builder()
                .userId(manager.getUserId())
                .name(manager.getName())
                .empNo(manager.getEmpNo())
                .email(manager.getEmail())
                .department(manager.getDepartment())
                .build();
        }
    }
}
