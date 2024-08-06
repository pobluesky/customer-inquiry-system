package com.pobluesky.backend.domain.file;

import java.nio.file.Files;
import java.nio.file.Paths;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;

@Component
public class S3UploadTestRunner implements CommandLineRunner {

    @Autowired
    private FileS3Service fileS3Service;

    @Override
    public void run(String... args) throws Exception {
        // 로컬 파일 경로
        String filePath = "C:\\Users\\BIT1\\Desktop\\test.xlsx";
        File file = new File(filePath);
        byte[] content = Files.readAllBytes(Paths.get(filePath));

        // 파일 확장자에 맞는 MIME 타입 설정
        String contentType = Files.probeContentType(Paths.get(filePath));

        // 파일을 읽어와 MultipartFile로 변환
        try (FileInputStream input = new FileInputStream(file)) {
            MultipartFile multipartFile = new SimpleMultipartFile(
                "file",
                file.getName(),
                contentType,
                content
            );

            // S3에 업로드 및 결과 출력
            FileInfo uploadedFile = fileS3Service.uploadFile(multipartFile);
            System.out.println("Original Name: " + uploadedFile.getOriginName());
            System.out.println("Stored File Path: " + uploadedFile.getStoredFilePath());
        } catch (IOException e) {
            e.printStackTrace();
            System.out.println("Failed to upload file to S3");
        }
    }
}