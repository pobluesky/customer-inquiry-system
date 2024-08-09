package com.pobluesky.backend.domain.user.entity;

import com.pobluesky.backend.global.BaseEntity;

import jakarta.persistence.MappedSuperclass;

import lombok.Getter;

import org.springframework.security.core.userdetails.UserDetails;

@Getter
@MappedSuperclass
public abstract class User extends BaseEntity implements UserDetails {

    protected String name;

    protected String email;

    protected String password;

    protected String phone;

    protected Boolean isActivated;

    public void deleteUser(){
        this.isActivated = false;
    }
}
