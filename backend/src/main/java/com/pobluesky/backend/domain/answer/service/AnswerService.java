package com.pobluesky.backend.domain.answer.service;

import com.pobluesky.backend.domain.answer.entity.Answer;
import com.pobluesky.backend.domain.answer.dto.request.AnswerCreateRequestDTO;
import com.pobluesky.backend.domain.answer.dto.response.AnswerResponseDTO;
import com.pobluesky.backend.domain.file.dto.FileInfo;
import com.pobluesky.backend.domain.file.service.FileService;
import com.pobluesky.backend.domain.question.entity.Question;
import com.pobluesky.backend.domain.question.entity.QuestionStatus;
import com.pobluesky.backend.domain.inquiry.entity.Inquiry;
import com.pobluesky.backend.domain.user.entity.Customer;
import com.pobluesky.backend.domain.answer.repository.AnswerRepository;
import com.pobluesky.backend.domain.question.repository.QuestionRepository;
import com.pobluesky.backend.domain.inquiry.repository.InquiryRepository;
import com.pobluesky.backend.domain.user.repository.CustomerRepository;
import com.pobluesky.backend.domain.user.repository.ManagerRepository;
import com.pobluesky.backend.domain.user.service.SignService;
import com.pobluesky.backend.global.error.CommonException;
import com.pobluesky.backend.global.error.ErrorCode;

import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class AnswerService {

    private final SignService signService;

    private final QuestionRepository questionRepository;

    private final AnswerRepository answerRepository;

    private final InquiryRepository inquiryRepository;

    private final CustomerRepository customerRepository;

    private final ManagerRepository managerRepository;

    private final FileService fileService;

    // 답변 전체 조회 (담당자)
    public List<AnswerResponseDTO> getAnswers(String token) {
        Long userId = signService.parseToken(token);

        managerRepository.findById(userId)
            .orElseThrow(() -> new CommonException(ErrorCode.USER_NOT_FOUND));

        List<Answer> answer = answerRepository.findAll();

        return answer.stream()
            .map(AnswerResponseDTO::from)
            .collect(Collectors.toList());
    }

    // 고객별 답변 전체 조회 (고객사)
    @Transactional(readOnly = true)
    public List<AnswerResponseDTO> getAnswerByUserId(String token, Long customerId) {
        Long userId = signService.parseToken(token);

        Customer user = customerRepository.findById(userId)
            .orElseThrow(() -> new CommonException(ErrorCode.USER_NOT_FOUND));

        if (!user.getUserId().equals(customerId))
            throw new CommonException(ErrorCode.USER_NOT_MATCHED);

        List<Answer> answers = answerRepository.findAllByCustomer_UserId(customerId);

        if (answers.isEmpty()) {
            throw new CommonException(ErrorCode.ANSWER_NOT_FOUND);
        }

        return answers.stream()
            .map(AnswerResponseDTO::from)
            .collect(Collectors.toList());
    }

    // 질문 번호별 답변 상세 조회 (담당자)
    @Transactional(readOnly = true)
    public AnswerResponseDTO getAnswerByQuestionIdForManager(String token, Long questionId) {
        Long userId = signService.parseToken(token);

        managerRepository.findById(userId)
            .orElseThrow(() -> new CommonException(ErrorCode.USER_NOT_FOUND));

        Answer answer = answerRepository.findByQuestion_QuestionId(questionId)
            .orElseThrow(() -> new CommonException(ErrorCode.ANSWER_NOT_FOUND));

        return AnswerResponseDTO.from(answer);
    }

    // 질문 번호별 답변 상세 조회 (고객사)
    @Transactional(readOnly = true)
    public AnswerResponseDTO getAnswerByQuestionId(String token, Long customerId, Long questionId) {
        Long userId = signService.parseToken(token);

        Customer customer = customerRepository.findById(userId)
            .orElseThrow(() -> new CommonException(ErrorCode.USER_NOT_FOUND));

        if (!Objects.equals(customer.getUserId(), customerId)) {
            throw new CommonException(ErrorCode.USER_NOT_MATCHED);
        }

        Answer answer = answerRepository.findByQuestion_QuestionId(questionId)
            .orElseThrow(() -> new CommonException(ErrorCode.ANSWER_NOT_FOUND));

        if (!Objects.equals(answer.getCustomer().getUserId(), customerId)) {
            throw new CommonException(ErrorCode.USER_NOT_MATCHED);
        }

        return AnswerResponseDTO.from(answer);
    }

    // 질문별 답변 작성 (담당자)
    @Transactional
    public AnswerResponseDTO createAnswer(
        String token,
        Long questionId,
        MultipartFile file,
        AnswerCreateRequestDTO dto
    ) {
        Long userId = signService.parseToken(token);

        managerRepository.findById(userId)
            .orElseThrow(() -> new CommonException(ErrorCode.USER_NOT_FOUND)); // 존재하지 않는 담당자일 경우

        Question question = questionRepository.findById(questionId)
            .orElseThrow(() -> new CommonException(ErrorCode.QUESTION_NOT_FOUND)); // 존재하지 않는 질문인 경우

        if (question.getStatus() == QuestionStatus.COMPLETED) {
            throw new CommonException(ErrorCode.QUESTION_STATUS_COMPLETED); // 이미 답변된 질문인 경우
        }

        Inquiry inquiry = validateInquiry(question);

        Customer customer = customerRepository.findById(question.getCustomer().getUserId())
            .orElseThrow(() -> new CommonException(ErrorCode.USER_NOT_FOUND));

        String fileName = null;
        String filePath = null;

        if (file != null) {
            FileInfo fileInfo = fileService.uploadFile(file);
            fileName = fileInfo.getOriginName();
            filePath = fileInfo.getStoredFilePath();
        }

        Answer answer = dto.toAnswerEntity(question, inquiry, customer, fileName, filePath);
        Answer savedAnswer = answerRepository.save(answer);

        question.setStatus(QuestionStatus.COMPLETED);
        questionRepository.save(question);

        return AnswerResponseDTO.from(savedAnswer);
    }

    private Inquiry validateInquiry(Question question) {
        if (question.getInquiry() == null) {
            return null;
        }

        return inquiryRepository.findById(question.getInquiry().getInquiryId())
            .orElseThrow(() -> new CommonException(ErrorCode.INQUIRY_NOT_FOUND));
    }
}
