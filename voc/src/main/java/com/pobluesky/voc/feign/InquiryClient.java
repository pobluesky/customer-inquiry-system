package com.pobluesky.voc.feign;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient(name = "inquiry")
public interface InquiryClient {

    @GetMapping("/api/inquiries/exists/{inquiryId}")
    Boolean checkInquiryExists(@PathVariable("inquiryId") Long inquiryId);

    @GetMapping("/api/inquiries/{id}")
    Inquiry getInquiryById(Long inquiryId);
}
