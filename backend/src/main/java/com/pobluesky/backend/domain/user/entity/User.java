package com.pobluesky.backend.domain.user.entity;

import com.pobluesky.backend.global.BaseEntity;

import jakarta.persistence.MappedSuperclass;

import lombok.Getter;

@Getter
@MappedSuperclass
public abstract class User extends BaseEntity {

    protected String name;

    protected String email;

    protected String password;

    protected String phone;

    protected Boolean isActivated;

    public void deleteUser(){
        this.isActivated = false;
    }
}
