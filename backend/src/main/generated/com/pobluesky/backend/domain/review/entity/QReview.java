package com.pobluesky.backend.domain.review.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QReview is a Querydsl query type for Review
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QReview extends EntityPathBase<Review> {

    private static final long serialVersionUID = 1500711274L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QReview review = new QReview("review");

    public final com.pobluesky.backend.global.QBaseEntity _super = new com.pobluesky.backend.global.QBaseEntity(this);

    public final StringPath attachmentFile = createString("attachmentFile");

    //inherited
    public final DateTimePath<java.time.LocalDateTime> createdDate = _super.createdDate;

    public final StringPath finalReviewText = createString("finalReviewText");

    public final com.pobluesky.backend.domain.inquiry.entity.QInquiry inquiry;

    //inherited
    public final DateTimePath<java.time.LocalDateTime> modifiedDate = _super.modifiedDate;

    public final NumberPath<Long> reviewId = createNumber("reviewId", Long.class);

    public final StringPath reviewText = createString("reviewText");

    public final QSalesInfo salesInfo;

    public final StringPath tsReviewReq = createString("tsReviewReq");

    public QReview(String variable) {
        this(Review.class, forVariable(variable), INITS);
    }

    public QReview(Path<? extends Review> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QReview(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QReview(PathMetadata metadata, PathInits inits) {
        this(Review.class, metadata, inits);
    }

    public QReview(Class<? extends Review> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.inquiry = inits.isInitialized("inquiry") ? new com.pobluesky.backend.domain.inquiry.entity.QInquiry(forProperty("inquiry"), inits.get("inquiry")) : null;
        this.salesInfo = inits.isInitialized("salesInfo") ? new QSalesInfo(forProperty("salesInfo")) : null;
    }

}

