package com.pobluesky.backend.domain.file.controller;

import com.pobluesky.backend.domain.file.entity.FileInfo;
import com.pobluesky.backend.domain.file.service.FileService;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class FileUploadController {

    @Autowired
    private FileService fileService;

    @PostMapping("/uploadfile")
    public FileInfo uploadFile(@RequestBody Map<String, String> requestBody) {
        String filePath = requestBody.get("filePath");
        return fileService.uploadFileFromPath(filePath);
    }
}
