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
import lombok.extern.slf4j.Slf4j;
import org.springframework.util.StringUtils;

@Slf4j
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


        // Feign을 사용해 customer 정보를 가져옴
        Customer customer = userClient.getCustomerByIdWithoutToken(userId).getData();

        // 기본적으로 Inquiry 정보를 조회
        List<Inquiry> inquiries = queryFactory
            .selectFrom(inquiry)
            .where(
                inquiry.isActivated.eq(true),
                inquiry.customerId.eq(userId), // customerId로 조회
                progressEq(progress),
                productTypeEq(productType),
                inquiryTypeEq(inquiryType),
                salesPersonContains(salesPerson),
                industryEq(industry),
                createdDateBetween(startDate, endDate)
            )
            .orderBy(getOrderSpecifier(sortBy))
            .fetch();

        // Feign을 사용해 각 Inquiry에 대해 Manager 정보를 조회 후 DTO로 변환
        return inquiries.stream().map(inq -> {
            // salesManager와 qualityManager 정보를 각각의 서비스에서 가져옴
            Manager salesManager = null;
            Manager qualityManager = null;

            // salesManagerId가 존재할 경우 Feign을 통해 salesManager 정보를 가져옴
            if (inq.getSalesManagerId() != null) {
                try {
                    salesManager = userClient.getManagerByIdWithoutToken(inq.getSalesManagerId()).getData();
                } catch (Exception e) {
                    log.error("Failed to fetch sales manager for salesManagerId: {}", inq.getSalesManagerId(), e);
                }
            }

            // qualityManagerId가 존재할 경우 Feign을 통해 qualityManager 정보를 가져옴
            if (inq.getQualityManagerId() != null) {
                try {
                    qualityManager = userClient.getManagerByIdWithoutToken(inq.getQualityManagerId()).getData();
                } catch (Exception e) {
                    log.error("Failed to fetch quality manager for qualityManagerId: {}", inq.getQualityManagerId(), e);
                }
            }

            // DTO로 변환
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
                .salesManagerName(salesManager != null ? salesManager.getName() : null) // salesManager가 null일 경우 처리
                .qualityManagerName(qualityManager != null ? qualityManager.getName() : null) // qualityManager가 null일 경우 처리
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

        // 조회된 Inquiry 데이터를 Feign 클라이언트를 통해 customer, salesManager, qualityManager 정보를 추가하여 DTO로 변환
        return inquiries.stream()
            .map(inq -> {
                // Feign을 사용하여 customer, salesManager, qualityManager 정보를 가져옴
                Customer customer = null;
                Manager salesManager = null;
                Manager qualityManager = null;

                try {
                    // 고객 정보를 Feign으로 가져옴
                    customer = userClient.getCustomerByIdWithoutToken(inq.getCustomerId()).getData();
                } catch (Exception e) {
                    log.error("Failed to fetch customer for customerId: {}", inq.getCustomerId(), e);
                }

                try {
                    // salesManager 정보 가져옴
                    if (inq.getSalesManagerId() != null) {
                        salesManager = userClient.getManagerByIdWithoutToken(inq.getSalesManagerId()).getData();
                    }
                } catch (Exception e) {
                    log.error("Failed to fetch sales manager for salesManagerId: {}", inq.getSalesManagerId(), e);
                }

                try {
                    // qualityManager 정보 가져옴
                    if (inq.getQualityManagerId() != null) {
                        qualityManager = userClient.getManagerByIdWithoutToken(inq.getQualityManagerId()).getData();
                    }
                } catch (Exception e) {
                    log.error("Failed to fetch quality manager for qualityManagerId: {}", inq.getQualityManagerId(), e);
                }

                // InquirySummaryResponseDTO로 변환하여 반환
                return InquirySummaryResponseDTO.builder()
                    .inquiryId(inq.getInquiryId())
                    .salesPerson(inq.getSalesPerson())
                    .progress(inq.getProgress())
                    .productType(inq.getProductType())
                    .inquiryType(inq.getInquiryType())
                    .customerName(customer != null ? customer.getCustomerName() : null) // 고객 이름
                    .country(inq.getCountry())
                    .corporate(inq.getCorporate())
                    .corporationCode(inq.getCorporationCode())
                    .industry(inq.getIndustry())
                    .salesManagerName(salesManager != null ? salesManager.getName() : null) // 판매 담당자 이름
                    .qualityManagerName(qualityManager != null ? qualityManager.getName() : null) // 품질 담당자 이름
                    .build();
            })
            .filter(dto -> {
                // 고객 이름 필터링: 주어진 customerName과 일치하는지 확인
                if (StringUtils.hasText(customerName)) {
                    return dto.customerName() != null && dto.customerName().contains(customerName);
                }
                return true; // customerName 필터가 없을 경우 모두 통과
            })
            .collect(Collectors.toList());
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
        // 데이터베이스에서 기본 조건으로 Inquiry를 조회
        List<Inquiry> inquiries = queryFactory
            .selectFrom(inquiry)
            .where(
                inquiry.isActivated.isTrue(),
                progressInQualityReviewStates(), // 품질 검토 상태
                progressEq(progress),
                productTypeEq(productType),
                inquiryTypeEq(inquiryType),
                salesPersonContains(salesPerson),
                industryEq(industry),
                createdDateBetween(startDate, endDate)
            )
            .orderBy(getOrderSpecifier(sortBy))
            .fetch();

        // 메모리 내에서 customerName 필터링 및 기타 필터 적용
        return inquiries.stream()
            .filter(inq -> {
                if (StringUtils.hasText(customerName)) {
                    try {
                        // Feign을 통해 고객 정보를 가져옴
                        Customer customer = userClient.getCustomerByIdWithoutToken(inq.getCustomerId()).getData();
                        return customer != null && customer.getCustomerName().contains(customerName);
                    } catch (Exception e) {
                        log.error("Failed to fetch customer for customerId: {}", inq.getCustomerId(), e);
                        return false;
                    }
                }
                return true; // customerName이 없는 경우 필터링하지 않음
            })
            .map(inq -> {
                // Feign을 통해 salesManager와 qualityManager 정보도 가져옴
                Manager salesManager = null;
                Manager qualityManager = null;

                try {
                    if (inq.getSalesManagerId() != null) {
                        salesManager = userClient.getManagerByIdWithoutToken(inq.getSalesManagerId()).getData();
                    }
                } catch (Exception e) {
                    log.error("Failed to fetch sales manager for salesManagerId: {}", inq.getSalesManagerId(), e);
                }

                try {
                    if (inq.getQualityManagerId() != null) {
                        qualityManager = userClient.getManagerByIdWithoutToken(inq.getQualityManagerId()).getData();
                    }
                } catch (Exception e) {
                    log.error("Failed to fetch quality manager for qualityManagerId: {}", inq.getQualityManagerId(), e);
                }

                // InquirySummaryResponseDTO로 변환하여 반환
                return InquirySummaryResponseDTO.builder()
                    .inquiryId(inq.getInquiryId())
                    .salesPerson(inq.getSalesPerson())
                    .progress(inq.getProgress())
                    .productType(inq.getProductType())
                    .inquiryType(inq.getInquiryType())
                    .customerName(customerName) // 필터링된 customerName 사용
                    .country(inq.getCountry())
                    .corporate(inq.getCorporate())
                    .corporationCode(inq.getCorporationCode())
                    .industry(inq.getIndustry())
                    .salesManagerName(salesManager != null ? salesManager.getName() : null)
                    .qualityManagerName(qualityManager != null ? qualityManager.getName() : null)
                    .build();
            })
            .collect(Collectors.toList());
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

//    private BooleanExpression customerNameContains(String customerName) {
//        return StringUtils.hasText(customerName) ? customer.customerName.contains(customerName) : null;
//    }

    private BooleanExpression inquiryTypeEq(InquiryType inquiryType) {
        return inquiryType != null ? inquiry.inquiryType.eq(inquiryType) : null;
    }

    private BooleanExpression salesPersonContains(String salesPerson) {
        return StringUtils.hasText(salesPerson) ? inquiry.salesPerson.contains(salesPerson) : null;
    }

//    private BooleanExpression salesManagerNameEq(String name) {
//        return name != null ? salesManager.name.eq(name) : null;
//    }
//
//    private BooleanExpression qualityManagerNameEq(String name) {
//        return name != null ? qualityManager.name.eq(name) : null;
//    }

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