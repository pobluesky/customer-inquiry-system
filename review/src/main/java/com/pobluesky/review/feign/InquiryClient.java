package com.pobluesky.review.feign;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;

@FeignClient(name = "inquiry")
public interface InquiryClient {

    @GetMapping("/inquiries/{id}")
    Inquiry getInquiryById(@PathVariable("id") Long inquiryId);

    @GetMapping("/api/sign/token")
    Long parseToken(@RequestParam("token") String token);
}
