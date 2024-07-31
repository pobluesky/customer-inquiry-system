package com.pobluesky.backend.global.util;

import com.pobluesky.backend.global.util.model.CommonResult;

public class ResponseFactory {
    // 성공 결과 처리
    public static CommonResult getSuccessResult() {
        CommonResult result = new CommonResult();
        setSuccessResult(result);

        return result;
    }

    // 실패 결과 처리
    public static CommonResult getFailResult(String code, String msg) {
        CommonResult result = new CommonResult();
        setFailResult(result);

        return result;
    }

    // API 요청 성공 시 응답 모델을 성공 데이터로 세팅
    private static void setSuccessResult(CommonResult result) {
        result.setCode("success");
        result.setMessage("성공하였습니다.");
    }

    // API 요청 실패 시 응답 모델을 실패 데이터로 세팅
    private static void setFailResult(CommonResult result) {
        result.setCode("fail");
        result.setMessage("실패하였습니다.");
    }
}
