package com.pobluesky.backend.domain.lineitem.service;

import com.fasterxml.jackson.databind.ObjectMapper;

import com.pobluesky.backend.domain.inquiry.entity.Inquiry;
import com.pobluesky.backend.domain.inquiry.entity.ProductType;
import com.pobluesky.backend.domain.inquiry.repository.InquiryRepository;
import com.pobluesky.backend.domain.lineitem.dto.request.car.CarLineItemCreateRequestDTO;
import com.pobluesky.backend.domain.lineitem.dto.request.coldrolled.ColdRolledLineItemCreateRequestDTO;
import com.pobluesky.backend.domain.lineitem.dto.request.hotrolled.HotRolledLineItemCreateRequestDTO;
import com.pobluesky.backend.domain.lineitem.dto.request.thickplate.ThickPlateLineItemCreateRequestDTO;
import com.pobluesky.backend.domain.lineitem.dto.request.wirerod.WireRodLineItemCreateRequestDTO;
import com.pobluesky.backend.domain.lineitem.dto.response.car.CarLineItemResponseDTO;
import com.pobluesky.backend.domain.lineitem.dto.response.car.CarLineItemSummaryResponseDTO;
import com.pobluesky.backend.domain.lineitem.dto.response.LineItemResponseDTO;
import com.pobluesky.backend.domain.lineitem.dto.response.coldrolled.ColdRolledLineItemResponseDTO;
import com.pobluesky.backend.domain.lineitem.dto.response.coldrolled.ColdRolledLineItemSummaryResponseDTO;
import com.pobluesky.backend.domain.lineitem.dto.response.hotrolled.HotRolledLineItemResponseDTO;
import com.pobluesky.backend.domain.lineitem.dto.response.hotrolled.HotRolledLineItemSummaryResponseDTO;
import com.pobluesky.backend.domain.lineitem.dto.response.thickplate.ThickPlateLineItemResponseDTO;
import com.pobluesky.backend.domain.lineitem.dto.response.thickplate.ThickPlateLineItemSummaryResponseDTO;
import com.pobluesky.backend.domain.lineitem.dto.response.wirerod.WireRodLineItemResponseDTO;
import com.pobluesky.backend.domain.lineitem.dto.response.wirerod.WireRodLineItemSummaryResponseDTO;
import com.pobluesky.backend.domain.lineitem.entity.CarLineItem;
import com.pobluesky.backend.domain.lineitem.entity.ColdRolledLineItem;
import com.pobluesky.backend.domain.lineitem.entity.HotRolledLineItem;
import com.pobluesky.backend.domain.lineitem.entity.LineItem;
import com.pobluesky.backend.domain.lineitem.entity.ThickPlateLineItem;
import com.pobluesky.backend.domain.lineitem.entity.WireRodLineItem;
import com.pobluesky.backend.domain.lineitem.repository.CarLineItemRepository;
import com.pobluesky.backend.domain.lineitem.repository.ColdRolledLineItemRepository;
import com.pobluesky.backend.domain.lineitem.repository.HotRolledLineItemRepository;
import com.pobluesky.backend.domain.lineitem.repository.ThickPlateLineItemRepository;
import com.pobluesky.backend.domain.lineitem.repository.WireRodLineItemRepository;
import com.pobluesky.backend.global.error.CommonException;
import com.pobluesky.backend.global.error.ErrorCode;

import java.util.ArrayList;
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

    private final ColdRolledLineItemRepository coldRolledLineItemRepository;

    private final HotRolledLineItemRepository hotRolledLineItemRepository;

    private final WireRodLineItemRepository wireRodLineItemRepository;

    private final ThickPlateLineItemRepository thickPlateLineItemRepository;

    @Transactional
    public List<LineItemResponseDTO> createLineItems(
        Inquiry inquiry,
        List<Map<String, Object>> lineItemRequestDTOs
    ) {
        List<LineItemResponseDTO> lineItemResponseDTOs = new ArrayList<>();
        ObjectMapper objectMapper = new ObjectMapper();

        return switch (inquiry.getProductType()) {
            case CAR -> {
                for (Map<String, Object> requestDto : lineItemRequestDTOs) {
                    CarLineItemCreateRequestDTO carDto = objectMapper.convertValue(
                        requestDto,
                        CarLineItemCreateRequestDTO.class
                    );

                    CarLineItem carLineItemEntity = carDto.toCarLineItemEntity(inquiry);
                    CarLineItem savedCarLineItem = carLineItemRepository.save(carLineItemEntity);

                    lineItemResponseDTOs.add(CarLineItemResponseDTO.from(savedCarLineItem));
                }

                yield lineItemResponseDTOs;
            }

            case COLD_ROLLED -> {
                for (Map<String, Object> requestDto : lineItemRequestDTOs) {
                    ColdRolledLineItemCreateRequestDTO coldRolledDto = objectMapper.convertValue(
                        requestDto,
                        ColdRolledLineItemCreateRequestDTO.class
                    );

                    ColdRolledLineItem coldRolledLineItemEntity =
                        coldRolledDto.toColdRolledLineItemEntity(inquiry);

                    ColdRolledLineItem savedColdRolledLineItem =
                        coldRolledLineItemRepository.save(coldRolledLineItemEntity);

                    lineItemResponseDTOs
                        .add(ColdRolledLineItemResponseDTO
                            .from(savedColdRolledLineItem));
                }

                yield lineItemResponseDTOs;
            }

            case HOT_ROLLED -> {
                for (Map<String, Object> requestDto : lineItemRequestDTOs) {
                    HotRolledLineItemCreateRequestDTO hotRolledDto = objectMapper.convertValue(
                        requestDto,
                        HotRolledLineItemCreateRequestDTO.class
                    );

                    HotRolledLineItem hotRolledLineItemEntity =
                        hotRolledDto.toHotRolledLineItemEntity(inquiry);

                    HotRolledLineItem savedHotRolledLineitem =
                        hotRolledLineItemRepository.save(hotRolledLineItemEntity);

                    lineItemResponseDTOs
                        .add(HotRolledLineItemResponseDTO
                            .from(savedHotRolledLineitem));
                }

                yield lineItemResponseDTOs;
            }

            case WIRE_ROD -> {
                for (Map<String, Object> requestDto : lineItemRequestDTOs) {
                    WireRodLineItemCreateRequestDTO wireRodDto = objectMapper.convertValue(
                        requestDto,
                        WireRodLineItemCreateRequestDTO.class
                    );

                    WireRodLineItem wireRodLineItemEntity =
                        wireRodDto.toWireRodLineItemEntity(inquiry);

                    WireRodLineItem savedWireRodLineItem =
                        wireRodLineItemRepository.save(wireRodLineItemEntity);

                    lineItemResponseDTOs
                        .add(WireRodLineItemResponseDTO
                            .from(savedWireRodLineItem));
                }

                yield lineItemResponseDTOs;
            }

            case THICK_PLATE -> {
                for (Map<String, Object> requestDto : lineItemRequestDTOs) {
                    ThickPlateLineItemCreateRequestDTO thickPlateDto = objectMapper.convertValue(
                        requestDto,
                        ThickPlateLineItemCreateRequestDTO.class
                    );

                    ThickPlateLineItem thickPlateLineItem =
                        thickPlateDto.toThickPlateLineItemEntity(inquiry);

                    ThickPlateLineItem savedThickPlateLineItem =
                        thickPlateLineItemRepository.save(thickPlateLineItem);

                    lineItemResponseDTOs
                        .add(ThickPlateLineItemResponseDTO
                            .from(savedThickPlateLineItem));
                }

                yield lineItemResponseDTOs;
            }

            default -> throw new IllegalArgumentException(
                "Unknown product type: " + inquiry.getProductType()
            );
        };
    }

    @Transactional(readOnly = true)
    public List<LineItemResponseDTO> getLineItemsByInquiry(Long inquiryId) {
        Inquiry inquiry = inquiryRepository.findById(inquiryId)
            .orElseThrow(() -> new CommonException(ErrorCode.INQUIRY_NOT_FOUND));

         ProductType productType = inquiry.getProductType();

        return switch (productType) {
            case CAR -> {
                List<CarLineItem> carLineItemList =
                    carLineItemRepository.findActiveCarLineItemByInquiry(inquiry);

                yield carLineItemList.stream()
                    .map(lineItem -> toResponseDTO(inquiry.getProductType(), lineItem))
                    .collect(Collectors.toList());
            }

            case COLD_ROLLED -> {
                List<ColdRolledLineItem> coldRolledLineItemList =
                    coldRolledLineItemRepository.findActiveColdRolledLineItemByInquiry(inquiry);

                yield coldRolledLineItemList.stream()
                    .map(lineItem -> toResponseDTO(inquiry.getProductType(), lineItem))
                    .collect(Collectors.toList());
            }

            case HOT_ROLLED -> {
                List<HotRolledLineItem> hotRolledLineItemList =
                    hotRolledLineItemRepository.findActiveHotRolledLineItemByInquiry(inquiry);

                yield hotRolledLineItemList.stream()
                    .map(lineItem -> toResponseDTO(inquiry.getProductType(), lineItem))
                    .collect(Collectors.toList());
            }

            case WIRE_ROD -> {
                List<WireRodLineItem> wireRodLineItemList =
                    wireRodLineItemRepository.findActiveWireRodLineItemByInquiry(inquiry);

                yield wireRodLineItemList.stream()
                    .map(lineItem -> toResponseDTO(inquiry.getProductType(), lineItem))
                    .collect(Collectors.toList());
            }

            case THICK_PLATE -> {
                List<ThickPlateLineItem> thickPlateLineItemList =
                    thickPlateLineItemRepository.findActiveThickPlateLineItemByInquiry(inquiry);

                yield thickPlateLineItemList.stream()
                    .map(lineItem -> toResponseDTO(inquiry.getProductType(), lineItem))
                    .collect(Collectors.toList());
            }

            default -> throw new IllegalArgumentException("Unknown product type: " + productType);
        };
    }

    @Transactional(readOnly = true)
    public List<LineItemResponseDTO> getFullLineItemsByInquiry(Long inquiryId) {
        Inquiry inquiry = inquiryRepository.findById(inquiryId)
            .orElseThrow(() -> new CommonException(ErrorCode.INQUIRY_NOT_FOUND));

        ProductType productType = inquiry.getProductType();

        switch (productType) {
            case CAR:
                List<CarLineItem> carLineItemList =
                    carLineItemRepository.findActiveCarLineItemByInquiry(inquiry);

                return carLineItemList.stream()
                    .map(lineItem -> toFullResponseDTO(inquiry.getProductType(), lineItem))
                    .collect(Collectors.toList());

            case COLD_ROLLED:
                List<ColdRolledLineItem> coldRolledLineItemList =
                    coldRolledLineItemRepository.findActiveColdRolledLineItemByInquiry(inquiry);

                return coldRolledLineItemList.stream()
                    .map(lineItem -> toFullResponseDTO(inquiry.getProductType(), lineItem))
                    .collect(Collectors.toList());

            case HOT_ROLLED:
                List<HotRolledLineItem> hotRolledLineItemList =
                    hotRolledLineItemRepository.findActiveHotRolledLineItemByInquiry(inquiry);

                return hotRolledLineItemList.stream()
                    .map(lineItem -> toFullResponseDTO(inquiry.getProductType(),lineItem))
                    .collect(Collectors.toList());

            case WIRE_ROD:
                List<WireRodLineItem> wireRodLineItemList =
                    wireRodLineItemRepository.findActiveWireRodLineItemByInquiry(inquiry);

                return wireRodLineItemList.stream()
                    .map(lineItem -> toFullResponseDTO(inquiry.getProductType(),lineItem))
                    .collect(Collectors.toList());

            case THICK_PLATE:
                List<ThickPlateLineItem> thickPlateLineItemList =
                    thickPlateLineItemRepository.findActiveThickPlateLineItemByInquiry(inquiry);

                return thickPlateLineItemList.stream()
                    .map(lineItem-> toFullResponseDTO(inquiry.getProductType(),lineItem))
                    .collect(Collectors.toList());

            default:
                throw new IllegalArgumentException("Unknown product type: " + productType);
        }
    }


    @Transactional
    public void deleteLineItemsByInquiry(Inquiry inquiry) {
        ProductType productType = inquiry.getProductType();

        switch (productType) {
            case CAR:
                CarLineItem carLineItem;

                List<CarLineItem> carLineItems =
                    carLineItemRepository.findAllActiveCarLineItemByInquiry(inquiry);

                for (CarLineItem item : carLineItems) {
                    carLineItem = carLineItemRepository
                        .findActiveCarLineItemById(item.getLineItemId())
                        .orElseThrow(() -> new CommonException(ErrorCode.LINE_ITEM_NOT_FOUND));

                    carLineItem.deleteLineItem();
                }
                break;

            case COLD_ROLLED:
                ColdRolledLineItem coldRolledLineItem;

                List<ColdRolledLineItem> coldRolledLineItems =
                    coldRolledLineItemRepository.findActiveColdRolledLineItemByInquiry(inquiry);

                for (ColdRolledLineItem item : coldRolledLineItems) {
                    coldRolledLineItem = coldRolledLineItemRepository
                        .findActiveColdRolledLineItemById(item.getLineItemId())
                        .orElseThrow(() -> new CommonException(ErrorCode.LINE_ITEM_NOT_FOUND));

                    coldRolledLineItem.deleteLineItem();
                }
                break;

            case HOT_ROLLED:
                HotRolledLineItem hotRolledLineItem;

                List<HotRolledLineItem> hotRolledLineItems =
                    hotRolledLineItemRepository.findActiveHotRolledLineItemByInquiry(inquiry);

                for (HotRolledLineItem item : hotRolledLineItems) {
                    hotRolledLineItem = hotRolledLineItemRepository
                        .findActiveHotRolledLineItemById(item.getLineItemId())
                        .orElseThrow(() -> new CommonException(ErrorCode.LINE_ITEM_NOT_FOUND));

                    hotRolledLineItem.deleteLineItem();
                }
                break;

            case WIRE_ROD:
                WireRodLineItem wireRodLineItem;

                List<WireRodLineItem> wireRodLineItems =
                    wireRodLineItemRepository.findActiveWireRodLineItemByInquiry(inquiry);

                for (WireRodLineItem item : wireRodLineItems) {
                    wireRodLineItem = wireRodLineItemRepository
                        .findActiveWireRodLineItemById(item.getLineItemId())
                        .orElseThrow(() -> new CommonException(ErrorCode.LINE_ITEM_NOT_FOUND));

                    wireRodLineItem.deleteLineItem();
                }
                break;

            case THICK_PLATE:
                ThickPlateLineItem thickPlateLineItem;

                List<ThickPlateLineItem> thickPlateLineItems =
                    thickPlateLineItemRepository.findActiveThickPlateLineItemByInquiry(inquiry);

                for (ThickPlateLineItem item : thickPlateLineItems) {
                    thickPlateLineItem = thickPlateLineItemRepository
                        .findActiveThickPlateLineItemById(item.getLineItemId())
                        .orElseThrow(() -> new CommonException(ErrorCode.LINE_ITEM_NOT_FOUND));

                    thickPlateLineItem.deleteLineItem();
                }
                break;

            default:
                throw new IllegalArgumentException("Unknown product type: " + productType);
        }
    }

    public LineItemResponseDTO toResponseDTO(ProductType productType, LineItem lineItem) {

        return switch (productType) {
            case CAR -> {
                CarLineItem carLineItem = (CarLineItem) lineItem;
                yield CarLineItemSummaryResponseDTO.of(carLineItem);
            }

            case COLD_ROLLED -> {
                ColdRolledLineItem coldRolledLineItem = (ColdRolledLineItem) lineItem;
                yield ColdRolledLineItemSummaryResponseDTO.of(coldRolledLineItem);
            }

            case HOT_ROLLED -> {
                HotRolledLineItem hotRolledLineItem = (HotRolledLineItem) lineItem;
                yield HotRolledLineItemSummaryResponseDTO.of(hotRolledLineItem);
            }

            case WIRE_ROD -> {
                WireRodLineItem wireRodLineItem = (WireRodLineItem) lineItem;
                yield WireRodLineItemSummaryResponseDTO.of(wireRodLineItem);
            }

            case THICK_PLATE -> {
                ThickPlateLineItem thickPlateLineItem = (ThickPlateLineItem) lineItem;
                yield ThickPlateLineItemSummaryResponseDTO.of(thickPlateLineItem);
            }

            default -> throw new CommonException(ErrorCode.INVALID_REQUEST);
        };
    }

    public LineItemResponseDTO toFullResponseDTO(ProductType productType, LineItem lineItem) {
        switch (productType) {
            case CAR :
                CarLineItem carLineItem = (CarLineItem) lineItem;

                return CarLineItemResponseDTO.from(carLineItem);

            case COLD_ROLLED:
                ColdRolledLineItem coldRolledLineItem = (ColdRolledLineItem) lineItem;

                return ColdRolledLineItemResponseDTO.from(coldRolledLineItem);

            case HOT_ROLLED:
                HotRolledLineItem hotRolledLineItem = (HotRolledLineItem) lineItem;

                return HotRolledLineItemResponseDTO.from(hotRolledLineItem);

            case WIRE_ROD:
                WireRodLineItem wireRodLineItem = (WireRodLineItem) lineItem;

                return WireRodLineItemResponseDTO.from(wireRodLineItem);

            case THICK_PLATE:
                ThickPlateLineItem thickPlateLineItem = (ThickPlateLineItem) lineItem;

                return ThickPlateLineItemResponseDTO.from(thickPlateLineItem);

            // 다른 제품 유형 처리
            default:
                throw new CommonException(ErrorCode.INVALID_REQUEST);
        }
    }
}
