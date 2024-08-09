package com.pobluesky.backend.domain.user.dto.request;

import com.pobluesky.backend.domain.user.entity.Customer;

import java.util.List;

public record CustomerCreateRequestDTO(
    String name,
    String email,
    String password,
    String phone,
    String customerCode,
    String customerName,
    List<String> roles
) {

    public Customer toCustomerEntity(String encodedPassword, List<String> roles) {

        return Customer.builder()
            .name(name)
            .email(email)
            .password(encodedPassword)
            .phone(phone)
            .customerCode(customerCode)
            .customerName(customerName)
            .roles(roles)
            .build();
    }
}
