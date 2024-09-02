package com.pobluesky.voc;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = {
    "com.pobluesky.config.global",
    "com.pobluesky.voc",
})
@EnableFeignClients(basePackages = "com.pobluesky.voc.feign")
public class VocApplication {

    public static void main(String[] args) {
        SpringApplication.run(VocApplication.class, args);
    }

}
