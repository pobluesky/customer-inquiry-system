package com.pobluesky.backend.domain.lineitem.service;

import com.fasterxml.jackson.databind.ObjectMapper;

import com.pobluesky.backend.domain.inquiry.entity.Inquiry;
import com.pobluesky.backend.domain.inquiry.entity.ProductType;
import com.pobluesky.backend.domain.inquiry.repository.InquiryRepository;
import com.pobluesky.backend.domain.lineitem.dto.request.car.CarLineItemCreateRequestDTO;
import com.pobluesky.backend.domain.lineitem.dto.request.car.CarLineItemUpdateRequestDTO;
import com.pobluesky.backend.domain.lineitem.dto.request.coldrolled.ColdRolledLineItemCreateRequestDTO;
import com.pobluesky.backend.domain.lineitem.dto.request.coldrolled.ColdRolledLineItemUpdateRequestDTO;
import com.pobluesky.backend.domain.lineitem.dto.response.car.CarLineItemResponseDTO;
import com.pobluesky.backend.domain.lineitem.dto.response.car.CarLineItemSummaryResponseDTO;
import com.pobluesky.backend.domain.lineitem.dto.response.LineItemResponseDTO;
import com.pobluesky.backend.domain.lineitem.dto.response.coldrolled.ColdRolledLineItemResponseDTO;
import com.pobluesky.backend.domain.lineitem.dto.response.coldrolled.ColdRolledLineItemSummaryResponseDTO;
import com.pobluesky.backend.domain.lineitem.entity.CarLineItem;
import com.pobluesky.backend.domain.lineitem.entity.ColdRolledLineItem;
import com.pobluesky.backend.domain.lineitem.entity.LineItem;
import com.pobluesky.backend.domain.lineitem.repository.CarLineItemRepository;


import com.pobluesky.backend.domain.lineitem.repository.ColdRolledLineItemRepository;
import com.pobluesky.backend.domain.user.entity.Customer;
import com.pobluesky.backend.domain.user.repository.CustomerRepository;

import com.pobluesky.backend.domain.user.repository.ManagerRepository;
import com.pobluesky.backend.domain.user.service.CustomUserDetailsService;

import com.pobluesky.backend.global.error.CommonException;
import com.pobluesky.backend.global.error.ErrorCode;

import java.util.List;
import java.util.Map;

import java.util.Optional;

import java.util.Objects;

import java.util.stream.Collectors;

import lombok.RequiredArgsConstructor;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Slf4j
public class LineItemService {

    private final CustomUserDetailsService userDetailsService;

    private final CarLineItemRepository carLineItemRepository;

    private final CustomerRepository customerRepository;

    private final ManagerRepository managerRepository;

    private final InquiryRepository inquiryRepository;

    private final ObjectMapper objectMapper;
    private final ColdRolledLineItemRepository coldRolledLineItemRepository;

    @Transactional
    public LineItemResponseDTO createLineItem(
        String token,
        Long inquiryId,
        Map<String, Object> requestDto
    ) {

        Inquiry inquiry = validateUserAndInquiry(token, inquiryId);
        Customer customer = inquiry.getCustomer();

        ProductType productType = inquiry.getProductType();

        LineItem entity;

        switch (productType) {
            case CAR:
                CarLineItemCreateRequestDTO carDto = objectMapper.convertValue(
                    requestDto,
                    CarLineItemCreateRequestDTO.class
                );

                entity = carDto.toCarLineItemEntity(inquiry);
                CarLineItem carLineItem = carLineItemRepository.save((CarLineItem) entity);

                return CarLineItemResponseDTO.of(carLineItem);


            case COLD_ROLLED:
                ColdRolledLineItemCreateRequestDTO coldRolledDto = objectMapper.convertValue(
                    requestDto,
                    ColdRolledLineItemCreateRequestDTO.class
                );

                entity = coldRolledDto.toColdRolledLineItem(inquiry,customer);
                ColdRolledLineItem coldRolledLineItem = coldRolledLineItemRepository.save((ColdRolledLineItem) entity);

                return ColdRolledLineItemResponseDTO.of(coldRolledLineItem);

            // 다른 제품 유형 처리

            default:
                throw new IllegalArgumentException("Unknown product type: " + productType);
        }
    }

    @Transactional(readOnly = true)
    public List<LineItemResponseDTO> getLineItemsByInquiry(String token, Long inquiryId) {
        Long userId = userDetailsService.parseToken(token);

        if (!customerRepository.existsById(userId) && !managerRepository.existsById(userId))
            throw new CommonException(ErrorCode.USER_NOT_FOUND);

        Inquiry inquiry = inquiryRepository.findById(inquiryId)
            .orElseThrow(() -> new CommonException(ErrorCode.INQUIRY_NOT_FOUND));


        ProductType productType = inquiry.getProductType();

        switch (productType) {
            case CAR:
                List<CarLineItem> carLineItemList = carLineItemRepository.findActiveCarLineItemByInquiry(inquiry);
                return carLineItemList.stream()
                    .map(lineItem -> toResponseDTO(inquiry.getProductType(), lineItem))
                    .collect(Collectors.toList());

            case COLD_ROLLED:
                List<ColdRolledLineItem> coldRolledLineItemList = coldRolledLineItemRepository.findActiveColdRolledLineItemByInquiry(inquiry);
                return coldRolledLineItemList.stream()
                    .map(lineItem -> toResponseDTO(inquiry.getProductType(),lineItem))
                    .collect(Collectors.toList());
            // 다른 제품 유형 처리
            default:
                throw new IllegalArgumentException("Unknown product type: " + productType);
        }

    }

    @Transactional(readOnly = true)
    public List<LineItemResponseDTO> getFullLineItemsByInquiry(Long inquiryId) {
        Inquiry inquiry = inquiryRepository.findById(inquiryId)
            .orElseThrow(() -> new CommonException(ErrorCode.INQUIRY_NOT_FOUND));

        ProductType productType = inquiry.getProductType();


        switch (productType) {
            case CAR:
                List<CarLineItem> carLineItemList = carLineItemRepository.findActiveCarLineItemByInquiry(
                    inquiry);
                return carLineItemList.stream()
                    .map(lineItem -> toFullResponseDTO(inquiry.getProductType(), lineItem))
                    .collect(Collectors.toList());

            case COLD_ROLLED:
                List<ColdRolledLineItem> coldRolledLineItemList = coldRolledLineItemRepository.findActiveColdRolledLineItemByInquiry(
                    inquiry);
                return coldRolledLineItemList.stream()
                    .map(lineItem -> toFullResponseDTO(inquiry.getProductType(), lineItem))
                    .collect(Collectors.toList());

            default:
                throw new IllegalArgumentException("Unknown product type: " + productType);
        }
    }

    @Transactional
    public LineItemResponseDTO updateLineItemById(
        String token,
        Long inquiryId,
        Long lineItemId,
        Map<String, Object> requestDto
    ) {
        Inquiry inquiry = validateUserAndInquiry(token, inquiryId);
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
                    carDto.quantity()
                );

                return CarLineItemResponseDTO.of(carLineItem);


            case COLD_ROLLED:

                ColdRolledLineItem coldRolledLineItem = coldRolledLineItemRepository.findActiveColdRolledLineItemById(lineItemId)
                    .orElseThrow(() -> new CommonException(ErrorCode.LINE_ITEM_NOT_FOUND));

                ColdRolledLineItemUpdateRequestDTO coldDto = objectMapper.convertValue(
                    requestDto,
                    ColdRolledLineItemUpdateRequestDTO.class
                );

                coldRolledLineItem.updateColdRolledLineItem(
                    coldDto.kind(),
                    coldDto.inqName(),
                    coldDto.orderCategory(),
                    coldDto.thickness(),
                    coldDto.width(),
                    coldDto.quantity(),
                    coldDto.expectedDeadline(),
                    coldDto.orderEdge(),
                    coldDto.inDiameter(),
                    coldDto.outDiameter()
                );

                return ColdRolledLineItemResponseDTO.of(coldRolledLineItem);

            // 다른 제품 유형 처리

            default:
                throw new IllegalArgumentException("Unknown product type: " + productType);
        }
    }

    @Transactional
    public void deleteLineItemById(
        String token,
        Long inquiryId,
        Long lineItemId
    ) {
        Inquiry inquiry = validateUserAndInquiry(token, inquiryId);
        ProductType productType = inquiry.getProductType();

        LineItem lineItem;

        switch (productType) {
            case CAR:
                lineItem = carLineItemRepository.findActiveCarLineItemById(lineItemId)
                    .orElseThrow(() -> new CommonException(ErrorCode.LINE_ITEM_NOT_FOUND));

                lineItem.deleteLineItem();
                break;

            case COLD_ROLLED:
                lineItem = coldRolledLineItemRepository.findActiveColdRolledLineItemById(lineItemId)
                    .orElseThrow(() -> new CommonException(ErrorCode.LINE_ITEM_NOT_FOUND));

                lineItem.deleteLineItem();
                break;

            default:
                throw new IllegalArgumentException("Unknown product type: " + productType);
        }
    }

    private Inquiry validateUserAndInquiry(String token, Long inquiryId) {
        Long userId = userDetailsService.parseToken(token);

        customerRepository.findById(userId)
            .orElseThrow(() -> new CommonException(ErrorCode.USER_NOT_FOUND));

        Inquiry inquiry = inquiryRepository.findById(inquiryId)
            .orElseThrow(() -> new CommonException(ErrorCode.INQUIRY_NOT_FOUND));

        if(!Objects.equals(inquiry.getCustomer().getCustomerId(), userId))
            throw new CommonException(ErrorCode.USER_NOT_MATCHED);

        return inquiry;
    }

    public LineItemResponseDTO toResponseDTO(ProductType productType, LineItem lineItem) {
        switch (productType) {
            case CAR :
                CarLineItem carLineItem = (CarLineItem) lineItem;
                return CarLineItemSummaryResponseDTO.of(carLineItem);


            case COLD_ROLLED:
                ColdRolledLineItem coldRolledLineItem = (ColdRolledLineItem) lineItem;
                return ColdRolledLineItemSummaryResponseDTO.of(coldRolledLineItem);

            // 다른 제품 유형 처리

            default:
                throw new CommonException(ErrorCode.INVALID_REQUEST);
        }
    }

    public LineItemResponseDTO toFullResponseDTO(ProductType productType, LineItem lineItem) {
        switch (productType) {
            case CAR :
                CarLineItem carLineItem = (CarLineItem) lineItem;
                return CarLineItemResponseDTO.of(carLineItem);

            case COLD_ROLLED:
                ColdRolledLineItem coldRolledLineItem = (ColdRolledLineItem) lineItem;
                return ColdRolledLineItemResponseDTO.of(coldRolledLineItem);

            // 다른 제품 유형 처리
            default:
                throw new CommonException(ErrorCode.INVALID_REQUEST);
        }
    }


}
