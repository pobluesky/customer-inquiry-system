package com.pobluesky.backend.domain.offersheet.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QOfferSheet is a Querydsl query type for OfferSheet
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QOfferSheet extends EntityPathBase<OfferSheet> {

    private static final long serialVersionUID = 1262477152L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QOfferSheet offerSheet = new QOfferSheet("offerSheet");

    public final StringPath destination = createString("destination");

    public final StringPath diameter = createString("diameter");

    public final StringPath edge = createString("edge");

    public final com.pobluesky.backend.domain.inquiry.entity.QInquiry inquiry;

    public final NumberPath<Long> offerSheetId = createNumber("offerSheetId", Long.class);

    public final StringPath paymentTerms = createString("paymentTerms");

    public final StringPath price = createString("price");

    public final StringPath priceTerms = createString("priceTerms");

    public final StringPath product = createString("product");

    public final StringPath quantity = createString("quantity");

    public final StringPath remark = createString("remark");

    public final DatePath<java.time.LocalDate> shipment = createDate("shipment", java.time.LocalDate.class);

    public final StringPath specification = createString("specification");

    public final StringPath surfaceFinish = createString("surfaceFinish");

    public final StringPath thickness = createString("thickness");

    public final StringPath unitMaxWeight = createString("unitMaxWeight");

    public final StringPath unitMinWeight = createString("unitMinWeight");

    public final StringPath usage = createString("usage");

    public final DatePath<java.time.LocalDate> validity = createDate("validity", java.time.LocalDate.class);

    public final StringPath width = createString("width");

    public QOfferSheet(String variable) {
        this(OfferSheet.class, forVariable(variable), INITS);
    }

    public QOfferSheet(Path<? extends OfferSheet> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QOfferSheet(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QOfferSheet(PathMetadata metadata, PathInits inits) {
        this(OfferSheet.class, metadata, inits);
    }

    public QOfferSheet(Class<? extends OfferSheet> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.inquiry = inits.isInitialized("inquiry") ? new com.pobluesky.backend.domain.inquiry.entity.QInquiry(forProperty("inquiry"), inits.get("inquiry")) : null;
    }

}

