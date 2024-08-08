package com.pobluesky.backend.domain.question.repository;

import com.pobluesky.backend.domain.question.entity.Question;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface QuestionRepository extends JpaRepository<Question, Long> {
//    Optional<Question> findByQuestionId(Long questionId);
    List<Question> findByCustomer_CustomerId(Long customerId);
}
