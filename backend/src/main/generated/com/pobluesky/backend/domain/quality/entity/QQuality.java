package com.pobluesky.backend.domain.quality.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QQuality is a Querydsl query type for Quality
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QQuality extends EntityPathBase<Quality> {

    private static final long serialVersionUID = -1371627264L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QQuality quality = new QQuality("quality");

    public final com.pobluesky.backend.global.QBaseEntity _super = new com.pobluesky.backend.global.QBaseEntity(this);

    //inherited
    public final DateTimePath<java.time.LocalDateTime> createdDate = _super.createdDate;

    public final com.pobluesky.backend.domain.inquiry.entity.QInquiry inquiry;

    //inherited
    public final DateTimePath<java.time.LocalDateTime> modifiedDate = _super.modifiedDate;

    public final StringPath qualityComments = createString("qualityComments");

    public final NumberPath<Long> qualityId = createNumber("qualityId", Long.class);

    public final QQualityReviewInfo qualityReviewInfo;

    public QQuality(String variable) {
        this(Quality.class, forVariable(variable), INITS);
    }

    public QQuality(Path<? extends Quality> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QQuality(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QQuality(PathMetadata metadata, PathInits inits) {
        this(Quality.class, metadata, inits);
    }

    public QQuality(Class<? extends Quality> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.inquiry = inits.isInitialized("inquiry") ? new com.pobluesky.backend.domain.inquiry.entity.QInquiry(forProperty("inquiry"), inits.get("inquiry")) : null;
        this.qualityReviewInfo = inits.isInitialized("qualityReviewInfo") ? new QQualityReviewInfo(forProperty("qualityReviewInfo")) : null;
    }

}

