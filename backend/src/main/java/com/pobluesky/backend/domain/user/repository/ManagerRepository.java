package com.pobluesky.backend.domain.user.repository;

import com.pobluesky.backend.domain.user.entity.Manager;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ManagerRepository extends JpaRepository<Manager, Long> {
}
