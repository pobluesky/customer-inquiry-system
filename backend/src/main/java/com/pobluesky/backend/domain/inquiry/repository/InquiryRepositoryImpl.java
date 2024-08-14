package com.pobluesky.backend.domain.inquiry.repository;

import static com.pobluesky.backend.domain.inquiry.entity.QInquiry.inquiry;
import static com.pobluesky.backend.domain.user.entity.QCustomer.customer;

import com.pobluesky.backend.domain.inquiry.dto.response.InquirySummaryResponseDTO;
import com.pobluesky.backend.domain.inquiry.entity.Inquiry;
import com.pobluesky.backend.domain.inquiry.entity.InquiryType;
import com.pobluesky.backend.domain.inquiry.entity.ProductType;
import com.pobluesky.backend.domain.inquiry.entity.Progress;
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

    @Override
    public Page<InquirySummaryResponseDTO> findInquiries(
        Long userId, Pageable pageable, Progress progress,
        ProductType productType, String customerName, InquiryType inquiryType,
        LocalDate startDate, LocalDate endDate) {

        List<InquirySummaryResponseDTO> content = queryFactory
            .select(Projections.constructor(InquirySummaryResponseDTO.class,
                    inquiry.inquiryId,
                    inquiry.salesPerson,
                    inquiry.progress,
                    inquiry.productType,
                    inquiry.inquiryType,
                    customer.customerName
                )
            )
            .from(inquiry)
            .join(inquiry.customer, customer)
            .where(
                inquiry.isActivated.isTrue(),
                inquiry.customer.userId.eq(userId),
                progressEq(progress),
                productTypeEq(productType),
                customerNameEq(customerName),
                inquiryTypeEq(inquiryType),
                createdDateBetween(startDate, endDate)
            )
            .orderBy(
                inquiry.productType.asc(),
                inquiry.inquiryType.asc(),
                inquiry.progress.asc()
            )
            .offset(pageable.getOffset())
            .limit(pageable.getPageSize())
            .fetch();

        JPAQuery<Inquiry> countQuery = getCountQuery(
            userId, progress, productType,
            customerName, inquiryType, startDate, endDate
        );

        return PageableExecutionUtils.getPage(content, pageable, countQuery::fetchCount);
    }

    private JPAQuery<Inquiry> getCountQuery(
        Long userId, Progress progress, ProductType productType,
        String customerName, InquiryType inquiryType,
        LocalDate startDate, LocalDate endDate
    ) {

        return queryFactory
            .selectFrom(inquiry)
            .where(
                inquiry.isActivated.isTrue(),
                inquiry.customer.userId.eq(userId),
                progressEq(progress),
                productTypeEq(productType),
                customerNameEq(customerName),
                inquiryTypeEq(inquiryType),
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
