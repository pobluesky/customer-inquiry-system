package com.pobluesky.backend.domain.collaboration.dto.request;

public record CollaborationUpdateRequestDTO(
    Long colReqId,
    Long colResId,
    String colReply,
    Boolean isAccepted
) {

}
