package com.pobluesky.backend.domain.question.repository;

import com.pobluesky.backend.domain.question.entity.Question;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface QuestionRepository extends JpaRepository<Question, Long>, QuestionRepositoryCustom {

    @Query("SELECT q FROM Question q WHERE q.questionId = :questionId AND q.isActivated = true")
    Optional<Question> findActiveQuestionByQuestionId(Long questionId);

    @Query("SELECT q FROM Question q WHERE q.isActivated = true")
    List<Question> findActiveQuestions();
}
