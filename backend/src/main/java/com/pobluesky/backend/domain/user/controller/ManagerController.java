package com.pobluesky.backend.domain.user.controller;

import com.pobluesky.backend.domain.user.dto.request.CustomerCreateRequestDTO;
import com.pobluesky.backend.domain.user.dto.request.LogInDto;
import com.pobluesky.backend.domain.user.dto.request.ManagerCreateRequestDTO;
import com.pobluesky.backend.domain.user.dto.request.ManagerUpdateRequestDTO;
import com.pobluesky.backend.domain.user.dto.response.CustomerResponseDTO;
import com.pobluesky.backend.domain.user.dto.response.ManagerResponseDTO;
import com.pobluesky.backend.domain.user.service.ManagerService;
import com.pobluesky.backend.global.security.JwtToken;
import com.pobluesky.backend.global.util.ResponseFactory;
import com.pobluesky.backend.global.util.model.CommonResult;
import com.pobluesky.backend.global.util.model.JsonResult;

import lombok.RequiredArgsConstructor;

import lombok.extern.slf4j.Slf4j;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/managers")
@Slf4j
public class ManagerController {
    private final ManagerService managerService;

    @PostMapping("/sign-in")
    public JwtToken signIn(@RequestBody LogInDto logInDto) {
        String email = logInDto.email();
        String password = logInDto.password();

        JwtToken jwtToken = managerService.signIn(email, password);

        log.info(
            "request email = {}, password = {}",
            jwtToken,
            password
        );

        log.info(
            "jwtToken accessToken = {}, refreshToken = {}",
            jwtToken.getAccessToken(),
            jwtToken.getRefreshToken()
        );

        return jwtToken;
    }

    @GetMapping
    @PostMapping
    public ResponseEntity<JsonResult> getUsers() {
        List<ManagerResponseDTO> response = managerService.getAllManagers();
        
        return ResponseEntity.status(HttpStatus.OK)
            . body(ResponseFactory.getSuccessJsonResult(response));
    }

    @PostMapping("/sign-up")
    public ResponseEntity<JsonResult> signUp(@RequestBody ManagerCreateRequestDTO signUpDto) {
        ManagerResponseDTO response = managerService.signUp(signUpDto);

        return ResponseEntity.status(HttpStatus.OK)
            .body(ResponseFactory.getSuccessJsonResult(response));
    }

    @PutMapping("/{userId}")
    public ResponseEntity<JsonResult> updateManagerById(
        @PathVariable Long userId,
        @RequestBody ManagerUpdateRequestDTO customerUpdateRequestDTO
    ) {
        ManagerResponseDTO response = managerService.updateManagerById(userId, customerUpdateRequestDTO);

        return ResponseEntity.status(HttpStatus.OK)
            . body(ResponseFactory.getSuccessJsonResult(response));
    }

    @DeleteMapping("/{userId}")
    public ResponseEntity<CommonResult> deleteUserById(@PathVariable Long userId) {
        managerService.deleteManagerById(userId);

        return ResponseEntity.ok(ResponseFactory.getSuccessResult());
    }

}
