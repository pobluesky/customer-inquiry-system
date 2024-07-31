package com.pobluesky.backend.domain.user.entity;

import com.pobluesky.backend.global.BaseEntity;
import jakarta.persistence.MappedSuperclass;
import lombok.Getter;

@Getter
@MappedSuperclass // 상위 추상 클래스. 속성을 하위 클래스에 전달해줌
public abstract class User extends BaseEntity {
    protected String name;
    protected String email;
    protected String password;
    protected String phone;
}
