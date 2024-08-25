package com.pobluesky.backend.domain.question.repository;

import static com.pobluesky.backend.domain.answer.entity.QAnswer.answer;
import static com.pobluesky.backend.domain.collaboration.entity.QCollaboration.collaboration;
import static com.pobluesky.backend.domain.question.entity.QQuestion.question;
import static com.pobluesky.backend.domain.user.entity.QCustomer.customer;
import static com.pobluesky.backend.domain.user.entity.QManager.manager;

import com.pobluesky.backend.domain.question.dto.response.QuestionSummaryDTO;
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
import org.springframework.data.domain.Pageable;
import org.springframework.util.StringUtils;


@RequiredArgsConstructor
public class QuestionRepositoryImpl implements QuestionRepositoryCustom {

    private final JPAQueryFactory queryFactory;

    @Override
    public QuestionSummaryResponseDTO findQuestionsByCustomer(
        Long userId,
        Pageable pageable,
        QuestionStatus status,
        LocalDate startDate,
        LocalDate endDate,
        String sortBy
    ) {
        List<QuestionSummaryDTO> inqQuestions = getQuestionsByTypeForCustomer(userId, QuestionType.INQ, pageable, status, startDate, endDate, sortBy);
        List<QuestionSummaryDTO> siteQuestions = getQuestionsByTypeForCustomer(userId, QuestionType.SITE, pageable, status, startDate, endDate, sortBy);
        List<QuestionSummaryDTO> etcQuestions = getQuestionsByTypeForCustomer(userId, QuestionType.ETC, pageable, status, startDate, endDate, sortBy);

        long totalCount = getCountQueryForCustomer(userId, status, startDate, endDate).fetchCount();

        return new QuestionSummaryResponseDTO(inqQuestions, siteQuestions, etcQuestions, totalCount);
    }

    private JPAQuery<Question> getCountQueryForCustomer(
        Long userId,
        QuestionStatus status,
        LocalDate startDate,
        LocalDate endDate
    ) {
        return queryFactory
            .selectFrom(question)
            .where(
                question.customer.userId.eq(userId),
                statusEq(status),
                createdDateBetween(startDate, endDate)
            );
    }

    private List<QuestionSummaryDTO> getQuestionsByTypeForCustomer(
        Long userId,
        QuestionType type,
        Pageable pageable,
        QuestionStatus status,
        LocalDate startDate,
        LocalDate endDate,
        String sortBy
    ) {
        JPAQuery<QuestionSummaryDTO> query = queryFactory
            .select(Projections.constructor(QuestionSummaryDTO.class,
                question.questionId,
                question.title,
                question.status,
                question.type,
                question.contents,
                customer.customerName,
                question.createdDate.as("questionCreatedAt"),
                answer.createdDate.as("answerCreatedAt")
            ))
            .from(question)
            .leftJoin(question.answer, answer)
            .leftJoin(question.customer, customer)
            .where(
                question.customer.userId.eq(userId),
                question.type.eq(type),
                statusEq(status),
                createdDateBetween(startDate, endDate)
            )
            .orderBy(getOrderSpecifier(sortBy));

        return query
            .offset(pageable.getOffset())
            .limit(pageable.getPageSize())
            .fetch();
    }

    @Override
    public QuestionSummaryResponseDTO findQuestionsByManager(
        Pageable pageable,
        QuestionStatus status,
        LocalDate startDate,
        LocalDate endDate,
        String sortBy
    ) {
        List<QuestionSummaryDTO> inqQuestions = getQuestionsByTypeForManager(QuestionType.INQ, pageable, status, startDate, endDate, sortBy);
        List<QuestionSummaryDTO> siteQuestions = getQuestionsByTypeForManager(QuestionType.SITE, pageable, status, startDate, endDate, sortBy);
        List<QuestionSummaryDTO> etcQuestions = getQuestionsByTypeForManager(QuestionType.ETC, pageable, status, startDate, endDate, sortBy);

        long totalCount = getCountQueryForManager(status, startDate, endDate).fetchCount();

        return new QuestionSummaryResponseDTO(inqQuestions, siteQuestions, etcQuestions, totalCount);
    }

    private JPAQuery<Question> getCountQueryForManager(
        QuestionStatus status,
        LocalDate startDate,
        LocalDate endDate
    ) {
        return queryFactory
            .selectFrom(question)
            .where(
                statusEq(status),
                createdDateBetween(startDate, endDate)
            );
    }

    private List<QuestionSummaryDTO> getQuestionsByTypeForManager(
        QuestionType type,
        Pageable pageable,
        QuestionStatus status,
        LocalDate startDate,
        LocalDate endDate,
        String sortBy
    ) {
        JPAQuery<QuestionSummaryDTO> query = queryFactory
            .select(Projections.constructor(QuestionSummaryDTO.class,
                question.questionId,
                question.title,
                question.status,
                question.type,
                question.contents,
                customer.customerName,
                question.createdDate.as("questionCreatedAt"),
                answer.createdDate.as("answerCreatedAt")
            ))
            .from(question)
            .leftJoin(question.answer, answer)
            .leftJoin(question.customer, customer)
            .where(
                question.type.eq(type),
                statusEq(status),
                createdDateBetween(startDate, endDate)
            )
            .orderBy(getOrderSpecifier(sortBy));

        return query
            .offset(pageable.getOffset())
            .limit(pageable.getPageSize())
            .fetch();
    }

    @Override
    public List<QuestionSummaryDTO> findAllQuestionsByCustomerWithoutPaging(
        Long userId,
        QuestionStatus status,
        QuestionType type,
        String title,
        Long questionId,
        LocalDate startDate,
        LocalDate endDate,
        String sortBy
    ) {
        return queryFactory
            .select(Projections.constructor(QuestionSummaryDTO.class,
                question.questionId,
                question.title,
                question.status,
                question.type,
                question.contents,
                customer.customerName,
                question.createdDate.as("questionCreatedAt"),
                answer.createdDate.as("answerCreatedAt")
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
                createdDateBetween(startDate, endDate)
            )
            .orderBy(getOrderSpecifier(sortBy))
            .fetch();
    }

    @Override
    public List<QuestionSummaryDTO> findAllQuestionsByManagerWithoutPaging(
        QuestionStatus status,
        QuestionType type,
        String title,
        Long questionId,
        String customerName,
        LocalDate startDate,
        LocalDate endDate,
        String sortBy
    ) {
        return queryFactory
            .select(Projections.constructor(QuestionSummaryDTO.class,
                question.questionId,
                question.title,
                question.status,
                question.type,
                question.contents,
                customer.customerName,
                question.createdDate.as("questionCreatedAt"),
                answer.createdDate.as("answerCreatedAt")
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
                createdDateBetween(startDate, endDate)
            )
            .orderBy(getOrderSpecifier(sortBy))
            .fetch();
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
        return StringUtils.hasText(customerName) ? customer.customerName.eq(customerName) : null;
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
