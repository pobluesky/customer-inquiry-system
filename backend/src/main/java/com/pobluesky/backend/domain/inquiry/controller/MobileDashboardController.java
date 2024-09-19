package com.pobluesky.backend.domain.inquiry.controller;

import com.pobluesky.backend.domain.inquiry.dto.request.InquiryCreateRequestDTO;
import com.pobluesky.backend.domain.inquiry.dto.request.InquiryUpdateRequestDTO;
import com.pobluesky.backend.domain.inquiry.dto.response.InquiryAllocateResponseDTO;
import com.pobluesky.backend.domain.inquiry.dto.response.InquiryFavoriteLineItemResponseDTO;
import com.pobluesky.backend.domain.inquiry.dto.response.InquiryFavoriteResponseDTO;
import com.pobluesky.backend.domain.inquiry.dto.response.InquiryProgressResponseDTO;
import com.pobluesky.backend.domain.inquiry.dto.response.InquiryResponseDTO;
import com.pobluesky.backend.domain.inquiry.dto.response.InquirySummaryResponseDTO;
import com.pobluesky.backend.domain.inquiry.entity.Industry;
import com.pobluesky.backend.domain.inquiry.entity.InquiryType;
import com.pobluesky.backend.domain.inquiry.entity.ProductType;
import com.pobluesky.backend.domain.inquiry.entity.Progress;
import com.pobluesky.backend.domain.inquiry.service.InquiryService;
import com.pobluesky.backend.domain.chat.service.IntegratedOcrGptService;
import com.pobluesky.backend.global.util.ResponseFactory;
import com.pobluesky.backend.global.util.model.CommonResult;
import com.pobluesky.backend.global.util.model.JsonResult;
import org.springframework.beans.factory.annotation.Autowired;

import java.time.LocalDate;
import java.util.List;
import java.util.Map;

import io.swagger.v3.oas.annotations.Operation;

import lombok.RequiredArgsConstructor;

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

@RestController
@RequestMapping("/mobile/api/inquiries/dashboard")
public class MobileDashboardController {

    private final InquiryService inquiryService;

    @Autowired
    public MobileDashboardController(InquiryService inquiryService) {
        this.inquiryService = inquiryService;
    }

    @GetMapping("/average-monthly")
    public ResponseEntity<Map<String, List<Object[]>>> getAverageMonthlyInquiry(@RequestHeader("Authorization") String token) {
        Map<String, List<Object[]>> response = inquiryService.getAverageDaysPerMonth(token);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/counts-by-progress")
    public ResponseEntity<Map<String, List<Object[]>>> getInquiryCountsByProgress(@RequestHeader("Authorization") String token) {
        Map<String, List<Object[]>> response = inquiryService.getInquiryCountsByProgress(token);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/percentage-completed-uncompleted")
    public ResponseEntity<Map<String, Map<String, String>>> getInquiryPercentageCompletedUncompleted(@RequestHeader("Authorization") String token) {
        Map<String, Map<String, String>> response = inquiryService.getInquiryPercentageCompletedUncompleted(token);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/counts-by-productType")
    public ResponseEntity<Map<String, List<Object[]>>> getInquiryCountsByProductType(@RequestHeader("Authorization") String token) {
        Map<String, List<Object[]>> response = inquiryService.getInquiryCountsByProductType(token);
        return ResponseEntity.ok(response);
    }
}