package com.pobluesky.quality.feign;

import com.pobluesky.config.global.util.model.JsonResult;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;

@FeignClient(name = "user")
public interface UserClient {

    @GetMapping("/api/managers/without-token/{userId}")
    JsonResult<Manager> getManagerByIdWithoutToken(@PathVariable("userId") Long userId);

    @GetMapping("/api/users/token")
    Long parseToken(@RequestParam("token") String token);
}
