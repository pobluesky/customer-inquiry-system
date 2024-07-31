package com.pobluesky.backend.domain.user.controller;

import com.pobluesky.backend.domain.user.dto.request.ManagerCreateRequestDTO;
import com.pobluesky.backend.domain.user.dto.request.ManagerUpdateRequestDTO;
import com.pobluesky.backend.domain.user.dto.response.ManagerResponseDTO;
import com.pobluesky.backend.domain.user.service.ManagerService;
import com.pobluesky.backend.global.util.ResponseFactory;
import com.pobluesky.backend.global.util.model.CommonResult;
import com.pobluesky.backend.global.util.model.JsonResult;
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
@RequestMapping("/api/managers")
public class ManagerController {
    private final ManagerService managerService;

    @GetMapping
    @PostMapping
    public ResponseEntity<JsonResult> getUsers() {
        List<ManagerResponseDTO> response = managerService.getAllManagers();

        return ResponseEntity.status(HttpStatus.OK)
            . body(ResponseFactory.getSuccessJsonResult(response));
    }

    @PostMapping
    public ResponseEntity<JsonResult> createUser(@RequestBody ManagerCreateRequestDTO dto) {
        ManagerResponseDTO response = managerService.createManager(dto);

        return ResponseEntity.status(HttpStatus.OK)
            . body(ResponseFactory.getSuccessJsonResult(response));
    }

    @PutMapping("/{userNo}")
    public ResponseEntity<JsonResult> updateManagerByNo(
        @PathVariable Long userNo,
        @RequestBody ManagerUpdateRequestDTO customerUpdateRequestDTO
    ) {
        ManagerResponseDTO response = managerService.updateManagerByNo(userNo, customerUpdateRequestDTO);

        return ResponseEntity.status(HttpStatus.OK)
            . body(ResponseFactory.getSuccessJsonResult(response));
    }

    @DeleteMapping("/{userNo}")
    public ResponseEntity<CommonResult> deleteUserByNo(@PathVariable Long userNo) {
        managerService.deleteManagerByNo(userNo);

        return ResponseEntity.ok(ResponseFactory.getSuccessResult());
    }

}
