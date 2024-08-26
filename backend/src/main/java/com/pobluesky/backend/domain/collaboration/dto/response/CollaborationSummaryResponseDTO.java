package com.pobluesky.backend.domain.collaboration.dto.response;

import com.pobluesky.backend.domain.collaboration.entity.ColStatus;
import com.pobluesky.backend.domain.collaboration.entity.Collaboration;
import java.time.LocalDateTime;
import lombok.Builder;

@Builder
public record CollaborationSummaryResponseDTO(
    Long colId,
    Long questionId,
    String colReqManager,
    ColStatus colStatus,
    String colContents,
    LocalDateTime createdDate
) {

    public static CollaborationSummaryResponseDTO from(Collaboration collaboration) {
        return CollaborationSummaryResponseDTO.builder()
            .colId(collaboration.getColId())
            .questionId(collaboration.getQuestion().getQuestionId())
            .colReqManager(collaboration.getColRequestManager().getName())
            .colStatus(collaboration.getColStatus())
            .colContents(collaboration.getColContents())
            .createdDate(collaboration.getCreatedDate())
            .build();
    }
}
