package com.pobluesky.review.feign;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@FeignClient(name = "user")
public interface UserClient {

    @GetMapping("/users/exists")
    boolean existsById(@RequestParam("userId") Long userId);

    @GetMapping("/users/details")
    UserDetails getUserDetails(@RequestParam("userId") Long userId);
}
