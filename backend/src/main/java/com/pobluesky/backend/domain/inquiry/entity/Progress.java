package com.pobluesky.backend.domain.inquiry.entity;

import com.pobluesky.backend.global.error.CommonException;
import com.pobluesky.backend.global.error.ErrorCode;
import java.util.Objects;
import lombok.Getter;

@Getter
public enum Progress {

    RECEIPT(1, "Receipt"),
    FIRST_REVIEW(2, "First Review"),
    QUALITY_REVIEW(3, "Quality Review"),
    FINAL_REVIEW(4, "Final Review");

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
