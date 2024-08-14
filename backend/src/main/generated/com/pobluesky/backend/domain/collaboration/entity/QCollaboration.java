package com.pobluesky.backend.domain.collaboration.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QCollaboration is a Querydsl query type for Collaboration
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QCollaboration extends EntityPathBase<Collaboration> {

    private static final long serialVersionUID = -2026972608L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QCollaboration collaboration = new QCollaboration("collaboration");

    public final com.pobluesky.backend.global.QBaseEntity _super = new com.pobluesky.backend.global.QBaseEntity(this);

    public final StringPath colContents = createString("colContents");

    public final NumberPath<Long> colId = createNumber("colId", Long.class);

    public final StringPath colReply = createString("colReply");

    public final com.pobluesky.backend.domain.user.entity.QManager colRequestManager;

    public final com.pobluesky.backend.domain.user.entity.QManager colResponseManager;

    public final EnumPath<ColStatus> colStatus = createEnum("colStatus", ColStatus.class);

    //inherited
    public final DateTimePath<java.time.LocalDateTime> createdDate = _super.createdDate;

    public final StringPath files = createString("files");

    //inherited
    public final DateTimePath<java.time.LocalDateTime> modifiedDate = _super.modifiedDate;

    public final com.pobluesky.backend.domain.question.entity.QQuestion question;

    public QCollaboration(String variable) {
        this(Collaboration.class, forVariable(variable), INITS);
    }

    public QCollaboration(Path<? extends Collaboration> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QCollaboration(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QCollaboration(PathMetadata metadata, PathInits inits) {
        this(Collaboration.class, metadata, inits);
    }

    public QCollaboration(Class<? extends Collaboration> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.colRequestManager = inits.isInitialized("colRequestManager") ? new com.pobluesky.backend.domain.user.entity.QManager(forProperty("colRequestManager")) : null;
        this.colResponseManager = inits.isInitialized("colResponseManager") ? new com.pobluesky.backend.domain.user.entity.QManager(forProperty("colResponseManager")) : null;
        this.question = inits.isInitialized("question") ? new com.pobluesky.backend.domain.question.entity.QQuestion(forProperty("question"), inits.get("question")) : null;
    }

}

