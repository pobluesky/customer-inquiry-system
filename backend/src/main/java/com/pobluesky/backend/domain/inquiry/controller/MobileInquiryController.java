package com.pobluesky.backend.domain.inquiry.controller;

import com.pobluesky.backend.domain.inquiry.dto.response.MobileInquiryResponseDTO;
import com.pobluesky.backend.domain.inquiry.dto.response.MobileInquirySummaryResponseDTO;
import com.pobluesky.backend.domain.inquiry.service.InquiryService;

import lombok.RequiredArgsConstructor;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/mobile/api/inquiries")
public class MobileInquiryController {

    private final InquiryService inquiryService;

    @GetMapping
    public List<MobileInquirySummaryResponseDTO> getAllInquiries() {

        return inquiryService.getAllInquiries();
    }

    @GetMapping("/{inquiryId}")
    public MobileInquiryResponseDTO getInquiryById(@PathVariable Long inquiryId) {

        return inquiryService.getInquiryById(inquiryId);
    }
}