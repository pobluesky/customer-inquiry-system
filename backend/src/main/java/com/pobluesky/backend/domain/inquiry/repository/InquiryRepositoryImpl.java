package com.pobluesky.backend.domain.inquiry.repository;

import static com.pobluesky.backend.domain.inquiry.entity.QInquiry.inquiry;
import static com.pobluesky.backend.domain.lineitem.entity.QCarLineItem.carLineItem;
import static com.pobluesky.backend.domain.user.entity.QCustomer.customer;
import static io.micrometer.common.util.StringUtils.isEmpty;

import com.pobluesky.backend.domain.inquiry.dto.response.InquirySummaryResponseDTO;
import com.pobluesky.backend.domain.inquiry.entity.Inquiry;
import com.pobluesky.backend.domain.inquiry.entity.InquiryType;
import com.pobluesky.backend.domain.inquiry.entity.ProductType;
import com.pobluesky.backend.domain.inquiry.entity.Progress;
import com.querydsl.core.types.Order;
import com.querydsl.core.types.OrderSpecifier;
import com.querydsl.core.types.Projections;
import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.core.types.dsl.DateTemplate;
import com.querydsl.core.types.dsl.Expressions;
import com.querydsl.jpa.impl.JPAQuery;
import com.querydsl.jpa.impl.JPAQueryFactory;
import jakarta.persistence.Convert;
import jakarta.persistence.EntityManager;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.convert.threeten.Jsr310JpaConverters.LocalDateConverter;
import org.springframework.data.support.PageableExecutionUtils;
import org.springframework.stereotype.Repository;
import org.springframework.util.StringUtils;

@RequiredArgsConstructor
public class InquiryRepositoryImpl implements InquiryRepositoryCustom {

    private final JPAQueryFactory queryFactory;

    @Override
    public Page<InquirySummaryResponseDTO> findInquiries(
        Long customerId, Pageable pageable, Progress progress,
        ProductType productType, String customerName, InquiryType inquiryType,
        String projectName, LocalDate startDate, LocalDate endDate) {

        List<InquirySummaryResponseDTO> content = queryFactory
            .select(Projections.constructor(InquirySummaryResponseDTO.class,
                inquiry.inquiryId,
                inquiry.salesPerson, //판매계약자
                inquiry.progress,    //진행현황
                inquiry.productType, //제품유형
                inquiry.inquiryType, //문의유형
                carLineItem.pjtName, //프로젝트명
                carLineItem.standardOrg, //규격기관
                carLineItem.thickness, //두께
                carLineItem.width, //폭
                customer.customerName //고객명
            ))
            .from(inquiry)
            .leftJoin(inquiry.carLineItemList, carLineItem)
            .join(inquiry.customer, customer)
            .where(
                inquiry.isActivated.isTrue(),
                inquiry.customer.userId.eq(customerId),
                progressEq(progress),
                productTypeEq(productType),
                customerNameEq(customerName),
                inquiryTypeEq(inquiryType),
                projectNameEq(projectName),
                createdDateBetween(startDate, endDate)
            )
            .orderBy(
                inquiry.productType.asc(),
                carLineItem.pjtName.asc(),
                inquiry.inquiryType.asc(),
                inquiry.progress.asc()
            )
            .offset(pageable.getOffset())
            .limit(pageable.getPageSize())
            .fetch();

        JPAQuery<Inquiry> countQuery = getCountQuery(
            customerId, progress, productType,
            customerName, inquiryType, projectName, startDate, endDate
        );

        return PageableExecutionUtils.getPage(content, pageable, countQuery::fetchCount);
    }

    private JPAQuery<Inquiry> getCountQuery(
        Long customerId, Progress progress,
        ProductType productType, String customerName,
        InquiryType inquiryType, String projectName,
        LocalDate startDate, LocalDate endDate
    ) {

        return queryFactory
            .selectFrom(inquiry)
            .where(
                inquiry.isActivated.isTrue(),
                inquiry.customer.userId.eq(customerId),
                progressEq(progress),
                productTypeEq(productType),
                customerNameEq(customerName),
                inquiryTypeEq(inquiryType),
                projectNameEq(projectName),
                createdDateBetween(startDate, endDate)
            );
    }

    private BooleanExpression progressEq(Progress progress) {
        return progress != null ? inquiry.progress.eq(progress) : null;
    }

    private BooleanExpression productTypeEq(ProductType productType) {
        return productType != null ? inquiry.productType.eq(productType) : null;
    }

    private BooleanExpression customerNameEq(String customerName) {
        return StringUtils.hasText(customerName) ? customer.customerName.eq(customerName) : null;
    }

    private BooleanExpression inquiryTypeEq(InquiryType inquiryType) {
        return inquiryType != null ? inquiry.inquiryType.eq(inquiryType) : null;
    }

    private BooleanExpression projectNameEq(String projectName) {
        return StringUtils.hasText(projectName) ? carLineItem.pjtName.eq(projectName) : null;
    }

    private BooleanExpression createdDateBetween(LocalDate startDate, LocalDate endDate) {
        if (startDate == null && endDate == null) {
            return null;
        }

        DateTemplate<LocalDate> dateTemplate = Expressions.dateTemplate(
            LocalDate.class,
            "CAST({0} AS DATE)",
            inquiry.createdDate
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