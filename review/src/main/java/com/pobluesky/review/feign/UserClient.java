package com.pobluesky.review.feign;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;

@FeignClient(name = "user")
public interface UserClient {

    // Customer 존재 여부 확인
    @GetMapping("/api/customers/exists")
    boolean customerExistsById(@RequestParam("userId") Long userId);

    // Manager 존재 여부 확인
    @GetMapping("/api/managers/exists")
    boolean managerExistsById(@RequestParam("userId") Long userId);

    @GetMapping("/api/managers/{userId}")
    Manager getManagerById(@PathVariable("userId") Long userId);

    @GetMapping("/api/users/token")
    Long parseToken(@RequestParam("token") String token);
}
