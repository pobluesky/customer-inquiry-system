package com.pobluesky.review.feign;

import com.pobluesky.config.global.security.UserRole;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserDetails {
    private Long userId;
    private UserRole role;

}