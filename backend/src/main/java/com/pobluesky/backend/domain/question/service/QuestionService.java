package com.pobluesky.backend.domain.question.service;

import com.pobluesky.backend.domain.collaboration.entity.Collaboration;
import com.pobluesky.backend.domain.collaboration.repository.CollaborationRepository;
import com.pobluesky.backend.domain.file.dto.FileInfo;
import com.pobluesky.backend.domain.file.service.FileService;
import com.pobluesky.backend.domain.question.dto.request.QuestionUpdateRequestDTO;
import com.pobluesky.backend.domain.question.dto.response.MobileQuestionSummaryResponseDTO;
import com.pobluesky.backend.domain.question.dto.response.QuestionSummaryResponseDTO;
import com.pobluesky.backend.domain.question.entity.Question;
import com.pobluesky.backend.domain.inquiry.entity.Inquiry;
import com.pobluesky.backend.domain.inquiry.repository.InquiryRepository;
import com.pobluesky.backend.domain.question.entity.QuestionStatus;
import com.pobluesky.backend.domain.question.entity.QuestionType;
import com.pobluesky.backend.domain.user.entity.Customer;
import com.pobluesky.backend.domain.user.entity.Manager;
import com.pobluesky.backend.domain.user.repository.CustomerRepository;
import com.pobluesky.backend.domain.question.dto.request.QuestionCreateRequestDTO;
import com.pobluesky.backend.domain.question.dto.response.QuestionResponseDTO;
import com.pobluesky.backend.domain.question.repository.QuestionRepository;
import com.pobluesky.backend.domain.user.repository.ManagerRepository;
import com.pobluesky.backend.domain.user.service.SignService;
import com.pobluesky.backend.global.error.CommonException;
import com.pobluesky.backend.global.error.ErrorCode;

import java.time.LocalDate;

import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.cache.annotation.CacheEvict;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class QuestionService {

    private final SignService signService;

    private final QuestionRepository questionRepository;

    private final InquiryRepository inquiryRepository;

    private final CustomerRepository customerRepository;

    private final ManagerRepository managerRepository;

    private final CollaborationRepository collaborationRepository;

    private final FileService fileService;

    // 질문 전체 조회 (담당자)
    @Transactional(readOnly = true)
    @Cacheable(value = "questionsCache", key = "#page + '-' + #size + '-' + #sortBy + '-' + #status + '-' + #type + '-' + #title + '-' + #questionId + '-' + #customerName + '-' + #isActivated + '-' + #managerId + '-' + #startDate + '-' + #endDate")
    public Page<QuestionSummaryResponseDTO> getQuestionsByManager(
        String token,
        int page,
        int size,
        String sortBy,
        QuestionStatus status,
        QuestionType type,
        String title,
        Long questionId,
        String customerName,
        Boolean isActivated,
        Long managerId,
        LocalDate startDate,
        LocalDate endDate) {

        validateManager(token);

        Pageable pageable = PageRequest.of(page, size);

        return questionRepository.findQuestionsByManager(
            pageable,
            status,
            type,
            title,
            questionId,
            customerName,
            isActivated,
            startDate,
            endDate,
            managerId,
            sortBy);
    }

    // 질문 전체 조회 (고객사)
    @Transactional(readOnly = true)
    @Cacheable(value = "questionsCache", key = "#page + '-' + #size + '-' + #sortBy + '-' + #status + '-' + #type + '-' + #title + '-' + #questionId + '-' + #startDate + '-' + #endDate")
    public Page<QuestionSummaryResponseDTO> getQuestionsByCustomer(
        String token,
        Long customerId,
        int page,
        int size,
        String sortBy,
        QuestionStatus status,
        QuestionType type,
        String title,
        Long questionId,
        LocalDate startDate,
        LocalDate endDate) {

        Customer customer = validateCustomer(token);

        validateUserMatch(customer.getUserId(), customerId);

        Pageable pageable = PageRequest.of(page, size);

        return questionRepository.findQuestionsByCustomer(
            pageable,
            customerId,
            status,
            type,
            title,
            questionId,
            startDate,
            endDate,
            sortBy);
    }

    // 질문 번호별 질문 조회 (담당자)
    @Transactional(readOnly = true)
    public QuestionResponseDTO getQuestionByQuestionIdForManager(String token, Long questionId) {
        validateManager(token);

        Question question = validateQuestion(questionId);

        return QuestionResponseDTO.from(question);
    }

    // 질문 번호별 질문 조회 (고객사)
    @Transactional(readOnly = true)
    public QuestionResponseDTO getQuestionByQuestionId(String token, Long customerId, Long questionId) {
        Customer customer = validateCustomer(token);

        Question question = validateQuestion(questionId);

        validateUserMatch(customer.getUserId(), customerId);

        validateUserMatch(question.getCustomer().getUserId(), customerId);

        return QuestionResponseDTO.from(question);
    }

    // 문의별 질문 작성 (고객사)
    @Transactional
    @CacheEvict(value = "questionsCache", allEntries = true)
    public QuestionResponseDTO createInquiryQuestion(
        String token,
        Long customerId,
        Long inquiryId,
        MultipartFile file,
        QuestionCreateRequestDTO dto
    ) {
        Customer customer = validateCustomer(token);

        Inquiry inquiry = validateInquiry(inquiryId);

        validateUserMatch(customer.getUserId(), customerId);

        validateInquiryMatch(inquiry, customerId);

        String fileName = null;
        String filePath = null;

        if (file != null) {
            FileInfo fileInfo = fileService.uploadFile(file);
            fileName = fileInfo.getOriginName();
            filePath = fileInfo.getStoredFilePath();
        }

        Question question = dto.toQuestionEntity(inquiry, customer, fileName, filePath);
        Question savedQuestion = questionRepository.save(question);

        return QuestionResponseDTO.from(savedQuestion);
    }

    // 타입별 질문 작성 (고객사)
    @Transactional
    @CacheEvict(value = "questionsCache", allEntries = true)
    public QuestionResponseDTO createGeneralQuestion(
        String token,
        Long customerId,
        MultipartFile file,
        QuestionCreateRequestDTO dto
        ) {
        Customer customer = validateCustomer(token);

        validateUserMatch(customer.getUserId(), customerId);

        String fileName = null;
        String filePath = null;

        if (file != null) {
            FileInfo fileInfo = fileService.uploadFile(file);
            fileName = fileInfo.getOriginName();
            filePath = fileInfo.getStoredFilePath();
        } else {
            fileName = null;
            filePath = null;
        }

        Question question = dto.toQuestionEntity(null, customer, fileName, filePath);
        Question savedQuestion = questionRepository.save(question);

        return QuestionResponseDTO.from(savedQuestion);
    }

    // 고객사 문의별 질문 수정
    @Transactional
    @CacheEvict(value = "questionsCache", allEntries = true)
    public QuestionResponseDTO updateInquiryQuestionById(
        String token,
        Long customerId,
        Long inquiryId,
        Long questionId,
        MultipartFile file,
        QuestionUpdateRequestDTO dto
    ) {
        Customer customer = validateCustomer(token);

        Inquiry inquiry = validateInquiry(inquiryId);

        Question question = validateQuestion(questionId);

        validateUserMatch(customer.getUserId(), customerId);

        validateQuestionMatch(question, customerId);

        validateQuestionStatusAndActivated(question);

        validateQuestionCol(question);

        String fileName = question.getFileName();
        String filePath = question.getFilePath();

        boolean isFileDeleted = dto.isFileDeleted() != null && dto.isFileDeleted();

        if (isFileDeleted) {
            fileName = null;
            filePath = null;
        } else if (file != null) {
            FileInfo fileInfo = fileService.uploadFile(file);
            fileName = fileInfo.getOriginName();
            filePath = fileInfo.getStoredFilePath();
        }

        question.updateQuestion(
            inquiry,
            dto.title(),
            dto.contents(),
            fileName,
            filePath,
            dto.type(),
            dto.status()
        );

        return QuestionResponseDTO.from(question);
    }

    // 고객사 기타 질문 수정
    @Transactional
    @CacheEvict(value = "questionsCache", allEntries = true)
    public QuestionResponseDTO updateGeneralQuestion(
        String token,
        Long customerId,
        Long questionId,
        MultipartFile file,
        QuestionUpdateRequestDTO dto
    ) {
        Customer customer = validateCustomer(token);

        Question question = validateQuestion(questionId);

        validateUserMatch(customer.getUserId(), customerId);

        validateQuestionMatch(question, customerId);

        validateQuestionStatusAndActivated(question);

        validateQuestionCol(question);

        String fileName = question.getFileName();
        String filePath = question.getFilePath();

        boolean isFileDeleted = dto.isFileDeleted() != null && dto.isFileDeleted();

        if (isFileDeleted) {
            fileName = null;
            filePath = null;
        } else if (file != null) {
            FileInfo fileInfo = fileService.uploadFile(file);
            fileName = fileInfo.getOriginName();
            filePath = fileInfo.getStoredFilePath();
        }

        question.updateQuestion(
            null,
            dto.title(),
            dto.contents(),
            fileName,
            filePath,
            dto.type(),
            dto.status()
        );

        return QuestionResponseDTO.from(question);
    }

    // 질문 삭제 (고객사용)
    @Transactional
    @CacheEvict(value = "questionsCache", allEntries = true)
    public void deleteQuestionById(
        String token,
        Long customerId,
        Long questionId
    ) {
        Customer customer = validateCustomer(token);

        Question question = validateQuestion(questionId);

        validateUserMatch(customer.getUserId(), customerId);

        validateQuestionMatch(question, customerId);

        validateQuestionStatusAndActivated(question);

        validateQuestionCol(question);

        question.deleteQuestion();
    }

    // 질문 삭제 (담당자용)
    @Transactional
    @CacheEvict(value = "questionsCache", allEntries = true)
    public void deleteQuestionById(
        String token,
        Long questionId
    ) {
        validateManager(token);

        Question question = validateQuestion(questionId);

        validateQuestionStatusAndActivated(question);

        validateQuestionCol(question);

        question.deleteQuestion();
    }

    // 모바일 전체 문의 조회
    @Transactional(readOnly = true)
    public List<MobileQuestionSummaryResponseDTO> getAllQuestions() {
        return questionRepository.findActiveQuestions().stream()
            .map(MobileQuestionSummaryResponseDTO::from)
            .collect(Collectors.toList());
    }

    // 모바일 상세 문의 조회
    @Transactional(readOnly = true)
    public MobileQuestionSummaryResponseDTO getQuestionById(Long questionId) {
        Question question = questionRepository.findActiveQuestionByQuestionId(questionId)
            .orElseThrow(() -> new CommonException(ErrorCode.QUESTION_NOT_FOUND));

        return MobileQuestionSummaryResponseDTO.from(question);
    }

    private Inquiry validateInquiry(Long inquiryId) {
        if (inquiryId == null) {
            return null;
        }

        return inquiryRepository.findById(inquiryId)
            .orElseThrow(() -> new CommonException(ErrorCode.INQUIRY_NOT_FOUND));
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

    private Question validateQuestion(Long questionId) {

        return questionRepository.findById(questionId)
            .orElseThrow(() -> new CommonException(ErrorCode.QUESTION_NOT_FOUND));
    }

    private void validateInquiryMatch(Inquiry inquiry, Long customerId) {
        if(!Objects.equals(inquiry.getCustomer().getUserId(), customerId))
            throw new CommonException(ErrorCode.INQUIRY_NOT_MATCHED);
    }

    private void validateUserMatch(Long userId, Long customerId) {
        if (!Objects.equals(userId, customerId))
            throw new CommonException(ErrorCode.USER_NOT_MATCHED);
    }

    private void validateQuestionMatch(Question question, Long customerId) {
        if(!Objects.equals(question.getCustomer().getUserId(), customerId))
            throw new CommonException((ErrorCode.QUESTION_NOT_MATCHED));
    }

    private void validateQuestionStatusAndActivated(Question question) {
        if(question.getStatus() == QuestionStatus.COMPLETED)
            throw new CommonException(ErrorCode.QUESTION_STATUS_COMPLETED);

        if(!question.getIsActivated())
            throw new CommonException(ErrorCode.QUESTION_ALREADY_DELETED);
    }

    private void validateQuestionCol(Question question) {
        Collaboration collaboration = collaborationRepository
            .findByQuestionId(question)
            .orElse(null);

        if (collaboration != null) {
            throw new CommonException(ErrorCode.COLLABORATION_STATUS_READY);
        }
    }
}
