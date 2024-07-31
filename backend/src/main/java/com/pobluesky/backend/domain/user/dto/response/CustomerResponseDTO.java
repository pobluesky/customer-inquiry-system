package com.pobluesky.backend.domain.user.dto.response;

import com.pobluesky.backend.domain.user.entity.Customer;
import lombok.Builder;

@Builder
public record CustomerResponseDTO(
    Long userNo,
    String name,
    String email,
    String password,
    String phone,
    String customerCode,
    String customerName
) {
    // entity -> dto
    public static CustomerResponseDTO from(Customer customer) {
        return CustomerResponseDTO.builder()
            .userNo(customer.getCustomerId())
            .name(customer.getName())
            .email(customer.getEmail())
            .password(customer.getPassword())
            .phone(customer.getPhone())
            .customerCode(customer.getCustomerCode())
            .customerName(customer.getCustomerName())
            .build();
    }
}
