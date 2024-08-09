package com.pobluesky.backend.domain.review.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;


/**
 * QSalesInfo is a Querydsl query type for SalesInfo
 */
@Generated("com.querydsl.codegen.DefaultEmbeddableSerializer")
public class QSalesInfo extends BeanPath<SalesInfo> {

    private static final long serialVersionUID = 798267528L;

    public static final QSalesInfo salesInfo = new QSalesInfo("salesInfo");

    public final EnumPath<ContractType> contract = createEnum("contract", ContractType.class);

    public final StringPath thicknessNotify = createString("thicknessNotify");

    public QSalesInfo(String variable) {
        super(SalesInfo.class, forVariable(variable));
    }

    public QSalesInfo(Path<? extends SalesInfo> path) {
        super(path.getType(), path.getMetadata());
    }

    public QSalesInfo(PathMetadata metadata) {
        super(SalesInfo.class, metadata);
    }

}

