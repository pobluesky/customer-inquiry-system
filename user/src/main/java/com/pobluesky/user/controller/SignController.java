package com.pobluesky.user.controller;

import com.pobluesky.config.global.security.JwtToken;

import com.pobluesky.user.dto.request.LogInDto;
import com.pobluesky.user.service.SignService;

import io.swagger.v3.oas.annotations.Operation;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/users")
@Slf4j
public class SignController {

    private final SignService signService;

    @PostMapping("/sign-in")
    @Operation(summary = "로그인")
    public JwtToken signIn(@RequestBody LogInDto logInDto) {
        String email = logInDto.email();
        String password = logInDto.password();

        return signService.signIn(email, password);
    }

}
