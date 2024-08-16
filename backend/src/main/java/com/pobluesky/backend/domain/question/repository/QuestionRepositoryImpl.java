package com.pobluesky.backend.domain.question.repository;

import static com.pobluesky.backend.domain.question.entity.QQuestion.question;

import com.pobluesky.backend.domain.question.dto.response.QuestionSummaryDTO;
import com.pobluesky.backend.domain.question.dto.response.QuestionSummaryResponseDTO;
import com.pobluesky.backend.domain.question.entity.QuestionStatus;
import com.pobluesky.backend.domain.question.entity.QuestionType;
import com.querydsl.core.types.Projections;
import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.core.types.dsl.DateTemplate;
import com.querydsl.core.types.dsl.Expressions;
import com.querydsl.jpa.impl.JPAQueryFactory;
import java.time.LocalDate;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;

@RequiredArgsConstructor
public class QuestionRepositoryImpl implements QuestionRepositoryCustom {

    private final JPAQueryFactory queryFactory;

    @Override
    public QuestionSummaryResponseDTO findQuestionsByCustomer(
        Long userId, Pageable pageable, QuestionStatus status,
        LocalDate startDate, LocalDate endDate) {

        List<QuestionSummaryDTO> inqQuestions = getQuestionsByType(userId, QuestionType.INQ, pageable, status, startDate, endDate);
        List<QuestionSummaryDTO> siteQuestions = getQuestionsByType(userId, QuestionType.SITE, pageable, status, startDate, endDate);
        List<QuestionSummaryDTO> etcQuestions = getQuestionsByType(userId, QuestionType.ETC, pageable, status, startDate, endDate);

        long totalCount = queryFactory
            .selectFrom(question)
            .where(
                question.customer.userId.eq(userId),
                statusEq(status),
                createdDateBetween(startDate, endDate)
            )
            .fetchCount();

//        JPAQuery<Question> countQuery =
//            getCountQueryForCustomer(userId, status, startDate, endDate);

        return new QuestionSummaryResponseDTO(inqQuestions, siteQuestions, etcQuestions, totalCount);
    }

//    private JPAQuery<Question> getCountQueryForCustomer(
//        Long userId, QuestionStatus status, LocalDate startDate, LocalDate endDate) {
//        return queryFactory
//            .selectFrom(question)
//            .where(
//                question.customer.userId.eq(userId),
//                statusEq(status),
//                createdDateBetween(startDate, endDate)
//            );
//    }


    private List<QuestionSummaryDTO> getQuestionsByType(
        Long userId, QuestionType type, Pageable pageable,
        QuestionStatus status, LocalDate startDate, LocalDate endDate) {

        return queryFactory
            .select(Projections.constructor(QuestionSummaryDTO.class,
                question.questionId,
                question.title,
                question.status,
                question.type,
                question.createdDate.as("questionCreatedAt"),
                question.answer.createdDate.as("answerCreatedAt")
            ))
            .from(question)
            .leftJoin(question.answer)
            .where(
                question.customer.userId.eq(userId),
                question.type.eq(type),
                statusEq(status),
                createdDateBetween(startDate, endDate)
            )
            .orderBy(question.createdDate.desc())
            .offset(pageable.getOffset())
            .limit(pageable.getPageSize())
            .fetch();
    }

    private BooleanExpression statusEq(QuestionStatus status) {
        return status != null ? question.status.eq(status) : null;
    }

    private BooleanExpression createdDateBetween(LocalDate startDate, LocalDate endDate) {
        if (startDate == null && endDate == null) {
            return null;
        }

        DateTemplate<LocalDate> dateTemplate = Expressions.dateTemplate(
            LocalDate.class,
            "CAST({0} AS DATE)",
            question.createdDate
        );

        if (startDate != null && endDate != null) {
            return dateTemplate.between(startDate, endDate);
        } else if (startDate != null) {
            return dateTemplate.goe(startDate);
        } else {
            return dateTemplate.loe(endDate);
        }
    }
}
