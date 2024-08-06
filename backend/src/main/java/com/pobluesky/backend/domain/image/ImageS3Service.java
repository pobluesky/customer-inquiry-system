package com.pobluesky.backend.domain.image;

import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.model.CannedAccessControlList;
import com.amazonaws.services.s3.model.ObjectMetadata;
import com.amazonaws.services.s3.model.PutObjectRequest;
import com.amazonaws.services.s3.model.PutObjectResult;
import com.pobluesky.backend.global.error.ImageUploadException;
import io.github.cdimascio.dotenv.Dotenv;
import java.io.IOException;
import java.util.UUID;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
@RequiredArgsConstructor
public class ImageS3Service{
    private final AmazonS3 amazonS3;

    private final Dotenv dotenv = Dotenv.load();

    private final String bucketName = dotenv.get("S3_BUCKET_NAME");

    private String changedImageName(String originName) { //이미지 이름 중복 방지를 위해 랜덤으로 생성
        String random = UUID.randomUUID().toString();
        return random+originName;
    }

    private String uploadImageToS3(MultipartFile image) { //이미지를 S3에 업로드하고 이미지의 url을 반환
        String originName = image.getOriginalFilename(); //원본 이미지 이름
        String ext = originName.substring(originName.lastIndexOf(".")+1); //확장자
        String changedName = changedImageName(originName); //새로 생성된 이미지 이름
        ObjectMetadata metadata = new ObjectMetadata(); //메타데이터
        // 파일 확장자에 따른 Content-Type 설정
        switch (ext.toLowerCase()) {
            case "png":
                metadata.setContentType("image/png");
                break;
            case "jpg":
            case "jpeg":
                metadata.setContentType("image/jpeg");
                break;
            case "gif":
                metadata.setContentType("image/gif");
                break;
            case "xls":
                metadata.setContentType("application/vnd.ms-excel");
                break;
            case "xlsx":
                metadata.setContentType("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
                break;
            // 다른 파일 타입도 필요에 따라 추가
            default:
                metadata.setContentType("application/octet-stream"); // 기본값
                break;
        }
        try {
            // 기존의 withCannedAcl(CannedAccessControlList.PublicRead)를 제거
            amazonS3.putObject(new PutObjectRequest(bucketName, changedName, image.getInputStream(), metadata));

        } catch (IOException e) {
            throw new ImageUploadException(); // 커스텀 예외 던짐.
        }
        return amazonS3.getUrl(bucketName, changedName).toString(); //데이터베이스에 저장할 이미지가 저장된 주소

    }


    public Image uploadImage(MultipartFile image){
        String originName = image.getOriginalFilename();
        String storedImagePath = uploadImageToS3(image);

        return Image.builder() //이미지에 대한 정보를 담아서 반환
            .originName(originName)
            .storedImagePath(storedImagePath)
            .build();
    }

}
