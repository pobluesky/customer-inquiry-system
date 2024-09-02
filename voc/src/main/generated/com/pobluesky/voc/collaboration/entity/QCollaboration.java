package com.pobluesky.voc.collaboration.entity;

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

    private static final long serialVersionUID = 819641562L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QCollaboration collaboration = new QCollaboration("collaboration");

    public final com.pobluesky.config.global.QBaseEntity _super = new com.pobluesky.config.global.QBaseEntity(this);

    public final StringPath colContents = createString("colContents");

    public final NumberPath<Long> colId = createNumber("colId", Long.class);

    public final StringPath colReply = createString("colReply");

    public final NumberPath<Long> colRequestManagerId = createNumber("colRequestManagerId", Long.class);

    public final NumberPath<Long> colResponseManagerId = createNumber("colResponseManagerId", Long.class);

    public final EnumPath<ColStatus> colStatus = createEnum("colStatus", ColStatus.class);

    //inherited
    public final DateTimePath<java.time.LocalDateTime> createdDate = _super.createdDate;

    public final StringPath fileName = createString("fileName");

    public final StringPath filePath = createString("filePath");

    //inherited
    public final DateTimePath<java.time.LocalDateTime> modifiedDate = _super.modifiedDate;

    public final com.pobluesky.voc.question.entity.QQuestion question;

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
        this.question = inits.isInitialized("question") ? new com.pobluesky.voc.question.entity.QQuestion(forProperty("question"), inits.get("question")) : null;
    }

}

