package com.pobluesky.feign;

import com.pobluesky.inquiry.dto.response.ManagerSummaryResponseDTO;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;

@FeignClient(name = "user")
public interface UserClient {

    @GetMapping("/api/customers/{userId}")
    Customer getCustomerById(@PathVariable("userId") Long userId);

    @GetMapping("/api/managers/{userId}")
    Manager getManagerById(@PathVariable("userId") Long userId);

    @GetMapping("/api/managers/summary/{userId}")
    ManagerSummaryResponseDTO getManagerSummaryById(@PathVariable("userId") Long userId);

    @GetMapping("/api/users/token")
    Long parseToken(@RequestParam("token") String token);

}
