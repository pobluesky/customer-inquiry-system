package com.pobluesky.feign;


import com.pobluesky.inquiry.entity.FileInfo;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.multipart.MultipartFile;

@FeignClient(name = "file")
public interface FileClient {

    @PostMapping(value = "/api/files/upload", consumes = "multipart/form-data")
    FileInfo uploadFile(@RequestPart("file") MultipartFile file);
}
