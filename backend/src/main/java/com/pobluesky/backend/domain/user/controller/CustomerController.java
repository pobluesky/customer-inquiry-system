package com.pobluesky.backend.domain.user.controller;

import com.pobluesky.backend.domain.user.dto.request.CustomerCreateRequestDTO;
import com.pobluesky.backend.domain.user.dto.request.CustomerUpdateRequestDTO;
import com.pobluesky.backend.domain.user.dto.response.CustomerResponseDTO;
import com.pobluesky.backend.domain.user.service.CustomerService;
import com.pobluesky.backend.global.util.model.JsonResult;

import com.pobluesky.backend.global.util.ResponseFactory;
import com.pobluesky.backend.global.util.model.CommonResult;
import lombok.RequiredArgsConstructor;

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
@RequestMapping("/api/customers")
public class CustomerController {
    private final CustomerService customerService;

    @GetMapping
    @PostMapping
    public ResponseEntity<JsonResult> getUsers() {
        List<CustomerResponseDTO> allUsers = customerService.getAllUsers();

        return ResponseEntity.status(HttpStatus.OK)
            . body(JsonResult.success(allUsers));
    }

    @PostMapping
    public ResponseEntity<JsonResult> createUser(@RequestBody CustomerCreateRequestDTO dto) {
        CustomerResponseDTO response = customerService.createUser(dto);

        return ResponseEntity.status(HttpStatus.OK)
            . body(JsonResult.success(response));
    }

    @PutMapping("/{userNo}")
    public ResponseEntity<JsonResult> updateUserByNo(
        @PathVariable Long userNo,
        @RequestBody CustomerUpdateRequestDTO customerUpdateRequestDTO
    ) {
        CustomerResponseDTO response = customerService.updateUserByNo(userNo, customerUpdateRequestDTO);

        return ResponseEntity.status(HttpStatus.OK)
            . body(JsonResult.success(response));
    }

    @DeleteMapping("/{userNo}")
    public ResponseEntity<CommonResult> deleteUserByNo(@PathVariable Long userNo) {
        customerService.deleteUserByNo(userNo);

        return ResponseEntity.ok(ResponseFactory.getSuccessResult());
    }

}
