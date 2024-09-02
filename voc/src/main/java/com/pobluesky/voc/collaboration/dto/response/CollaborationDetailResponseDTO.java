package com.pobluesky.voc.collaboration.dto.response;

import com.pobluesky.voc.collaboration.entity.ColStatus;
import com.pobluesky.voc.collaboration.entity.Collaboration;
import com.pobluesky.voc.feign.Manager;
import com.pobluesky.voc.feign.UserClient;
import lombok.Builder;

@Builder
public record CollaborationDetailResponseDTO(
    Long colId,
    Long questionId,
    ManagerResponseDTO colManagerFromResponseDto,
    ManagerResponseDTO colManagerToResponseDto,
    ColStatus colStatus,
    String colContents,
    String colReply,
    String fileName,
    String filePath,
    String vocFileName,
    String vocFilePath
) {

    public static CollaborationDetailResponseDTO from(Collaboration collaboration, UserClient userClient) {
        Manager managerFromDetails = userClient.getManagerDetails(collaboration.getColRequestManagerId());
        ManagerResponseDTO managerFromResponseDTO = ManagerResponseDTO.from(managerFromDetails);

        Manager managerToDetails = userClient.getManagerDetails(collaboration.getColResponseManagerId());
        ManagerResponseDTO managerToResponseDTO = ManagerResponseDTO.from(managerToDetails);

        return CollaborationDetailResponseDTO.builder()
            .colId(collaboration.getColId())
            .questionId(collaboration.getQuestion().getQuestionId())
            .colManagerFromResponseDto(managerFromResponseDTO)
            .colManagerToResponseDto(managerToResponseDTO)
            .colStatus(collaboration.getColStatus())
            .colContents(collaboration.getColContents())
            .colReply(collaboration.getColReply())
            .fileName(collaboration.getFileName())
            .filePath(collaboration.getFilePath())
            .vocFileName(collaboration.getQuestion().getFileName())
            .vocFilePath(collaboration.getQuestion().getFilePath())
            .build();
    }
}
