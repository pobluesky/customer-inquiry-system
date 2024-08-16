package com.pobluesky.backend.domain.collaboration.repository;

import com.pobluesky.backend.domain.collaboration.dto.response.CollaborationSummaryResponseDTO;
import com.pobluesky.backend.domain.collaboration.entity.ColStatus;
import java.time.LocalDate;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface CollaborationRepositoryCustom {
    Page<CollaborationSummaryResponseDTO> findAllCollaborationsRequest(
        Pageable pageable,  ColStatus colStatus, String colReqManager,
        Long colReqId, LocalDate startDate, LocalDate endDate
    );
}
