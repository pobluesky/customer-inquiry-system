package com.pobluesky.voc.collaboration.dto.response;

import com.pobluesky.voc.collaboration.entity.ColStatus;
import com.pobluesky.voc.collaboration.entity.Collaboration;
import com.pobluesky.voc.feign.Manager;
import com.pobluesky.voc.feign.UserClient;
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
    String filePath,
    String vocFileName,
    String vocFilePath
) {

    public static CollaborationResponseDTO from(Collaboration collaboration, UserClient userClient) {
        Manager managerFromDetails = userClient.getManagerByIdWithoutToken(collaboration.getColRequestManagerId()).getData();
        ManagerResponseDTO managerFromResponseDTO = ManagerResponseDTO.from(managerFromDetails);

        Manager managerToDetails = userClient.getManagerByIdWithoutToken(collaboration.getColResponseManagerId()).getData();
        ManagerResponseDTO managerToResponseDTO = ManagerResponseDTO.from(managerToDetails);

        return CollaborationResponseDTO.builder()
            .colId(collaboration.getColId())
            .questionId(collaboration.getQuestion().getQuestionId())
            .colManagerFromResponseDto(managerFromResponseDTO)
            .colManagerToResponseDto(managerToResponseDTO)
            .colStatus(collaboration.getColStatus())
            .colContents(collaboration.getColContents())
            .fileName(collaboration.getFileName())
            .filePath(collaboration.getFilePath())
            .vocFileName(collaboration.getQuestion().getFileName())
            .vocFilePath(collaboration.getQuestion().getFilePath())
            .build();
    }
}
