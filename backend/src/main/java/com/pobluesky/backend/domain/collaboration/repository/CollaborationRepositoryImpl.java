package com.pobluesky.backend.domain.collaboration.repository;

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
        Pageable pageable, ColStatus colStatus, String colReqManager, Long colReqId,
        LocalDate startDate, LocalDate endDate) {

        List<CollaborationSummaryResponseDTO> content = queryFactory
            .select(Projections.constructor(CollaborationSummaryResponseDTO.class,
                collaboration.colId,
                manager.name,
                collaboration.colStatus,
                collaboration.colContents,
                collaboration.createdDate
            ))
            .from(collaboration)
            .join(collaboration.colRequestManager, manager)
            .where(
                colStatusEq(colStatus),
                colReqManagerEq(colReqManager),
                colReqIdEq(colReqId),
                createdDateBetween(startDate, endDate)
            )
            .orderBy(
                collaboration.createdDate.desc(),
                collaboration.colId.desc(),
                collaboration.colStatus.asc()
                )
            .offset(pageable.getOffset())
            .limit(pageable.getPageSize())
            .fetch();

        JPAQuery<Collaboration> countQuery = getCountQuery(colStatus, colReqManager, colReqId, startDate, endDate);

        return PageableExecutionUtils.getPage(content, pageable, countQuery::fetchCount);
    }

    private JPAQuery<Collaboration> getCountQuery(ColStatus colStatus, String colReqManagerName, Long colReqId,
        LocalDate startDate, LocalDate endDate) {
        return queryFactory
            .selectFrom(collaboration)
            .join(collaboration.colRequestManager, manager)
            .where(
                colStatusEq(colStatus),
                colReqManagerEq(colReqManagerName),
                colReqIdEq(colReqId),
                createdDateBetween(startDate, endDate)
            );
    }

    private BooleanExpression colStatusEq(ColStatus colStatus) {
        return colStatus != null ? collaboration.colStatus.eq(colStatus) : null;
    }

    private BooleanExpression colReqManagerEq(String colReqManager) {
        return StringUtils.hasText(colReqManager) ? manager.name.eq(colReqManager) : null;
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
