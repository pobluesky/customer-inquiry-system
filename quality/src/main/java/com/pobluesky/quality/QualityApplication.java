package com.pobluesky.quality;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = {
    "com.pobluesky.config.global",
    "com.pobluesky.quality"
})
@EnableFeignClients(basePackages = "com.pobluesky.quality.feign")
public class QualityApplication {

    public static void main(String[] args) {
        SpringApplication.run(QualityApplication.class, args);
    }

}
