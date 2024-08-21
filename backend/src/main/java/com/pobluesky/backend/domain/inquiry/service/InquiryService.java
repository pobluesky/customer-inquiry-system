package com.pobluesky.backend.domain.inquiry.service;

import com.pobluesky.backend.domain.file.dto.FileInfo;
import com.pobluesky.backend.domain.file.service.FileService;
import com.pobluesky.backend.domain.inquiry.dto.request.InquiryCreateRequestDTO;
import com.pobluesky.backend.domain.inquiry.dto.request.InquiryUpdateRequestDTO;
import com.pobluesky.backend.domain.inquiry.dto.response.InquiryResponseDTO;
import com.pobluesky.backend.domain.inquiry.dto.response.InquirySummaryResponseDTO;
import com.pobluesky.backend.domain.inquiry.entity.Inquiry;
import com.pobluesky.backend.domain.inquiry.entity.InquiryType;
import com.pobluesky.backend.domain.inquiry.entity.ProductType;
import com.pobluesky.backend.domain.inquiry.entity.Progress;
import com.pobluesky.backend.domain.inquiry.repository.InquiryRepository;
import com.pobluesky.backend.domain.lineitem.dto.response.LineItemResponseDTO;
import com.pobluesky.backend.domain.lineitem.service.LineItemService;
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

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

@Service
@Slf4j
@RequiredArgsConstructor
public class InquiryService {

    private final SignService signService;

    private final LineItemService lineItemService;

    private final InquiryRepository inquiryRepository;

    private final CustomerRepository customerRepository;

    private final FileService fileService;

    private final ManagerRepository managerRepository;

    @Transactional(readOnly = true)
    public Page<InquirySummaryResponseDTO> getInquiriesByCustomer(
        String token,
        Long customerId,
        int page,
        int size,
        String sortBy,
        Progress progress,
        ProductType productType,
        String customerName,
        InquiryType inquiryType,
        LocalDate startDate,
        LocalDate endDate
    ) {
        Long userId = signService.parseToken(token);

        Customer customer = customerRepository.findById(userId)
            .orElseThrow(() -> new CommonException(ErrorCode.USER_NOT_FOUND));

        if(!Objects.equals(customer.getUserId(), customerId))
            throw new CommonException(ErrorCode.USER_NOT_MATCHED);

        Sort sort = getSortByOrderCondition(sortBy);
        Pageable pageable = PageRequest.of(
            page,
            size,
            sort
        );

        return inquiryRepository.findInquiriesByCustomer(
            customerId,
            pageable,
            progress,
            productType,
            customerName,
            inquiryType,
            startDate,
            endDate
        );
    }

    @Transactional(readOnly = true)
    public Page<InquirySummaryResponseDTO> getInquiriesByManager(
        String token,
        int page,
        int size,
        String sortBy,
        Progress progress,
        ProductType productType,
        String customerName,
        InquiryType inquiryType,
        LocalDate startDate,
        LocalDate endDate
    ) {
        Long userId = signService.parseToken(token);

        Manager manager = managerRepository.findById(userId)
            .orElseThrow(() -> new CommonException(ErrorCode.USER_NOT_FOUND));

        if(manager.getRole() == UserRole.CUSTOMER)
            throw new CommonException(ErrorCode.UNAUTHORIZED_USER_MANAGER);

        Sort sort = getSortByOrderCondition(sortBy);
        Pageable pageable = PageRequest.of(
            page,
            size,
            sort
        );

        return inquiryRepository.findInquiriesByManager(
            pageable,
            progress,
            productType,
            customerName,
            inquiryType,
            startDate,
            endDate
        );
    }

    @Transactional
    public InquiryResponseDTO createInquiry(
        String token,
        Long customerId,
        InquiryCreateRequestDTO dto,
        MultipartFile file
    ) {
        Long userId = signService.parseToken(token);

        Customer customer = customerRepository.findById(userId)
            .orElseThrow(() -> new CommonException(ErrorCode.USER_NOT_FOUND));

        if(!Objects.equals(customer.getUserId(), customerId))
            throw new CommonException(ErrorCode.USER_NOT_MATCHED);

        String filePath = null;
        String fileName = null;
        if (file != null) {
            FileInfo fileInfo = fileService.uploadFile(file);
            filePath = fileInfo.getStoredFilePath();
            fileName = fileInfo.getOriginName();
        }

        Inquiry inquiry = dto.toInquiryEntity(filePath,fileName);
        inquiry.setCustomer(customer);

        Inquiry savedInquiry = inquiryRepository.save(inquiry);

        List<LineItemResponseDTO> lineItems = lineItemService.createLineItems(
            inquiry,
            dto.lineItemRequestDTOs()
        );

        return InquiryResponseDTO.of(savedInquiry, lineItems);
    }

    @Transactional
    public InquiryResponseDTO updateInquiryById(
        String token,
        Long inquiryId,
        InquiryUpdateRequestDTO inquiryUpdateRequestDTO,
        MultipartFile file
    ) {
        Long userId = signService.parseToken(token);

        Customer customer = customerRepository.findById(userId)
            .orElseThrow(() -> new CommonException(ErrorCode.USER_NOT_FOUND));

        Inquiry inquiry = inquiryRepository.findById(inquiryId)
            .orElseThrow(() -> new CommonException(ErrorCode.INQUIRY_NOT_FOUND));

        if(!Objects.equals(customer.getUserId(), inquiry.getCustomer().getUserId()))
            throw new CommonException(ErrorCode.USER_NOT_MATCHED);

        String filePath = null;
        String fileName = null;
        if (file != null) {
            FileInfo fileInfo = fileService.uploadFile(file);
            filePath = fileInfo.getStoredFilePath();
            fileName = fileInfo.getOriginName();
        }

        lineItemService.deleteLineItemsByInquiry(inquiry);

        List<LineItemResponseDTO> lineItemResponseDTOS = lineItemService.createLineItems(
            inquiry,
            inquiryUpdateRequestDTO.lineItemRequestDTOs()
        );

        inquiry.updateInquiry(
            inquiryUpdateRequestDTO.country(),
            inquiryUpdateRequestDTO.corporate(),
            inquiryUpdateRequestDTO.salesPerson(),
            inquiryUpdateRequestDTO.inquiryType(),
            inquiryUpdateRequestDTO.industry(),
            inquiryUpdateRequestDTO.productType(),
            inquiryUpdateRequestDTO.progress(),
            inquiryUpdateRequestDTO.customerRequestDate(),
            inquiryUpdateRequestDTO.additionalRequests(),
            filePath,
            fileName,
            inquiryUpdateRequestDTO.responseDeadline()
        );

        return InquiryResponseDTO.of(inquiry, lineItemResponseDTOS);
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

        lineItemService.deleteLineItemsByInquiry(inquiry);

        inquiry.deleteInquiry();
    }

    @Transactional(readOnly = true)
    public InquiryResponseDTO getInquiryDetailForCustomer(
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

        List<LineItemResponseDTO> lineItemsByInquiry =
            lineItemService.getFullLineItemsByInquiry(inquiryId);

        if(!Objects.equals(customer.getUserId(), inquiry.getCustomer().getUserId()))
            throw new CommonException(ErrorCode.USER_NOT_MATCHED);

        return InquiryResponseDTO.of(inquiry, lineItemsByInquiry);
    }

    @Transactional(readOnly = true)
    public InquiryResponseDTO getInquiryDetailForManager(
        String token,
        Long inquiryId
    ) {
        Long userId = signService.parseToken(token);

        managerRepository.findById(userId)
            .orElseThrow(() -> new CommonException(ErrorCode.USER_NOT_FOUND));

        inquiryRepository.findById(inquiryId)
            .orElseThrow(() -> new CommonException(ErrorCode.INQUIRY_NOT_FOUND));

        Inquiry inquiry = inquiryRepository.findActiveInquiryByInquiryId(inquiryId)
            .orElseThrow(() -> new CommonException(ErrorCode.INQUIRY_NOT_FOUND));

        List<LineItemResponseDTO> lineItemsByInquiry =
            lineItemService.getFullLineItemsByInquiry(inquiryId);

        return InquiryResponseDTO.of(inquiry, lineItemsByInquiry);
    }

    private Sort getSortByOrderCondition(String sortBy) {
        return switch (sortBy) {
            case "OLDEST" -> Sort.by(
                Sort.Order.asc("createdDate"),
                Sort.Order.desc("inquiryId")
            );

            case "LATEST" -> Sort.by(
                Sort.Order.desc("createdDate"),
                Sort.Order.desc("inquiryId")
            );

            default -> throw new CommonException(ErrorCode.INVALID_ORDER_CONDITION);
        };
    }
}
