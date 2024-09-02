package com.pobluesky.receipt.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QReceipt is a Querydsl query type for Receipt
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QReceipt extends EntityPathBase<Receipt> {

    private static final long serialVersionUID = -791214762L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QReceipt receipt = new QReceipt("receipt");

    public final com.pobluesky.config.global.QBaseEntity _super = new com.pobluesky.config.global.QBaseEntity(this);

    //inherited
    public final DateTimePath<java.time.LocalDateTime> createdDate = _super.createdDate;

    public final StringPath diameter = createString("diameter");

    public final StringPath edge = createString("edge");

    public final BooleanPath isActivated = createBoolean("isActivated");

    //inherited
    public final DateTimePath<java.time.LocalDateTime> modifiedDate = _super.modifiedDate;

    public final com.pobluesky.offersheet.entity.QOfferSheet offerSheet;

    public final StringPath price = createString("price");

    public final StringPath product = createString("product");

    public final StringPath quantity = createString("quantity");

    public final NumberPath<Long> receiptId = createNumber("receiptId", Long.class);

    public final StringPath specification = createString("specification");

    public final StringPath surfaceFinish = createString("surfaceFinish");

    public final StringPath thickness = createString("thickness");

    public final StringPath unitMaxWeight = createString("unitMaxWeight");

    public final StringPath unitMinWeight = createString("unitMinWeight");

    public final StringPath usage = createString("usage");

    public final StringPath width = createString("width");

    public QReceipt(String variable) {
        this(Receipt.class, forVariable(variable), INITS);
    }

    public QReceipt(Path<? extends Receipt> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QReceipt(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QReceipt(PathMetadata metadata, PathInits inits) {
        this(Receipt.class, metadata, inits);
    }

    public QReceipt(Class<? extends Receipt> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.offerSheet = inits.isInitialized("offerSheet") ? new com.pobluesky.offersheet.entity.QOfferSheet(forProperty("offerSheet"), inits.get("offerSheet")) : null;
    }

}

