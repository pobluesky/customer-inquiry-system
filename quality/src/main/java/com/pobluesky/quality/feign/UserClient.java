package com.pobluesky.quality.feign;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@FeignClient(name = "user")
public interface UserClient {

    @GetMapping("/users/details")
    UserDetails getUserDetails(@RequestParam("userId") Long userId);

    @GetMapping("/api/sign/token")
    Long parseToken(@RequestParam("token") String token);
}
