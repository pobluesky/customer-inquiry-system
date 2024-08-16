package com.pobluesky.backend.domain.receipt.controller;

import com.pobluesky.backend.domain.receipt.dto.request.ReceiptCreateRequestDTO;
import com.pobluesky.backend.domain.receipt.dto.request.ReceiptUpdateRequestDTO;
import com.pobluesky.backend.domain.receipt.dto.response.ReceiptResponse;
import com.pobluesky.backend.domain.receipt.service.ReceiptService;
import com.pobluesky.backend.global.util.ResponseFactory;
import com.pobluesky.backend.global.util.model.CommonResult;
import com.pobluesky.backend.global.util.model.JsonResult;

import io.swagger.v3.oas.annotations.Operation;

import java.util.List;

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
@RequestMapping("/api/receipts/{offerSheetId}")
@RequiredArgsConstructor
public class ReceiptController {

    private final ReceiptService receiptService;

    @GetMapping
    @Operation(
        summary = "OfferSheet 별  receipt 조회한다.",
        description = "담당자만 조회 가능하다."
    )
    public ResponseEntity<JsonResult> getReceiptsByOfferSheet(
        @RequestHeader("Authorization") String token,
        @PathVariable("offerSheetId") Long offerSheetId
    ) {
        List<ReceiptResponse> response = receiptService.getReceiptsByInquiry(
            token,
            offerSheetId
        );

        return ResponseEntity.status(HttpStatus.OK)
            .body(ResponseFactory.getSuccessJsonResult(response));
    }

    @Operation(summary = "OfferSheet 별  receipt 작성")
    @PostMapping
    public ResponseEntity<JsonResult> createReceipt(
        @RequestHeader("Authorization") String token,
        @PathVariable("offerSheetId") Long offerSheetId,
        @RequestBody ReceiptCreateRequestDTO requestDto) {
        ReceiptResponse response = receiptService.createReceipt(
            token,
            offerSheetId,
            requestDto
        );

        return ResponseEntity.status(HttpStatus.OK)
            .body(ResponseFactory.getSuccessJsonResult(response));
    }

    @PutMapping("/update/{receiptId}")
    @Operation(summary = "receipt 내역 수정")
    public ResponseEntity<JsonResult> updateLineItem(
        @RequestHeader("Authorization") String token,
        @PathVariable("offerSheetId") Long offerSheetId,
        @PathVariable("receiptId") Long receiptId,
        @RequestBody ReceiptUpdateRequestDTO requestDto
    ) {
        ReceiptResponse response = receiptService.updateReceiptById(
            token,
            offerSheetId,
            receiptId,
            requestDto
        );

        return ResponseEntity.status(HttpStatus.OK)
            .body(ResponseFactory.getSuccessJsonResult(response));
    }

    @DeleteMapping("/delete/{receiptId}")
    @Operation(summary = "receipt 내역 삭제")
    public ResponseEntity<CommonResult> deleteLineItem(
        @RequestHeader("Authorization") String token,
        @PathVariable("offerSheetId") Long offerSheetId,
        @PathVariable("receiptId") Long receiptId
    ) {
        receiptService.deleteReceiptById(
            token,
            offerSheetId,
            receiptId
        );

        return ResponseEntity.status(HttpStatus.OK)
            .body(ResponseFactory.getSuccessResult());
    }
}
