package com.pobluesky.backend.domain.user.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "managers")
public class Manager extends User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long managerId;

    private String empNo;

    @Enumerated(EnumType.STRING)
    private ManagerRole role;

    @Enumerated(EnumType.STRING)
    private Department department;

    @Builder
    private Manager(
        String name,
        String email,
        String password,
        String phone,
        String empNo,
        ManagerRole role,
        Department department
    ) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.phone = phone;
        this.empNo = empNo;
        this.role = role;
        this.department = department;
        this.isActivated = true;
    }

    public void updateManager(
        String name,
        String email,
        String password,
        String phone
    ) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.phone = phone;
    }
}
