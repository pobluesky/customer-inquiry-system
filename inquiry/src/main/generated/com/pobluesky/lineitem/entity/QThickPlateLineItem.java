package com.pobluesky.lineitem.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QThickPlateLineItem is a Querydsl query type for ThickPlateLineItem
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QThickPlateLineItem extends EntityPathBase<ThickPlateLineItem> {

    private static final long serialVersionUID = 1143004919L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QThickPlateLineItem thickPlateLineItem = new QThickPlateLineItem("thickPlateLineItem");

    public final QLineItem _super = new QLineItem(this);

    public final StringPath additionalRequests = createString("additionalRequests");

    public final StringPath agingShow = createString("agingShow");

    //inherited
    public final DateTimePath<java.time.LocalDateTime> createdDate = _super.createdDate;

    public final StringPath curve = createString("curve");

    public final BooleanPath dropWeightTest = createBoolean("dropWeightTest");

    public final StringPath extraShow = createString("extraShow");

    public final BooleanPath grainSizeAnalysis = createBoolean("grainSizeAnalysis");

    public final StringPath hardness = createString("hardness");

    public final com.pobluesky.inquiry.entity.QInquiry inquiry;

    //inherited
    public final BooleanPath isActivated = _super.isActivated;

    public final StringPath ladleIngredient = createString("ladleIngredient");

    public final NumberPath<Long> lineItemId = createNumber("lineItemId", Long.class);

    //inherited
    public final DateTimePath<java.time.LocalDateTime> modifiedDate = _super.modifiedDate;

    public final StringPath orderInfo = createString("orderInfo");

    public final StringPath orderPurpose = createString("orderPurpose");

    public final StringPath productIngredient = createString("productIngredient");

    public final StringPath seal = createString("seal");

    public final StringPath show = createString("show");

    public final BooleanPath ultrasonicTransducer = createBoolean("ultrasonicTransducer");

    public QThickPlateLineItem(String variable) {
        this(ThickPlateLineItem.class, forVariable(variable), INITS);
    }

    public QThickPlateLineItem(Path<? extends ThickPlateLineItem> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QThickPlateLineItem(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QThickPlateLineItem(PathMetadata metadata, PathInits inits) {
        this(ThickPlateLineItem.class, metadata, inits);
    }

    public QThickPlateLineItem(Class<? extends ThickPlateLineItem> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.inquiry = inits.isInitialized("inquiry") ? new com.pobluesky.inquiry.entity.QInquiry(forProperty("inquiry")) : null;
    }

}

