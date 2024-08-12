package com.pobluesky.backend.domain.answer.repository;

import com.pobluesky.backend.domain.answer.entity.Answer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface AnswerRepository extends JpaRepository<Answer, Long> {
    Optional<Answer> findByQuestion_QuestionId(Long questionId);
    List<Answer> findAllByCustomer_CustomerId(Long customerId);
}
