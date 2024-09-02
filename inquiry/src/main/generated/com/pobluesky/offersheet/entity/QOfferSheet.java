package com.pobluesky.offersheet.entity;

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

    private static final long serialVersionUID = -1871999914L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QOfferSheet offerSheet = new QOfferSheet("offerSheet");

    public final StringPath destination = createString("destination");

    public final com.pobluesky.inquiry.entity.QInquiry inquiry;

    public final StringPath message = createString("message");

    public final NumberPath<Long> offerSheetId = createNumber("offerSheetId", Long.class);

    public final StringPath paymentTerms = createString("paymentTerms");

    public final StringPath priceTerms = createString("priceTerms");

    public final ListPath<com.pobluesky.receipt.entity.Receipt, com.pobluesky.receipt.entity.QReceipt> receipts = this.<com.pobluesky.receipt.entity.Receipt, com.pobluesky.receipt.entity.QReceipt>createList("receipts", com.pobluesky.receipt.entity.Receipt.class, com.pobluesky.receipt.entity.QReceipt.class, PathInits.DIRECT2);

    public final StringPath remark = createString("remark");

    public final DatePath<java.time.LocalDate> shipment = createDate("shipment", java.time.LocalDate.class);

    public final DatePath<java.time.LocalDate> validity = createDate("validity", java.time.LocalDate.class);

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
        this.inquiry = inits.isInitialized("inquiry") ? new com.pobluesky.inquiry.entity.QInquiry(forProperty("inquiry")) : null;
    }

}

