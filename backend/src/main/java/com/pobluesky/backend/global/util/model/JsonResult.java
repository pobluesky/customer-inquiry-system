package com.pobluesky.backend.global.util.model;

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

    public static <T> JsonResult<T> success(T data) {
        return new JsonResult<>("success", data, null);
    }

    public static <T> JsonResult<T> fail(String message) {
        return new JsonResult<>("fail", null, message);
    }
}
