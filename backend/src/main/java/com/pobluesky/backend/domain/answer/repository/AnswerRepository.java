package com.pobluesky.backend.domain.answer.repository;

import com.pobluesky.backend.domain.answer.entity.Answer;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface AnswerRepository extends JpaRepository<Answer, Long> {

    List<Answer> findAllByCustomer_UserId(Long userId);

    Optional<Answer> findByQuestion_QuestionId(Long questionId);

    @Query(value = "SELECT EXTRACT(MONTH FROM a.created_date) AS month, " +
        "ROUND(AVG(EXTRACT(DAY FROM (a.modified_date - a.created_date))), 1) AS avgDays " +
        "FROM Answer a " +
        "GROUP BY EXTRACT(MONTH FROM a.created_date) " +
        "ORDER BY EXTRACT(MONTH FROM a.created_date)", nativeQuery = true)
    List<Object[]> findAverageCountPerMonth();

    @Query(value = "WITH months AS (" +
        "    SELECT generate_series(1, 12) AS month" +
        ")" +
        "SELECT m.month, " +
        "       COALESCE(ROUND(AVG(EXTRACT(DAY FROM (a.modified_date - a.created_date))), 1), 0) AS avgDays " +
        "FROM months m " +
        "LEFT JOIN Answer a " +
        "ON EXTRACT(MONTH FROM a.created_date) = m.month " +
        "AND a.manager_id = :managerId " +
        "GROUP BY m.month " +
        "ORDER BY m.month",
        nativeQuery = true)
    List<Object[]> findAverageCountPerMonthBySalesManager(@Param("managerId") Long managerId);

    @Query(value = "WITH months AS (" +
        "    SELECT generate_series(1, 12) AS month" +
        ")" +
        "SELECT m.month, " +
        "       COALESCE(ROUND(AVG(EXTRACT(DAY FROM (a.modified_date - a.created_date))), 1), 0) AS avgDays " +
        "FROM months m " +
        "LEFT JOIN Answer a " +
        "ON EXTRACT(MONTH FROM a.created_date) = m.month " +
        "AND a.manager_id = :managerId " +
        "GROUP BY m.month " +
        "ORDER BY m.month",
        nativeQuery = true)
    List<Object[]> findAverageCountPerMonthByQualityManager(@Param("managerId") Long managerId);
}
