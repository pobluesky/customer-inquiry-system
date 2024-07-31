package com.pobluesky.backend.domain.user.dto.request;

import com.pobluesky.backend.domain.user.entity.Customer;

public record CustomerCreateRequestDTO(
    String name,
    String email,
    String password,
    String phone,
    String customerCode,
    String customerName
) {
    // dto -> entity
    public Customer toCustomerEntity() {
        return Customer.builder()
            .name(name)
            .email(email)
            .password(password)
            .phone(phone)
            .customerCode(customerCode)
            .customerName(customerName)
            .build();
    }
}
