package com.pobluesky.backend.domain.question.repository;

import com.pobluesky.backend.domain.question.dto.response.QuestionSummaryResponseDTO;
import com.pobluesky.backend.domain.question.entity.Question;

import com.pobluesky.backend.domain.question.entity.QuestionStatus;
import com.pobluesky.backend.domain.question.entity.QuestionType;
import java.time.LocalDate;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface QuestionRepository extends JpaRepository<Question, Long>, QuestionRepositoryCustom {

    @Query("SELECT q FROM Question q WHERE q.questionId = :questionId AND q.isActivated = true")
    Optional<Question> findActiveQuestionByQuestionId(Long questionId);

    @Query("SELECT q FROM Question q WHERE q.isActivated = true")
    List<Question> findActiveQuestions();

    @Query("SELECT new com.pobluesky.backend.domain.question.dto.response.QuestionSummaryResponseDTO(q.questionId, q.title, q.status, q.type, " +
        "q.contents, c.customerName, q.createdDate, a.createdDate, a.manager.userId, q.isActivated) " +
        "FROM Question q " +
        "LEFT JOIN q.answer a " +
        "LEFT JOIN q.customer c " +
        "WHERE (:status IS NULL OR q.status = :status) " +
        "AND (:type IS NULL OR q.type = :type) " +
        "AND (:title IS NULL OR :title = '' OR q.title LIKE %:title%) " +
        "AND (:questionId IS NULL OR q.questionId = :questionId) " +
        "AND (:customerName IS NULL OR :customerName = '' OR c.customerName LIKE %:customerName%) " +
        "AND (:isActivated IS NULL OR q.isActivated = :isActivated) " +
        "AND (:managerId IS NULL OR a.manager.userId = :managerId) " +
        "AND (:startDate IS NULL OR q.createdDate >= :startDate) " +
        "AND (:endDate IS NULL OR q.createdDate <= :endDate)")
    Page<QuestionSummaryResponseDTO> findQuestionsByManagerWithJpa(
        Pageable pageable,
        @Param("status") QuestionStatus status,
        @Param("type") QuestionType type,
        @Param("title") String title,
        @Param("questionId") Long questionId,
        @Param("customerName") String customerName,
        @Param("isActivated") Boolean isActivated,
        @Param("managerId") Long managerId,
        @Param("startDate") LocalDate startDate,
        @Param("endDate") LocalDate endDate
    );
}
