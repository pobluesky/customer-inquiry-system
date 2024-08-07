package com.pobluesky.backend.domain.file;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class FileUploadController {

    @Autowired
    private FileS3Service fileS3Service;

    @PostMapping("/uploadFile")
    public FileInfo uploadFile(@RequestParam("filePath") String filePath) {

        return fileS3Service.uploadFileFromPath(filePath);
    }
}
