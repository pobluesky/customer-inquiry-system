package com.pobluesky.voc.question.repository;


import com.pobluesky.voc.question.entity.Question;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface QuestionRepository extends JpaRepository<Question, Long>,
    QuestionRepositoryCustom {
}
