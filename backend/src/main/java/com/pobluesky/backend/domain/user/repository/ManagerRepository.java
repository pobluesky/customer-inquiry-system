package com.pobluesky.backend.domain.user.repository;

import com.pobluesky.backend.domain.user.entity.Manager;

import com.pobluesky.backend.domain.user.entity.UserRole;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ManagerRepository extends JpaRepository<Manager, Long> {

    Optional<Manager> findByEmail(String email);

    boolean existsByEmail(String email);

    List<Manager> findByRole(UserRole role);
}
