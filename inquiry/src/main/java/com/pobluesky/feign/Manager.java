package com.pobluesky.feign;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.pobluesky.config.global.entity.Department;
import com.pobluesky.config.global.security.UserRole;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Data
public class Manager {

    private Long userId;
    private String name;
    private UserRole role;

}
