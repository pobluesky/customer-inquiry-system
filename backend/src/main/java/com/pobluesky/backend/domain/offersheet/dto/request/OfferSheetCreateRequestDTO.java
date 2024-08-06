package com.pobluesky.backend.domain.offersheet.dto.request;

import com.pobluesky.backend.domain.offersheet.entity.OfferSheet;
import com.pobluesky.backend.domain.inquiry.entity.Inquiry;
import com.pobluesky.backend.domain.user.entity.Customer;
import java.time.LocalDate;

public record OfferSheetCreateRequestDTO(
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
    public OfferSheet toOfferSheetEntity(Inquiry inquiry, Customer customer) {
        return OfferSheet.builder()
            .inquiry(inquiry)
            .customer(customer)
            .product(product)
            .specification(specification)
            .surfaceFinish(surfaceFinish)
            .usage(usage)
            .thickness(thickness)
            .diameter(diameter)
            .width(width)
            .quantity(quantity)
            .price(price)
            .unitMinWeight(unitMinWeight)
            .unitMaxWeight(unitMaxWeight)
            .edge(edge)
            .priceTerms(priceTerms)
            .paymentTerms(paymentTerms)
            .shipment(shipment)
            .validity(validity)
            .destination(destination)
            .remark(remark)
            .build();
    }
}
