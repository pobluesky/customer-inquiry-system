package com.pobluesky.backend.domain.question.service;

import com.pobluesky.backend.domain.collaboration.dto.response.CollaborationDetailResponseDTO;
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

import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class QuestionService {

    private final SignService signService;

    private final QuestionRepository questionRepository;

    private final InquiryRepository inquiryRepository;

    private final CustomerRepository customerRepository;

    private final ManagerRepository managerRepository;

    private final FileService fileService;

    // 질문 전체 조회 (담당자) without paging
    @Transactional(readOnly = true)
    public List<QuestionSummaryResponseDTO> getAllQuestionsByManagerWithoutPaging(
        String token,
        String sortBy,
        QuestionStatus status,
        QuestionType type,
        String title,
        Long questionId,
        String customerName,
        LocalDate startDate,
        LocalDate endDate) {

        Long userId = signService.parseToken(token);

        managerRepository.findById(userId)
            .orElseThrow(() -> new CommonException(ErrorCode.USER_NOT_FOUND));

        return questionRepository.findAllQuestionsByManagerWithoutPaging(
            status,
            type,
            title,
            questionId,
            customerName,
            startDate,
            endDate,
            sortBy);
    }

    // 질문 전체 조회 (고객사) without paging
    @Transactional(readOnly = true)
    public List<QuestionSummaryResponseDTO> getAllQuestionsByCustomerWithoutPaging(
        String token,
        Long customerId,
        String sortBy,
        QuestionStatus status,
        QuestionType type,
        String title,
        Long questionId,
        LocalDate startDate,
        LocalDate endDate) {

        Long userId = signService.parseToken(token);

        Customer user = customerRepository.findById(userId)
            .orElseThrow(() -> new CommonException(ErrorCode.USER_NOT_FOUND));

        if (!Objects.equals(user.getUserId(), customerId)) {
            throw new CommonException(ErrorCode.USER_NOT_MATCHED);
        }

        return questionRepository.findAllQuestionsByCustomerWithoutPaging(
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
        Long userId = signService.parseToken(token);

        managerRepository.findById(userId)
            .orElseThrow(() -> new CommonException(ErrorCode.USER_NOT_FOUND));

        Question question = questionRepository.findById(questionId)
            .orElseThrow(() -> new CommonException(ErrorCode.QUESTION_NOT_FOUND));

        return QuestionResponseDTO.from(question);
    }

    // 질문 번호별 질문 조회 (고객사)
    @Transactional(readOnly = true)
    public QuestionResponseDTO getQuestionByQuestionId(String token, Long customerId, Long questionId) {
        Long userId = signService.parseToken(token);

        Customer customer = customerRepository.findById(userId)
            .orElseThrow(() -> new CommonException(ErrorCode.USER_NOT_FOUND));

        if (!Objects.equals(customer.getUserId(), customerId)) {
            throw new CommonException(ErrorCode.USER_NOT_MATCHED);
        }

        Question question = questionRepository.findById(questionId)
            .orElseThrow(() -> new CommonException(ErrorCode.QUESTION_NOT_FOUND));

        if (!Objects.equals(question.getCustomer().getUserId(), customerId)) {
            throw new CommonException(ErrorCode.USER_NOT_MATCHED);
        }

        return QuestionResponseDTO.from(question);
    }

    // 문의별 질문 작성 (고객사)
    @Transactional
    public QuestionResponseDTO createInquiryQuestion(
        String token,
        Long customerId,
        Long inquiryId,
        MultipartFile file,
        QuestionCreateRequestDTO dto
    ) {
        Long userId = signService.parseToken(token);

        Customer user = customerRepository.findById(userId)
            .orElseThrow(() -> new CommonException(ErrorCode.USER_NOT_FOUND));

        if(!Objects.equals(user.getUserId(), customerId))
            throw new CommonException(ErrorCode.USER_NOT_MATCHED);

        Inquiry inquiry = inquiryRepository
            .findById(inquiryId)
            .orElseThrow(() -> new CommonException(ErrorCode.INQUIRY_NOT_FOUND));

        if(!Objects.equals(inquiry.getCustomer().getUserId(), customerId))
            throw new CommonException(ErrorCode.INQUIRY_NOT_MATCHED);

        String fileName = null;
        String filePath = null;

        if (file != null) {
            FileInfo fileInfo = fileService.uploadFile(file);
            fileName = fileInfo.getOriginName();
            filePath = fileInfo.getStoredFilePath();
        }

        Question question = dto.toQuestionEntity(inquiry, user, fileName, filePath);
        Question savedQuestion = questionRepository.save(question);

        return QuestionResponseDTO.from(savedQuestion);
    }

    // 타입별 질문 작성 (고객사)
    @Transactional
    public QuestionResponseDTO createNotInquiryQuestion(
        String token,
        Long customerId,
        MultipartFile file,
        QuestionCreateRequestDTO dto
        ) {
        Long userId = signService.parseToken(token);

        Customer user = customerRepository.findById(userId)
            .orElseThrow(() -> new CommonException(ErrorCode.USER_NOT_FOUND));

        if(!Objects.equals(user.getUserId(), customerId))
            throw new CommonException(ErrorCode.USER_NOT_MATCHED);

        String fileName = null;
        String filePath = null;

        if (file != null) {
            FileInfo fileInfo = fileService.uploadFile(file);
            fileName = fileInfo.getOriginName();
            filePath = fileInfo.getStoredFilePath();
        }

        Question question = dto.toQuestionEntity(null, user, fileName, filePath);
        Question savedQuestion = questionRepository.save(question);

        return QuestionResponseDTO.from(savedQuestion);
    }

    // 고객사 문의별 질문 수정
    @Transactional
    public QuestionResponseDTO updateInquiryQuestionById(
        String token,
        Long customerId,
        Long inquiryId,
        Long questionId,
        MultipartFile file,
        QuestionUpdateRequestDTO dto
    ) {
        Long userId = signService.parseToken(token);

        Customer user = customerRepository.findById(userId)
            .orElseThrow(() -> new CommonException(ErrorCode.USER_NOT_FOUND));

        Inquiry inquiry = inquiryRepository.findById(inquiryId)
            .orElseThrow(() -> new CommonException(ErrorCode.INQUIRY_NOT_FOUND));

        Question question = questionRepository.findById(questionId)
            .orElseThrow(() -> new CommonException(ErrorCode.QUESTION_NOT_FOUND));

        if(question.getStatus() == QuestionStatus.COMPLETED)
            throw new CommonException(ErrorCode.QUESTION_STATUS_COMPLETED);

        if(!Objects.equals(user.getUserId(), customerId))
            throw new CommonException(ErrorCode.USER_NOT_MATCHED);

        if(!Objects.equals(inquiry.getCustomer().getUserId(), customerId))
            throw new CommonException(ErrorCode.INQUIRY_NOT_MATCHED);

        String fileName = question.getFileName();
        String filePath = question.getFilePath();

        if (file != null) {
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
    public QuestionResponseDTO updateNotInquiryQuestionById(
        String token,
        Long customerId,
        Long questionId,
        MultipartFile file,
        QuestionUpdateRequestDTO dto
    ) {
        Long userId = signService.parseToken(token);

        Customer user = customerRepository.findById(userId)
            .orElseThrow(() -> new CommonException(ErrorCode.USER_NOT_FOUND));

        if(!Objects.equals(user.getUserId(), customerId))
            throw new CommonException(ErrorCode.USER_NOT_MATCHED);

        Inquiry inquiry = null;

        Question question = questionRepository.findById(questionId)
            .orElseThrow(() -> new CommonException(ErrorCode.QUESTION_NOT_FOUND));

        if(question.getStatus() == QuestionStatus.COMPLETED)
            throw new CommonException(ErrorCode.QUESTION_STATUS_COMPLETED);

        String fileName = question.getFileName();
        String filePath = question.getFilePath();

        if (file != null) {
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
}
