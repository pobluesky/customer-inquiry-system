package com.pobluesky.backend.domain.lineitem.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QColdRolledLineItem is a Querydsl query type for ColdRolledLineItem
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QColdRolledLineItem extends EntityPathBase<ColdRolledLineItem> {

    private static final long serialVersionUID = -1071248408L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QColdRolledLineItem coldRolledLineItem = new QColdRolledLineItem("coldRolledLineItem");

    public final QLineItem _super = new QLineItem(this);

    //inherited
    public final DateTimePath<java.time.LocalDateTime> createdDate = _super.createdDate;

    public final DatePath<java.time.LocalDate> expectedDeadline = createDate("expectedDeadline", java.time.LocalDate.class);

    public final StringPath inDiameter = createString("inDiameter");

    public final EnumPath<com.pobluesky.backend.domain.lineitem.entity.type.coldrolled.InqName> inqName = createEnum("inqName", com.pobluesky.backend.domain.lineitem.entity.type.coldrolled.InqName.class);

    public final com.pobluesky.backend.domain.inquiry.entity.QInquiry inquiry;

    //inherited
    public final BooleanPath isActivated = _super.isActivated;

    public final EnumPath<com.pobluesky.backend.domain.lineitem.entity.type.coldrolled.Kind> kind = createEnum("kind", com.pobluesky.backend.domain.lineitem.entity.type.coldrolled.Kind.class);

    public final NumberPath<Long> lineItemId = createNumber("lineItemId", Long.class);

    //inherited
    public final DateTimePath<java.time.LocalDateTime> modifiedDate = _super.modifiedDate;

    public final StringPath orderCategory = createString("orderCategory");

    public final StringPath orderEdge = createString("orderEdge");

    public final StringPath outDiameter = createString("outDiameter");

    public final NumberPath<Integer> quantity = createNumber("quantity", Integer.class);

    public final StringPath thickness = createString("thickness");

    public final StringPath width = createString("width");

    public QColdRolledLineItem(String variable) {
        this(ColdRolledLineItem.class, forVariable(variable), INITS);
    }

    public QColdRolledLineItem(Path<? extends ColdRolledLineItem> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QColdRolledLineItem(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QColdRolledLineItem(PathMetadata metadata, PathInits inits) {
        this(ColdRolledLineItem.class, metadata, inits);
    }

    public QColdRolledLineItem(Class<? extends ColdRolledLineItem> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.inquiry = inits.isInitialized("inquiry") ? new com.pobluesky.backend.domain.inquiry.entity.QInquiry(forProperty("inquiry"), inits.get("inquiry")) : null;
    }

}
