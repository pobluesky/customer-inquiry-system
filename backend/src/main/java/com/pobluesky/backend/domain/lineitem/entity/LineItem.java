package com.pobluesky.backend.domain.lineitem.entity;

import com.pobluesky.backend.global.BaseEntity;

import jakarta.persistence.MappedSuperclass;
import lombok.Getter;

@MappedSuperclass
@Getter
public abstract class LineItem extends BaseEntity {

    protected Boolean isActivated;
    public void deleteLineItem(){
        this.isActivated = false;
    }
}
