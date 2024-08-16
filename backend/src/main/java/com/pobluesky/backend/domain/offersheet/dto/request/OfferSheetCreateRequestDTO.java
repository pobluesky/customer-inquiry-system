package com.pobluesky.backend.domain.offersheet.dto.request;

import com.pobluesky.backend.domain.offersheet.entity.OfferSheet;
import com.pobluesky.backend.domain.inquiry.entity.Inquiry;
import java.time.LocalDate;

public record OfferSheetCreateRequestDTO(
    String priceTerms,
    String paymentTerms,
    LocalDate shipment,
    LocalDate validity,
    String destination,
    String remark
) {
    public OfferSheet toOfferSheetEntity(Inquiry inquiry) {

        return OfferSheet.builder()
            .inquiry(inquiry)
            .priceTerms(priceTerms)
            .paymentTerms(paymentTerms)
            .shipment(shipment)
            .validity(validity)
            .destination(destination)
            .remark(remark)
            .build();
    }
}
