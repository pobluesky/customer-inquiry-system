package com.pobluesky.inquiry.repository;

import static com.pobluesky.inquiry.entity.QInquiry.inquiry;
import com.pobluesky.config.global.error.CommonException;
import com.pobluesky.config.global.error.ErrorCode;
import com.pobluesky.feign.Customer;
import com.pobluesky.feign.Manager;
import com.pobluesky.feign.UserClient;
import com.pobluesky.inquiry.dto.response.InquirySummaryResponseDTO;
import com.pobluesky.inquiry.entity.Industry;
import com.pobluesky.inquiry.entity.Inquiry;
import com.pobluesky.inquiry.entity.InquiryType;
import com.pobluesky.inquiry.entity.ProductType;
import com.pobluesky.inquiry.entity.Progress;
import com.querydsl.core.types.OrderSpecifier;
import com.querydsl.core.types.Projections;
import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.core.types.dsl.DateTemplate;
import com.querydsl.core.types.dsl.Expressions;
import com.querydsl.jpa.impl.JPAQueryFactory;
import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import org.springframework.util.StringUtils;

@RequiredArgsConstructor
public class InquiryRepositoryImpl implements InquiryRepositoryCustom {

    private final JPAQueryFactory queryFactory;

    private final UserClient userClient;

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

        Customer customer = userClient.getCustomerById(userId);

        List<Inquiry> inquiries = queryFactory
            .selectFrom(inquiry)
            .where(
                inquiry.isActivated.eq(true),
                inquiry.customerId.eq(userId),
                progressEq(progress),
                productTypeEq(productType),
                inquiryTypeEq(inquiryType),
                salesPersonContains(salesPerson),
                industryEq(industry),
                createdDateBetween(startDate, endDate)
            )
            .orderBy(getOrderSpecifier(sortBy))
            .fetch();

        return inquiries.stream().map(inq -> {

            // salesManager와 qualityManager를 각각의 Id로 조회
            Manager salesManager = userClient.getManagerById(inq.getSalesManagerId());
            Manager qualityManager = userClient.getManagerById(inq.getQualityManagerId());

            return InquirySummaryResponseDTO.builder()
                .inquiryId(inq.getInquiryId())
                .salesPerson(inq.getSalesPerson())
                .progress(inq.getProgress())
                .productType(inq.getProductType())
                .inquiryType(inq.getInquiryType())
                .customerName(customer.getCustomerName())
                .country(inq.getCountry())
                .corporate(inq.getCorporate())
                .corporationCode(inq.getCorporationCode())
                .industry(inq.getIndustry())
                .salesManagerName(salesManager != null ? salesManager.getName() : null)
                .qualityManagerName(qualityManager != null ? qualityManager.getName() : null)
                .build();
        }).collect(Collectors.toList());
    }

    @Override
    public List<InquirySummaryResponseDTO> findInquiriesBySalesManagerWithoutPaging(
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
        List<Inquiry> inquiries = queryFactory
            .selectFrom(inquiry)
            .where(
                inquiry.isActivated.isTrue(),
                progressEq(progress),
                productTypeEq(productType),
                inquiryTypeEq(inquiryType),
                salesPersonContains(salesPerson),
                industryEq(industry),
                createdDateBetween(startDate, endDate)
            )
            .orderBy(getOrderSpecifier(sortBy))
            .fetch();

        return inquiries.stream().map(inq -> {
            // 각 Inquiry의 customerId를 사용하여 Customer 정보 조회
            Customer customer = userClient.getCustomerById(inq.getCustomerId());

            // salesManagerId와 qualityManagerId를 사용하여 Manager 정보 조회
            Manager salesManager = userClient.getManagerById(inq.getSalesManagerId());
            Manager qualityManager = userClient.getManagerById(inq.getQualityManagerId());

            return InquirySummaryResponseDTO.builder()
                .inquiryId(inq.getInquiryId())
                .salesPerson(inq.getSalesPerson())
                .progress(inq.getProgress())
                .productType(inq.getProductType())
                .inquiryType(inq.getInquiryType())
                .customerName(customer != null ? customer.getCustomerName() : null)
                .country(inq.getCountry())
                .corporate(inq.getCorporate())
                .corporationCode(inq.getCorporationCode())
                .industry(inq.getIndustry())
                .salesManagerName(salesManager != null ? salesManager.getName() : null)
                .qualityManagerName(qualityManager != null ? qualityManager.getName() : null)
                .build();
        }).collect(Collectors.toList());
    }

    @Override
    public List<InquirySummaryResponseDTO> findInquiriesByQualityManagerWithoutPaging(
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
        List<Inquiry> inquiries = queryFactory
            .selectFrom(inquiry)
            .where(
                inquiry.isActivated.isTrue(),
                progressInQualityReviewStates(),
                progressEq(progress),
                productTypeEq(productType),
                inquiryTypeEq(inquiryType),
                salesPersonContains(salesPerson),
                industryEq(industry),
                createdDateBetween(startDate, endDate)
            )
            .orderBy(getOrderSpecifier(sortBy))
            .fetch();

        return inquiries.stream().map(inq -> {
            // 각 Inquiry의 customerId를 사용하여 Customer 정보 조회
            Customer customer = userClient.getCustomerById(inq.getCustomerId());

            // salesManagerId와 qualityManagerId를 사용하여 Manager 정보 조회
            Manager salesManager = userClient.getManagerById(inq.getSalesManagerId());
            Manager qualityManager = userClient.getManagerById(inq.getQualityManagerId());

            return InquirySummaryResponseDTO.builder()
                .inquiryId(inq.getInquiryId())
                .salesPerson(inq.getSalesPerson())
                .progress(inq.getProgress())
                .productType(inq.getProductType())
                .inquiryType(inq.getInquiryType())
                .customerName(customer != null ? customer.getCustomerName() : null) // customerName은 조회된 Customer 객체에서 가져옴
                .country(inq.getCountry())
                .corporate(inq.getCorporate())
                .corporationCode(inq.getCorporationCode())
                .industry(inq.getIndustry())
                .salesManagerName(salesManager != null ? salesManager.getName() : null) // salesManagerName 설정
                .qualityManagerName(qualityManager != null ? qualityManager.getName() : null) // qualityManagerName 설정
                .build();
        }).collect(Collectors.toList());
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

    private BooleanExpression inquiryTypeEq(InquiryType inquiryType) {
        return inquiryType != null ? inquiry.inquiryType.eq(inquiryType) : null;
    }

    private BooleanExpression salesPersonContains(String salesPerson) {
        return StringUtils.hasText(salesPerson) ? inquiry.salesPerson.contains(salesPerson) : null;
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

    private BooleanExpression progressInQualityReviewStates() {
        return inquiry.progress.in(
            Progress.QUALITY_REVIEW_REQUEST,
            Progress.QUALITY_REVIEW_RESPONSE,
            Progress.QUALITY_REVIEW_COMPLETED,
            Progress.FINAL_REVIEW_COMPLETED
        );
    }
}
