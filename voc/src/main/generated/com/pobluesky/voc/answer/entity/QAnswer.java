package com.pobluesky.voc.answer.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QAnswer is a Querydsl query type for Answer
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QAnswer extends EntityPathBase<Answer> {

    private static final long serialVersionUID = 983893968L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QAnswer answer = new QAnswer("answer");

    public final com.pobluesky.voc.global.QBaseEntity _super = new com.pobluesky.voc.global.QBaseEntity(this);

    public final NumberPath<Long> answerId = createNumber("answerId", Long.class);

    public final StringPath contents = createString("contents");

    //inherited
    public final DateTimePath<java.time.LocalDateTime> createdDate = _super.createdDate;

    public final NumberPath<Long> customerId = createNumber("customerId", Long.class);

    public final StringPath fileName = createString("fileName");

    public final StringPath filePath = createString("filePath");

    public final NumberPath<Long> inquiryId = createNumber("inquiryId", Long.class);

    public final BooleanPath isActivated = createBoolean("isActivated");

    public final NumberPath<Long> managerId = createNumber("managerId", Long.class);

    //inherited
    public final DateTimePath<java.time.LocalDateTime> modifiedDate = _super.modifiedDate;

    public final com.pobluesky.voc.question.entity.QQuestion question;

    public final StringPath title = createString("title");

    public QAnswer(String variable) {
        this(Answer.class, forVariable(variable), INITS);
    }

    public QAnswer(Path<? extends Answer> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QAnswer(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QAnswer(PathMetadata metadata, PathInits inits) {
        this(Answer.class, metadata, inits);
    }

    public QAnswer(Class<? extends Answer> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.question = inits.isInitialized("question") ? new com.pobluesky.voc.question.entity.QQuestion(forProperty("question"), inits.get("question")) : null;
    }

}

