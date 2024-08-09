package com.pobluesky.backend.domain.notification.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QCustomerNotification is a Querydsl query type for CustomerNotification
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QCustomerNotification extends EntityPathBase<CustomerNotification> {

    private static final long serialVersionUID = 1592555470L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QCustomerNotification customerNotification = new QCustomerNotification("customerNotification");

    public final QNotification _super = new QNotification(this);

    //inherited
    public final DateTimePath<java.time.LocalDateTime> createdDate = _super.createdDate;

    public final com.pobluesky.backend.domain.user.entity.QCustomer customer;

    //inherited
    public final BooleanPath isRead = _super.isRead;

    //inherited
    public final DateTimePath<java.time.LocalDateTime> modifiedDate = _super.modifiedDate;

    //inherited
    public final StringPath notificationContents = _super.notificationContents;

    //inherited
    public final NumberPath<Long> notificationId = _super.notificationId;

    public QCustomerNotification(String variable) {
        this(CustomerNotification.class, forVariable(variable), INITS);
    }

    public QCustomerNotification(Path<? extends CustomerNotification> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QCustomerNotification(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QCustomerNotification(PathMetadata metadata, PathInits inits) {
        this(CustomerNotification.class, metadata, inits);
    }

    public QCustomerNotification(Class<? extends CustomerNotification> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.customer = inits.isInitialized("customer") ? new com.pobluesky.backend.domain.user.entity.QCustomer(forProperty("customer")) : null;
    }

}

