package com.pobluesky.backend.domain.lineitem.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QCarLineItem is a Querydsl query type for CarLineItem
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QCarLineItem extends EntityPathBase<CarLineItem> {

    private static final long serialVersionUID = 1989966714L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QCarLineItem carLineItem = new QCarLineItem("carLineItem");

    public final QLineItem _super = new QLineItem(this);

    //inherited
    public final DateTimePath<java.time.LocalDateTime> createdDate = _super.createdDate;

    public final com.pobluesky.backend.domain.inquiry.entity.QInquiry inquiry;

    //inherited
    public final BooleanPath isActivated = _super.isActivated;

    public final EnumPath<com.pobluesky.backend.domain.lineitem.entity.type.car.IxPlate> ixPlate = createEnum("ixPlate", com.pobluesky.backend.domain.lineitem.entity.type.car.IxPlate.class);

    public final EnumPath<com.pobluesky.backend.domain.lineitem.entity.type.car.Kind> kind = createEnum("kind", com.pobluesky.backend.domain.lineitem.entity.type.car.Kind.class);

    public final EnumPath<com.pobluesky.backend.domain.lineitem.entity.type.car.Lab> lab = createEnum("lab", com.pobluesky.backend.domain.lineitem.entity.type.car.Lab.class);

    public final NumberPath<Long> lineItemId = createNumber("lineItemId", Long.class);

    //inherited
    public final DateTimePath<java.time.LocalDateTime> modifiedDate = _super.modifiedDate;

    public final StringPath partName = createString("partName");

    public final StringPath pjtName = createString("pjtName");

    public final NumberPath<Integer> quantity = createNumber("quantity", Integer.class);

    public final StringPath salesVehicleName = createString("salesVehicleName");

    public final EnumPath<com.pobluesky.backend.domain.lineitem.entity.type.car.StandardOrg> standardOrg = createEnum("standardOrg", com.pobluesky.backend.domain.lineitem.entity.type.car.StandardOrg.class);

    public final StringPath thickness = createString("thickness");

    public final StringPath width = createString("width");

    public QCarLineItem(String variable) {
        this(CarLineItem.class, forVariable(variable), INITS);
    }

    public QCarLineItem(Path<? extends CarLineItem> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QCarLineItem(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QCarLineItem(PathMetadata metadata, PathInits inits) {
        this(CarLineItem.class, metadata, inits);
    }

    public QCarLineItem(Class<? extends CarLineItem> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.inquiry = inits.isInitialized("inquiry") ? new com.pobluesky.backend.domain.inquiry.entity.QInquiry(forProperty("inquiry"), inits.get("inquiry")) : null;
    }

}

