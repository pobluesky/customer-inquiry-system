package com.pobluesky.inquiry.entity;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class FileInfo {

    private String originName;
    private String storedFilePath;

    public FileInfo(String originName, String storedFilePath) {
        this.originName = originName;
        this.storedFilePath = storedFilePath;
    }
}
