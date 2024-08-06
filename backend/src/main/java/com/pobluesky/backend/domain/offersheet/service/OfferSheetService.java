package com.pobluesky.backend.domain.offersheet.service;

import com.pobluesky.backend.domain.offersheet.dto.request.OfferSheetCreateRequestDTO;
import com.pobluesky.backend.domain.offersheet.dto.request.OfferSheetUpdateRequestDTO;
import com.pobluesky.backend.domain.offersheet.dto.response.OfferSheetResponseDTO;
import com.pobluesky.backend.domain.offersheet.entity.OfferSheet;
import com.pobluesky.backend.domain.offersheet.repository.OfferSheetRepository;
import com.pobluesky.backend.domain.inquiry.entity.Inquiry;
import com.pobluesky.backend.domain.user.entity.Customer;
import com.pobluesky.backend.domain.inquiry.repository.InquiryRepository;
import com.pobluesky.backend.domain.user.repository.CustomerRepository;
import com.pobluesky.backend.global.error.CommonException;
import com.pobluesky.backend.global.error.ErrorCode;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class OfferSheetService {
    private final OfferSheetRepository offerSheetRepository;
    private final InquiryRepository inquiryRepository;
    private final CustomerRepository customerRepository;

    @Transactional(readOnly = true)
    public OfferSheetResponseDTO getOfferSheetByInquiryId(Long inquiryId) {
        Inquiry inquiry = inquiryRepository
            .findById(inquiryId)
            .orElseThrow(() -> new CommonException(ErrorCode.INQUIRY_NOT_FOUND));

        OfferSheet offerSheet = offerSheetRepository.findByInquiry(inquiry)
            .orElseThrow(() -> new CommonException(ErrorCode.OFFERSHEET_NOT_FOUND));

        return OfferSheetResponseDTO.from(offerSheet);
    }

    @Transactional
    public OfferSheetResponseDTO updateOfferSheetByInquiryId(Long inquiryId, OfferSheetUpdateRequestDTO offerSheetUpdateRequestDTO) {
        // 1. inquiryId가 존재하는지 확인
        Inquiry inquiry = inquiryRepository
            .findById(inquiryId)
            .orElseThrow(() -> new CommonException(ErrorCode.INQUIRY_NOT_FOUND));

        // 2. 해당 inquiry에 연결된 offersheet가 있는지 확인
        OfferSheet offerSheet = offerSheetRepository.findByInquiry(inquiry)
            .orElseThrow(() -> new CommonException(ErrorCode.OFFERSHEET_NOT_FOUND));


        // 3. offersheet update
        offerSheet.updateOfferSheet(
            offerSheetUpdateRequestDTO.product(),
            offerSheetUpdateRequestDTO.specification(),
            offerSheetUpdateRequestDTO.surfaceFinish(),
            offerSheetUpdateRequestDTO.usage(),
            offerSheetUpdateRequestDTO.thickness(),
            offerSheetUpdateRequestDTO.diameter(),
            offerSheetUpdateRequestDTO.width(),
            offerSheetUpdateRequestDTO.quantity(),
            offerSheetUpdateRequestDTO.price(),
            offerSheetUpdateRequestDTO.unitMinWeight(),
            offerSheetUpdateRequestDTO.unitMaxWeight(),
            offerSheetUpdateRequestDTO.edge(),
            offerSheetUpdateRequestDTO.priceTerms(),
            offerSheetUpdateRequestDTO.paymentTerms(),
            offerSheetUpdateRequestDTO.shipment(),
            offerSheetUpdateRequestDTO.validity(),
            offerSheetUpdateRequestDTO.destination(),
            offerSheetUpdateRequestDTO.remark()
        );

        //4. entity -> dto
        return OfferSheetResponseDTO.from(offerSheet);
    }

    @Transactional
    public OfferSheetResponseDTO createOfferSheet(Long inquiryId, OfferSheetCreateRequestDTO offerSheetCreateRequestDTO) {
        Inquiry inquiry =
            inquiryRepository
                .findById(inquiryId)
                .orElseThrow(() -> new CommonException(ErrorCode.INQUIRY_NOT_FOUND));

        Long customerId = inquiry.getCustomer().getCustomerId();

        Customer customer =
            customerRepository
                .findById(customerId)
                .orElseThrow(() -> new CommonException(ErrorCode.USER_NOT_FOUND));

        OfferSheet offerSheet = offerSheetCreateRequestDTO.toOfferSheetEntity(inquiry, customer);

        OfferSheet savedOfferSheet = offerSheetRepository.save(offerSheet);

        return OfferSheetResponseDTO.from(savedOfferSheet);
    }
}
