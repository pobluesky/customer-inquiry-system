package com.pobluesky.backend.domain.lineitem.service;

import com.fasterxml.jackson.databind.ObjectMapper;

import com.pobluesky.backend.domain.inquiry.entity.Inquiry;
import com.pobluesky.backend.domain.inquiry.entity.ProductType;
import com.pobluesky.backend.domain.inquiry.repository.InquiryRepository;
import com.pobluesky.backend.domain.lineitem.dto.request.car.CarLineItemCreateRequestDTO;
import com.pobluesky.backend.domain.lineitem.dto.request.car.CarLineItemUpdateRequestDTO;
import com.pobluesky.backend.domain.lineitem.dto.request.coldrolled.ColdRolledLineItemCreateRequestDTO;
import com.pobluesky.backend.domain.lineitem.dto.request.coldrolled.ColdRolledLineItemUpdateRequestDTO;
import com.pobluesky.backend.domain.lineitem.dto.request.hotrolled.HotRolledLineItemCreateRequestDTO;
import com.pobluesky.backend.domain.lineitem.dto.request.hotrolled.HotRolledLineItemUpdateRequestDTO;
import com.pobluesky.backend.domain.lineitem.dto.request.wirerod.WireRodLineItemCreateRequestDTO;
import com.pobluesky.backend.domain.lineitem.dto.request.wirerod.WireRodLineItemUpdateRequestDTO;
import com.pobluesky.backend.domain.lineitem.dto.response.car.CarLineItemResponseDTO;
import com.pobluesky.backend.domain.lineitem.dto.response.car.CarLineItemSummaryResponseDTO;
import com.pobluesky.backend.domain.lineitem.dto.response.LineItemResponseDTO;
import com.pobluesky.backend.domain.lineitem.dto.response.coldrolled.ColdRolledLineItemResponseDTO;
import com.pobluesky.backend.domain.lineitem.dto.response.coldrolled.ColdRolledLineItemSummaryResponseDTO;
import com.pobluesky.backend.domain.lineitem.dto.response.hotrolled.HotRolledLineItemResponseDTO;
import com.pobluesky.backend.domain.lineitem.dto.response.hotrolled.HotRolledLineItemSummaryResponseDTO;
import com.pobluesky.backend.domain.lineitem.dto.response.wirerod.WireRodLineItemResponseDTO;
import com.pobluesky.backend.domain.lineitem.dto.response.wirerod.WireRodLineItemSummaryResponseDTO;
import com.pobluesky.backend.domain.lineitem.entity.CarLineItem;
import com.pobluesky.backend.domain.lineitem.entity.ColdRolledLineItem;
import com.pobluesky.backend.domain.lineitem.entity.HotRolledLineItem;
import com.pobluesky.backend.domain.lineitem.entity.LineItem;
import com.pobluesky.backend.domain.lineitem.entity.WireRodLineItem;
import com.pobluesky.backend.domain.lineitem.repository.CarLineItemRepository;
import com.pobluesky.backend.domain.lineitem.repository.ColdRolledLineItemRepository;
import com.pobluesky.backend.domain.lineitem.repository.HotRolledLineItemRepository;
import com.pobluesky.backend.domain.lineitem.repository.WireRodLineItemRepository;
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

    private final HotRolledLineItemRepository hotRolledLineItemRepository;

    private final WireRodLineItemRepository wireRodLineItemRepository;

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

                entity = coldRolledDto.toColdRolledLineItem(inquiry);
                ColdRolledLineItem coldRolledLineItem = coldRolledLineItemRepository.save((ColdRolledLineItem) entity);

                return ColdRolledLineItemResponseDTO.of(coldRolledLineItem);

            case HOT_ROLLED:
                HotRolledLineItemCreateRequestDTO hotRolledDto = objectMapper.convertValue(
                    requestDto,
                    HotRolledLineItemCreateRequestDTO.class
                );

                entity = hotRolledDto.toHotRolledLineItem(inquiry);
                HotRolledLineItem hotRolledLineItem = hotRolledLineItemRepository.save((HotRolledLineItem) entity);

                return HotRolledLineItemResponseDTO.of(hotRolledLineItem);

            case WIRE_ROD:
                WireRodLineItemCreateRequestDTO wireRodDto = objectMapper.convertValue(
                    requestDto,
                    WireRodLineItemCreateRequestDTO.class
                );

                entity = wireRodDto.toWireRodLineItem(inquiry);
                WireRodLineItem wireRodLineItem = wireRodLineItemRepository.save((WireRodLineItem) entity);

                return WireRodLineItemResponseDTO.of(wireRodLineItem);

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

            case HOT_ROLLED:
                List<HotRolledLineItem> hotRolledLineItemList = hotRolledLineItemRepository.findActiveHotRolledLineItemByInquiry(inquiry);

                return hotRolledLineItemList.stream()
                    .map(lineItem -> toResponseDTO(inquiry.getProductType(),lineItem))
                    .collect(Collectors.toList());

            case WIRE_ROD:
                List<WireRodLineItem> wireRodLineItemList = wireRodLineItemRepository.findActiveWireRodLineItemByInquiry(inquiry);
                return wireRodLineItemList.stream()
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

            case HOT_ROLLED:
                List<HotRolledLineItem> hotRolledLineItemList = hotRolledLineItemRepository.findActiveHotRolledLineItemByInquiry(
                    inquiry);

                return hotRolledLineItemList.stream()
                    .map(lineItem -> toFullResponseDTO(inquiry.getProductType(),lineItem))
                    .collect(Collectors.toList());

            case WIRE_ROD:
                List<WireRodLineItem> wireRodLineItemList = wireRodLineItemRepository.findActiveWireRodLineItemByInquiry(
                    inquiry);
                return wireRodLineItemList.stream()
                    .map(lineItem -> toFullResponseDTO(inquiry.getProductType(),lineItem))
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

            case HOT_ROLLED:
                HotRolledLineItem hotRolledLineItem = hotRolledLineItemRepository.findActiveHotRolledLineItemById(lineItemId)
                    .orElseThrow(() -> new CommonException(ErrorCode.LINE_ITEM_NOT_FOUND));

                HotRolledLineItemUpdateRequestDTO hotDto = objectMapper.convertValue(
                    requestDto,
                    HotRolledLineItemUpdateRequestDTO.class
                );

                hotRolledLineItem.updateHotRolledLineItem(
                    hotDto.kind(),
                    hotDto.inqName(),
                    hotDto.orderCategory(),
                    hotDto.thickness(),
                    hotDto.width(),
                    hotDto.hardness(),
                    hotDto.flatness(),
                    hotDto.orderEdge(),
                    hotDto.quantity()
                );

                return HotRolledLineItemResponseDTO.of(hotRolledLineItem);

            case WIRE_ROD:
                WireRodLineItem wireRodLineItem = wireRodLineItemRepository.findActiveWireRodLineItemById(lineItemId)
                    .orElseThrow(() -> new CommonException(ErrorCode.LINE_ITEM_NOT_FOUND));

                WireRodLineItemUpdateRequestDTO wireDto = objectMapper.convertValue(
                    requestDto,
                    WireRodLineItemUpdateRequestDTO.class
                );

                wireRodLineItem.updateWireRodLineItem(
                    wireDto.kind(),
                    wireDto.inqName(),
                    wireDto.orderCategory(),
                    wireDto.diameter(),
                    wireDto.quantity(),
                    wireDto.expectedDeadLine(),
                    wireDto.initialQuantity(),
                    wireDto.customerProcessing(),
                    wireDto.finalUse()
                );

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

            case HOT_ROLLED:
                lineItem = hotRolledLineItemRepository.findActiveHotRolledLineItemById(lineItemId)
                    .orElseThrow(() -> new CommonException(ErrorCode.LINE_ITEM_NOT_FOUND));

                lineItem.deleteLineItem();
                break;

            case WIRE_ROD:
                lineItem = wireRodLineItemRepository.findActiveWireRodLineItemById(lineItemId)
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

            case HOT_ROLLED:
                HotRolledLineItem hotRolledLineItem = (HotRolledLineItem) lineItem;

                return HotRolledLineItemSummaryResponseDTO.of(hotRolledLineItem);

            case WIRE_ROD:
                WireRodLineItem wireRodLineItem = (WireRodLineItem) lineItem;
            
                return WireRodLineItemSummaryResponseDTO.of(wireRodLineItem);

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

            case HOT_ROLLED:
                HotRolledLineItem hotRolledLineItem = (HotRolledLineItem) lineItem;
            
                return HotRolledLineItemResponseDTO.of(hotRolledLineItem);

            case WIRE_ROD:
                WireRodLineItem wireRodLineItem = (WireRodLineItem) lineItem;
            
                return WireRodLineItemResponseDTO.of(wireRodLineItem);

            // 다른 제품 유형 처리
            default:
                throw new CommonException(ErrorCode.INVALID_REQUEST);
        }
    }
}
