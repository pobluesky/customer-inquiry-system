package com.pobluesky.backend.domain.lineitem.service;

import com.fasterxml.jackson.databind.ObjectMapper;

import com.pobluesky.backend.domain.inquiry.entity.Inquiry;
import com.pobluesky.backend.domain.inquiry.entity.ProductType;
import com.pobluesky.backend.domain.inquiry.repository.InquiryRepository;
import com.pobluesky.backend.domain.lineitem.dto.request.CarLineItemCreateRequestDTO;
import com.pobluesky.backend.domain.lineitem.dto.request.CarLineItemUpdateRequestDTO;
import com.pobluesky.backend.domain.lineitem.dto.response.CarLineItemResponseDTO;
import com.pobluesky.backend.domain.lineitem.dto.response.CarLineItemSummaryResponseDTO;
import com.pobluesky.backend.domain.lineitem.dto.response.LineItemResponseDTO;
import com.pobluesky.backend.domain.lineitem.entity.CarLineItem;
import com.pobluesky.backend.domain.lineitem.entity.LineItem;
import com.pobluesky.backend.domain.lineitem.repository.CarLineItemRepository;

import com.pobluesky.backend.global.error.CommonException;
import com.pobluesky.backend.global.error.ErrorCode;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import lombok.RequiredArgsConstructor;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Slf4j
public class LineItemService {

    private final CarLineItemRepository carLineItemRepository;

    private final InquiryRepository inquiryRepository;

    private final ObjectMapper objectMapper;

    @Transactional
    public LineItemResponseDTO createLineItem(
        Long inquiryId,
        Map<String, Object> requestDto
    ) {
        Inquiry inquiry = inquiryRepository.findById(inquiryId)
            .orElseThrow(() -> new CommonException(ErrorCode.USER_NOT_FOUND));

        ProductType productType = inquiry.getProductType();

        switch (productType) {
            case CAR:
                CarLineItemCreateRequestDTO carDto = objectMapper.convertValue(
                    requestDto,
                    CarLineItemCreateRequestDTO.class
                );

                CarLineItem entity = carDto.toCarLineItemEntity(inquiry);
                CarLineItem carLineItem = carLineItemRepository.save(entity);

                return CarLineItemResponseDTO.of(carLineItem);

            // 다른 제품 유형 처리
            default:
                throw new IllegalArgumentException("Unknown product type: " + productType);
        }
    }

    @Transactional(readOnly = true)
    public List<LineItemResponseDTO> getLineItemsByInquiry(Long inquiryId) {
        Inquiry inquiry = inquiryRepository.findById(inquiryId)
            .orElseThrow(() -> new CommonException(ErrorCode.INQUIRY_NOT_FOUND));

        List<CarLineItem> lineItemList = carLineItemRepository.findActiveCarLineItemByInquiry(inquiry);

        return lineItemList.stream()
            .map(lineItem -> toResponseDTO(inquiry.getProductType(), lineItem))
            .collect(Collectors.toList());
    }

    @Transactional
    public LineItemResponseDTO updateLineItemById(
        Long inquiryId,
        Long lineItemId,
        Map<String, Object> requestDto
    ) {
        Inquiry inquiry = inquiryRepository.findById(inquiryId)
            .orElseThrow(() -> new CommonException(ErrorCode.USER_NOT_FOUND));

        ProductType productType = inquiry.getProductType();

        switch (productType) {
            case CAR:
                CarLineItem carLineItem = carLineItemRepository.findActiveCarLineItemById(lineItemId)
                    .orElseThrow(() -> new CommonException(ErrorCode.LINE_ITEM_NOT_FOUND));

                CarLineItemUpdateRequestDTO carDto = objectMapper.convertValue(
                    requestDto,
                    CarLineItemUpdateRequestDTO.class
                );

                carLineItem.updateCarLineItem(
                    carDto.lab(),
                    carDto.kind(),
                    carDto.standardOrg(),
                    carDto.pjtName(),
                    carDto.salesVehicleName(),
                    carDto.partName(),
                    carDto.ixPlate(),
                    carDto.thickness(),
                    carDto.width(),
                    carDto.quantity(),
                    carDto.desiredDeliveryDate(),
                    carDto.deliveryDestination(),
                    carDto.order(),
                    carDto.coatingCondition(),
                    carDto.coatingAnotherCondition(),
                    carDto.contract(),
                    carDto.sop(),
                    carDto.fcAmount(),
                    carDto.bcAmount(),
                    carDto.coatingUnit(),
                    carDto.postTreatment(),
                    carDto.direction(),
                    carDto.raTarget(),
                    carDto.mTolerance(),
                    carDto.pTolerance(),
                    carDto.raUnit(),
                    carDto.raAnotherUnit(),
                    carDto.qsRequirement(),
                    carDto.expensePerYear(),
                    carDto.customerName(),
                    carDto.completeVehicle(),
                    carDto.regulation()
                );

                return CarLineItemResponseDTO.of(carLineItem);

            // 다른 제품 유형 처리
            default:
                throw new IllegalArgumentException("Unknown product type: " + productType);
        }
    }

    @Transactional
    public void deleteLineItemById(Long inquiryId, Long lineItemId) {
        Inquiry inquiry = inquiryRepository.findById(inquiryId)
            .orElseThrow(() -> new CommonException(ErrorCode.INQUIRY_NOT_FOUND));

        ProductType productType = inquiry.getProductType();

        switch (productType) {
            case CAR:
                CarLineItem lineItem = carLineItemRepository.findActiveCarLineItemById(lineItemId)
                    .orElseThrow(() -> new CommonException(ErrorCode.LINE_ITEM_NOT_FOUND));

                lineItem.deleteLineItem();
                break;

            default:
                throw new IllegalArgumentException("Unknown product type: " + productType);
        }
    }

    public LineItemResponseDTO toResponseDTO(ProductType productType, LineItem lineItem) {
        switch (productType) {
            case CAR :
                CarLineItem carLineItem = (CarLineItem) lineItem;
                return CarLineItemSummaryResponseDTO.of(carLineItem);
            // 다른 제품 유형 처리
            default:
                throw new CommonException(ErrorCode.INVALID_REQUEST);
        }
    }
}
