package com.pobluesky.voc.feign;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@FeignClient(name = "user")
public interface UserClient {

    @GetMapping("/managers/details")
    Manager getManagerDetails(@RequestParam("managerId") Long managerId);

    @GetMapping("/customers/details")
    Customer getCustomerDetails(@RequestParam("managerId") Long managerId);

    @GetMapping("/api/sign/token")
    Long parseToken(@RequestParam("token") String token);
}
