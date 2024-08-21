package com.pobluesky.backend.domain.collaboration.dto.response;

import com.pobluesky.backend.domain.collaboration.entity.ColStatus;
import com.pobluesky.backend.domain.collaboration.entity.Collaboration;
import lombok.Builder;

@Builder
public record CollaborationDetailResponseDTO(
    Long colId,
    ManagerResponseDTO colManagerFromResponseDto,
    ManagerResponseDTO colManagerToResponseDto,
    ColStatus colStatus,
    String colContents,
    String colReply,
    String files
//    String fileName,
//    String filePath
) {

    public static CollaborationDetailResponseDTO from(Collaboration collaboration) {
        ManagerResponseDTO managerFromResponseDTO =
            ManagerResponseDTO.from(collaboration.getColRequestManager());

        ManagerResponseDTO managerToResponseDTO =
            ManagerResponseDTO.from(collaboration.getColResponseManager());

        return CollaborationDetailResponseDTO.builder()
            .colId(collaboration.getColId())
            .colManagerFromResponseDto(managerFromResponseDTO)
            .colManagerToResponseDto(managerToResponseDTO)
            .colStatus(collaboration.getColStatus())
            .colContents(collaboration.getColContents())
            .colReply(collaboration.getColReply())
            .files(collaboration.getFiles())
//            .fileName(collaboration.getFileName())
//            .filePath(collaboration.getFilePath())
            .build();
    }
}
