package com.pobluesky.backend.domain.offersheet.service;

import com.pobluesky.backend.domain.offersheet.dto.request.OfferSheetCreateRequestDTO;
import com.pobluesky.backend.domain.offersheet.dto.request.OfferSheetUpdateRequestDTO;
import com.pobluesky.backend.domain.offersheet.dto.response.OfferSheetResponseDTO;
import com.pobluesky.backend.domain.offersheet.entity.OfferSheet;
import com.pobluesky.backend.domain.offersheet.repository.OfferSheetRepository;
import com.pobluesky.backend.domain.inquiry.entity.Inquiry;
import com.pobluesky.backend.domain.inquiry.repository.InquiryRepository;
import com.pobluesky.backend.domain.receipt.entity.Receipt;
import com.pobluesky.backend.domain.user.entity.Customer;
import com.pobluesky.backend.domain.user.entity.Manager;
import com.pobluesky.backend.domain.user.entity.UserRole;
import com.pobluesky.backend.domain.user.repository.CustomerRepository;
import com.pobluesky.backend.domain.user.repository.ManagerRepository;
import com.pobluesky.backend.domain.user.service.SignService;
import com.pobluesky.backend.global.error.CommonException;
import com.pobluesky.backend.global.error.ErrorCode;

import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

import lombok.RequiredArgsConstructor;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class OfferSheetService {

    private final SignService signService;

    private final OfferSheetRepository offerSheetRepository;

    private final InquiryRepository inquiryRepository;

    private final CustomerRepository customerRepository;

    private final ManagerRepository managerRepository;


    @Transactional(readOnly = true)
    public OfferSheetResponseDTO getOfferSheetByInquiryId(String token, Long inquiryId) {
        Long userId = signService.parseToken(token);

        OfferSheet offerSheet = offerSheetRepository.findById(inquiryId)
            .orElseThrow(() -> new CommonException(ErrorCode.OFFERSHEET_NOT_FOUND));

        if (!managerRepository.existsById(userId)) {
            Customer customer = customerRepository.findById(userId)
                .orElseThrow(() -> new CommonException(ErrorCode.USER_NOT_FOUND));

            if(!Objects.equals(customer.getUserId(), offerSheet.getInquiry().getCustomer().getUserId()))
                throw new CommonException(ErrorCode.USER_NOT_MATCHED);
        }

        return OfferSheetResponseDTO.from(offerSheet);
    }

    @Transactional
    public OfferSheetResponseDTO updateOfferSheetByInquiryId(
        String token,
        Long inquiryId,
        OfferSheetUpdateRequestDTO offerSheetUpdateRequestDTO
    ) {
        Long userId = signService.parseToken(token);

        Manager manager = managerRepository.findById(userId)
            .orElseThrow(() -> new CommonException(ErrorCode.USER_NOT_FOUND));

        if(manager.getRole() != UserRole.SALES) {
            throw new CommonException(ErrorCode.UNAUTHORIZED_USER_SALES);
        }

        Inquiry inquiry = inquiryRepository.findById(inquiryId)
            .orElseThrow(() -> new CommonException(ErrorCode.INQUIRY_NOT_FOUND));

        // 2. 해당 inquiry에 연결된 offersheet가 있는지 확인
        OfferSheet offerSheet = offerSheetRepository.findByInquiry(inquiry)
            .orElseThrow(() -> new CommonException(ErrorCode.OFFERSHEET_NOT_FOUND));

        // 3. offersheet update
        offerSheet.updateOfferSheet(
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
    public OfferSheetResponseDTO createOfferSheet(
        String token,
        Long inquiryId,
        OfferSheetCreateRequestDTO offerSheetCreateRequestDTO
    ) {
        Long userId = signService.parseToken(token);

        Manager manager = managerRepository.findById(userId)
            .orElseThrow(() -> new CommonException(ErrorCode.USER_NOT_FOUND));

        if(manager.getRole() != UserRole.SALES) {
            throw new CommonException(ErrorCode.UNAUTHORIZED_USER_SALES);
        }

        Inquiry inquiry = inquiryRepository.findById(inquiryId)
            .orElseThrow(() -> new CommonException(ErrorCode.INQUIRY_NOT_FOUND));

        OfferSheet offerSheet = offerSheetCreateRequestDTO.toOfferSheetEntity(inquiry);

        List<Receipt> receipts = offerSheetCreateRequestDTO.receipts().stream()
            .map(receiptCreateRequestDTO -> receiptCreateRequestDTO.toReceiptEntity(offerSheet))
            .collect(Collectors.toList());

        offerSheet.getReceipts().addAll(receipts);

        OfferSheet savedOfferSheet = offerSheetRepository.save(offerSheet);

        return OfferSheetResponseDTO.from(savedOfferSheet);
    }
}
