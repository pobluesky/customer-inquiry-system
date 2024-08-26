package com.pobluesky.backend.domain.inquiry.entity;

import com.pobluesky.backend.global.error.CommonException;
import com.pobluesky.backend.global.error.ErrorCode;
import java.util.Objects;
import lombok.Getter;

@Getter
public enum Progress {

    SUBMIT(1, "Submit"),
    RECEIPT(2, "Receipt"),
    FIRST_REVIEW_COMPLETED(3, "First Review completed"),
    QUALITY_REVIEW_REQUEST(4, "Quality Review request"),
    QUALITY_REVIEW_RESPONSE(4, "Quality Review response"),
    QUALITY_REVIEW_COMPLETED(4, "Quality Review completed"),
    FINAL_REVIEW_COMPLETED(5, "Final Review completed");

    private final Integer code;
    private final String value;

    Progress(Integer code ,String value) {
        this.code = code;
        this.value = value;
    }

    public static Progress fromCode(Integer code) {
        for (Progress progress : Progress.values()) {
            if (Objects.equals(progress.code, code)) {
                return progress;
            }
        }
        throw new CommonException(ErrorCode.PROGRESS_NOT_FOUND);
    }
}
