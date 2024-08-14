package com.pobluesky.backend.domain.notification.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QManagerNotification is a Querydsl query type for ManagerNotification
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QManagerNotification extends EntityPathBase<ManagerNotification> {

    private static final long serialVersionUID = 447662259L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QManagerNotification managerNotification = new QManagerNotification("managerNotification");

    public final QNotification _super = new QNotification(this);

    //inherited
    public final DateTimePath<java.time.LocalDateTime> createdDate = _super.createdDate;

    //inherited
    public final BooleanPath isRead = _super.isRead;

    public final com.pobluesky.backend.domain.user.entity.QManager manager;

    //inherited
    public final DateTimePath<java.time.LocalDateTime> modifiedDate = _super.modifiedDate;

    //inherited
    public final StringPath notificationContents = _super.notificationContents;

    //inherited
    public final NumberPath<Long> notificationId = _super.notificationId;

    public QManagerNotification(String variable) {
        this(ManagerNotification.class, forVariable(variable), INITS);
    }

    public QManagerNotification(Path<? extends ManagerNotification> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QManagerNotification(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QManagerNotification(PathMetadata metadata, PathInits inits) {
        this(ManagerNotification.class, metadata, inits);
    }

    public QManagerNotification(Class<? extends ManagerNotification> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.manager = inits.isInitialized("manager") ? new com.pobluesky.backend.domain.user.entity.QManager(forProperty("manager")) : null;
    }

}

