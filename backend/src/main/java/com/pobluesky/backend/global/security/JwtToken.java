package com.pobluesky.backend.global.security;

import com.pobluesky.backend.domain.user.entity.UserRole;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Builder
@Data
@AllArgsConstructor
public class JwtToken {

    private String grantType;

    private String accessToken;

    private String refreshToken;

    private UserRole userRole;

    private Long userId;
}
