package com.pobluesky.backend.domain.inquiry.repository;

import static com.pobluesky.backend.domain.inquiry.entity.QInquiry.inquiry;
import static com.pobluesky.backend.domain.lineitem.entity.QCarLineItem.carLineItem;
import static com.pobluesky.backend.domain.user.entity.QCustomer.customer;

import com.pobluesky.backend.domain.inquiry.dto.response.InquirySummaryResponseDTO;
import com.pobluesky.backend.domain.inquiry.entity.Inquiry;
import com.pobluesky.backend.domain.inquiry.entity.Progress;
import com.querydsl.core.types.Order;
import com.querydsl.core.types.OrderSpecifier;
import com.querydsl.core.types.Projections;
import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.jpa.impl.JPAQuery;
import com.querydsl.jpa.impl.JPAQueryFactory;
import jakarta.persistence.EntityManager;
import java.util.List;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.support.PageableExecutionUtils;

public class InquiryRepositoryImpl implements InquiryRepositoryCustom {

    private final JPAQueryFactory queryFactory;

    public InquiryRepositoryImpl(EntityManager em) {
        this.queryFactory = new JPAQueryFactory(em);
    }

    @Override
    public Page<InquirySummaryResponseDTO> findInquiries(Long customerId, Pageable pageable, String sortBy, Progress progress) {
        //OrderSpecifier<?> orderSpecifier = getOrderSpecifier(sortBy);

        List<InquirySummaryResponseDTO> content = queryFactory
            .select(Projections.constructor(InquirySummaryResponseDTO.class,
                inquiry.inquiryId,
                inquiry.salesPerson, //판매계약자
                inquiry.progress, //진행현황
                inquiry.productType, //제품유형
                inquiry.inquiryType, //문의유형
                carLineItem.pjtName,
                carLineItem.standardOrg,
                carLineItem.thickness,
                carLineItem.width,
                customer.customerName
            ))
            .from(inquiry)
            .leftJoin(inquiry.carLineItemList, carLineItem)
            .join(inquiry.customer, customer)
            .where(
                inquiry.isActivated.isTrue(),
                inquiry.customer.customerId.eq(customerId),
                progressEq(progress)
            )
            .orderBy(getOrderSpecifier(sortBy))
            .offset(pageable.getOffset())
            .limit(pageable.getPageSize())
            .fetch();

        JPAQuery<Inquiry> countQuery = queryFactory
            .selectFrom(inquiry)
            .where(
                inquiry.isActivated.isTrue(),
                inquiry.customer.customerId.eq(customerId),
                progressEq(progress)
            );

        return PageableExecutionUtils.getPage(content, pageable, countQuery::fetchCount);
    }

    private BooleanExpression progressEq(Progress progress) {
        return progress != null ? inquiry.progress.eq(progress) : null;
    }

    private OrderSpecifier<?> getOrderSpecifier(String sortBy) {
        switch (sortBy) {
            case "oldest":
                return new OrderSpecifier<>(Order.ASC, inquiry.createdDate);
            case "progress":
                return new OrderSpecifier<>(Order.ASC, inquiry.progress);
            default:
                return new OrderSpecifier<>(Order.DESC, inquiry.createdDate);
        }
    }
}
