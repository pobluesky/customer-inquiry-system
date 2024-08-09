package com.pobluesky.backend.domain.answer.service;

import com.pobluesky.backend.domain.answer.entity.Answer;
import com.pobluesky.backend.domain.inquiry.entity.Inquiry;
import com.pobluesky.backend.domain.inquiry.repository.InquiryRepository;
import com.pobluesky.backend.domain.question.entity.Question;
import com.pobluesky.backend.domain.user.repository.CustomerRepository;
import com.pobluesky.backend.domain.question.repository.QuestionRepository;
import com.pobluesky.backend.domain.answer.dto.request.AnswerCreateRequestDTO;
import com.pobluesky.backend.domain.answer.dto.response.AnswerResponseDTO;
import com.pobluesky.backend.domain.answer.repository.AnswerRepository;
import com.pobluesky.backend.global.error.CommonException;
import com.pobluesky.backend.global.error.ErrorCode;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Service;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AnswerService {
    private final QuestionRepository questionRepository;
    private final AnswerRepository answerRepository;
    private final InquiryRepository inquiryRepository;
    private final CustomerRepository customerRepository;

    // 질문 번호로 답변 등록 (담당자)
    @Transactional
    public AnswerResponseDTO createAnswer(AnswerCreateRequestDTO dto, Long questionId) {
        Question question = questionRepository.findById(questionId)
            .orElseThrow(() -> new CommonException(ErrorCode.QUESTION_STATUS_COMPLETED));

        Answer answer = dto.toAnswerEntity(question.getQuestionId());
        Answer savedAnswer = answerRepository.save(answer);
        return AnswerResponseDTO.from(savedAnswer);
    }

    // 질문 번호로 답변 조회 (고객사)
    @Transactional(readOnly = true)
    public AnswerResponseDTO getAnswerById(Long questionId) {
        Answer answer = answerRepository.findByQuestion_QuestionId(questionId)
            .orElseThrow(() -> new CommonException(ErrorCode.QUESTION_NOT_FOUND));

        return AnswerResponseDTO.from(answer);
    }
}
