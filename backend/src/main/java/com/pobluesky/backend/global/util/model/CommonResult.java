package com.pobluesky.backend.global.util.model;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CommonResult { // 단순 성공, 실패 반환
    private String code;

    private String message;
}
