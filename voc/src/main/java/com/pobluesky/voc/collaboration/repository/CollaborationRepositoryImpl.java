package com.pobluesky.voc.collaboration.repository;


import static com.pobluesky.voc.collaboration.entity.QCollaboration.collaboration;

import com.pobluesky.config.global.error.CommonException;
import com.pobluesky.config.global.error.ErrorCode;
import com.pobluesky.voc.collaboration.dto.response.CollaborationSummaryResponseDTO;
import com.pobluesky.voc.collaboration.entity.ColStatus;
import com.querydsl.core.types.OrderSpecifier;
import com.querydsl.core.types.Projections;
import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.core.types.dsl.DateTemplate;
import com.querydsl.core.types.dsl.Expressions;
import com.querydsl.jpa.impl.JPAQueryFactory;
import java.time.LocalDate;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.util.StringUtils;

@RequiredArgsConstructor
public class CollaborationRepositoryImpl implements CollaborationRepositoryCustom {

    private final JPAQueryFactory queryFactory;

    @Override
    public List<CollaborationSummaryResponseDTO> findAllCollaborationsRequestWithoutPaging(
        ColStatus colStatus,
        String colReqManager,
        Long colReqId,
        LocalDate startDate,
        LocalDate endDate,
        String sortBy) {

        return queryFactory
            .select(Projections.constructor(CollaborationSummaryResponseDTO.class,
                collaboration.colId,
                collaboration.question.questionId,
                collaboration.colRequestManagerId,
                collaboration.colStatus,
                collaboration.colContents,
                collaboration.createdDate
            ))
            .from(collaboration)
            .where(
                colStatusEq(colStatus),
                colReqIdEq(colReqId), // Manager ID로 필터링
                createdDateBetween(startDate, endDate)
            )
            .orderBy(getOrderSpecifier(sortBy))
            .fetch();
    }

    private OrderSpecifier<?>[] getOrderSpecifier(String sortBy) {
        switch (sortBy) {
            case "LATEST":
                return new OrderSpecifier[]{
                    collaboration.createdDate.desc().nullsLast(),
                    collaboration.colId.desc()
                };
            case "OLDEST":
                return new OrderSpecifier[]{
                    collaboration.createdDate.asc().nullsFirst(),
                    collaboration.colId.asc()
                };
            default:
                throw new CommonException(ErrorCode.INVALID_ORDER_CONDITION);
        }
    }

    private BooleanExpression colStatusEq(ColStatus colStatus) {
        return colStatus != null ? collaboration.colStatus.eq(colStatus) : null;
    }

    private BooleanExpression colReqManagerIdEq(Long colReqManagerId) {
        return colReqManagerId != null ? collaboration.colRequestManagerId.eq(colReqManagerId) : null;
    }

    private BooleanExpression colReqIdEq(Long colReqId) {
        return colReqId != null ? collaboration.colId.eq(colReqId) : null;
    }

    private BooleanExpression createdDateBetween(LocalDate startDate, LocalDate endDate) {
        if (startDate == null && endDate == null) {
            return null;
        }

        DateTemplate<LocalDate> dateTemplate = Expressions.dateTemplate(
            LocalDate.class,
            "CAST({0} AS DATE)",
            collaboration.createdDate
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
