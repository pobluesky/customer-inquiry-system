package com.pobluesky.backend.global.util;

import com.pobluesky.backend.global.util.model.CommonResult;

public class ResponseFactory {
    // 성공 결과만 처리
    public static CommonResult getSuccessResult() {
        CommonResult result = new CommonResult();
        setSuccessResult(result);

        return result;
    }

    // 실패 결과만 처리
    public static CommonResult getFailResult(String code, String msg) {
        CommonResult result = new CommonResult();
        setFailResult(
            result,
            code,
            msg
        );

        return result;
    }

    // API 요청 성공 시 응답 모델을 성공 데이터로 세팅
    private static void setSuccessResult(CommonResult result) {
        result.setCode("SUCCESS");
        result.setMessage("성공하였습니다.");
    }

    // API 요청 실패 시 응답 모델을 실패 데이터로 세팅
    private static void setFailResult(CommonResult result, String code, String msg) {
        result.setCode(code);
        result.setMessage(msg);
    }
}
