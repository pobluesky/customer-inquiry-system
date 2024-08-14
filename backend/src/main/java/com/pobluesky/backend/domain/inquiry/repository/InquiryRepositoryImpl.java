package com.pobluesky.backend.domain.inquiry.repository;

import static com.pobluesky.backend.domain.inquiry.entity.QInquiry.inquiry;
import static com.pobluesky.backend.domain.lineitem.entity.QCarLineItem.carLineItem;
import static com.pobluesky.backend.domain.lineitem.entity.QColdRolledLineItem.coldRolledLineItem;
import static com.pobluesky.backend.domain.lineitem.entity.QHotRolledLineItem.hotRolledLineItem;
import static com.pobluesky.backend.domain.lineitem.entity.QThickPlateLineItem.thickPlateLineItem;
import static com.pobluesky.backend.domain.lineitem.entity.QWireRodLineItem.wireRodLineItem;
import static com.pobluesky.backend.domain.user.entity.QCustomer.customer;

import com.pobluesky.backend.domain.inquiry.dto.response.InquiryLineItemResponseDTO;
import com.pobluesky.backend.domain.inquiry.dto.response.InquirySummaryResponseDTO;
import com.pobluesky.backend.domain.inquiry.entity.Inquiry;
import com.pobluesky.backend.domain.inquiry.entity.InquiryType;
import com.pobluesky.backend.domain.inquiry.entity.ProductType;
import com.pobluesky.backend.domain.inquiry.entity.Progress;
import com.pobluesky.backend.domain.lineitem.dto.response.LineItemResponseDTO;
import com.pobluesky.backend.domain.lineitem.dto.response.car.CarLineItemSummaryResponseDTO;
import com.pobluesky.backend.domain.lineitem.dto.response.coldrolled.ColdRolledLineItemSummaryResponseDTO;
import com.pobluesky.backend.domain.lineitem.dto.response.hotrolled.HotRolledLineItemSummaryResponseDTO;
import com.pobluesky.backend.domain.lineitem.dto.response.thickplate.ThickPlateLineItemSummaryResponseDTO;
import com.pobluesky.backend.domain.lineitem.dto.response.wirerod.WireRodLineItemSummaryResponseDTO;
import com.querydsl.core.types.Expression;
import com.querydsl.core.types.Projections;
import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.core.types.dsl.CaseBuilder;
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
    public Page<InquiryLineItemResponseDTO> findInquiries(
        Long userId, Pageable pageable, Progress progress,
        ProductType productType, String customerName, InquiryType inquiryType,
        String projectName, LocalDate startDate, LocalDate endDate) {

        List<InquiryLineItemResponseDTO> content = queryFactory
            .select(Projections.constructor(InquiryLineItemResponseDTO.class,
                Projections.fields(InquirySummaryResponseDTO.class,
                    inquiry.inquiryId,
                    inquiry.salesPerson,
                    inquiry.progress,
                    inquiry.productType,
                    inquiry.inquiryType,
                    customer.customerName
                ),
                new CaseBuilder()
                    .when(inquiry.productType.eq(ProductType.CAR)).then(getCarLineItemProjection())
                    .when(inquiry.productType.eq(ProductType.COLD_ROLLED)).then(getColdRolledLineItemProjection())
                    .when(inquiry.productType.eq(ProductType.HOT_ROLLED)).then(getHotRolledLineItemProjection())
                    .when(inquiry.productType.eq(ProductType.THICK_PLATE)).then(getThickPlateLineItemProjection())
                    .when(inquiry.productType.eq(ProductType.WIRE_ROD)).then(getWireRodLineItemProjection())
                    .otherwise(Expressions.nullExpression())
            ))
            .from(inquiry)
            .leftJoin(inquiry.carLineItems, carLineItem)
            .leftJoin(inquiry.coldRolledLineItems, coldRolledLineItem)
            .leftJoin(inquiry.hotRolledLineItems, hotRolledLineItem)
            .leftJoin(inquiry.thickPlateLineItems, thickPlateLineItem)
            .leftJoin(inquiry.wireRodLineItems, wireRodLineItem)
            .join(inquiry.customer, customer)
            .where(
                inquiry.isActivated.isTrue(),
                inquiry.customer.userId.eq(userId),
                progressEq(progress),
                productTypeEq(productType),
                customerNameEq(customerName),
                inquiryTypeEq(inquiryType),
                projectNameEq(projectName),
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
            customerName, inquiryType, projectName, startDate, endDate
        );

        return PageableExecutionUtils.getPage(content, pageable, countQuery::fetchCount);
    }

    private Expression<LineItemResponseDTO> getCarLineItemProjection() {
        return Projections.fields(CarLineItemSummaryResponseDTO.class,
            carLineItem.lineItemId,
            carLineItem.kind,
            carLineItem.standardOrg,
            carLineItem.pjtName,
            carLineItem.thickness,
            carLineItem.width,
            carLineItem.isActivated
        );
    }

    private Expression<LineItemResponseDTO> getColdRolledLineItemProjection() {
        return Projections.fields(ColdRolledLineItemSummaryResponseDTO.class,
            coldRolledLineItem.lineItemId,
            coldRolledLineItem.kind,
            coldRolledLineItem.thickness,
            coldRolledLineItem.width,
            coldRolledLineItem.quantity,
            coldRolledLineItem.isActivated
        );
    }

    private Expression<LineItemResponseDTO> getHotRolledLineItemProjection() {
        return Projections.fields(HotRolledLineItemSummaryResponseDTO.class,
            hotRolledLineItem.lineItemId,
            hotRolledLineItem.kind,
            hotRolledLineItem.thickness,
            hotRolledLineItem.width,
            hotRolledLineItem.quantity,
            hotRolledLineItem.isActivated
        );
    }

    private Expression<LineItemResponseDTO> getThickPlateLineItemProjection() {
        return Projections.fields(ThickPlateLineItemSummaryResponseDTO.class,
            thickPlateLineItem.lineItemId,
            thickPlateLineItem.ladleIngredient,
            thickPlateLineItem.productIngredient,
            thickPlateLineItem.seal,
            thickPlateLineItem.show,
            thickPlateLineItem.curve,
            thickPlateLineItem.isActivated
        );
    }

    private Expression<LineItemResponseDTO> getWireRodLineItemProjection() {
        return Projections.fields(WireRodLineItemSummaryResponseDTO.class,
            wireRodLineItem.lineItemId,
            wireRodLineItem.kind,
            wireRodLineItem.orderCategory,
            wireRodLineItem.diameter,
            wireRodLineItem.quantity,
            wireRodLineItem.expectedDeadline,
            wireRodLineItem.initialQuantity,
            wireRodLineItem.customerProcessing,
            wireRodLineItem.finalUse,
            wireRodLineItem.isActivated
        );
    }

    private JPAQuery<Inquiry> getCountQuery(
        Long userId, Progress progress,
        ProductType productType, String customerName,
        InquiryType inquiryType, String projectName,
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
