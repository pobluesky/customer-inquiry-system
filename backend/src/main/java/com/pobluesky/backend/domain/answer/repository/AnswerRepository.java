package com.pobluesky.backend.domain.answer.repository;

import com.pobluesky.backend.domain.answer.entity.Answer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AnswerRepository extends JpaRepository<Answer, Long> {

    Answer findByQuestion_QuestionId(Long questionId);

    List<Answer> findAllByCustomer_UserId(Long userId);
}
