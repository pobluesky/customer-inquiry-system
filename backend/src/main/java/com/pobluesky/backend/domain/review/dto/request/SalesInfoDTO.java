package com.pobluesky.backend.domain.review.dto.request;

import com.pobluesky.backend.domain.review.entity.ContractType;
import com.pobluesky.backend.domain.review.entity.SalesInfo;

public record SalesInfoDTO(
    ContractType contract,
    String thicknessNotify
) {
    public SalesInfo toSalesInfoEntity() {
        return new SalesInfo(contract, thicknessNotify);
    }
}
