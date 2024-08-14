package com.pobluesky.backend.domain.quality.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;


/**
 * QQualityReviewInfo is a Querydsl query type for QualityReviewInfo
 */
@Generated("com.querydsl.codegen.DefaultEmbeddableSerializer")
public class QQualityReviewInfo extends BeanPath<QualityReviewInfo> {

    private static final long serialVersionUID = 1391567174L;

    public static final QQualityReviewInfo qualityReviewInfo = new QQualityReviewInfo("qualityReviewInfo");

    public final BooleanPath availableLab = createBoolean("availableLab");

    public final StringPath coatingMetalQuantity = createString("coatingMetalQuantity");

    public final StringPath coatingOilQuantity = createString("coatingOilQuantity");

    public final StringPath customerQReq = createString("customerQReq");

    public final StringPath finalResult = createString("finalResult");

    public final StringPath finalResultDetails = createString("finalResultDetails");

    public final StringPath orderCategory = createString("orderCategory");

    public final StringPath orderEdge = createString("orderEdge");

    public final NumberPath<Long> standard = createNumber("standard", Long.class);

    public final StringPath thicknessTolerance = createString("thicknessTolerance");

    public QQualityReviewInfo(String variable) {
        super(QualityReviewInfo.class, forVariable(variable));
    }

    public QQualityReviewInfo(Path<? extends QualityReviewInfo> path) {
        super(path.getType(), path.getMetadata());
    }

    public QQualityReviewInfo(PathMetadata metadata) {
        super(QualityReviewInfo.class, metadata);
    }

}

