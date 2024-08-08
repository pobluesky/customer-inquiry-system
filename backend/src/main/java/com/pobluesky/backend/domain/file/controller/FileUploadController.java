package com.pobluesky.backend.domain.file.controller;

import com.pobluesky.backend.domain.file.entity.FileInfo;
import com.pobluesky.backend.domain.file.service.FileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController("/api")
public class FileUploadController {

    @Autowired
    private FileService fileService;

    @PostMapping("/uploadFile")
    public FileInfo uploadFile(@RequestParam("filePath") String filePath) {

        return fileService.uploadFileFromPath(filePath);
    }
}
