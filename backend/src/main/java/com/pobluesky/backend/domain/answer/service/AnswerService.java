package com.pobluesky.backend.domain.answer.service;

import com.pobluesky.backend.domain.answer.entity.Answer;
import com.pobluesky.backend.domain.inquiry.entity.Inquiry;
import com.pobluesky.backend.domain.inquiry.repository.InquiryRepository;
import com.pobluesky.backend.domain.user.repository.CustomerRepository;
import com.pobluesky.backend.domain.question.dto.request.QuestionCreateRequestDTO;
import com.pobluesky.backend.domain.question.dto.response.QuestionResponseDTO;
import com.pobluesky.backend.domain.question.repository.QuestionRepository;
import com.pobluesky.backend.domain.answer.dto.request.AnswerCreateRequestDTO;
import com.pobluesky.backend.domain.answer.dto.response.AnswerResponseDTO;
import com.pobluesky.backend.domain.answer.repository.AnswerRepository;
import com.pobluesky.backend.global.error.CommonException;
import com.pobluesky.backend.global.error.ErrorCode;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AnswerService {
    private final QuestionRepository questionRepository;
    private final AnswerRepository answerRepository;
    private final InquiryRepository inquiryRepository;
    private final CustomerRepository customerRepository;

    @Transactional
    public AnswerResponseDTO createAnswer(Long inquiryId, AnswerCreateRequestDTO dto) {
        Inquiry inquiry = inquiryRepository
            .findById(inquiryId)
            .orElseThrow(() -> new CommonException(ErrorCode.QUESTION_STATUS_COMPLETED));

        Long customerId = inquiry.getCustomer().getCustomerId();
        Answer answer = dto.toAnswerEntity(inquiry);
        Answer savedAnswer = answerRepository.save(answer);
        return AnswerResponseDTO.from(savedAnswer);
    }
}
