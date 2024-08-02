package com.pobluesky.backend.domain.quality.repository;

import com.pobluesky.backend.domain.quality.entity.Quality;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface QualityRepository extends JpaRepository<Quality, Long> {
}
