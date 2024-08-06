package com.pobluesky.backend.domain.image;


import lombok.Builder;
import lombok.Getter;


@Getter
public class Image {
    private String originName;
    private String storedImagePath;

    @Builder
    private Image(
        String originName,
        String storedImagePath

    ) {

        this.originName = originName;
        this.storedImagePath = storedImagePath;
    }
}
