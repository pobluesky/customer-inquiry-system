package com.pobluesky.backend.domain.inquiry.service;

import com.pobluesky.backend.domain.inquiry.dto.request.InquiryCreateRequestDTO;
import com.pobluesky.backend.domain.inquiry.dto.request.InquiryUpdateRequestDTO;
import com.pobluesky.backend.domain.inquiry.dto.response.InquiryResponseDTO;
import com.pobluesky.backend.domain.inquiry.entity.Inquiry;
import com.pobluesky.backend.domain.inquiry.entity.Progress;
import com.pobluesky.backend.domain.inquiry.repository.InquiryRepository;
import com.pobluesky.backend.domain.user.entity.Customer;
import com.pobluesky.backend.domain.user.repository.CustomerRepository;
import com.pobluesky.backend.domain.user.service.CustomerService;
import com.pobluesky.backend.global.error.CommonException;
import com.pobluesky.backend.global.error.ErrorCode;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.relational.core.sql.In;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Slf4j
@RequiredArgsConstructor
public class InquiryService {
    private final InquiryRepository inquiryRepository;
    private final CustomerRepository customerRepository;

    @Transactional(readOnly = true)
    public List<InquiryResponseDTO> getInquiriesByCustomerId(Long customerId) {
        List<Inquiry> inquiries = inquiryRepository.findByCustomer_CustomerIdAndIsActivatedTrue(customerId);

        return inquiries.stream()
            .map(InquiryResponseDTO::from)
            .collect(Collectors.toList());
    }

    @Transactional
    public List<InquiryResponseDTO> getInquiries() {
        List<Inquiry> inquiries = inquiryRepository.findAll();

        return inquiries.stream()
            .map(InquiryResponseDTO::from)
            .collect(Collectors.toList());
    }

    @Transactional
    public InquiryResponseDTO createInquiry(Long customerId,InquiryCreateRequestDTO dto) {
        Customer customer = customerRepository.findById(customerId)
            .orElseThrow(() -> new CommonException(ErrorCode.USER_NOT_FOUND));

        Inquiry inquiry = dto.toInquiryEntity();
        inquiry.setCustomer(customer);
        Inquiry savedInquiry = inquiryRepository.save(inquiry);

        return InquiryResponseDTO.from(savedInquiry);
    }

    @Transactional
    public InquiryResponseDTO updateInquiryById(Long inquiryId, InquiryUpdateRequestDTO inquiryUpdateRequestDTO) {

        Inquiry inquiry = inquiryRepository.findById(inquiryId)
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
            inquiryUpdateRequestDTO.files(),
            inquiryUpdateRequestDTO.inquiryType(),
            inquiryUpdateRequestDTO.additionalRequests()
        );


        return InquiryResponseDTO.from(inquiry);
    }

    @Transactional
    public void deleteInquiryById(Long inquiryId) {

        Inquiry inquiry = inquiryRepository.findById(inquiryId)
            .orElseThrow(() -> new CommonException(ErrorCode.INQUIRY_NOT_FOUND));

        inquiry.deleteInquiry();

    }

    @Transactional(readOnly = true)
    public InquiryResponseDTO getInquiryDetail(Long customerId, Long inquiryId) {
        Customer customer = customerRepository.findById(customerId)
            .orElseThrow(() -> new CommonException(ErrorCode.USER_NOT_FOUND));
        Inquiry inquiry = (Inquiry) inquiryRepository.findByCustomer_CustomerIdAndInquiryId(customerId,inquiryId)
            .orElseThrow(() -> new CommonException(ErrorCode.INQUIRY_NOT_FOUND));

        return InquiryResponseDTO.from(inquiry);
    }

    @Transactional(readOnly = true)
    public List<InquiryResponseDTO> getInquiriesByProgress(Progress progress) {
        List<Inquiry> inquiries = inquiryRepository.findByProgress(progress);

        return inquiries.stream()
            .map(InquiryResponseDTO::from)
            .collect(Collectors.toList());
    }
}
