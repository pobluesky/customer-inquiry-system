package com.pobluesky.backend.domain.user.controller;

import com.pobluesky.backend.domain.user.dto.request.LogInDto;
import com.pobluesky.backend.domain.user.dto.response.MobileManagerResponseDTO;
import com.pobluesky.backend.domain.user.service.ManagerService;
import com.pobluesky.backend.domain.user.service.SignService;
import com.pobluesky.backend.global.security.JwtToken;

import io.swagger.v3.oas.annotations.Operation;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
@RequestMapping("/mobile/api/users")
@Slf4j
public class MobileUserController {

    private final ManagerService managerService;

    private final SignService signService;

    @PostMapping("/sign-in")
    @Operation(summary = "로그인")
    public JwtToken signIn(@RequestBody LogInDto logInDto) {
        String email = logInDto.email();
        String password = logInDto.password();

        return signService.signIn(email, password);
    }

    @GetMapping("/{userId}")
    @Operation(summary = "담당자 조회")
    public MobileManagerResponseDTO getManagerById(
            @RequestHeader("Authorization") String token,
            @PathVariable("userId") Long userId
    ) {
        return managerService.getManagerByIdForMobile(token, userId);
    }
}
