package com.pobluesky.backend.domain.collaboration.dto.response;

import com.pobluesky.backend.domain.collaboration.entity.ColStatus;
import com.pobluesky.backend.domain.collaboration.entity.Collaboration;

import lombok.Builder;

import java.time.LocalDateTime;

@Builder
public record CollaborationDetailResponseDTO(

    Long colId,

    Long questionId,

    ManagerResponseDTO colManagerFromResponseDto,

    ManagerResponseDTO colManagerToResponseDto,

    ColStatus colStatus,

    String colContents,

    String colReply,

    LocalDateTime createdDate,

    String fileName,

    String filePath,

    String vocFileName,

    String vocFilePath
) {
    public static CollaborationDetailResponseDTO from(Collaboration collaboration) {
        ManagerResponseDTO managerFromResponseDTO =
            ManagerResponseDTO.from(collaboration.getColRequestManager());

        ManagerResponseDTO managerToResponseDTO =
            ManagerResponseDTO.from(collaboration.getColResponseManager());

        return CollaborationDetailResponseDTO.builder()
            .colId(collaboration.getColId())
            .questionId(collaboration.getQuestion().getQuestionId())
            .colManagerFromResponseDto(managerFromResponseDTO)
            .colManagerToResponseDto(managerToResponseDTO)
            .colStatus(collaboration.getColStatus())
            .colContents(collaboration.getColContents())
            .colReply(collaboration.getColReply())
            .createdDate(collaboration.getCreatedDate())
            .fileName(collaboration.getFileName())
            .filePath(collaboration.getFilePath())
            .vocFileName(collaboration.getQuestion().getFileName())
            .vocFilePath(collaboration.getQuestion().getFilePath())
            .build();
    }
}
