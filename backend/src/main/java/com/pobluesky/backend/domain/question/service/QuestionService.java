package com.pobluesky.backend.domain.question.service;

import com.pobluesky.backend.domain.question.dto.response.QuestionSummaryResponseDTO;
import com.pobluesky.backend.domain.question.entity.Question;
import com.pobluesky.backend.domain.inquiry.entity.Inquiry;
import com.pobluesky.backend.domain.inquiry.repository.InquiryRepository;
import com.pobluesky.backend.domain.question.entity.QuestionStatus;
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

import java.util.Objects;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class QuestionService {

    private final SignService signService;

    private final QuestionRepository questionRepository;

    private final InquiryRepository inquiryRepository;

    private final CustomerRepository customerRepository;

    private final ManagerRepository managerRepository;

    // 질문 전체 조회 (담당자)
    @Transactional(readOnly = true)
    public QuestionSummaryResponseDTO getQuestionsByManager(
        String token, int page, int size, String sortBy,
        QuestionStatus status, LocalDate startDate, LocalDate endDate) {

        Long userId = signService.parseToken(token);

        managerRepository.findById(userId)
            .orElseThrow(() -> new CommonException(ErrorCode.USER_NOT_FOUND));

        Sort sort = getSortByOrderCondition(sortBy);
        Pageable pageable = PageRequest.of(page, size, sort);

        return questionRepository.findQuestionsByManager(pageable, status, startDate, endDate);
    }

    // 질문 전체 조회 (고객사)
    @Transactional(readOnly = true)
    public QuestionSummaryResponseDTO getQuestionsByCustomer(
        String token, Long customerId, int page, int size, String sortBy,
        QuestionStatus status, LocalDate startDate, LocalDate endDate) {

        Long userId = signService.parseToken(token);

        Customer customer = customerRepository.findById(userId)
            .orElseThrow(() -> new CommonException(ErrorCode.USER_NOT_FOUND));

        if (!Objects.equals(customer.getUserId(), customerId)) {
            throw new CommonException(ErrorCode.USER_NOT_MATCHED);
        }

        Sort sort = getSortByOrderCondition(sortBy);
        Pageable pageable = PageRequest.of(page, size, sort);

        return questionRepository.findQuestionsByCustomer(
            customerId, pageable, status, startDate, endDate);
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
        QuestionCreateRequestDTO dto
    ) {
        Long userId = signService.parseToken(token);

        Customer customer = customerRepository.findById(userId)
            .orElseThrow(() -> new CommonException(ErrorCode.USER_NOT_FOUND));

        if(!Objects.equals(customer.getUserId(), customerId))
            throw new CommonException(ErrorCode.USER_NOT_MATCHED);

        Inquiry inquiry = inquiryRepository
            .findById(inquiryId)
            .orElseThrow(() -> new CommonException(ErrorCode.INQUIRY_NOT_FOUND));

        Question question = dto.toQuestionEntity(inquiry, customer);
        Question savedQuestion = questionRepository.save(question);

        return QuestionResponseDTO.from(savedQuestion);
    }

    // 타입별 질문 작성 (고객사)
    @Transactional
    public QuestionResponseDTO createNotInquiryQuestion(
        String token,
        Long customerId,
        QuestionCreateRequestDTO dto
    ) {
        Long userId = signService.parseToken(token);

        Customer customer = customerRepository.findById(userId)
            .orElseThrow(() -> new CommonException(ErrorCode.USER_NOT_FOUND));

        if(!Objects.equals(customer.getUserId(), customerId))
            throw new CommonException(ErrorCode.USER_NOT_MATCHED);

        Question question = dto.toQuestionEntity(null, customer);
        Question savedQuestion = questionRepository.save(question);

        return QuestionResponseDTO.from(savedQuestion);
    }

    private Sort getSortByOrderCondition(String sortBy) {
        return switch (sortBy) {
            case "OLDEST" -> Sort.by(
                Sort.Order.asc("createdDate"),
                Sort.Order.desc("questionId")
            );

            case "LATEST" -> Sort.by(
                Sort.Order.desc("createdDate"),
                Sort.Order.desc("questionId")
            );

            default -> throw new CommonException(ErrorCode.INVALID_ORDER_CONDITION);
        };
    }
}
