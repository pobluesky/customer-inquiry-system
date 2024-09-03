package com.pobluesky.backend.domain.inquiry.service;

import com.pobluesky.backend.domain.file.dto.FileInfo;
import com.pobluesky.backend.domain.file.service.FileService;
import com.pobluesky.backend.domain.inquiry.dto.request.InquiryCreateRequestDTO;
import com.pobluesky.backend.domain.inquiry.dto.request.InquiryUpdateRequestDTO;
import com.pobluesky.backend.domain.inquiry.dto.response.*;
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

import java.text.DecimalFormat;
import java.time.LocalDate;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;

import java.util.function.Supplier;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

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
        Customer customer = validateCustomer(token);

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
        Manager manager = validateManager(token);

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
        Manager manager = validateManager(token);

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
        Customer customer = validateCustomer(token);

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
        Customer customer = validateCustomer(token);

        Inquiry inquiry = inquiryRepository.findById(inquiryId)
            .orElseThrow(() -> new CommonException(ErrorCode.INQUIRY_NOT_FOUND));

        if(inquiry.getProgress() != Progress.SUBMIT)
            throw new CommonException(ErrorCode.INQUIRY_UNABLE_TO_MODIFY);

        if(!Objects.equals(customer.getUserId(), inquiry.getCustomer().getUserId()))
            throw new CommonException(ErrorCode.USER_NOT_MATCHED);

        String fileName = inquiry.getFileName();
        String filePath = inquiry.getFilePath();

        if (file != null) {
            FileInfo fileInfo = fileService.uploadFile(file);
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

        return InquiryResponseDTO.of(inquiry, lineItemResponseDTOS);
    }

    @Transactional
    public void deleteInquiryById(String token, Long inquiryId) {
        Customer customer = validateCustomer(token);

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
        Customer customer = validateCustomer(token);

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
        validateManager(token);

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
        String progress
    ) {
        Manager manager = validateManager(token);

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
        Manager manager = validateManager(token);

        Inquiry inquiry = inquiryRepository.findById(inquiryId)
            .orElseThrow(() -> new CommonException(ErrorCode.INQUIRY_NOT_FOUND));

        if (manager.getRole() == UserRole.SALES) {
            if (inquiry.getProgress() == Progress.SUBMIT) {
                inquiry.allocateSalesManager(manager);
                inquiry.updateProgress(Progress.RECEIPT);
            } else throw new CommonException(ErrorCode.INQUIRY_UNABLE_ALLOCATE);
        } else {
            if (inquiry.getProgress() == Progress.QUALITY_REVIEW_REQUEST) {
                inquiry.allocateQualityManager(manager);
                inquiry.updateProgress(Progress.QUALITY_REVIEW_RESPONSE);
            } else throw new CommonException(ErrorCode.INQUIRY_UNABLE_ALLOCATE);
        }

        return InquiryAllocateResponseDTO.from(inquiry);
    }

    public List<InquiryFavoriteResponseDTO> getAllInquiriesByProductType(
        String token,
        Long customerId,
        ProductType productType
    ) {
        Customer customer = validateCustomer(token);

        if (!Objects.equals(customer.getUserId(), customerId)) {
            throw new CommonException(ErrorCode.USER_NOT_MATCHED);
        }

        List<Inquiry> inquiries =
            inquiryRepository.findInquiriesByCustomerIdAndProductType(customerId, productType);

        return convertToResponseDTO(inquiries);
    }

    public List<InquiryFavoriteResponseDTO> getFavoriteInquiriesByProductType(
        String token,
        Long customerId,
        ProductType productType
    ) {
        Customer customer = validateCustomer(token);

        if (!Objects.equals(customer.getUserId(), customerId)) {
            throw new CommonException(ErrorCode.USER_NOT_MATCHED);
        }

        List<Inquiry> inquiries =
            inquiryRepository.findFavoriteInquiriesByCustomerIdAndProductType(customerId, productType);

        return convertToResponseDTO(inquiries);
    }

    @Transactional
    public void updateFavoriteInquiryStatus(String token, Long inquiryId) {
        Customer customer = validateCustomer(token);

        Inquiry inquiry = inquiryRepository.findById(inquiryId)
            .orElseThrow(() -> new CommonException(ErrorCode.INQUIRY_NOT_FOUND));

        if(!Objects.equals(customer.getUserId(), inquiry.getCustomer().getUserId()))
            throw new CommonException(ErrorCode.USER_NOT_MATCHED);

        inquiry.updateFavorite();
    }

    public InquiryFavoriteLineItemResponseDTO getLineItemsByInquiryId(
        String token,
        Long userId,
        Long inquiryId
    ) {
        Customer customer = validateCustomer(token);

        if (!Objects.equals(customer.getUserId(), userId)) {
            throw new CommonException(ErrorCode.USER_NOT_MATCHED);
        }

        Inquiry inquiry = inquiryRepository.findByCustomer_UserIdAndInquiryId(userId, inquiryId)
            .orElseThrow(() -> new CommonException(ErrorCode.INQUIRY_NOT_FOUND));

        List<LineItemResponseDTO> lineItems = lineItemService.getFullLineItemsByInquiry(inquiryId);

        return InquiryFavoriteLineItemResponseDTO.of(inquiry, lineItems);
    }



    private List<Object[]> getManagerSpecificInquiryData(
            Manager manager,
            Supplier<List<Object[]>> salesQuery,
            Supplier<List<Object[]>> qualityQuery
    ) {

        return manager.getRole() == UserRole.SALES ? salesQuery.get() : qualityQuery.get();
    }

    private Integer getManagerSpecificCount(
            Manager manager,
            Supplier<Integer> salesCount,
            Supplier<Integer> qualityCount
    ) {

        return manager.getRole() == UserRole.SALES ? salesCount.get() : qualityCount.get();
    }

    @Transactional(readOnly = true)
    public Map<String, List<Object[]>> getAverageDaysPerMonth(String token) {
        Manager manager = validateManager(token);
        Map<String, List<Object[]>> results = new HashMap<>();

        results.put("total", inquiryRepository.findAverageDaysPerMonth());
        results.put("manager", getManagerSpecificInquiryData(
                manager,
                () -> inquiryRepository.findAverageDaysPerMonthBySalesManager(manager.getUserId()),
                () -> inquiryRepository.findAverageDaysPerMonthByQualityManager(manager.getUserId())
        ));

        return results;
    }

    @Transactional(readOnly = true)
    public Map<String, List<Object[]>> getInquiryCountsByProgress(String token) {
        Manager manager = validateManager(token);
        Map<String, List<Object[]>> results = new HashMap<>();

        results.put("total", inquiryRepository.countInquiriesByProgress());
        results.put("manager", getManagerSpecificInquiryData(
                manager,
                () -> inquiryRepository.countInquiriesBySalesManagerAndProgress(manager),
                () -> inquiryRepository.countInquiriesByQualityManagerAndProgress(manager)
        ));

        return results;
    }

    @Transactional(readOnly = true)
    public Map<String, Map<String, String>> getInquiryPercentageCompletedUncompleted(String token) {
        Manager manager = validateManager(token);
        Map<String, Map<String, String>> results = new HashMap<>();

        Integer totalByManager = getManagerSpecificCount(
                manager,
                () -> inquiryRepository.countInquiriesBySalesManager(manager),
                () -> inquiryRepository.countInquiriesByQualityManager(manager)
        );

        Integer completedCountsByManager = getManagerSpecificCount(
                manager,
                () -> inquiryRepository.countInquiriesByFinalProgressBySalesManager(manager),
                () -> inquiryRepository.countInquiriesByFinalProgressByQualityManager(manager)
        );

        int totalInquiries = inquiryRepository.findAll().size();
        Integer completedCounts = inquiryRepository.countInquiriesByFinalProgress();

        DecimalFormat df = new DecimalFormat("#.#");

        results.put("total", calculateCompletionPercentages(totalInquiries, completedCounts, df));
        results.put("manager", calculateCompletionPercentages(totalByManager, completedCountsByManager, df));

        return results;
    }

    private Map<String, String> calculateCompletionPercentages(int total, int completed, DecimalFormat df) {
        double compPercentage = ((double) completed / total) * 100;
        double unCompPercentage = (total - (double) completed) / total * 100;

        Map<String, String> result = new HashMap<>();
        result.put("completed", df.format(compPercentage));
        result.put("uncompleted", df.format(unCompPercentage));

        return result;
    }

    @Transactional(readOnly = true)
    public Map<String, List<Object[]>> getInquiryCountsByProductType(String token) {
        Manager manager = validateManager(token);
        Map<String, List<Object[]>> results = new HashMap<>();

        results.put("total", inquiryRepository.countInquiriesByProductType());
        results.put("manager", getManagerSpecificInquiryData(
                manager,
                () -> inquiryRepository.countInquiriesByProductTypeAndSalesManager(manager),
                () -> inquiryRepository.countInquiriesByProductTypeAndQualityManager(manager)
        ));

        return results;
    }

    private void validateUserAndToken(String token, Long customerId) {
        Long userId = signService.parseToken(token);

        Customer customer = customerRepository.findById(userId)
            .orElseThrow(() -> new CommonException(ErrorCode.USER_NOT_FOUND));

        if (!Objects.equals(customer.getUserId(), customerId))
            throw new CommonException(ErrorCode.USER_NOT_MATCHED);
    }

    private List<InquiryFavoriteResponseDTO> convertToResponseDTO(List<Inquiry> inquiries) {
        if (inquiries.isEmpty()) {
            throw new CommonException(ErrorCode.INQUIRY_LIST_EMPTY);
        }

        return inquiries.stream()
                    .map(inquiry -> {
                        List<LineItemResponseDTO> lineItems =
                            lineItemService.getFullLineItemsByInquiry(inquiry.getInquiryId());
                        return InquiryFavoriteResponseDTO.of(inquiry, lineItems);
                    })
                    .collect(Collectors.toList());
    }

    private Manager validateManager(String token) {
        Long userId = signService.parseToken(token);

        return managerRepository.findById(userId)
                .orElseThrow(() -> new CommonException(ErrorCode.USER_NOT_FOUND));
    }

    private Customer validateCustomer(String token) {
        Long userId = signService.parseToken(token);

        return customerRepository.findById(userId)
                .orElseThrow(() -> new CommonException(ErrorCode.USER_NOT_FOUND));
    }

    // 모바일 전체 Inquiry 조회
    @Transactional(readOnly = true)
    public List<MobileInquirySummaryResponseDTO> getAllInquiries() {

        return inquiryRepository.findActiveInquiries().stream()
                .map(MobileInquirySummaryResponseDTO::from)
                .collect(Collectors.toList());
    }

    // 모바일 상세 Inquiry 조회
    @Transactional(readOnly = true)
    public MobileInquirySummaryResponseDTO getInquiryById(Long inquiryId) {
        Inquiry inquiry = inquiryRepository.findActiveInquiryByInquiryId(inquiryId)
                .orElseThrow(() -> new CommonException(ErrorCode.INQUIRY_NOT_FOUND));

        return MobileInquirySummaryResponseDTO.from(inquiry);
    }
}