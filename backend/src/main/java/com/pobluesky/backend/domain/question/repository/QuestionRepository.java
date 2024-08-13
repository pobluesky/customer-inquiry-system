package com.pobluesky.backend.domain.question.repository;

import com.pobluesky.backend.domain.question.entity.Question;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface QuestionRepository extends JpaRepository<Question, Long> {

    List<Question> findAllByCustomer_CustomerId(Long customerId);

    List<Question> findByCustomer_CustomerId(Long customerId);
}
