package com.pobluesky.backend.domain.voc.repository;

import com.pobluesky.backend.domain.voc.entity.Answer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AnswerRepository extends JpaRepository<Answer, Long> {
}
