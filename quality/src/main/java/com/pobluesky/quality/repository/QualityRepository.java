package com.pobluesky.quality.repository;


import com.pobluesky.quality.entity.Quality;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface QualityRepository extends JpaRepository<Quality, Long> {

    Optional<Quality> findByInquiryId(Long inquiryId);

    boolean existsByInquiryId(Long inquiryId);
}
