package com.pobluesky.voc.feign;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient(name = "inquiry")
public interface InquiryClient {

    @GetMapping("/inquiries/{id}")
    Inquiry getInquiryById(@PathVariable("id") Long inquiryId);
}
