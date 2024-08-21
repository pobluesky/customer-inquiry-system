package com.pobluesky.backend.domain.collaboration.dto.request;

import com.pobluesky.backend.domain.collaboration.entity.Collaboration;
import com.pobluesky.backend.domain.question.entity.Question;
import com.pobluesky.backend.domain.user.entity.Manager;

import io.swagger.v3.oas.annotations.media.Schema;

import org.springframework.web.multipart.MultipartFile;

public record CollaborationCreateRequestDTO(
    Long colReqId,
    Long colResId,
    String colContents,
//    @Schema(hidden = true) MultipartFile files
    String files
) {

    public Collaboration toCollaborationEntity(
        Manager colRequestManager,
        Manager colResponseManager,
        Question question,
        String filePath
    ) {

        return Collaboration.builder()
            .question(question)
            .colRequestManager(colRequestManager)
            .colResponseManager(colResponseManager)
            .colContents(colContents)
            .files(filePath)
            .build();
    }
}
