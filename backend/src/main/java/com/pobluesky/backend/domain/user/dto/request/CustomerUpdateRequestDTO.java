package com.pobluesky.backend.domain.user.dto.request;

import com.pobluesky.backend.domain.user.entity.Customer;

public record CustomerUpdateRequestDTO(
    String name,
    String email,
    String password,
    String phone,
    String customerCode,
    String customerName
) {
}
