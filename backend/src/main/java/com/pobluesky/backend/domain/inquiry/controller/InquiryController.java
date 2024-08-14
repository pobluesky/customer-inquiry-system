package com.pobluesky.backend.domain.inquiry.controller;

import com.pobluesky.backend.domain.inquiry.dto.request.InquiryCreateRequestDTO;
import com.pobluesky.backend.domain.inquiry.dto.request.InquiryUpdateRequestDTO;
import com.pobluesky.backend.domain.inquiry.dto.response.InquiryResponseDTO;
import com.pobluesky.backend.domain.inquiry.dto.response.InquirySummaryResponseDTO;
import com.pobluesky.backend.domain.inquiry.entity.InquiryType;
import com.pobluesky.backend.domain.inquiry.entity.ProductType;
import com.pobluesky.backend.domain.inquiry.entity.Progress;
import com.pobluesky.backend.domain.inquiry.service.InquiryService;
import com.pobluesky.backend.global.util.ResponseFactory;
import com.pobluesky.backend.global.util.model.CommonResult;
import com.pobluesky.backend.global.util.model.JsonResult;
import java.time.LocalDate;
import java.util.List;

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
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api")
public class InquiryController {
    private final InquiryService inquiryService;

    // 조회 페이지
    @GetMapping("/customers/inquiries/{userId}")
    @Operation(summary = "고객사 Inquiry 전체 조회")
    public ResponseEntity<JsonResult> getInquiriesByuserId(
        @RequestHeader("Authorization") String token,
        @PathVariable Long userId
    ) {
        List<InquiryResponseDTO> response  = inquiryService.getInquiriesByuserId(
            token,
            userId
        );

        return ResponseEntity.status(HttpStatus.OK)
            .body(ResponseFactory.getSuccessJsonResult(response));
    }

    // 페이징 & 정렬
    @GetMapping("/customers/{userId}/inquiries")
    public ResponseEntity<JsonResult> getInquiries(
        @PathVariable Long userId,
        @RequestParam(defaultValue = "0") int page,
        @RequestParam(defaultValue = "4") int size,
        @RequestParam(defaultValue = "latest") String sortBy,
        @RequestParam(required = false) Progress progress,
        @RequestParam(required = false) ProductType productType,
        @RequestParam(required = false) String customerName,
        @RequestParam(required = false) InquiryType inquiryType,
        @RequestParam(required = false) String projectName,
        @RequestParam(required = false) @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate startDate,
        @RequestParam(required = false) @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate endDate) {

        Page<InquirySummaryResponseDTO> inquiries = inquiryService.getInquiries(
            userId, page, size, sortBy,
            progress, productType, customerName, inquiryType,
            projectName, startDate, endDate
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
        @PathVariable Long inquiryId) {
        InquiryResponseDTO response = inquiryService.getInquiryDetail(
            token,
            userId,
            inquiryId
        );

        return ResponseEntity.status(HttpStatus.OK)
            .body(ResponseFactory.getSuccessJsonResult(response));
    }

    //progress별 조회
    @GetMapping("/inquiries/progress/{code}")
    @Operation(summary = "Progress별 Inquiry 조회")
    public ResponseEntity<JsonResult> getInquiryByProgress(
        @RequestHeader("Authorization") String token,
        @PathVariable Integer code
    ) {
        Progress progress = Progress.fromCode(code);
        List<InquiryResponseDTO> response = inquiryService.getInquiriesByProgress(token, progress);

        return ResponseEntity.status(HttpStatus.OK)
            .body(ResponseFactory.getSuccessJsonResult(response));
    }

    @PostMapping("/customers/inquiries/{userId}")
    @Operation(summary = "고객사 Inquiry 생성")
    public ResponseEntity<JsonResult> createInquiry(
        @RequestHeader("Authorization") String token,
        @PathVariable Long userId,
        @RequestBody InquiryCreateRequestDTO dto) {
        InquiryResponseDTO response = inquiryService.createInquiry(
            token,
            userId,
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
        @RequestBody InquiryUpdateRequestDTO inquiryUpdateRequestDTO
    ) {
        InquiryResponseDTO response = inquiryService.updateInquiryById(
            token,
            inquiryId,
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

    @GetMapping("/managers/inquiries")
    @Operation(summary = "담당자 Inquiry 조회")
    public ResponseEntity<JsonResult> getInquiriesForManager(
        @RequestHeader("Authorization") String token
    ) {
        List<InquiryResponseDTO> response = inquiryService.getInquiries(token);

        return ResponseEntity.status((HttpStatus.OK))
            .body(ResponseFactory.getSuccessJsonResult(response));
    }
}
