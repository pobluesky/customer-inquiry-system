package com.pobluesky.backend.domain.user.entity;

import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

@Entity
@Getter
@AllArgsConstructor
@Table(name = "managers")
public class Manager extends User {

    private String empNo;

    @Enumerated(EnumType.STRING)
    private Department department;

    @ElementCollection(fetch = FetchType.EAGER)
    @Builder.Default
    private List<String> roles = new ArrayList<>();

    @Builder
    private Manager(
        String name,
        String email,
        String password,
        String phone,
        String empNo,
        UserRole role,
        Department department,
        List<String> roles
    ) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.phone = phone;
        this.empNo = empNo;
        this.role = role;
        this.department = department;
        this.isActivated = true;
        this.roles = roles;
    }

    public Manager() {
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

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return this.roles.stream()
            .map(SimpleGrantedAuthority::new)
            .collect(Collectors.toList());
    }

    @Override
    public String getUsername() {
        return null;
    }

    @Override
    public boolean isAccountNonExpired() {
        return false;
    }

    @Override
    public boolean isAccountNonLocked() {
        return false;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return false;
    }

    @Override
    public boolean isEnabled() {
        return false;
    }
}
