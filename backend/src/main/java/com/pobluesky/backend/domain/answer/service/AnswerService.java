package com.pobluesky.backend.domain.answer.service;

import com.pobluesky.backend.domain.answer.dto.response.AnswerWithQuestionResponseDTO;
import com.pobluesky.backend.domain.answer.entity.Answer;
import com.pobluesky.backend.domain.answer.dto.request.AnswerCreateRequestDTO;
import com.pobluesky.backend.domain.answer.dto.response.AnswerResponseDTO;
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

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class AnswerService {
    private final QuestionRepository questionRepository;
    private final AnswerRepository answerRepository;
    private final InquiryRepository inquiryRepository;
    private final CustomerRepository customerRepository;

    // 질문 & 답변 전체 조회 (고객사)
    @Transactional(readOnly = true)
    public List<AnswerWithQuestionResponseDTO> getQuestionsAndAnswersByCustomerId(Long customerId) {
        List<Question> questions = questionRepository.findAllByCustomer_CustomerId(customerId);

        if (questions.isEmpty()) {
            throw new CommonException(ErrorCode.USER_NOT_FOUND);
        }

        List<AnswerWithQuestionResponseDTO> result = new ArrayList<>();
        for (Question question : questions) {
            Answer answer = answerRepository.findByQuestion_QuestionId(question.getQuestionId()).orElse(null);
            result.add(AnswerWithQuestionResponseDTO.from(question, answer));
        }

        return result;
    }

    // 고객별 답변 전체 조회 (고객사)
    @Transactional(readOnly = true)
    public List<AnswerResponseDTO> getAnswerByCustomerId(Long customerId) {
        List<Answer> answers = answerRepository.findAllByCustomer_CustomerId(customerId);

        if (answers.isEmpty()) {
            throw new CommonException(ErrorCode.ANSWER_NOT_FOUND);
        }

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

    // 질문 & 답변 전체 조회 (담당자)
    @Transactional(readOnly = true)
    public List<AnswerWithQuestionResponseDTO> getAllAnswersWithQuestions() {
        List<Customer> customers = customerRepository.findAll();

        if (customers.isEmpty()) {
            throw new CommonException(ErrorCode.USER_NOT_FOUND);
        }

        List<AnswerWithQuestionResponseDTO> result = new ArrayList<>();
        for (Customer customer : customers) {
            List<Question> questions = questionRepository.findAllByCustomer_CustomerId(customer.getCustomerId());
            for (Question question : questions) {
                Answer answer = answerRepository.findByQuestion_QuestionId(question.getQuestionId()).orElse(null);
                result.add(AnswerWithQuestionResponseDTO.from(question, answer));
            }
        }

        return result;
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

        Inquiry inquiry = (question.getInquiry() != null) ?
            inquiryRepository.findById(question.getInquiry().getInquiryId())
                .orElseThrow(() -> new CommonException(ErrorCode.INQUIRY_NOT_FOUND)) : null;

        Customer customer = customerRepository.findById(question.getCustomer().getCustomerId())
            .orElseThrow(() -> new CommonException(ErrorCode.USER_NOT_FOUND));

        Answer answer = dto.toAnswerEntity(question, inquiry, customer);
        Answer savedAnswer = answerRepository.save(answer);

        question.setStatus(QuestionStatus.COMPLETED);
        questionRepository.save(question);

        return AnswerResponseDTO.from(savedAnswer);
    }
}
