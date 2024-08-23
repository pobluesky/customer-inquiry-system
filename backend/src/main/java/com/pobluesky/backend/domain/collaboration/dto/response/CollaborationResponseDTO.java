package com.pobluesky.backend.domain.collaboration.dto.response;

import com.pobluesky.backend.domain.collaboration.entity.ColStatus;
import com.pobluesky.backend.domain.collaboration.entity.Collaboration;

import lombok.Builder;

@Builder
public record CollaborationResponseDTO(
    Long colId,
    Long questionId,
    ManagerResponseDTO colManagerFromResponseDto,
    ManagerResponseDTO colManagerToResponseDto,
    ColStatus colStatus,
    String colContents,
    String fileName,
    String filePath
) {

    public static CollaborationResponseDTO from(Collaboration collaboration) {
        ManagerResponseDTO managerFromResponseDTO =
            ManagerResponseDTO.from(collaboration.getColRequestManager());

        ManagerResponseDTO managerToResponseDTO =
            ManagerResponseDTO.from(collaboration.getColResponseManager());

        return CollaborationResponseDTO.builder()
            .colId(collaboration.getColId())
            .questionId(collaboration.getQuestion().getQuestionId())
            .colManagerFromResponseDto(managerFromResponseDTO)
            .colManagerToResponseDto(managerToResponseDTO)
            .colStatus(collaboration.getColStatus())
            .colContents(collaboration.getColContents())
            .fileName(collaboration.getQuestion().getFileName())
            .filePath(collaboration.getQuestion().getFilePath())
            .build();
    }
}
