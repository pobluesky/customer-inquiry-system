package com.pobluesky.backend.domain.collaboration.repository;

import com.pobluesky.backend.domain.collaboration.dto.response.CollaborationSummaryResponseDTO;
import com.pobluesky.backend.domain.collaboration.entity.ColStatus;

import java.time.LocalDate;

import java.util.List;

public interface CollaborationRepositoryCustom {
    List<CollaborationSummaryResponseDTO> findAllCollaborationsRequestWithoutPaging(
        ColStatus colStatus,
        String colReqManager,
        Long colReqId,
        LocalDate startDate,
        LocalDate endDate,
        String sortBy
    );
}
