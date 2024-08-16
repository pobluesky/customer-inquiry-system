package com.pobluesky.backend.domain.inquiry.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QInquiry is a Querydsl query type for Inquiry
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QInquiry extends EntityPathBase<Inquiry> {

    private static final long serialVersionUID = -2090141696L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QInquiry inquiry = new QInquiry("inquiry");

    public final com.pobluesky.backend.global.QBaseEntity _super = new com.pobluesky.backend.global.QBaseEntity(this);

    public final StringPath additionalRequests = createString("additionalRequests");

    public final ListPath<com.pobluesky.backend.domain.lineitem.entity.CarLineItem, com.pobluesky.backend.domain.lineitem.entity.QCarLineItem> carLineItems = this.<com.pobluesky.backend.domain.lineitem.entity.CarLineItem, com.pobluesky.backend.domain.lineitem.entity.QCarLineItem>createList("carLineItems", com.pobluesky.backend.domain.lineitem.entity.CarLineItem.class, com.pobluesky.backend.domain.lineitem.entity.QCarLineItem.class, PathInits.DIRECT2);

    public final ListPath<com.pobluesky.backend.domain.lineitem.entity.ColdRolledLineItem, com.pobluesky.backend.domain.lineitem.entity.QColdRolledLineItem> coldRolledLineItems = this.<com.pobluesky.backend.domain.lineitem.entity.ColdRolledLineItem, com.pobluesky.backend.domain.lineitem.entity.QColdRolledLineItem>createList("coldRolledLineItems", com.pobluesky.backend.domain.lineitem.entity.ColdRolledLineItem.class, com.pobluesky.backend.domain.lineitem.entity.QColdRolledLineItem.class, PathInits.DIRECT2);

    public final StringPath corporate = createString("corporate");

    public final StringPath corporationCode = createString("corporationCode");

    public final EnumPath<Country> country = createEnum("country", Country.class);

    //inherited
    public final DateTimePath<java.time.LocalDateTime> createdDate = _super.createdDate;

    public final com.pobluesky.backend.domain.user.entity.QCustomer customer;

    public final StringPath customerRequestDate = createString("customerRequestDate");

    public final StringPath elapsedDays = createString("elapsedDays");

    public final StringPath files = createString("files");

    public final ListPath<com.pobluesky.backend.domain.lineitem.entity.HotRolledLineItem, com.pobluesky.backend.domain.lineitem.entity.QHotRolledLineItem> hotRolledLineItems = this.<com.pobluesky.backend.domain.lineitem.entity.HotRolledLineItem, com.pobluesky.backend.domain.lineitem.entity.QHotRolledLineItem>createList("hotRolledLineItems", com.pobluesky.backend.domain.lineitem.entity.HotRolledLineItem.class, com.pobluesky.backend.domain.lineitem.entity.QHotRolledLineItem.class, PathInits.DIRECT2);

    public final EnumPath<Industry> industry = createEnum("industry", Industry.class);

    public final NumberPath<Long> inquiryId = createNumber("inquiryId", Long.class);

    public final EnumPath<InquiryType> inquiryType = createEnum("inquiryType", InquiryType.class);

    public final BooleanPath isActivated = createBoolean("isActivated");

    //inherited
    public final DateTimePath<java.time.LocalDateTime> modifiedDate = _super.modifiedDate;

    public final EnumPath<ProductType> productType = createEnum("productType", ProductType.class);

    public final EnumPath<Progress> progress = createEnum("progress", Progress.class);

    public final StringPath responseDeadline = createString("responseDeadline");

    public final StringPath salesPerson = createString("salesPerson");

    public final ListPath<com.pobluesky.backend.domain.lineitem.entity.ThickPlateLineItem, com.pobluesky.backend.domain.lineitem.entity.QThickPlateLineItem> thickPlateLineItems = this.<com.pobluesky.backend.domain.lineitem.entity.ThickPlateLineItem, com.pobluesky.backend.domain.lineitem.entity.QThickPlateLineItem>createList("thickPlateLineItems", com.pobluesky.backend.domain.lineitem.entity.ThickPlateLineItem.class, com.pobluesky.backend.domain.lineitem.entity.QThickPlateLineItem.class, PathInits.DIRECT2);

    public final ListPath<com.pobluesky.backend.domain.lineitem.entity.WireRodLineItem, com.pobluesky.backend.domain.lineitem.entity.QWireRodLineItem> wireRodLineItems = this.<com.pobluesky.backend.domain.lineitem.entity.WireRodLineItem, com.pobluesky.backend.domain.lineitem.entity.QWireRodLineItem>createList("wireRodLineItems", com.pobluesky.backend.domain.lineitem.entity.WireRodLineItem.class, com.pobluesky.backend.domain.lineitem.entity.QWireRodLineItem.class, PathInits.DIRECT2);

    public QInquiry(String variable) {
        this(Inquiry.class, forVariable(variable), INITS);
    }

    public QInquiry(Path<? extends Inquiry> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QInquiry(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QInquiry(PathMetadata metadata, PathInits inits) {
        this(Inquiry.class, metadata, inits);
    }

    public QInquiry(Class<? extends Inquiry> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.customer = inits.isInitialized("customer") ? new com.pobluesky.backend.domain.user.entity.QCustomer(forProperty("customer")) : null;
    }

}

