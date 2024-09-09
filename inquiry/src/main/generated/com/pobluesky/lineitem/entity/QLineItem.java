package com.pobluesky.lineitem.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;


/**
 * QLineItem is a Querydsl query type for LineItem
 */
@Generated("com.querydsl.codegen.DefaultSupertypeSerializer")
public class QLineItem extends EntityPathBase<LineItem> {

    private static final long serialVersionUID = -2093503714L;

    public static final QLineItem lineItem = new QLineItem("lineItem");

    public final com.pobluesky.global.QBaseEntity _super = new com.pobluesky.global.QBaseEntity(this);

    //inherited
    public final DateTimePath<java.time.LocalDateTime> createdDate = _super.createdDate;

    public final BooleanPath isActivated = createBoolean("isActivated");

    //inherited
    public final DateTimePath<java.time.LocalDateTime> modifiedDate = _super.modifiedDate;

    public QLineItem(String variable) {
        super(LineItem.class, forVariable(variable));
    }

    public QLineItem(Path<? extends LineItem> path) {
        super(path.getType(), path.getMetadata());
    }

    public QLineItem(PathMetadata metadata) {
        super(LineItem.class, metadata);
    }

}

