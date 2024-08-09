package com.pobluesky.backend.domain.user.controller;

import com.pobluesky.backend.domain.user.service.CustomUserDetailsService;
import com.pobluesky.backend.global.security.JwtToken;
import com.pobluesky.backend.domain.user.dto.request.CustomerCreateRequestDTO;
import com.pobluesky.backend.domain.user.dto.request.CustomerUpdateRequestDTO;
import com.pobluesky.backend.domain.user.dto.request.LogInDto;
import com.pobluesky.backend.domain.user.dto.response.CustomerResponseDTO;
import com.pobluesky.backend.domain.user.service.CustomerService;
import com.pobluesky.backend.global.util.model.JsonResult;

import com.pobluesky.backend.global.util.ResponseFactory;
import com.pobluesky.backend.global.util.model.CommonResult;

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
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/customers")
@Slf4j
public class CustomerController {

    private final CustomerService customerService;

    private final CustomUserDetailsService userDetailsService;

    @GetMapping
    public ResponseEntity<JsonResult> getUsers() {
        List<CustomerResponseDTO> response = customerService.getAllCustomers();

        return ResponseEntity.status(HttpStatus.OK)
            .body(ResponseFactory.getSuccessJsonResult(response));
    }

    @PostMapping("/sign-in")
    public JwtToken signIn(@RequestBody LogInDto logInDto) {
        String email = logInDto.email();
        String password = logInDto.password();

        return userDetailsService.signIn(email, password);
    }

    @PostMapping("/sign-up")
    public ResponseEntity<JsonResult> signUp(@RequestBody CustomerCreateRequestDTO signUpDto) {
        CustomerResponseDTO response = customerService.signUp(signUpDto);

        return ResponseEntity.status(HttpStatus.OK)
            .body(ResponseFactory.getSuccessJsonResult(response));
    }

    @PutMapping("/{userId}")
    public ResponseEntity<JsonResult> updateUserByNo(
        @RequestHeader("Authorization") String token,
        @RequestBody CustomerUpdateRequestDTO customerUpdateRequestDTO
    ) {
        CustomerResponseDTO response = customerService.updateCustomerById(
            token,
            customerUpdateRequestDTO
        );

        return ResponseEntity.status(HttpStatus.OK)
            .body(ResponseFactory.getSuccessJsonResult(response));
    }

    @DeleteMapping("/{userId}")
    public ResponseEntity<CommonResult> deleteUserByNo(@PathVariable Long userId) {
        customerService.deleteCustomerById(userId);

        return ResponseEntity.ok(ResponseFactory.getSuccessResult());
    }
}
