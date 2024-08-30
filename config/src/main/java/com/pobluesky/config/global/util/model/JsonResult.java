package com.pobluesky.user.global.util.model;

import lombok.Getter;

@Getter
public class JsonResult<T> {
    private final String result;
    private final T data;
    private final String message;

    private JsonResult(String result, T data, String message) {
        this.result = result;
        this.data = data;
        this.message = message;
    }

    public static <T> JsonResult<T> of(String result, T data, String message) {
        return new JsonResult<>(result, data, message);
    }
}