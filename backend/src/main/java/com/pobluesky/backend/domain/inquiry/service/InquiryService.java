package com.pobluesky.backend.domain.inquiry.service;

import com.pobluesky.backend.domain.file.dto.FileInfo;
import com.pobluesky.backend.domain.file.service.FileService;
import com.pobluesky.backend.domain.inquiry.dto.request.InquiryCreateRequestDTO;
import com.pobluesky.backend.domain.inquiry.dto.request.InquiryProgressUpdateRequestDTO;
import com.pobluesky.backend.domain.inquiry.dto.request.InquiryUpdateRequestDTO;
import com.pobluesky.backend.domain.inquiry.dto.response.InquiryProgressResponseDTO;
import com.pobluesky.backend.domain.inquiry.dto.response.InquiryResponseDTO;
import com.pobluesky.backend.domain.inquiry.dto.response.InquirySummaryResponseDTO;
import com.pobluesky.backend.domain.inquiry.entity.Industry;
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

import com.sun.xml.bind.v2.runtime.output.IndentingUTF8XmlOutput;
import java.time.LocalDate;
import java.util.List;
import java.util.Objects;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
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

    // Inquiry 전체 조회(고객사)
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

        Pageable pageable = PageRequest.of(page, size);

        return inquiryRepository.findInquiriesByCustomer(
            customerId,
            pageable,
            progress,
            productType,
            customerName,
            inquiryType,
            startDate,
            endDate,
            sortBy
        );
    }

    // Inquiry 전체 조회(고객사) without paging
    @Transactional(readOnly = true)
    public List<InquirySummaryResponseDTO> getInquiriesByCustomerWithoutPaging(
        String token,
        Long customerId,
        String sortBy,
        Progress progress,
        ProductType productType,
        String customerName,
        InquiryType inquiryType,
        String salesPerson,
        Industry industry,
        LocalDate startDate,
        LocalDate endDate
    ) {
        Long userId = signService.parseToken(token);

        Customer customer = customerRepository.findById(userId)
            .orElseThrow(() -> new CommonException(ErrorCode.USER_NOT_FOUND));

        if(!Objects.equals(customer.getUserId(), customerId))
            throw new CommonException(ErrorCode.USER_NOT_MATCHED);

        return inquiryRepository.findInquiriesByCustomerWithoutPaging(
            customerId,
            progress,
            productType,
            customerName,
            inquiryType,
            salesPerson,
            industry,
            startDate,
            endDate,
            sortBy
        );
    }

    // Inquiry 전체 조회(담당자)
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

        Pageable pageable = PageRequest.of(page, size);

        return inquiryRepository.findInquiriesByManager(
            pageable,
            progress,
            productType,
            customerName,
            inquiryType,
            startDate,
            endDate,
            sortBy
        );
    }

    // Inquiry 전체 조회(담당자) without paging
    @Transactional(readOnly = true)
    public List<InquirySummaryResponseDTO> getInquiriesByManagerWithoutPaging(
        String token,
        String sortBy,
        Progress progress,
        ProductType productType,
        String customerName,
        InquiryType inquiryType,
        String salesPerson,
        Industry industry,
        LocalDate startDate,
        LocalDate endDate
    ) {
        Long userId = signService.parseToken(token);

        Manager manager = managerRepository.findById(userId)
            .orElseThrow(() -> new CommonException(ErrorCode.USER_NOT_FOUND));

        if(manager.getRole() == UserRole.CUSTOMER)
            throw new CommonException(ErrorCode.UNAUTHORIZED_USER_MANAGER);

        return inquiryRepository.findInquiriesByManagerWithoutPaging(
            progress,
            productType,
            customerName,
            inquiryType,
            salesPerson,
            industry,
            startDate,
            endDate,
            sortBy
        );
    }

    @Transactional
    public InquiryResponseDTO createInquiry(
        String token,
        Long customerId,
        MultipartFile file,
        InquiryCreateRequestDTO dto
    ) {
        Long userId = signService.parseToken(token);

        Customer customer = customerRepository.findById(userId)
            .orElseThrow(() -> new CommonException(ErrorCode.USER_NOT_FOUND));

        if(!Objects.equals(customer.getUserId(), customerId))
            throw new CommonException(ErrorCode.USER_NOT_MATCHED);

        String fileName = null;
        String filePath = null;

        if (file != null) {
            FileInfo fileInfo = fileService.uploadFile(file);
            fileName = fileInfo.getOriginName();
            filePath = fileInfo.getStoredFilePath();
        }

        Inquiry inquiry = dto.toInquiryEntity(fileName, filePath);
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
        MultipartFile file,
        InquiryUpdateRequestDTO inquiryUpdateRequestDTO
        ) {
        Long userId = signService.parseToken(token);

        Customer customer = customerRepository.findById(userId)
            .orElseThrow(() -> new CommonException(ErrorCode.USER_NOT_FOUND));

        Inquiry inquiry = inquiryRepository.findById(inquiryId)
            .orElseThrow(() -> new CommonException(ErrorCode.INQUIRY_NOT_FOUND));

        if(!Objects.equals(customer.getUserId(), inquiry.getCustomer().getUserId()))
            throw new CommonException(ErrorCode.USER_NOT_MATCHED);

        String fileName = null;
        String filePath = null;

        if (file != null) {
            FileInfo fileInfo = fileService.uploadFile(file);
            fileName = fileInfo.getOriginName();
            filePath = fileInfo.getStoredFilePath();
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
            fileName,
            filePath,
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

    @Transactional
    public InquiryProgressResponseDTO updateInquiryProgress(
        String token,
        Long inquiryId,
        InquiryProgressUpdateRequestDTO requestDTO
    ) {
        Long userId = signService.parseToken(token);

        Manager manager = managerRepository.findById(userId)
            .orElseThrow(() -> new CommonException(ErrorCode.USER_NOT_FOUND));

        if(manager.getRole() == UserRole.CUSTOMER)
            throw new CommonException(ErrorCode.UNAUTHORIZED_USER_MANAGER);

        Inquiry inquiry = inquiryRepository.findById(inquiryId)
            .orElseThrow(() -> new CommonException(ErrorCode.INQUIRY_NOT_FOUND));

        Progress currentProgress = inquiry.getProgress();
        Progress newProgress = requestDTO.progress();

        if (!isValidProgressUpdate(currentProgress, newProgress)) {
            throw new CommonException(ErrorCode.INVALID_PROGRESS_UPDATE);
        }

        inquiry.updateProgress(newProgress);

        return InquiryProgressResponseDTO.from(inquiry);
    }

    private boolean isValidProgressUpdate(Progress currentProgress, Progress newProgress) {
        switch (currentProgress) {
            case RECEIPT:
                return newProgress == Progress.FIRST_REVIEW;
            case FIRST_REVIEW:
                return newProgress == Progress.QUALITY_REVIEW || newProgress == Progress.FINAL_REVIEW;
            case QUALITY_REVIEW:
                return newProgress == Progress.FINAL_REVIEW;
            default:
                return false;
        }
    }
}
