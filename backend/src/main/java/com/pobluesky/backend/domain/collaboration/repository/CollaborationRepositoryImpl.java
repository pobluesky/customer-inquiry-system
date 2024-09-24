package com.pobluesky.backend.domain.collaboration.repository;

import com.pobluesky.backend.global.error.CommonException;
import com.pobluesky.backend.global.error.ErrorCode;
import com.querydsl.core.types.OrderSpecifier;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;


import static com.pobluesky.backend.domain.collaboration.entity.QCollaboration.collaboration;
import static com.pobluesky.backend.domain.user.entity.QManager.manager;

import com.pobluesky.backend.domain.collaboration.dto.response.CollaborationSummaryResponseDTO;
import com.pobluesky.backend.domain.collaboration.entity.ColStatus;
import com.pobluesky.backend.domain.collaboration.entity.Collaboration;
import com.querydsl.core.types.Projections;
import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.core.types.dsl.DateTemplate;
import com.querydsl.core.types.dsl.Expressions;
import com.querydsl.jpa.impl.JPAQuery;
import java.time.LocalDate;
import java.util.List;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.support.PageableExecutionUtils;
import org.springframework.util.StringUtils;

@RequiredArgsConstructor
public class CollaborationRepositoryImpl implements CollaborationRepositoryCustom {

    private final JPAQueryFactory queryFactory;

    @Override
    public Page<CollaborationSummaryResponseDTO> findAllCollaborationsRequest(
        Pageable pageable,
        Long colId,
        ColStatus colStatus,
        String colReqManager,
        Long colReqId,
        String colResManager,
        Long colResId,
        LocalDate startDate,
        LocalDate endDate,
        String sortBy) {

        List<CollaborationSummaryResponseDTO> content = queryFactory
            .select(Projections.constructor(CollaborationSummaryResponseDTO.class,
                collaboration.colId,
                collaboration.question.questionId,
                collaboration.colRequestManager.userId,
                collaboration.colRequestManager.name,
                collaboration.colResponseManager.userId,
                collaboration.colResponseManager.name,
                collaboration.colStatus,
                collaboration.colContents,
                collaboration.createdDate
            ))
            .from(collaboration)
            .join(collaboration.colRequestManager, manager)
            .where(
                colIdEq(colId),
                colStatusEq(colStatus),
                colReqManagerEq(colReqManager),
                colReqIdEq(colReqId),
                colResManagerEq(colResManager),
                colResIdEq(colResId),
                createdDateBetween(startDate, endDate)
            )
            .orderBy(getOrderSpecifier(sortBy))
            .offset(pageable.getOffset())
            .limit(pageable.getPageSize())
            .fetch();

        JPAQuery<Collaboration> countQuery = getCountQuery(colId, colStatus, colReqManager, colReqId, colResManager, colResId, startDate, endDate);

        return PageableExecutionUtils.getPage(content, pageable, countQuery::fetchCount);
    }

    private JPAQuery<Collaboration> getCountQuery(Long colId, ColStatus colStatus, String colReqManagerName, Long colReqId, String colResManagerName, Long colResId,
        LocalDate startDate, LocalDate endDate) {
        return queryFactory
            .selectFrom(collaboration)
            .join(collaboration.colRequestManager, manager)
            .where(
                colIdEq(colId),
                colStatusEq(colStatus),
                colReqManagerEq(colReqManagerName),
                colReqIdEq(colReqId),
                colResManagerEq(colResManagerName),
                colResIdEq(colResId),
                createdDateBetween(startDate, endDate)
            );
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

    private BooleanExpression colIdEq(Long colId) {
        return colId != null ? collaboration.colId.eq(colId) : null;
    }

    private BooleanExpression colStatusEq(ColStatus colStatus) {
        return colStatus != null ? collaboration.colStatus.eq(colStatus) : null;
    }

    private BooleanExpression colReqManagerEq(String colReqManager) {
        return StringUtils.hasText(colReqManager) ? collaboration.colRequestManager.name.eq(colReqManager) : null;
    }

    private BooleanExpression colReqIdEq(Long colReqId) {
        return colReqId != null ? collaboration.colRequestManager.userId.eq(colReqId) : null;
    }

    private BooleanExpression colResManagerEq(String colResManager) {
        return StringUtils.hasText(colResManager) ? collaboration.colResponseManager.name.eq(colResManager) : null;
    }

    private BooleanExpression colResIdEq(Long colResId) {
        return colResId != null ? collaboration.colResponseManager.userId.eq(colResId) : null;
    }

    private BooleanExpression createdDateBetween(LocalDate startDate, LocalDate endDate) {
        if (startDate == null && endDate == null) {
            return null;
        }

        DateTemplate<LocalDate> dateTemplate = Expressions.dateTemplate(
            LocalDate.class,
            "DATE({0})",
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
