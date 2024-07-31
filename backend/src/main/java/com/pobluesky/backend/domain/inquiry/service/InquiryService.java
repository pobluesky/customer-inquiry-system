package com.pobluesky.backend.domain.inquiry.service;

import com.pobluesky.backend.domain.inquiry.dto.request.InquiryCreateRequestDTO;
import com.pobluesky.backend.domain.inquiry.dto.request.InquiryUpdateRequestDTO;
import com.pobluesky.backend.domain.inquiry.dto.response.InquiryResponseDTO;
import com.pobluesky.backend.domain.inquiry.entity.Inquiry;
import com.pobluesky.backend.domain.inquiry.repository.InquiryRepository;
import com.pobluesky.backend.global.error.CommonException;
import com.pobluesky.backend.global.error.ErrorCode;
import java.util.List;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Slf4j
@RequiredArgsConstructor
public class InquiryService {
    private final InquiryRepository inquiryRepository;

    @Transactional(readOnly = true)
    public List<InquiryResponseDTO> getAllInquiries() {
        List<Inquiry> inquiries = inquiryRepository.findAll();
        return inquiries.stream()
            .map(InquiryResponseDTO::from)
            .collect(Collectors.toList());
    }

    @Transactional
    public InquiryResponseDTO createInquiry(InquiryCreateRequestDTO dto) {
        Inquiry inquiry = dto.toInquiryEntity();
        Inquiry savedInquiry = inquiryRepository.save(inquiry);
        return InquiryResponseDTO.from(savedInquiry);
    }

    @Transactional
    public InquiryResponseDTO updateInquiryByNo(Long inquiryNo, InquiryUpdateRequestDTO inquiryUpdateRequestDTO) {

        Inquiry inquiry = inquiryRepository.findById(inquiryNo)
            .orElseThrow(() -> new CommonException(ErrorCode.INQUIRY_NOT_FOUND));


        inquiry.updateInquiry(
            inquiryUpdateRequestDTO.country(),
            inquiryUpdateRequestDTO.corporate(),
            inquiryUpdateRequestDTO.salesPerson(),
            inquiryUpdateRequestDTO.industry(),
            inquiryUpdateRequestDTO.progress(),
            inquiryUpdateRequestDTO.productType(),
            inquiryUpdateRequestDTO.qualityManager(),
            inquiryUpdateRequestDTO.department(),
            inquiryUpdateRequestDTO.salesManager(),
            inquiryUpdateRequestDTO.customerRequestDate(),
            inquiryUpdateRequestDTO.responseDeadline(),
            inquiryUpdateRequestDTO.elapsedDays(),
            inquiryUpdateRequestDTO.corporationCode(),
            inquiryUpdateRequestDTO.files(),
            inquiryUpdateRequestDTO.inquiryType()
        );


        return InquiryResponseDTO.from(inquiry);
    }

    @Transactional
    public void deleteInquiryByNo(Long inquiryNo) {
        inquiryRepository.deleteById(inquiryNo);
    }



}
