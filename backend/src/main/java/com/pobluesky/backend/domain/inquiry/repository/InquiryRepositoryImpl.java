//package com.pobluesky.backend.domain.inquiry.repository;
//
//import static com.pobluesky.backend.domain.inquiry.entity.QInquiry.inquiry;
//
//import com.pobluesky.backend.domain.inquiry.dto.response.InquiryResponseDTO;
//import com.querydsl.core.types.Order;
//import com.querydsl.core.types.OrderSpecifier;
//import com.querydsl.core.types.Projections;
//import com.querydsl.jpa.impl.JPAQueryFactory;
//import java.util.List;
//import org.springframework.data.domain.Page;
//import org.springframework.data.domain.PageImpl;
//import org.springframework.data.domain.Pageable;
//
//public class InquiryRepositoryImpl implements InquiryRepositoryCustom {
//
//    private final JPAQueryFactory queryFactory;
//
//    public InquiryRepositoryImpl(JPAQueryFactory queryFactory) {
//        this.queryFactory = queryFactory;
//    }
//
//    @Override
//    public Page<InquiryResponseDTO> findInquiries(Pageable pageable, String sortBy) {
//        OrderSpecifier<?> orderSpecifier = getOrderSpecifier(sortBy);
//
//        List<InquiryResponseDTO> content = queryFactory
//            .select(Projections.constructor(InquiryResponseDTO.class,
//                inquiry.inquiryId,
//                inquiry.country,
//                inquiry.corporate,
//                inquiry.salesPerson,
//                inquiry.industry,
//                inquiry.progress,
//                inquiry.productType,
//                inquiry.qualityManager,
//                inquiry.department,
//                inquiry.salesManager,
//                inquiry.customerRequestDate,
//                inquiry.responseDeadline,
//                inquiry.elapsedDays,
//                inquiry.corporationCode,
//                inquiry.files,
//                inquiry.inquiryType
//            ))
//            .from(inquiry)
//            .where(inquiry.isActivated.isTrue())
//            .orderBy(orderSpecifier)
//            .offset(pageable.getOffset())
//            .limit(pageable.getPageSize())
//            .fetch();
//
//        long total = queryFactory
//            .selectFrom(inquiry)
//            .where(inquiry.isActivated.isTrue())
//            .fetchCount();
//
//        return new PageImpl<>(content, pageable, total);
//    }
//
//    private OrderSpecifier<?> getOrderSpecifier(String sortBy) {
//        switch (sortBy) {
//            case "oldest":
//                return new OrderSpecifier<>(Order.ASC, inquiry.createdAt);
//            case "progress":
//                return new OrderSpecifier<>(Order.ASC, inquiry.progress);
//            default:
//                return new OrderSpecifier<>(Order.DESC, inquiry.createdAt);
//        }
//    }
//}
