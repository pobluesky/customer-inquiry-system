package com.pobluesky.backend.domain.collaboration.dto.request;

import com.pobluesky.backend.domain.collaboration.entity.Collaboration;
import com.pobluesky.backend.domain.question.entity.Question;
import com.pobluesky.backend.domain.user.entity.Manager;

public record CollaborationCreateRequestDTO(
    Long colReqId,
    Long colResId,
    String colContents
) {

    public Collaboration toCollaborationEntity(
        Manager colRequestManager,
        Manager colResponseManager,
        Question question
    ) {

        return Collaboration.builder()
            .question(question)
            .colRequestManager(colRequestManager)
            .colResponseManager(colResponseManager)
            .colContents(colContents)
            .build();
    }
}
