package com.pobluesky.backend.domain.inquiry.controller;

import com.pobluesky.backend.domain.inquiry.dto.request.InquiryCreateRequestDTO;
import com.pobluesky.backend.domain.inquiry.dto.request.InquiryUpdateRequestDTO;
import com.pobluesky.backend.domain.inquiry.dto.response.InquiryProgressResponseDTO;
import com.pobluesky.backend.domain.inquiry.dto.response.InquiryResponseDTO;
import com.pobluesky.backend.domain.inquiry.dto.response.InquirySummaryResponseDTO;
import com.pobluesky.backend.domain.inquiry.entity.Industry;
import com.pobluesky.backend.domain.inquiry.entity.InquiryType;
import com.pobluesky.backend.domain.inquiry.entity.ProductType;
import com.pobluesky.backend.domain.inquiry.entity.Progress;
import com.pobluesky.backend.domain.inquiry.service.InquiryService;
import com.pobluesky.backend.global.util.ResponseFactory;
import com.pobluesky.backend.global.util.model.CommonResult;
import com.pobluesky.backend.global.util.model.JsonResult;

import java.time.LocalDate;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import io.swagger.v3.oas.annotations.Operation;

import lombok.RequiredArgsConstructor;

import org.springframework.data.domain.Page;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api")
public class InquiryController {

    private final InquiryService inquiryService;

    // 고객 Inquiry 조회
    @GetMapping("/customers/inquiries/{userId}")
    @Operation(summary = "Inquiry 조회(고객사)", description = "등록된 모든 Inquiry를 조건에 맞게 조회한다.")
    public ResponseEntity<JsonResult> getInquiriesByCustomerWithoutPaging(
        @RequestHeader("Authorization") String token,
        @PathVariable Long userId,
        @RequestParam(defaultValue = "LATEST") String sortBy,
        @RequestParam(required = false) Progress progress,
        @RequestParam(required = false) ProductType productType,
        @RequestParam(required = false) String customerName,
        @RequestParam(required = false) InquiryType inquiryType,
        @RequestParam(required = false) String salesPerson,
        @RequestParam(required = false) Industry industry,
        @RequestParam(required = false) @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate startDate,
        @RequestParam(required = false) @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate endDate
    ) {
        List<InquirySummaryResponseDTO> inquiries = inquiryService.getInquiriesByCustomerWithoutPaging(
            token,
            userId,
            sortBy,
            progress,
            productType,
            customerName,
            inquiryType,
            salesPerson,
            industry,
            startDate,
            endDate
        );

        return ResponseEntity.status(HttpStatus.OK)
            .body(ResponseFactory.getSuccessJsonResult(inquiries));
    }

    // 상세 조회 페이지
    @GetMapping("/customers/inquiries/{userId}/{inquiryId}")
    @Operation(summary = "고객사 Inquiry 상세 조회")
    public ResponseEntity<JsonResult> getInquiryDetail(
        @RequestHeader("Authorization") String token,
        @PathVariable Long userId,
        @PathVariable Long inquiryId
    ) {
        InquiryResponseDTO response = inquiryService.getInquiryDetailForCustomer(
            token,
            userId,
            inquiryId
        );

        return ResponseEntity.status(HttpStatus.OK)
            .body(ResponseFactory.getSuccessJsonResult(response));
    }

    @PostMapping("/customers/inquiries/{userId}")
    @Operation(summary = "고객사 Inquiry 생성")
    public ResponseEntity<JsonResult> createInquiry(
        @RequestHeader("Authorization") String token,
        @PathVariable Long userId,
        @RequestPart(value = "files", required = false) MultipartFile file,
        @RequestPart("inquiry") InquiryCreateRequestDTO dto) {
        InquiryResponseDTO response = inquiryService.createInquiry(
            token,
            userId,
            file,
            dto
        );

        return ResponseEntity.status(HttpStatus.OK)
            .body(ResponseFactory.getSuccessJsonResult(response));
    }

    @PutMapping("/customers/inquiries/{inquiryId}")
    @Operation(summary = "고객사 Inquiry 수정")
    public ResponseEntity<JsonResult> updateInquiryById(
        @RequestHeader("Authorization") String token,
        @PathVariable Long inquiryId,
        @RequestPart(value = "files", required = false) MultipartFile file,
        @RequestPart("inquiry") InquiryUpdateRequestDTO inquiryUpdateRequestDTO
    ) {
        InquiryResponseDTO response = inquiryService.updateInquiryById(
            token,
            inquiryId,
            file,
            inquiryUpdateRequestDTO
        );

        return ResponseEntity.status(HttpStatus.OK)
            .body(ResponseFactory.getSuccessJsonResult(response));
    }

    @DeleteMapping("/customers/inquiries/{inquiryId}")
    @Operation(summary = "고객사 Inquiry 삭제")
    public ResponseEntity<CommonResult> deleteInquiryById(
        @RequestHeader("Authorization") String token,
        @PathVariable Long inquiryId
    ) {
        inquiryService.deleteInquiryById(token, inquiryId);

        return ResponseEntity.ok(ResponseFactory.getSuccessResult());
    }

    // 담당자 Inquiry 조회
    @GetMapping("/managers/inquiries")
    @Operation(summary = "Inquiry 조회(담당자)", description = "등록된 모든 Inquiry를 조건에 맞게 조회한다.")
    public ResponseEntity<JsonResult> getInquiriesByManagerWithoutPaging(
        @RequestHeader("Authorization") String token,
        @RequestParam(defaultValue = "LATEST") String sortBy,
        @RequestParam(required = false) Progress progress,
        @RequestParam(required = false) ProductType productType,
        @RequestParam(required = false) String customerName,
        @RequestParam(required = false) InquiryType inquiryType,
        @RequestParam(required = false) String salesPerson,
        @RequestParam(required = false) Industry industry,
        @RequestParam(required = false) @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate startDate,
        @RequestParam(required = false) @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate endDate
    ) {
        List<InquirySummaryResponseDTO> inquiries = inquiryService.getInquiriesByManagerWithoutPaging(
            token,
            sortBy,
            progress,
            productType,
            customerName,
            inquiryType,
            salesPerson,
            industry,
            startDate,
            endDate
        );

        return ResponseEntity.status(HttpStatus.OK)
            .body(ResponseFactory.getSuccessJsonResult(inquiries));
    }

    // 상세 조회 페이지
    @GetMapping("/managers/inquiries/{inquiryId}")
    @Operation(summary = "담당자 Inquiry 상세 조회")
    public ResponseEntity<JsonResult> getInquiryDetailForManager(
        @RequestHeader("Authorization") String token,
        @PathVariable Long inquiryId
    ) {
        InquiryResponseDTO response = inquiryService.getInquiryDetailForManager(
            token,
            inquiryId
        );

        return ResponseEntity.status(HttpStatus.OK)
            .body(ResponseFactory.getSuccessJsonResult(response));
    }

    @PutMapping("/managers/inquiries/{inquiryId}/progress")
    @Operation(summary = "담당자 Inquiry 상태 업데이트")
    public ResponseEntity<InquiryProgressResponseDTO> updateInquiryProgress(
        @RequestHeader("Authorization") String token,
        @PathVariable Long inquiryId
    ) {
        InquiryProgressResponseDTO response = inquiryService.updateInquiryProgress(token, inquiryId);
        return ResponseEntity.ok(response);
    }
}
