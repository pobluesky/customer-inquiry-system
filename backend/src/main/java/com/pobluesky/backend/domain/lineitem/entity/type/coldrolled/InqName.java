package com.pobluesky.backend.domain.lineitem.entity.type.coldrolled;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum InqName {
    JS_SI123("JS-SI123"),
    JS_SI456("JS-SI456"),
    JS_SI789("JS-SI789");

    private String name;
}
