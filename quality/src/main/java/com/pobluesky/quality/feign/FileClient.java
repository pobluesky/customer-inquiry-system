package com.pobluesky.quality.feign;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.multipart.MultipartFile;

@FeignClient(name = "file")
public interface FileClient {

    @GetMapping("/files/info")
    FileInfo getFileInfo(@RequestParam("fileId") Long fileId);

    @PostMapping(value = "/api/files/upload", consumes = "multipart/form-data")
    FileInfo uploadFile(@RequestPart("file") MultipartFile file);
}
