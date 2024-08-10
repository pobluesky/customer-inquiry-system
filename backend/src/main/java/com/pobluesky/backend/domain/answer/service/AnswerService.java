package com.pobluesky.backend.domain.answer.service;

import com.pobluesky.backend.domain.answer.entity.Answer;
import com.pobluesky.backend.domain.answer.dto.request.AnswerCreateRequestDTO;
import com.pobluesky.backend.domain.answer.dto.response.AnswerResponseDTO;
import com.pobluesky.backend.domain.question.dto.response.QuestionResponseDTO;
import com.pobluesky.backend.domain.question.entity.Question;
import com.pobluesky.backend.domain.question.entity.QuestionStatus;
import com.pobluesky.backend.domain.inquiry.entity.Inquiry;
import com.pobluesky.backend.domain.user.entity.Customer;
import com.pobluesky.backend.domain.answer.repository.AnswerRepository;
import com.pobluesky.backend.domain.question.repository.QuestionRepository;
import com.pobluesky.backend.domain.inquiry.repository.InquiryRepository;
import com.pobluesky.backend.domain.user.repository.CustomerRepository;
import com.pobluesky.backend.global.error.CommonException;
import com.pobluesky.backend.global.error.ErrorCode;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Service;
import lombok.RequiredArgsConstructor;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class AnswerService {
    private final QuestionRepository questionRepository;
    private final AnswerRepository answerRepository;
    private final InquiryRepository inquiryRepository;
    private final CustomerRepository customerRepository;

    // 고객별 답변 전체 조회 (고객사)
    @Transactional(readOnly = true)
    public List<AnswerResponseDTO> getAnswerByCustomerId(Long customerId) {
        // 고객 ID에 해당하는 모든 답변 조회
        List<Answer> answers = answerRepository.findAllByCustomer_CustomerId(customerId);

        if (answers.isEmpty()) {
            throw new CommonException(ErrorCode.ANSWER_NOT_FOUND);
        }

        // Answer 엔티티 리스트를 AnswerResponseDTO 리스트로 변환하여 반환
        return answers.stream()
            .map(AnswerResponseDTO::from)
            .collect(Collectors.toList());
    }

    // 고객별 & 질문별 답변 조회 (고객사)
    @Transactional(readOnly = true)
    public AnswerResponseDTO getAnswerById(Long questionId) {
        Answer answer = answerRepository.findByQuestion_QuestionId(questionId)
            .orElseThrow(() -> new CommonException(ErrorCode.ANSWER_NOT_FOUND));

        return AnswerResponseDTO.from(answer);
    }

    // 답변 전체 조회 (담당자)
    public List<AnswerResponseDTO> getAnswer() {
        List<Answer> answer = answerRepository.findAll();

        return answer.stream()
            .map(AnswerResponseDTO::from)
            .collect(Collectors.toList());
    }

    // 질문별 답변 조회 (담당자)
    @Transactional(readOnly = true)
    public AnswerResponseDTO getAnswerByQuestionId(Long questionId) {
        Answer answer = answerRepository.findByQuestion_QuestionId(questionId)
            .orElseThrow(() -> new CommonException(ErrorCode.ANSWER_NOT_FOUND));

        return AnswerResponseDTO.from(answer);
    }

    // 질문별 답변 작성 (담당자)
    @Transactional
    public AnswerResponseDTO createAnswer(Long questionId, AnswerCreateRequestDTO dto) {
        Question question = questionRepository.findById(questionId)
            .orElseThrow(() -> new CommonException(ErrorCode.QUESTION_NOT_FOUND)); // 존재하지 않는 질문인 경우

        if (question.getStatus() == QuestionStatus.COMPLETED) {
            throw new CommonException(ErrorCode.QUESTION_STATUS_COMPLETED); // 이미 답변된 질문인 경우
        }

        Inquiry inquiry = inquiryRepository.findById(question.getInquiry().getInquiryId())
            .orElseThrow(() -> new CommonException(ErrorCode.INQUIRY_NOT_FOUND));

        Customer customer = customerRepository.findById(question.getCustomer().getCustomerId())
            .orElseThrow(() -> new CommonException(ErrorCode.USER_NOT_FOUND));

        Answer answer = dto.toAnswerEntity(question, inquiry, customer);
        Answer savedAnswer = answerRepository.save(answer);

        question.setStatus(QuestionStatus.COMPLETED);
        questionRepository.save(question);

        return AnswerResponseDTO.from(savedAnswer);
    }
}
