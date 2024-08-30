package com.pobluesky.notification.feign;

import com.pobluesky.notification.dto.response.Customer;
import com.pobluesky.notification.dto.response.Manager;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient(name = "user")
public interface UserClient {

    @GetMapping("/api/customers/{userId}")
    Customer getCustomerById(@PathVariable("userId") Long userId);

    @GetMapping("/api/managers/{userId}")
    Manager getManagerById(@PathVariable("userId") Long userId);

    @GetMapping("/api/sign/token")
    Long parseToken(@PathVariable("token") String token);

}
