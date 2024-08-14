package com.pobluesky.backend.domain.lineitem.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QHotRolledLineItem is a Querydsl query type for HotRolledLineItem
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QHotRolledLineItem extends EntityPathBase<HotRolledLineItem> {

    private static final long serialVersionUID = -1534875665L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QHotRolledLineItem hotRolledLineItem = new QHotRolledLineItem("hotRolledLineItem");

    public final QLineItem _super = new QLineItem(this);

    //inherited
    public final DateTimePath<java.time.LocalDateTime> createdDate = _super.createdDate;

    public final StringPath flatness = createString("flatness");

    public final StringPath hardness = createString("hardness");

    public final EnumPath<com.pobluesky.backend.domain.lineitem.entity.type.hotrolled.InqName> inqName = createEnum("inqName", com.pobluesky.backend.domain.lineitem.entity.type.hotrolled.InqName.class);

    public final com.pobluesky.backend.domain.inquiry.entity.QInquiry inquiry;

    //inherited
    public final BooleanPath isActivated = _super.isActivated;

    public final EnumPath<com.pobluesky.backend.domain.lineitem.entity.type.hotrolled.Kind> kind = createEnum("kind", com.pobluesky.backend.domain.lineitem.entity.type.hotrolled.Kind.class);

    public final NumberPath<Long> lineItemId = createNumber("lineItemId", Long.class);

    //inherited
    public final DateTimePath<java.time.LocalDateTime> modifiedDate = _super.modifiedDate;

    public final StringPath orderCategory = createString("orderCategory");

    public final StringPath orderEdge = createString("orderEdge");

    public final NumberPath<Integer> quantity = createNumber("quantity", Integer.class);

    public final StringPath thickness = createString("thickness");

    public final StringPath width = createString("width");

    public QHotRolledLineItem(String variable) {
        this(HotRolledLineItem.class, forVariable(variable), INITS);
    }

    public QHotRolledLineItem(Path<? extends HotRolledLineItem> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QHotRolledLineItem(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QHotRolledLineItem(PathMetadata metadata, PathInits inits) {
        this(HotRolledLineItem.class, metadata, inits);
    }

    public QHotRolledLineItem(Class<? extends HotRolledLineItem> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.inquiry = inits.isInitialized("inquiry") ? new com.pobluesky.backend.domain.inquiry.entity.QInquiry(forProperty("inquiry"), inits.get("inquiry")) : null;
    }

}

