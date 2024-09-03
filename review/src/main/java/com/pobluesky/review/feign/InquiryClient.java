package com.pobluesky.review.feign;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestParam;

@FeignClient(name = "inquiry")
public interface InquiryClient {

    @GetMapping("/api/inquiries/exists/{inquiryId}")
    Boolean checkInquiryExists(@PathVariable("inquiryId") Long inquiryId);

    @GetMapping("/api/inquiries/managers/inquiries/{inquiryId}")
    Inquiry getInquiryById( @PathVariable("inquiryId") Long inquiryId);

}
