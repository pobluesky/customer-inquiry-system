package com.pobluesky.backend.global.error;

public class ImageUploadException extends RuntimeException {
    public ImageUploadException() {
        super("Image Upload Error");
    }
}
