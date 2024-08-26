package com.pobluesky.backend.domain.inquiry.repository;

import static com.pobluesky.backend.domain.inquiry.entity.QInquiry.inquiry;
import static com.pobluesky.backend.domain.user.entity.QCustomer.customer;

import com.pobluesky.backend.domain.inquiry.dto.response.InquirySummaryResponseDTO;
import com.pobluesky.backend.domain.inquiry.entity.Industry;
import com.pobluesky.backend.domain.inquiry.entity.Inquiry;
import com.pobluesky.backend.domain.inquiry.entity.InquiryType;
import com.pobluesky.backend.domain.inquiry.entity.ProductType;
import com.pobluesky.backend.domain.inquiry.entity.Progress;
import com.pobluesky.backend.domain.user.entity.QManager;
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
public class InquiryRepositoryImpl implements InquiryRepositoryCustom {

    private final JPAQueryFactory queryFactory;

    QManager salesManager = new QManager("salesManager");
    QManager qualityManager = new QManager("qualityManager");

    @Override
    public Page<InquirySummaryResponseDTO> findInquiriesByCustomer(
        Long userId,
        Pageable pageable,
        Progress progress,
        ProductType productType,
        String customerName,
        InquiryType inquiryType,
        LocalDate startDate,
        LocalDate endDate,
        String sortBy,
        String salesManagerName,
        String qualityManagerName
    ) {
        List<InquirySummaryResponseDTO> content = queryFactory
            .select(Projections.constructor(InquirySummaryResponseDTO.class,
                    inquiry.inquiryId,
                    inquiry.salesPerson,
                    inquiry.progress,
                    inquiry.productType,
                    inquiry.inquiryType,
                    customer.customerName,
                    inquiry.country,
                    inquiry.corporate,
                    inquiry.corporationCode,
                    inquiry.industry,
                    salesManager.name.as("salesManagerName"),
                    qualityManager.name.as("qualityManagerName")
                )
            )
            .from(inquiry)
            .join(inquiry.customer, customer)
            .leftJoin(inquiry.salesManager, salesManager)
            .leftJoin(inquiry.qualityManager, qualityManager)
            .where(
                inquiry.isActivated.eq(true),
                inquiry.customer.userId.eq(userId),
                progressEq(progress),
                productTypeEq(productType),
                customerNameContains(customerName),
                inquiryTypeEq(inquiryType),
                salesManagerNameEq(salesManagerName),
                qualityManagerNameEq(qualityManagerName),
                createdDateBetween(startDate, endDate)
            )
            .orderBy(getOrderSpecifier(sortBy))
            .offset(pageable.getOffset())
            .limit(pageable.getPageSize())
            .fetch();

        JPAQuery<Inquiry> countQuery = getCountQueryForCustomer(
            userId,
            progress,
            productType,
            customerName,
            inquiryType,
            startDate,
            endDate,
            salesManagerName,
            qualityManagerName
        );

        return PageableExecutionUtils.getPage(content, pageable, countQuery::fetchCount);
    }

    @Override
    public List<InquirySummaryResponseDTO> findInquiriesByCustomerWithoutPaging(
        Long userId,
        Progress progress,
        ProductType productType,
        String customerName,
        InquiryType inquiryType,
        String salesPerson,
        Industry industry,
        LocalDate startDate,
        LocalDate endDate,
        String sortBy,
        String salesManagerName,
        String qualityManagerName
    ) {

       return queryFactory
            .select(Projections.constructor(InquirySummaryResponseDTO.class,
                inquiry.inquiryId,
                inquiry.salesPerson,
                inquiry.progress,
                inquiry.productType,
                inquiry.inquiryType,
                customer.customerName,
                inquiry.country,
                inquiry.corporate,
                inquiry.corporationCode,
                inquiry.industry,
                salesManager.name.as("salesManagerName"),
                qualityManager.name.as("qualityManagerName")
                )
            )
            .from(inquiry)
            .join(inquiry.customer, customer)
           .leftJoin(inquiry.salesManager, salesManager)
           .leftJoin(inquiry.qualityManager, qualityManager)
            .where(
                inquiry.isActivated.eq(true),
                inquiry.customer.userId.eq(userId),
                progressEq(progress),
                productTypeEq(productType),
                customerNameContains(customerName),
                inquiryTypeEq(inquiryType),
                salesPersonContains(salesPerson),
                industryEq(industry),
                salesManagerNameEq(salesManagerName),
                qualityManagerNameEq(qualityManagerName),
                createdDateBetween(startDate, endDate)
            )
            .orderBy(getOrderSpecifier(sortBy))
            .fetch();
    }

    @Override
    public Page<InquirySummaryResponseDTO> findInquiriesByManager(
        Pageable pageable,
        Progress progress,
        ProductType productType,
        String customerName,
        InquiryType inquiryType,
        LocalDate startDate,
        LocalDate endDate,
        String sortBy) {

        List<InquirySummaryResponseDTO> content = queryFactory
            .select(Projections.constructor(InquirySummaryResponseDTO.class,
                inquiry.inquiryId,
                inquiry.salesPerson,
                inquiry.progress,
                inquiry.productType,
                inquiry.inquiryType,
                customer.customerName,
                inquiry.country,
                inquiry.corporate,
                inquiry.corporationCode,
                inquiry.industry
                )
            )
            .from(inquiry)
            .join(inquiry.customer, customer)
            .where(
                inquiry.isActivated.isTrue(),
                progressEq(progress),
                productTypeEq(productType),
                customerNameContains(customerName),
                inquiryTypeEq(inquiryType),
                createdDateBetween(startDate, endDate)
            )
            .orderBy(getOrderSpecifier(sortBy))
            .offset(pageable.getOffset())
            .limit(pageable.getPageSize())
            .fetch();

        JPAQuery<Inquiry> countQuery = getCountQueryForManager(
            progress,
            productType,
            customerName,
            inquiryType,
            startDate,
            endDate
        );

        return PageableExecutionUtils.getPage(content, pageable, countQuery::fetchCount);
    }

    @Override
    public List<InquirySummaryResponseDTO> findInquiriesByManagerWithoutPaging(
        Progress progress,
        ProductType productType,
        String customerName,
        InquiryType inquiryType,
        String salesPerson,
        Industry industry,
        LocalDate startDate,
        LocalDate endDate,
        String sortBy,
        String salesManagerName,
        String qualityManagerName
    ) {
        return queryFactory
            .select(Projections.constructor(InquirySummaryResponseDTO.class,
                inquiry.inquiryId,
                inquiry.salesPerson,
                inquiry.progress,
                inquiry.productType,
                inquiry.inquiryType,
                customer.customerName,
                inquiry.country,
                inquiry.corporate,
                inquiry.corporationCode,
                inquiry.industry,
                salesManager.name.as("salesManagerName"),
                qualityManager.name.as("qualityManagerName")
                )
            )
            .from(inquiry)
            .join(inquiry.customer, customer)
            .leftJoin(inquiry.salesManager, salesManager)
            .leftJoin(inquiry.qualityManager, qualityManager)
            .where(
                inquiry.isActivated.isTrue(),
                progressEq(progress),
                productTypeEq(productType),
                customerNameContains(customerName),
                inquiryTypeEq(inquiryType),
                salesPersonContains(salesPerson),
                industryEq(industry),
                salesManagerNameEq(salesManagerName),
                qualityManagerNameEq(qualityManagerName),
                createdDateBetween(startDate, endDate)
            )
            .orderBy(getOrderSpecifier(sortBy))
            .fetch();
    }

    private JPAQuery<Inquiry> getCountQueryForCustomer(
        Long userId,
        Progress progress,
        ProductType productType,
        String customerName,
        InquiryType inquiryType,
        LocalDate startDate,
        LocalDate endDate,
        String salesManagerName,
        String qualityManagerName
    ) {
        return queryFactory
            .selectFrom(inquiry)
            .where(
                inquiry.isActivated.isTrue(),
                inquiry.customer.userId.eq(userId),
                progressEq(progress),
                productTypeEq(productType),
                customerNameContains(customerName),
                inquiryTypeEq(inquiryType),
                createdDateBetween(startDate, endDate),
                salesManagerNameEq(salesManagerName),
                qualityManagerNameEq(qualityManagerName)
            );
    }

    private JPAQuery<Inquiry> getCountQueryForManager(
        Progress progress, ProductType productType,
        String customerName, InquiryType inquiryType,
        LocalDate startDate, LocalDate endDate
    ) {
        return queryFactory
            .selectFrom(inquiry)
            .where(
                inquiry.isActivated.isTrue(),
                progressEq(progress),
                productTypeEq(productType),
                customerNameContains(customerName),
                inquiryTypeEq(inquiryType),
                createdDateBetween(startDate, endDate)
            );
    }

    private OrderSpecifier<?>[] getOrderSpecifier(String sortBy) {
        switch (sortBy) {
            case "LATEST":
                return new OrderSpecifier[]{
                    inquiry.createdDate.desc().nullsLast(),
                    inquiry.inquiryId.desc()
                };
            case "OLDEST":
                return new OrderSpecifier[]{
                    inquiry.createdDate.asc().nullsFirst(),
                    inquiry.inquiryId.asc()
                };
            default:
                throw new CommonException(ErrorCode.INVALID_ORDER_CONDITION);
        }
    }

    private BooleanExpression progressEq(Progress progress) {
        return progress != null ? inquiry.progress.eq(progress) : null;
    }

    private BooleanExpression productTypeEq(ProductType productType) {
        return productType != null ? inquiry.productType.eq(productType) : null;
    }

    private BooleanExpression customerNameContains(String customerName) {
        return StringUtils.hasText(customerName) ? customer.customerName.contains(customerName) : null;
    }

    private BooleanExpression inquiryTypeEq(InquiryType inquiryType) {
        return inquiryType != null ? inquiry.inquiryType.eq(inquiryType) : null;
    }

    private BooleanExpression salesPersonContains(String salesPerson) {
        return StringUtils.hasText(salesPerson) ? inquiry.salesPerson.contains(salesPerson) : null;
    }

    private BooleanExpression salesManagerNameEq(String name) {
        return name != null ? salesManager.name.eq(name) : null;
    }

    private BooleanExpression qualityManagerNameEq(String name) {
        return name != null ? qualityManager.name.eq(name) : null;
    }

    private BooleanExpression industryEq(Industry industry) {
        return industry != null ? inquiry.industry.eq(industry) : null;
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
