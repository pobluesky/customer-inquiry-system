package com.pobluesky.backend.domain.lineitem.dto.request.wirerod;

import com.pobluesky.backend.domain.lineitem.entity.type.wirerod.InqName;
import com.pobluesky.backend.domain.lineitem.entity.type.wirerod.Kind;

import java.time.LocalDate;

public record WireRodLineItemUpdateRequestDTO(
    Kind kind,
    InqName inqName,
    String orderCategory,
    String diameter,
    Integer quantity,
    LocalDate expectedDeadLine,
    Integer initialQuantity,
    String customerProcessing,
    String finalUse
) {
}
