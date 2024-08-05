package com.pobluesky.backend.domain.offersheet.dto.request;

import java.time.LocalDate;

public record OfferSheetUpdateRequestDTO(
    String product,
    String specification,
    String surfaceFinish,
    String usage,
    String thickness,
    String diameter,
    String width,
    String quantity,
    String price,
    String unitMinWeight,
    String unitMaxWeight,
    String edge,
    String priceTerms,
    String paymentTerms,
    LocalDate shipment,
    LocalDate validity,
    String destination
) {}
