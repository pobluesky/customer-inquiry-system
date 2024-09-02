package com.pobluesky.inquiry.service;

import com.pobluesky.config.global.error.CommonException;
import com.pobluesky.config.global.error.ErrorCode;
import com.pobluesky.config.global.security.UserRole;
import com.pobluesky.feign.Customer;
import com.pobluesky.feign.FileClient;
import com.pobluesky.feign.Manager;
import com.pobluesky.feign.UserClient;
import com.pobluesky.inquiry.dto.request.InquiryCreateRequestDTO;
import com.pobluesky.inquiry.dto.request.InquiryUpdateRequestDTO;
import com.pobluesky.inquiry.dto.response.InquiryAllocateResponseDTO;
import com.pobluesky.inquiry.dto.response.InquiryProgressResponseDTO;
import com.pobluesky.inquiry.dto.response.InquiryResponseDTO;
import com.pobluesky.inquiry.dto.response.InquirySummaryResponseDTO;
import com.pobluesky.inquiry.entity.FileInfo;
import com.pobluesky.inquiry.entity.Industry;
import com.pobluesky.inquiry.entity.Inquiry;
import com.pobluesky.inquiry.entity.InquiryType;
import com.pobluesky.inquiry.entity.ProductType;
import com.pobluesky.inquiry.entity.Progress;
import com.pobluesky.inquiry.repository.InquiryRepository;
import com.pobluesky.lineitem.dto.response.LineItemResponseDTO;
import com.pobluesky.lineitem.service.LineItemService;
import java.time.LocalDate;
import java.util.List;
import java.util.Objects;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

@Service
@Slf4j
@RequiredArgsConstructor
public class InquiryService {

    private final LineItemService lineItemService;

    private final InquiryRepository inquiryRepository;

    private final FileClient fileClient;

    private final UserClient userClient;

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
        LocalDate endDate,
        String salesManagerName,
        String qualityManagerName
    ) {
        Long userId = userClient.parseToken(token);

        Customer customer = userClient.getCustomerById(userId);
        //
        if(customer==null){
            throw new CommonException(ErrorCode.USER_NOT_FOUND);
        }

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
            sortBy,
            salesManagerName,
            qualityManagerName
        );
    }

    // Inquiry 전체 조회(판매 담당자) without paging
    @Transactional(readOnly = true)
    public List<InquirySummaryResponseDTO> getInquiriesBySalesManagerWithoutPaging(
        String token,
        String sortBy,
        Progress progress,
        ProductType productType,
        String customerName,
        InquiryType inquiryType,
        String salesPerson,
        Industry industry,
        LocalDate startDate,
        LocalDate endDate,
        String salesManagerName,
        String qualityManagerName
    ) {
        Long userId = userClient.parseToken(token);

        Manager manager = userClient.getManagerById(userId);
        //
        if(manager==null){
            throw new CommonException(ErrorCode.USER_NOT_FOUND);
        }

        if(manager.getRole() == UserRole.CUSTOMER)
            throw new CommonException(ErrorCode.UNAUTHORIZED_USER_MANAGER);

        return inquiryRepository.findInquiriesBySalesManagerWithoutPaging(
            progress,
            productType,
            customerName,
            inquiryType,
            salesPerson,
            industry,
            startDate,
            endDate,
            sortBy,
            salesManagerName,
            qualityManagerName
        );
    }

    // Inquiry 전체 조회(품질 담당자) without paging
    @Transactional(readOnly = true)
    public List<InquirySummaryResponseDTO> getInquiriesByQualityManagerWithoutPaging(
        String token,
        String sortBy,
        Progress progress,
        ProductType productType,
        String customerName,
        String salesPerson,
        Industry industry,
        LocalDate startDate,
        LocalDate endDate,
        String salesManagerName,
        String qualityManagerName
    ) {
        Long userId = userClient.parseToken(token);

        Manager manager = userClient.getManagerById(userId);
        //
        if(manager==null){
            throw new CommonException(ErrorCode.USER_NOT_FOUND);
        }

        if(manager.getRole() == UserRole.CUSTOMER)
            throw new CommonException(ErrorCode.UNAUTHORIZED_USER_MANAGER);

        return inquiryRepository.findInquiriesByQualityManagerWithoutPaging(
            progress,
            productType,
            customerName,
            InquiryType.COMMON_INQUIRY,
            salesPerson,
            industry,
            startDate,
            endDate,
            sortBy,
            salesManagerName,
            qualityManagerName
        );
    }

    @Transactional
    public InquiryResponseDTO createInquiry(
        String token,
        Long customerId,
        MultipartFile file,
        InquiryCreateRequestDTO dto
    ) {
        Long userId = userClient.parseToken(token);

        Customer customer = userClient.getCustomerById(userId);
        //
        if(customer==null){
            throw new CommonException(ErrorCode.USER_NOT_FOUND);
        }

        if(!Objects.equals(customer.getUserId(), customerId))
            throw new CommonException(ErrorCode.USER_NOT_MATCHED);

        String fileName = null;
        String filePath = null;

        if (file != null) {
            FileInfo fileInfo = fileClient.uploadFile(file);
            fileName = fileInfo.getOriginName();
            filePath = fileInfo.getStoredFilePath();
        }

        Inquiry inquiry = dto.toInquiryEntity(fileName, filePath);

        inquiry.setCustomerId(customer.getUserId());

        Inquiry savedInquiry = inquiryRepository.save(inquiry);

        List<LineItemResponseDTO> lineItems = lineItemService.createLineItems(
            inquiry,
            dto.lineItemRequestDTOs()
        );

        return InquiryResponseDTO.of(savedInquiry, lineItems,userClient);
    }

    @Transactional
    public InquiryResponseDTO updateInquiryById(
        String token,
        Long inquiryId,
        MultipartFile file,
        InquiryUpdateRequestDTO inquiryUpdateRequestDTO
    ) {
        Long userId = userClient.parseToken(token);

        Customer customer = userClient.getCustomerById(userId);
        //
        if(customer==null){
            throw new CommonException(ErrorCode.USER_NOT_FOUND);
        }

        Inquiry inquiry = inquiryRepository.findById(inquiryId)
            .orElseThrow(() -> new CommonException(ErrorCode.INQUIRY_NOT_FOUND));

        if(inquiry.getProgress() != Progress.SUBMIT)
            throw new CommonException(ErrorCode.INQUIRY_UNABLE_TO_MODIFY);

        if(!Objects.equals(customer.getUserId(), inquiry.getCustomerId()))
            throw new CommonException(ErrorCode.USER_NOT_MATCHED);

        String fileName = inquiry.getFileName();
        String filePath = inquiry.getFilePath();

        if (file != null) {
            FileInfo fileInfo = fileClient.uploadFile(file);
            fileName = fileInfo.getOriginName();
            filePath = fileInfo.getStoredFilePath();
        }

        lineItemService.deleteLineItemsByInquiry(inquiry);

        inquiry.updateInquiry(
            inquiryUpdateRequestDTO.country(),
            inquiryUpdateRequestDTO.corporate(),
            inquiryUpdateRequestDTO.salesPerson(),
            inquiryUpdateRequestDTO.inquiryType(),
            inquiryUpdateRequestDTO.industry(),
            inquiryUpdateRequestDTO.productType(),
            inquiryUpdateRequestDTO.customerRequestDate(),
            inquiryUpdateRequestDTO.additionalRequests(),
            fileName,
            filePath,
            inquiryUpdateRequestDTO.responseDeadline()
        );

        List<LineItemResponseDTO> lineItemResponseDTOS = lineItemService.createLineItems(
            inquiry,
            inquiryUpdateRequestDTO.lineItemRequestDTOs()
        );

        return InquiryResponseDTO.of(inquiry, lineItemResponseDTOS,userClient);
    }

    @Transactional
    public void deleteInquiryById(String token, Long inquiryId) {
        Long userId = userClient.parseToken(token);

        Customer customer = userClient.getCustomerById(userId);
        //
        if(customer==null){
            throw new CommonException(ErrorCode.USER_NOT_FOUND);
        }

        Inquiry inquiry = inquiryRepository.findById(inquiryId)
            .orElseThrow(() -> new CommonException(ErrorCode.INQUIRY_NOT_FOUND));

        if (!Objects.equals(customer.getUserId(), inquiry.getCustomerId()))
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
        Long userId = userClient.parseToken(token);

        Customer customer = userClient.getCustomerById(userId);
        //
        if(customer==null){
            throw new CommonException(ErrorCode.USER_NOT_FOUND);
        }

        inquiryRepository.findById(inquiryId)
            .orElseThrow(() -> new CommonException(ErrorCode.INQUIRY_NOT_FOUND));

        Inquiry inquiry = inquiryRepository.findByCustomerIdAndInquiryId(customerId, inquiryId)
            .orElseThrow(() -> new CommonException(ErrorCode.INQUIRY_NOT_FOUND));

        List<LineItemResponseDTO> lineItemsByInquiry =
            lineItemService.getFullLineItemsByInquiry(inquiryId);

        if(!Objects.equals(customer.getUserId(), inquiry.getCustomerId()))
            throw new CommonException(ErrorCode.USER_NOT_MATCHED);

        return InquiryResponseDTO.of(inquiry, lineItemsByInquiry,userClient);
    }

    @Transactional(readOnly = true)
    public InquiryResponseDTO getInquiryDetailForManager(
        String token,
        Long inquiryId
    ) {
        Long userId = userClient.parseToken(token);

        Manager manager = userClient.getManagerById(userId);
        //
        if(manager==null){
            throw new CommonException(ErrorCode.USER_NOT_FOUND);
        }

        inquiryRepository.findById(inquiryId)
            .orElseThrow(() -> new CommonException(ErrorCode.INQUIRY_NOT_FOUND));

        Inquiry inquiry = inquiryRepository.findActiveInquiryByInquiryId(inquiryId)
            .orElseThrow(() -> new CommonException(ErrorCode.INQUIRY_NOT_FOUND));

        List<LineItemResponseDTO> lineItemsByInquiry =
            lineItemService.getFullLineItemsByInquiry(inquiryId);

        return InquiryResponseDTO.of(inquiry, lineItemsByInquiry,userClient);
    }

    @Transactional
    public InquiryProgressResponseDTO updateInquiryProgress(
        String token,
        Long inquiryId,
        String progress
    ) {
        Long userId = userClient.parseToken(token);

        Manager manager = userClient.getManagerById(userId);
        //
        if(manager==null){
            throw new CommonException(ErrorCode.USER_NOT_FOUND);
        }

        if(manager.getRole() == UserRole.CUSTOMER)
            throw new CommonException(ErrorCode.UNAUTHORIZED_USER_MANAGER);

        Inquiry inquiry = inquiryRepository.findById(inquiryId)
            .orElseThrow(() -> new CommonException(ErrorCode.INQUIRY_NOT_FOUND));

        Progress newProgress = Progress.valueOf(progress);

        if(!isValidProgressUpdate(
            inquiry.getProgress(),
            inquiry.getInquiryType(),
            newProgress
        )) throw new CommonException(ErrorCode.INVALID_PROGRESS_UPDATE);

        inquiry.updateProgress(newProgress);

        return InquiryProgressResponseDTO.from(inquiry);
    }

    private boolean isValidProgressUpdate(
        Progress currentProgress,
        InquiryType inquiryType,
        Progress newProgress
    ) {
        switch (currentProgress) {
            case SUBMIT:
                return newProgress == Progress.RECEIPT;
            case RECEIPT:
                return newProgress == Progress.FIRST_REVIEW_COMPLETED;
            case FIRST_REVIEW_COMPLETED:
                if(inquiryType == InquiryType.QUOTE_INQUIRY)
                    return newProgress == Progress.FINAL_REVIEW_COMPLETED;
                else if(inquiryType == InquiryType.COMMON_INQUIRY)
                    return newProgress == Progress.QUALITY_REVIEW_REQUEST;
            case QUALITY_REVIEW_REQUEST:
                if(inquiryType == InquiryType.COMMON_INQUIRY)
                    return newProgress == Progress.QUALITY_REVIEW_RESPONSE;
            case QUALITY_REVIEW_RESPONSE:
                if(inquiryType == InquiryType.COMMON_INQUIRY)
                    return newProgress == Progress.QUALITY_REVIEW_COMPLETED;
            case QUALITY_REVIEW_COMPLETED:
                if(inquiryType == InquiryType.COMMON_INQUIRY)
                    return newProgress == Progress.FINAL_REVIEW_COMPLETED;
            default:
                return false;
        }
    }

    @Transactional
    public InquiryAllocateResponseDTO allocateManager(String token, Long inquiryId) {
        Long userId = userClient.parseToken(token);

        Manager manager = userClient.getManagerById(userId);
        //
        if(manager==null){
            throw new CommonException(ErrorCode.USER_NOT_FOUND);
        }

        Inquiry inquiry = inquiryRepository.findById(inquiryId)
            .orElseThrow(() -> new CommonException(ErrorCode.INQUIRY_NOT_FOUND));

        if (manager.getRole() == UserRole.SALES) {
            if (inquiry.getProgress() == Progress.SUBMIT) {
                inquiry.allocateSalesManager(manager.getUserId());
                inquiry.updateProgress(Progress.RECEIPT);
            } else throw new CommonException(ErrorCode.INQUIRY_UNABLE_ALLOCATE);
        } else {
            if (inquiry.getProgress() == Progress.QUALITY_REVIEW_REQUEST) {
                inquiry.allocateQualityManager(manager.getUserId());
                inquiry.updateProgress(Progress.QUALITY_REVIEW_RESPONSE);
            } else throw new CommonException(ErrorCode.INQUIRY_UNABLE_ALLOCATE);
        }

        return InquiryAllocateResponseDTO.from(inquiry, userClient);
    }
}