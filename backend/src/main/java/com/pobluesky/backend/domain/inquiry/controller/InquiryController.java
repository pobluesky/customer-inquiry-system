package com.pobluesky.backend.domain.inquiry.controller;

import com.pobluesky.backend.domain.inquiry.dto.request.InquiryCreateRequestDTO;
import com.pobluesky.backend.domain.inquiry.dto.request.InquiryUpdateRequestDTO;
import com.pobluesky.backend.domain.inquiry.dto.response.InquiryResponseDTO;
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
@RequestMapping("/api/inquiries")
public class InquiryController {
    private final InquiryService inquiryService;

    @GetMapping
    public ResponseEntity<JsonResult> getInquiries() {
        List<InquiryResponseDTO> allInquiries = inquiryService.getAllInquiries();
        return ResponseEntity.status(HttpStatus.OK)
            .body(JsonResult.success(allInquiries));
    }

    @PostMapping
    public ResponseEntity<JsonResult> createInquiry(@RequestBody InquiryCreateRequestDTO dto) {
        InquiryResponseDTO response = inquiryService.createInquiry(dto);
        return ResponseEntity.status(HttpStatus.OK)
            .body(JsonResult.success(response));
    }

    @PutMapping("/{inquiryNo}")
    public ResponseEntity<JsonResult> updateInquiryByNo(
        @PathVariable Long inquiryNo,
        @RequestBody InquiryUpdateRequestDTO inquiryUpdateRequestDTO
    ) {
        InquiryResponseDTO response = inquiryService.updateInquiryByNo(inquiryNo, inquiryUpdateRequestDTO);
        return ResponseEntity.status(HttpStatus.OK)
            .body(JsonResult.success(response));
    }

    @DeleteMapping("/{inquiryNo}")
    public ResponseEntity<CommonResult> deleteInquiryByNo(@PathVariable Long inquiryNo) {
        inquiryService.deleteInquiryByNo(inquiryNo);
        return ResponseEntity.ok(ResponseFactory.getSuccessResult());
    }




}
