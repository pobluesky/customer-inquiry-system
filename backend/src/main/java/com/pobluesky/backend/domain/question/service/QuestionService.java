package com.pobluesky.backend.domain.question.service;

import com.pobluesky.backend.domain.question.entity.Question;
import com.pobluesky.backend.domain.inquiry.entity.Inquiry;
import com.pobluesky.backend.domain.inquiry.repository.InquiryRepository;
import com.pobluesky.backend.domain.user.entity.Customer;
import com.pobluesky.backend.domain.user.repository.CustomerRepository;
import com.pobluesky.backend.domain.question.dto.request.QuestionCreateRequestDTO;
import com.pobluesky.backend.domain.question.dto.response.QuestionResponseDTO;
import com.pobluesky.backend.domain.question.repository.QuestionRepository;
import com.pobluesky.backend.domain.answer.repository.AnswerRepository;
import com.pobluesky.backend.global.error.CommonException;
import com.pobluesky.backend.global.error.ErrorCode;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Service;
import lombok.RequiredArgsConstructor;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class QuestionService {
    private final QuestionRepository questionRepository;
    private final InquiryRepository inquiryRepository;
    private final CustomerRepository customerRepository;

    // 질문 전체 조회 (담당자)
    @Transactional
    public List<QuestionResponseDTO> getQuestion() {
        List<Question> question = questionRepository.findAll();

        return question.stream()
            .map(QuestionResponseDTO::from)
            .collect(Collectors.toList());
    }

    // 질문 번호별 질문 조회 (담당자)
    @Transactional(readOnly = true)
    public QuestionResponseDTO getQuestionByQuestionId(Long questionId) {
        Question question = questionRepository.findById(questionId)
            .orElseThrow(() -> new CommonException(ErrorCode.QUESTION_NOT_FOUND));

        return QuestionResponseDTO.from(question);
    }

    // 고객별 질문 조회 (고객사)
    @Transactional(readOnly = true)
    public List<QuestionResponseDTO> getQuestionByCustomerId(Long customerId) {
        List<Question> question = questionRepository.findByCustomer_CustomerId(customerId);

        return question.stream()
            .map(QuestionResponseDTO::from)
            .collect(Collectors.toList());
    }

    // 문의별 질문 작성 (고객사)
    @Transactional
    public QuestionResponseDTO createQuestion(Long customerId, Long inquiryId, QuestionCreateRequestDTO dto) {
        Customer customer = customerRepository
            .findById(customerId)
            .orElseThrow(() -> new CommonException(ErrorCode.USER_NOT_FOUND));

        Inquiry inquiry = inquiryRepository
            .findById(inquiryId)
            .orElseThrow(() -> new CommonException(ErrorCode.INQUIRY_NOT_FOUND));

        Question question = dto.toQuestionEntity(inquiry, customer);
        Question savedQuestion = questionRepository.save(question);
        return QuestionResponseDTO.from(savedQuestion);
    }
}
