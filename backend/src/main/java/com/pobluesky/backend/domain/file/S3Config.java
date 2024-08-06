package com.pobluesky.backend.domain.file;

import com.amazonaws.auth.AWSCredentials;
import com.amazonaws.auth.AWSStaticCredentialsProvider;
import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3ClientBuilder;
import io.github.cdimascio.dotenv.Dotenv;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class S3Config {
    private final Dotenv dotenv = Dotenv.load();

    @Bean
    public AmazonS3 s3Builder() {
        String accessKey = dotenv.get("AWS_ACCESS_KEY");
        String secretKey = dotenv.get("AWS_SECRET_KEY");
        String region = dotenv.get("AWS_REGION");
        System.out.println("Access Key: " + dotenv.get("AWS_ACCESS_KEY"));
        System.out.println("Secret Key: " + dotenv.get("AWS_SECRET_KEY"));
        System.out.println("Region: " + dotenv.get("AWS_REGION"));
        System.out.println("Bucket Name: " + dotenv.get("S3_BUCKET_NAME"));

        AWSCredentials credentials = new BasicAWSCredentials(accessKey, secretKey);

        return AmazonS3ClientBuilder.standard()
            .withCredentials(new AWSStaticCredentialsProvider(credentials))
            .withRegion(region)
            .build();
    }
}
