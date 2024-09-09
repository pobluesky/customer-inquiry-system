package com.pobluesky.inquiry.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;


/**
 * QInquiry is a Querydsl query type for Inquiry
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QInquiry extends EntityPathBase<Inquiry> {

    private static final long serialVersionUID = 1245779318L;

    public static final QInquiry inquiry = new QInquiry("inquiry");

    public final com.pobluesky.global.QBaseEntity _super = new com.pobluesky.global.QBaseEntity(this);

    public final StringPath additionalRequests = createString("additionalRequests");

    public final StringPath corporate = createString("corporate");

    public final StringPath corporationCode = createString("corporationCode");

    public final EnumPath<Country> country = createEnum("country", Country.class);

    //inherited
    public final DateTimePath<java.time.LocalDateTime> createdDate = _super.createdDate;

    public final NumberPath<Long> customerId = createNumber("customerId", Long.class);

    public final StringPath customerRequestDate = createString("customerRequestDate");

    public final StringPath fileName = createString("fileName");

    public final StringPath filePath = createString("filePath");

    public final EnumPath<Industry> industry = createEnum("industry", Industry.class);

    public final NumberPath<Long> inquiryId = createNumber("inquiryId", Long.class);

    public final EnumPath<InquiryType> inquiryType = createEnum("inquiryType", InquiryType.class);

    public final BooleanPath isActivated = createBoolean("isActivated");

    public final BooleanPath isFavorite = createBoolean("isFavorite");

    //inherited
    public final DateTimePath<java.time.LocalDateTime> modifiedDate = _super.modifiedDate;

    public final EnumPath<ProductType> productType = createEnum("productType", ProductType.class);

    public final EnumPath<Progress> progress = createEnum("progress", Progress.class);

    public final NumberPath<Long> qualityManagerId = createNumber("qualityManagerId", Long.class);

    public final StringPath responseDeadline = createString("responseDeadline");

    public final NumberPath<Long> salesManagerId = createNumber("salesManagerId", Long.class);

    public final StringPath salesPerson = createString("salesPerson");

    public QInquiry(String variable) {
        super(Inquiry.class, forVariable(variable));
    }

    public QInquiry(Path<? extends Inquiry> path) {
        super(path.getType(), path.getMetadata());
    }

    public QInquiry(PathMetadata metadata) {
        super(Inquiry.class, metadata);
    }

}

