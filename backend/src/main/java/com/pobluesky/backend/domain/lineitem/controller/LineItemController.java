package com.pobluesky.backend.domain.lineitem.controller;

import com.pobluesky.backend.domain.lineitem.dto.response.LineItemResponseDTO;
import com.pobluesky.backend.domain.lineitem.service.LineItemService;
import com.pobluesky.backend.global.util.ResponseFactory;
import com.pobluesky.backend.global.util.model.CommonResult;
import com.pobluesky.backend.global.util.model.JsonResult;

import io.swagger.v3.oas.annotations.Operation;

import java.util.List;
import java.util.Map;

import lombok.RequiredArgsConstructor;

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

@RestController
@RequestMapping("/api/line-items/{inquiryId}")
@RequiredArgsConstructor
public class LineItemController {

    private final LineItemService lineItemService;

    @GetMapping
    @Operation(summary = "Inquiry 내역을 조회한다.", description = "자신의 Inquiry 혹은 담당자만 조회 가능하다.")
    public ResponseEntity<JsonResult> getAllLineItemsByInquiry(
        @RequestHeader String token,
        @PathVariable Long inquiryId
    ) {
        List<LineItemResponseDTO> response = lineItemService.getLineItemsByInquiry(
            token,
            inquiryId
        );

        return ResponseEntity.status(HttpStatus.OK)
            .body(ResponseFactory.getSuccessJsonResult(response));
    }

    @Operation(summary = "inquiryId 별 line-item 전체 조회")
    @GetMapping("/full")
    public ResponseEntity<JsonResult> getFullLineItemsByInquiry(@PathVariable Long inquiryId) {
        List<LineItemResponseDTO> response = lineItemService.getFullLineItemsByInquiry(inquiryId);
        return ResponseEntity.status(HttpStatus.OK)
            .body(ResponseFactory.getSuccessJsonResult(response));
    }

    @Operation(summary = "inquiryId 별 line-item 작성")
    @PostMapping
    public ResponseEntity<JsonResult> createLineItem(
        @RequestHeader String token,
        @PathVariable Long inquiryId,
        @RequestBody Map<String, Object> requestDto) {
        LineItemResponseDTO response = lineItemService.createLineItem(
            token,
            inquiryId,
            requestDto
        );

        return ResponseEntity.status(HttpStatus.OK)
            .body(ResponseFactory.getSuccessJsonResult(response));
    }

    @PutMapping("/update/{lineItemId}")
    @Operation(summary = "line item 내역 수정")
    public ResponseEntity<JsonResult> updateLineItem(
        @RequestHeader String token,
        @PathVariable Long inquiryId,
        @PathVariable Long lineItemId,
        @RequestBody Map<String, Object> requestDto
    ) {
        LineItemResponseDTO response = lineItemService.updateLineItemById(
            token,
            inquiryId,
            lineItemId,
            requestDto
        );

        return ResponseEntity.status(HttpStatus.OK)
            .body(ResponseFactory.getSuccessJsonResult(response));
    }

    @DeleteMapping("/delete/{lineItemId}")
    @Operation(summary = "line item 내역 삭제")
    public ResponseEntity<CommonResult> deleteLineItem(
        @RequestHeader String token,
        @PathVariable Long inquiryId,
        @PathVariable Long lineItemId
    ) {
        lineItemService.deleteLineItemById(
            token,
            inquiryId,
            lineItemId
        );

        return ResponseEntity.status(HttpStatus.OK)
            .body(ResponseFactory.getSuccessResult());
    }
}
