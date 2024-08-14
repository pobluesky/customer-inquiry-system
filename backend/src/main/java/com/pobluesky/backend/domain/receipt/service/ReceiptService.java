package com.pobluesky.backend.domain.receipt.service;

import com.pobluesky.backend.domain.offersheet.entity.OfferSheet;
import com.pobluesky.backend.domain.offersheet.repository.OfferSheetRepository;
import com.pobluesky.backend.domain.receipt.dto.request.ReceiptCreateRequestDTO;
import com.pobluesky.backend.domain.receipt.dto.request.ReceiptUpdateRequestDTO;
import com.pobluesky.backend.domain.receipt.dto.response.ReceiptResponse;
import com.pobluesky.backend.domain.receipt.entity.Receipt;
import com.pobluesky.backend.domain.receipt.repository.ReceiptRepository;
import com.pobluesky.backend.domain.user.repository.ManagerRepository;
import com.pobluesky.backend.domain.user.service.SignService;
import com.pobluesky.backend.global.error.CommonException;
import com.pobluesky.backend.global.error.ErrorCode;

import java.util.List;
import java.util.stream.Collectors;

import lombok.RequiredArgsConstructor;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class ReceiptService {

    private final SignService signService;

    private final ReceiptRepository receiptRepository;

    private final ManagerRepository managerRepository;

    private final OfferSheetRepository offerSheetRepository;

    @Transactional(readOnly = true)
    public List<ReceiptResponse> getReceiptsByInquiry(String token, Long offersheetId) {
        Long userId = signService.parseToken(token);

        OfferSheet offerSheet = offerSheetRepository.findById(offersheetId)
            .orElseThrow(() -> new CommonException(ErrorCode.OFFERSHEET_NOT_FOUND));

        managerRepository.findById(userId)
            .orElseThrow(() -> new CommonException(ErrorCode.USER_NOT_FOUND));

        List<Receipt> receiptList =
            receiptRepository.findActiveReceiptByOfferSheet(offerSheet);

        return receiptList.stream()
            .map(ReceiptResponse::from)
            .collect(Collectors.toList());
    }

    @Transactional
    public ReceiptResponse createReceipt(
        String token,
        Long offerSheetId,
        ReceiptCreateRequestDTO requestDto
    ) {
        OfferSheet offerSheet = offerSheetRepository.findById(offerSheetId)
            .orElseThrow(() -> new CommonException(ErrorCode.OFFERSHEET_NOT_FOUND));

        Receipt receipt = requestDto.toReceipt(offerSheet);
        Receipt savedReceipt = receiptRepository.save(receipt);

        return ReceiptResponse.from(savedReceipt);
    }

    public ReceiptResponse updateReceiptById(
        String token,
        Long offerSheetId,
        Long receiptId,
        ReceiptUpdateRequestDTO requestDto
    ) {
        offerSheetRepository.findById(offerSheetId)
            .orElseThrow(() -> new CommonException(ErrorCode.OFFERSHEET_NOT_FOUND));

        Receipt receipt = receiptRepository.findActiveReceiptById(receiptId)
            .orElseThrow(() -> new CommonException(ErrorCode.RECEIPT_NOT_FOUND));

        receipt.updateReceipt(
            requestDto.product(),
            requestDto.specification(),
            requestDto.surfaceFinish(),
            requestDto.usage(),
            requestDto.width(),
            requestDto.diameter(),
            requestDto.price(),
            requestDto.quantity(),
            requestDto.edge(),
            requestDto.unitMinWeight(),
            receipt.getUnitMaxWeight(),
            requestDto.diameter()
        );

        return ReceiptResponse.from(receipt);
    }

    @Transactional
    public void deleteReceiptById(
        String token,
        Long offerSheetId,
        Long receiptId
    ) {
        offerSheetRepository.findById(offerSheetId)
            .orElseThrow(() -> new CommonException(ErrorCode.OFFERSHEET_NOT_FOUND));

        Receipt receipt = receiptRepository.findActiveReceiptById(receiptId)
            .orElseThrow(() -> new CommonException(ErrorCode.RECEIPT_NOT_FOUND));

        receipt.deleteReceipt();
    }
}
