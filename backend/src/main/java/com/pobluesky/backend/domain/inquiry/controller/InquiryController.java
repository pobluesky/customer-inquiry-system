package com.pobluesky.backend.domain.inquiry.controller;

import com.pobluesky.backend.domain.inquiry.dto.request.InquiryCreateRequestDTO;
import com.pobluesky.backend.domain.inquiry.dto.request.InquiryUpdateRequestDTO;
import com.pobluesky.backend.domain.inquiry.dto.response.InquiryResponseDTO;
import com.pobluesky.backend.domain.inquiry.entity.Progress;
import com.pobluesky.backend.domain.inquiry.service.InquiryService;
import com.pobluesky.backend.global.util.ResponseFactory;
import com.pobluesky.backend.global.util.model.CommonResult;
import com.pobluesky.backend.global.util.model.JsonResult;
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
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api")
public class InquiryController {
    private final InquiryService inquiryService;

    // 조회 페이지
    @GetMapping("/customers/inquiries/{customerId}")
    public ResponseEntity<JsonResult> getInquiriesByCustomerId(@PathVariable Long customerId) {
        List<InquiryResponseDTO> response  = inquiryService.getInquiriesByCustomerId(customerId);

        return ResponseEntity.status(HttpStatus.OK)
            .body(ResponseFactory.getSuccessJsonResult(response));
    }

    // 상세 조회 페이지
    @GetMapping("/customers/inquiries/{customerId}/{inquiryId}")
    public ResponseEntity<JsonResult> getInquiryDetail(
        @PathVariable Long customerId,
        @PathVariable Long inquiryId) {
        InquiryResponseDTO response = inquiryService.getInquiryDetail(customerId,inquiryId);

        return ResponseEntity.status(HttpStatus.OK)
            .body(ResponseFactory.getSuccessJsonResult(response));
    }

    //progress별 조회
    @GetMapping("/inquiries/progress/{code}")
    public ResponseEntity<JsonResult> getInquiryByProgress(@PathVariable Integer code) {
        Progress progress = Progress.fromCode(code);
        List<InquiryResponseDTO> response = inquiryService.getInquiriesByProgress(progress);

        return ResponseEntity.status(HttpStatus.OK)
            .body(ResponseFactory.getSuccessJsonResult(response));
    }

    @PostMapping("/customers/inquiries/{customerId}")
    public ResponseEntity<JsonResult> createInquiry(
        @PathVariable Long customerId,
        @RequestBody InquiryCreateRequestDTO dto) {
        InquiryResponseDTO response = inquiryService.createInquiry(customerId,dto);

        return ResponseEntity.status(HttpStatus.OK)
            .body(ResponseFactory.getSuccessJsonResult(response));
    }

    @PutMapping("/customers/inquiries/{inquiryId}")
    public ResponseEntity<JsonResult> updateInquiryById(
        @PathVariable Long inquiryId,
        @RequestBody InquiryUpdateRequestDTO inquiryUpdateRequestDTO
    ) {
        InquiryResponseDTO response = inquiryService.updateInquiryById(inquiryId, inquiryUpdateRequestDTO);

        return ResponseEntity.status(HttpStatus.OK)
            .body(ResponseFactory.getSuccessJsonResult(response));
    }

    @DeleteMapping("/customers/inquiries/{inquiryId}")
    public ResponseEntity<CommonResult> deleteInquiryById(@PathVariable Long inquiryId) {
        inquiryService.deleteInquiryById(inquiryId);

        return ResponseEntity.ok(ResponseFactory.getSuccessResult());
    }


    @GetMapping("/managers/inquiries")
    public ResponseEntity<JsonResult> getInquiriesForManager() {
        List<InquiryResponseDTO> response = inquiryService.getInquiries();

        return ResponseEntity.status((HttpStatus.OK))
            .body(ResponseFactory.getSuccessJsonResult(response));
    }




}
