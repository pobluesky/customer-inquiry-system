package com.pobluesky.lineitem.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QWireRodLineItem is a Querydsl query type for WireRodLineItem
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QWireRodLineItem extends EntityPathBase<WireRodLineItem> {

    private static final long serialVersionUID = -555461518L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QWireRodLineItem wireRodLineItem = new QWireRodLineItem("wireRodLineItem");

    public final QLineItem _super = new QLineItem(this);

    public final StringPath annualCost = createString("annualCost");

    //inherited
    public final DateTimePath<java.time.LocalDateTime> createdDate = _super.createdDate;

    public final StringPath customerProcessing = createString("customerProcessing");

    public final StringPath diameter = createString("diameter");

    public final StringPath expectedDeadline = createString("expectedDeadline");

    public final StringPath finalCustomer = createString("finalCustomer");

    public final StringPath finalUse = createString("finalUse");

    public final NumberPath<Integer> initialQuantity = createNumber("initialQuantity", Integer.class);

    public final EnumPath<com.pobluesky.lineitem.entity.type.InqName> inqName = createEnum("inqName", com.pobluesky.lineitem.entity.type.InqName.class);

    public final com.pobluesky.inquiry.entity.QInquiry inquiry;

    //inherited
    public final BooleanPath isActivated = _super.isActivated;

    public final EnumPath<com.pobluesky.lineitem.entity.type.wirerod.Kind> kind = createEnum("kind", com.pobluesky.lineitem.entity.type.wirerod.Kind.class);

    public final StringPath legalRegulatoryReview = createString("legalRegulatoryReview");

    public final StringPath legalRegulatoryReviewDetail = createString("legalRegulatoryReviewDetail");

    public final NumberPath<Long> lineItemId = createNumber("lineItemId", Long.class);

    //inherited
    public final DateTimePath<java.time.LocalDateTime> modifiedDate = _super.modifiedDate;

    public final StringPath orderCategory = createString("orderCategory");

    public final NumberPath<Integer> quantity = createNumber("quantity", Integer.class);

    public final StringPath transportationDestination = createString("transportationDestination");

    public QWireRodLineItem(String variable) {
        this(WireRodLineItem.class, forVariable(variable), INITS);
    }

    public QWireRodLineItem(Path<? extends WireRodLineItem> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QWireRodLineItem(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QWireRodLineItem(PathMetadata metadata, PathInits inits) {
        this(WireRodLineItem.class, metadata, inits);
    }

    public QWireRodLineItem(Class<? extends WireRodLineItem> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.inquiry = inits.isInitialized("inquiry") ? new com.pobluesky.inquiry.entity.QInquiry(forProperty("inquiry")) : null;
    }

}

