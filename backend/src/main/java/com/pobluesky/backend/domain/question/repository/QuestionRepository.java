package com.pobluesky.backend.domain.question.repository;

import com.pobluesky.backend.domain.question.entity.Question;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface QuestionRepository extends JpaRepository<Question, Long>, QuestionRepositoryCustom {

    List<Question> findAllByCustomer_UserId(Long userId);

    List<Question> findByCustomer_UserId(Long userId);
}
