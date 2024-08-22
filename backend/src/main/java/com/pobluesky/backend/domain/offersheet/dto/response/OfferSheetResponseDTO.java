package com.pobluesky.backend.domain.offersheet.dto.response;

import com.pobluesky.backend.domain.offersheet.entity.OfferSheet;
import com.pobluesky.backend.domain.receipt.dto.response.ReceiptResponse;

import java.util.List;
import java.util.stream.Collectors;
import java.time.LocalDate;

import lombok.Builder;

@Builder
public record OfferSheetResponseDTO(
    Long offerSheetId,
    Long inquiryId,
    String customerName,
    String priceTerms,
    String paymentTerms,
    LocalDate shipment,
    LocalDate validity,
    String destination,
    String remark,
    List<ReceiptResponse> receipts
) {
    public static OfferSheetResponseDTO from(OfferSheet offerSheet) {
        return OfferSheetResponseDTO.builder()
            .offerSheetId(offerSheet.getOfferSheetId())
            .inquiryId(offerSheet.getInquiry().getInquiryId())
            .customerName(offerSheet.getInquiry().getCustomer().getCustomerName())
            .priceTerms(offerSheet.getPriceTerms())
            .paymentTerms(offerSheet.getPaymentTerms())
            .shipment(offerSheet.getShipment())
            .validity(offerSheet.getValidity())
            .destination(offerSheet.getDestination())
            .remark(offerSheet.getRemark())
            .receipts(offerSheet.getReceipts()
                .stream()
                .map(ReceiptResponse::from)
                .collect(Collectors.toList()))
            .build();
    }
}
