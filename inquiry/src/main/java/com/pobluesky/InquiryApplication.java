package com.pobluesky;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = {
    "com.pobluesky.config.global",
    "com.pobluesky.inquiry",
    "com.pobluesky.lineitem",
    "com.pobluesky.offersheet"
})
@EnableFeignClients(basePackages = "com.pobluesky.feign")
public class InquiryApplication {

    public static void main(String[] args) {
        SpringApplication.run(InquiryApplication.class, args);
    }

}
