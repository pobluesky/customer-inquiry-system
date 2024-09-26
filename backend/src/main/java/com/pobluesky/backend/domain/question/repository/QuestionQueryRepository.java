package com.pobluesky.backend.domain.question.repository;

import static com.pobluesky.backend.domain.answer.entity.QAnswer.answer;
import static com.pobluesky.backend.domain.question.entity.QQuestion.question;
import static com.pobluesky.backend.domain.user.entity.QCustomer.customer;

import com.pobluesky.backend.domain.question.dto.response.QuestionSummaryResponseDTO;
import com.querydsl.core.types.Projections;
import com.querydsl.core.types.dsl.Expressions;
import com.querydsl.jpa.impl.JPAQueryFactory;
import java.util.List;
import org.springframework.stereotype.Repository;

@Repository
public class QuestionQueryRepository {
    private final JPAQueryFactory queryFactory;

    public QuestionQueryRepository(JPAQueryFactory queryFactory) {
        this.queryFactory = queryFactory;
    }

    public List<QuestionSummaryResponseDTO> findQuestionsWithQueryDSL() {
        return queryFactory
            .select(Projections.constructor(QuestionSummaryResponseDTO.class,
                question.questionId,
                question.title,
                question.status,
                question.type,
                question.contents,
                customer.customerName,
                question.createdDate,
                answer.createdDate,
                Expressions.cases()
                    .when(answer.isNotNull())
                    .then(answer.manager.userId)
                    .otherwise((Long) null),
                question.isActivated))
            .from(question)
            .leftJoin(question.customer, customer)
            .fetchJoin()
            .leftJoin(question.answer, answer)
            .fetchJoin()
            .fetch();
    }
}
