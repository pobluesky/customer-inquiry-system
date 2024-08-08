package com.pobluesky.backend.domain.voc.service;

import com.pobluesky.backend.domain.inquiry.entity.Inquiry;
import com.pobluesky.backend.domain.inquiry.repository.InquiryRepository;
import com.pobluesky.backend.domain.user.repository.CustomerRepository;
import com.pobluesky.backend.domain.voc.dto.request.VocQuestionCreateRequestDTO;
import com.pobluesky.backend.domain.voc.dto.response.VocQuestionResponseDTO;
import com.pobluesky.backend.domain.voc.dto.request.VocAnswerCreateRequestDTO;
import com.pobluesky.backend.domain.voc.dto.response.VocAnswerResponseDTO;
import com.pobluesky.backend.domain.voc.entity.Question;
import com.pobluesky.backend.domain.voc.entity.Answer;
import com.pobluesky.backend.domain.voc.repository.QuestionRepository;
import com.pobluesky.backend.domain.voc.repository.AnswerRepository;
import com.pobluesky.backend.global.error.CommonException;
import com.pobluesky.backend.global.error.ErrorCode;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class VocService {
    private final QuestionRepository questionRepository;
    private final AnswerRepository answerRepository;
    private final InquiryRepository inquiryRepository;
    private final CustomerRepository customerRepository;

    @Transactional
    public VocQuestionResponseDTO createVocQuestion(Long inquiryId, VocQuestionCreateRequestDTO dto) {
        Inquiry inquiry = inquiryRepository
            .findById(inquiryId)
            .orElseThrow(() -> new CommonException(ErrorCode.INQUIRY_NOT_FOUND));

        Long customerId = inquiry.getCustomer().getCustomerId();
        Question question = dto.toQuestionEntity(inquiry);
        Question savedQuestion = questionRepository.save(question);
        return VocQuestionResponseDTO.from(savedQuestion);
    }

    @Transactional
    public VocAnswerResponseDTO createVocAnswer(Long inquiryId, VocAnswerCreateRequestDTO dto) {
        Inquiry inquiry = inquiryRepository
            .findById(inquiryId)
            .orElseThrow(() -> new CommonException(ErrorCode.QUESTION_STATUS_COMPLETED));

        Long customerId = inquiry.getCustomer().getCustomerId();
        Answer answer = dto.toAnswerEntity(inquiry);
        Answer savedAnswer = answerRepository.save(answer);
        return VocAnswerResponseDTO.from(savedAnswer);
    }
}
