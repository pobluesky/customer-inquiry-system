package com.pobluesky.backend.domain.inquiry.service;

import com.pobluesky.backend.domain.inquiry.dto.request.InquiryCreateRequestDTO;
import com.pobluesky.backend.domain.inquiry.dto.request.InquiryUpdateRequestDTO;
import com.pobluesky.backend.domain.inquiry.dto.response.InquiryLineItemResponseDTO;
import com.pobluesky.backend.domain.inquiry.dto.response.InquiryResponseDTO;
import com.pobluesky.backend.domain.inquiry.entity.Inquiry;
import com.pobluesky.backend.domain.inquiry.entity.InquiryType;
import com.pobluesky.backend.domain.inquiry.entity.ProductType;
import com.pobluesky.backend.domain.inquiry.entity.Progress;
import com.pobluesky.backend.domain.inquiry.repository.InquiryRepository;
import com.pobluesky.backend.domain.user.entity.Customer;
import com.pobluesky.backend.domain.user.entity.Manager;
import com.pobluesky.backend.domain.user.entity.UserRole;

import com.pobluesky.backend.domain.user.repository.CustomerRepository;
import com.pobluesky.backend.domain.user.repository.ManagerRepository;
import com.pobluesky.backend.domain.user.service.SignService;
import com.pobluesky.backend.global.error.CommonException;
import com.pobluesky.backend.global.error.ErrorCode;
import java.time.LocalDate;
import java.util.List;
import java.util.Objects;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.Stream;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Slf4j
@RequiredArgsConstructor
public class InquiryService {

    private final SignService signService;

    private final InquiryRepository inquiryRepository;

    private final CustomerRepository customerRepository;

    private final ManagerRepository managerRepository;

    @Transactional(readOnly = true)
    public List<InquiryResponseDTO> getInquiriesByuserId(String token, Long customerId) {
        Long userId = signService.parseToken(token);

        Customer customer = customerRepository.findById(userId)
            .orElseThrow(() -> new CommonException(ErrorCode.USER_NOT_FOUND));

        if(!Objects.equals(customer.getUserId(), customerId))
            throw new CommonException(ErrorCode.USER_NOT_MATCHED);

        List<Inquiry> inquiries =
            inquiryRepository.findByCustomer_UserIdAndIsActivatedTrue(customerId);

        return inquiries.stream()
            .map(InquiryResponseDTO::from)
            .collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    public Page<InquiryLineItemResponseDTO> getInquiries(
        Long userId, int page, int size, String sortBy,
        Progress progress,
        ProductType productType, String customerName,
        InquiryType inquiryType, String projectName,
        LocalDate startDate, LocalDate endDate) {

        Sort sort = getSortByOrderCondition(sortBy);
        Pageable pageable = PageRequest.of(page, size, sort);
        return inquiryRepository.findInquiries(
            userId, pageable, progress, productType, customerName,
            inquiryType, projectName, startDate, endDate);
    }

    @Transactional
    public List<InquiryResponseDTO> getInquiries(String token) {
        Long userId = signService.parseToken(token);

        Manager user =managerRepository.findById(userId)
            .orElseThrow(() -> new CommonException(ErrorCode.USER_NOT_FOUND));

        if(user.getRole() == UserRole.CUSTOMER)
            throw new CommonException(ErrorCode.UNAUTHORIZED_USER_MANAGER);

        List<Inquiry> inquiries = inquiryRepository.findAll();

        return inquiries.stream()
            .map(InquiryResponseDTO::from)
            .collect(Collectors.toList());
    }

    @Transactional
    public InquiryResponseDTO createInquiry(
        String token,
        Long customerId,
        InquiryCreateRequestDTO dto
    ) {
        Long userId = signService.parseToken(token);

        Customer customer = customerRepository.findById(userId)
            .orElseThrow(() -> new CommonException(ErrorCode.USER_NOT_FOUND));

        if(!Objects.equals(customer.getUserId(), customerId))
            throw new CommonException(ErrorCode.USER_NOT_MATCHED);

        Inquiry inquiry = dto.toInquiryEntity();
        inquiry.setCustomer(customer);
        Inquiry savedInquiry = inquiryRepository.save(inquiry);

        return InquiryResponseDTO.from(savedInquiry);
    }

    @Transactional
    public InquiryResponseDTO updateInquiryById(
        String token,
        Long inquiryId,
        InquiryUpdateRequestDTO inquiryUpdateRequestDTO
    ) {
        Long userId = signService.parseToken(token);

        Customer customer = customerRepository.findById(userId)
            .orElseThrow(() -> new CommonException(ErrorCode.USER_NOT_FOUND));

        Inquiry inquiry = inquiryRepository.findById(inquiryId)
            .orElseThrow(() -> new CommonException(ErrorCode.INQUIRY_NOT_FOUND));

        if(!Objects.equals(customer.getUserId(), inquiry.getCustomer().getUserId()))
            throw new CommonException(ErrorCode.USER_NOT_MATCHED);

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
    public void deleteInquiryById(String token, Long inquiryId) {
        Long userId = signService.parseToken(token);

        Customer customer = customerRepository.findById(userId)
            .orElseThrow(() -> new CommonException(ErrorCode.USER_NOT_FOUND));

        Inquiry inquiry = inquiryRepository.findById(inquiryId)
            .orElseThrow(() -> new CommonException(ErrorCode.INQUIRY_NOT_FOUND));

        if (!Objects.equals(customer.getUserId(), inquiry.getCustomer().getUserId()))
            throw new CommonException(ErrorCode.USER_NOT_MATCHED);

        inquiry.deleteInquiry();
    }

    @Transactional(readOnly = true)
    public InquiryResponseDTO getInquiryDetail(
        String token,
        Long customerId,
        Long inquiryId
    ) {
        Long userId = signService.parseToken(token);

        Customer customer = customerRepository.findById(userId)
            .orElseThrow(() -> new CommonException(ErrorCode.USER_NOT_FOUND));

        inquiryRepository.findById(inquiryId)
            .orElseThrow(() -> new CommonException(ErrorCode.INQUIRY_NOT_FOUND));

        Inquiry inquiry = inquiryRepository.findByCustomer_UserIdAndInquiryId(customerId, inquiryId)
            .orElseThrow(() -> new CommonException(ErrorCode.INQUIRY_NOT_FOUND));

        if(!Objects.equals(customer.getUserId(), inquiry.getCustomer().getUserId()))
            throw new CommonException(ErrorCode.USER_NOT_MATCHED);

        return InquiryResponseDTO.from(inquiry);
    }

    @Transactional(readOnly = true)
    public List<InquiryResponseDTO> getInquiriesByProgress(String token, Progress progress) {
        Long userId = signService.parseToken(token);

        Stream.of(
                customerRepository.findById(userId),
                managerRepository.findById(userId)
            )
            .flatMap(Optional::stream)
            .findFirst()
            .orElseThrow(() -> new CommonException(ErrorCode.USER_NOT_FOUND));

        List<Inquiry> inquiries = inquiryRepository.findByProgress(progress);

        return inquiries.stream()
            .map(InquiryResponseDTO::from)
            .collect(Collectors.toList());
    }

    private Sort getSortByOrderCondition(String sortBy) {
        switch (sortBy) {
            case "oldest":
                return Sort.by(Sort.Order.asc("createdDate"), Sort.Order.desc("inquiryId"));
            case "latest":
                return Sort.by(Sort.Order.desc("createdDate"), Sort.Order.desc("inquiryId"));
            default:
                throw new CommonException(ErrorCode.INVALID_ORDER_CONDITION);
        }
    }
}
