package com.pobluesky.backend.domain.user.controller;

import com.pobluesky.backend.domain.user.dto.request.LogInDto;
import com.pobluesky.backend.domain.user.dto.request.ManagerCreateRequestDTO;
import com.pobluesky.backend.domain.user.dto.request.ManagerUpdateRequestDTO;
import com.pobluesky.backend.domain.user.dto.response.CustomerResponseDTO;
import com.pobluesky.backend.domain.user.dto.response.ManagerResponseDTO;
import com.pobluesky.backend.domain.user.entity.Customer;
import com.pobluesky.backend.domain.user.entity.Manager;
import com.pobluesky.backend.domain.user.service.ManagerService;
import com.pobluesky.backend.domain.user.service.SignService;
import com.pobluesky.backend.global.error.CommonException;
import com.pobluesky.backend.global.error.ErrorCode;
import com.pobluesky.backend.global.security.JwtToken;
import com.pobluesky.backend.global.util.ResponseFactory;
import com.pobluesky.backend.global.util.model.CommonResult;
import com.pobluesky.backend.global.util.model.JsonResult;

import io.swagger.v3.oas.annotations.Operation;
import lombok.RequiredArgsConstructor;

import lombok.extern.slf4j.Slf4j;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/managers")
@Slf4j
public class ManagerController {

    private final ManagerService managerService;

    @GetMapping
    @Operation(summary = "담당자 조회")
    public ResponseEntity<JsonResult> getManagers() {
        List<ManagerResponseDTO> response = managerService.getManagers();
        
        return ResponseEntity.status(HttpStatus.OK)
            . body(ResponseFactory.getSuccessJsonResult(response));
    }

    @GetMapping("/{userId}")
    @Operation(summary = "담당자 조회")
    public ResponseEntity<JsonResult> getManagerById(
        @RequestHeader("Authorization") String token,
        @PathVariable("userId") Long userId
    ) {
        ManagerResponseDTO response = managerService.getManagerById(token, userId);

        return ResponseEntity.status(HttpStatus.OK)
            .body(ResponseFactory.getSuccessJsonResult(response));
    }



    @PostMapping("/sign-up")
    @Operation(summary = "담당자 회원가입")
    public ResponseEntity<JsonResult> signUp(@RequestBody ManagerCreateRequestDTO signUpDto) {
        ManagerResponseDTO response = managerService.signUp(signUpDto);

        return ResponseEntity.status(HttpStatus.OK)
            .body(ResponseFactory.getSuccessJsonResult(response));
    }

    @PutMapping("/{userId}")
    @Operation(summary = "담당자 정보 수정")
    public ResponseEntity<JsonResult> updateManagerById(
        @RequestHeader("Authorization") String token,
        @PathVariable("userId") Long userId,
        @RequestBody ManagerUpdateRequestDTO managerUpdateRequestDTO
    ) {
        ManagerResponseDTO response = managerService.updateManagerById(
            token,
            userId,
            managerUpdateRequestDTO
        );

        return ResponseEntity.status(HttpStatus.OK)
            . body(ResponseFactory.getSuccessJsonResult(response));
    }

    @DeleteMapping("/{userId}")
    @Operation(summary = "담당자 삭제")
    public ResponseEntity<CommonResult> deleteCustomerById(
        @RequestHeader("Authorization") String token,
        @PathVariable("userId") Long userId
    ) {
        managerService.deleteManagerById(token, userId);

        return ResponseEntity.ok(ResponseFactory.getSuccessResult());
    }

}
