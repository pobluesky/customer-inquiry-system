package com.pobluesky.backend.domain.offersheet.dto.response;

import com.pobluesky.backend.domain.offersheet.entity.OfferSheet;
import lombok.Builder;
import java.time.LocalDate;

@Builder
public record OfferSheetResponseDTO(
    Long offerSheetId,
    Long inquiryId,
    Long customerId,
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
    String destination,
    String remark
) {
    public static OfferSheetResponseDTO from(OfferSheet offerSheet) {
        return OfferSheetResponseDTO.builder()
            .offerSheetId(offerSheet.getOfferSheetId())
            .inquiryId(offerSheet.getInquiry().getInquiryId())
            .customerId(offerSheet.getInquiry().getCustomer().getCustomerId())
            .product(offerSheet.getProduct())
            .specification(offerSheet.getSpecification())
            .surfaceFinish(offerSheet.getSurfaceFinish())
            .usage(offerSheet.getUsage())
            .thickness(offerSheet.getThickness())
            .diameter(offerSheet.getDiameter())
            .width(offerSheet.getWidth())
            .quantity(offerSheet.getQuantity())
            .price(offerSheet.getPrice())
            .unitMinWeight(offerSheet.getUnitMinWeight())
            .unitMaxWeight(offerSheet.getUnitMaxWeight())
            .edge(offerSheet.getEdge())
            .priceTerms(offerSheet.getPriceTerms())
            .paymentTerms(offerSheet.getPaymentTerms())
            .shipment(offerSheet.getShipment())
            .validity(offerSheet.getValidity())
            .destination(offerSheet.getDestination())
            .remark(offerSheet.getRemark())
            .build();
    }
}
