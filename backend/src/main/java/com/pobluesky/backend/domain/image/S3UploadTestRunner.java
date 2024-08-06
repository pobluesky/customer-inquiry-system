package com.pobluesky.backend.domain.image;

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
    private ImageS3Service imageS3Service;

    @Override
    public void run(String... args) throws Exception {
        // 로컬 파일 경로
        String filePath = "C:\\Users\\BIT1\\Desktop\\test.xlsx";
        File file = new File(filePath);
        byte[] content = Files.readAllBytes(Paths.get(filePath));

        // 파일을 읽어와 MultipartFile로 변환
        try (FileInputStream input = new FileInputStream(file)) {
            MultipartFile multipartFile = new SimpleMultipartFile(
                file.getName(),
                file.getName(),
                "image/png",
                content
            );

            // S3에 업로드 및 결과 출력
            Image uploadedImage = imageS3Service.uploadImage(multipartFile);
            System.out.println("Original Name: " + uploadedImage.getOriginName());
            System.out.println("Stored Image Path: " + uploadedImage.getStoredImagePath());
        } catch (IOException e) {
            e.printStackTrace();
            System.out.println("Failed to upload image to S3");
        }
    }
}