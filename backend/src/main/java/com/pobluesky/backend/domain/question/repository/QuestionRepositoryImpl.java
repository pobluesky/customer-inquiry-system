package com.pobluesky.backend.domain.question.repository;

import static com.pobluesky.backend.domain.answer.entity.QAnswer.answer;
import static com.pobluesky.backend.domain.question.entity.QQuestion.question;
import static com.pobluesky.backend.domain.user.entity.QCustomer.customer;

import com.pobluesky.backend.domain.question.dto.response.QuestionSummaryResponseDTO;
import com.pobluesky.backend.domain.question.entity.Question;
import com.pobluesky.backend.domain.question.entity.QuestionStatus;
import com.pobluesky.backend.domain.question.entity.QuestionType;

import com.pobluesky.backend.global.error.CommonException;
import com.pobluesky.backend.global.error.ErrorCode;
import com.querydsl.core.types.OrderSpecifier;
import com.querydsl.core.types.Projections;
import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.core.types.dsl.DateTemplate;
import com.querydsl.core.types.dsl.Expressions;
import com.querydsl.jpa.impl.JPAQuery;
import com.querydsl.jpa.impl.JPAQueryFactory;

import java.time.LocalDate;

import java.util.List;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.support.PageableExecutionUtils;
import org.springframework.util.StringUtils;


@RequiredArgsConstructor
public class QuestionRepositoryImpl implements QuestionRepositoryCustom {

    private final JPAQueryFactory queryFactory;

    @Override
    public Page<QuestionSummaryResponseDTO> findQuestionsByManager(
        Pageable pageable,
        QuestionStatus status,
        QuestionType type,
        String title,
        Long questionId,
        String customerName,
        Boolean isActivated,
        LocalDate startDate,
        LocalDate endDate,
        String sortBy
    ) {
        List<QuestionSummaryResponseDTO> content = queryFactory
            .select(Projections.constructor(QuestionSummaryResponseDTO.class,
                question.questionId,
                question.title,
                question.status,
                question.type,
                question.contents,
                customer.customerName,
                question.createdDate.as("questionCreatedAt"),
                answer.createdDate.as("answerCreatedAt"),
                question.isActivated
            ))
            .from(question)
            .leftJoin(question.answer, answer)
            .leftJoin(question.customer, customer)
            .where(
                statusEq(status),
                typeEq(type),
                titleContains(title),
                questionIdEq(questionId),
                customerNameContains(customerName),
                isActivatedEq(isActivated),
                createdDateBetween(startDate, endDate)
            )
            .orderBy(getOrderSpecifier(sortBy))
            .offset(pageable.getOffset())
            .limit(pageable.getPageSize())
            .fetch();

        JPAQuery<Question> countQuery = getCountQueryForManager(
            status, type, title, questionId, customerName, isActivated, startDate, endDate);

        return PageableExecutionUtils.getPage(content, pageable, countQuery::fetchCount);
    }

    @Override
    public Page<QuestionSummaryResponseDTO> findQuestionsByCustomer(
        Pageable pageable,
        Long userId,
        QuestionStatus status,
        QuestionType type,
        String title,
        Long questionId,
        LocalDate startDate,
        LocalDate endDate,
        String sortBy
    ) {
        List<QuestionSummaryResponseDTO> content = queryFactory
            .select(Projections.constructor(QuestionSummaryResponseDTO.class,
                question.questionId,
                question.title,
                question.status,
                question.type,
                question.contents,
                customer.customerName,
                question.createdDate.as("questionCreatedAt"),
                answer.createdDate.as("answerCreatedAt"),
                question.isActivated
            ))
            .from(question)
            .leftJoin(question.answer, answer)
            .leftJoin(question.customer, customer)
            .where(
                question.customer.userId.eq(userId),
                statusEq(status),
                typeEq(type),
                titleContains(title),
                questionIdEq(questionId),
                isActivatedEq(true),
                createdDateBetween(startDate, endDate)
            )
            .orderBy(getOrderSpecifier(sortBy))
            .offset(pageable.getOffset())
            .limit(pageable.getPageSize())
            .fetch();

        JPAQuery<Question> countQuery = getCountQueryForCustomer(
            userId, status, type, title, questionId, startDate, endDate);

        return PageableExecutionUtils.getPage(content, pageable, countQuery::fetchCount);
    }

    private JPAQuery<Question> getCountQueryForManager(
        QuestionStatus status,
        QuestionType type,
        String title,
        Long questionId,
        String customerName,
        Boolean isActivated,
        LocalDate startDate,
        LocalDate endDate
    ) {
        return queryFactory
            .selectFrom(question)
            .where(
                statusEq(status),
                typeEq(type),
                titleContains(title),
                questionIdEq(questionId),
                customerNameContains(customerName),
                isActivatedEq(isActivated),
                createdDateBetween(startDate, endDate)
            );
    }

    private JPAQuery<Question> getCountQueryForCustomer(
        Long userId,
        QuestionStatus status,
        QuestionType type,
        String title,
        Long questionId,
        LocalDate startDate,
        LocalDate endDate
    ) {
        return queryFactory
            .selectFrom(question)
            .where(
                question.customer.userId.eq(userId),
                statusEq(status),
                typeEq(type),
                titleContains(title),
                questionIdEq(questionId),
                isActivatedEq(true),
                createdDateBetween(startDate, endDate)
            );
    }

    private OrderSpecifier<?>[] getOrderSpecifier(String sortBy) {
        switch (sortBy) {
            case "LATEST":
                return new OrderSpecifier[]{
                    question.createdDate.desc().nullsLast(),
                    question.questionId.desc()
                };
            case "OLDEST":
                return new OrderSpecifier[]{
                    question.createdDate.asc().nullsFirst(),
                    question.questionId.asc()
                };
            case "TYPE":
                return new OrderSpecifier[]{
                    question.type.asc(),
                    question.createdDate.desc()
                };
            default:
                throw new CommonException(ErrorCode.INVALID_ORDER_CONDITION);
        }
    }

    private BooleanExpression statusEq(QuestionStatus status) {
        return status != null ? question.status.eq(status) : null;
    }

    private BooleanExpression typeEq(QuestionType type) {
        return type != null ? question.type.eq(type) : null;
    }

    private BooleanExpression titleContains(String title) {
        return StringUtils.hasText(title) ? question.title.contains(title) : null;
    }

    private BooleanExpression questionIdEq(Long questionId) {
        return questionId != null ? question.questionId.eq(questionId) : null;
    }

    private BooleanExpression customerNameContains(String customerName) {
        return StringUtils.hasText(customerName) ? customer.customerName.contains(customerName) : null;
    }

    private BooleanExpression isActivatedEq(Boolean isActivated) {
        return isActivated != null ? question.isActivated.eq(isActivated) : null;
    }

    private BooleanExpression createdDateBetween(LocalDate startDate, LocalDate endDate) {
        if (startDate == null && endDate == null) {
            return null;
        }

        DateTemplate<LocalDate> dateTemplate = Expressions.dateTemplate(
            LocalDate.class,
            "DATE({0})",
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
