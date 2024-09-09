package com.pobluesky.backend.domain.answer.service;

import com.pobluesky.backend.domain.answer.dto.request.AnswerUpdateRequestDTO;
import com.pobluesky.backend.domain.answer.dto.response.MobileAnswerSummaryResponseDTO;
import com.pobluesky.backend.domain.answer.entity.Answer;
import com.pobluesky.backend.domain.answer.dto.request.AnswerCreateRequestDTO;
import com.pobluesky.backend.domain.answer.dto.response.AnswerResponseDTO;
import com.pobluesky.backend.domain.file.dto.FileInfo;
import com.pobluesky.backend.domain.file.service.FileService;
import com.pobluesky.backend.domain.question.entity.Question;
import com.pobluesky.backend.domain.question.entity.QuestionStatus;
import com.pobluesky.backend.domain.inquiry.entity.Inquiry;
import com.pobluesky.backend.domain.user.entity.Customer;
import com.pobluesky.backend.domain.user.entity.Manager;
import com.pobluesky.backend.domain.answer.repository.AnswerRepository;
import com.pobluesky.backend.domain.question.repository.QuestionRepository;
import com.pobluesky.backend.domain.inquiry.repository.InquiryRepository;
import com.pobluesky.backend.domain.user.entity.UserRole;
import com.pobluesky.backend.domain.user.repository.CustomerRepository;
import com.pobluesky.backend.domain.user.repository.ManagerRepository;
import com.pobluesky.backend.domain.user.service.SignService;
import com.pobluesky.backend.global.error.CommonException;
import com.pobluesky.backend.global.error.ErrorCode;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.function.Supplier;
import java.util.stream.Collectors;

import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import lombok.RequiredArgsConstructor;

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
        validateManager(token);

        List<Answer> answers = answerRepository.findAll();

        return answers.stream()
            .map(answer -> AnswerResponseDTO.from(answer))
            .collect(Collectors.toList());
    }

    // 고객별 답변 전체 조회 (고객사)
    @Transactional(readOnly = true)
    public List<AnswerResponseDTO> getAnswerByUserId(String token, Long customerId) {
        Customer customer = validateCustomer(token);

        if (!Objects.equals(customer.getUserId(), customerId))
            throw new CommonException(ErrorCode.USER_NOT_MATCHED);

        List<Answer> answers = answerRepository.findAllByCustomer_UserId(customerId);

        if (answers.isEmpty()) {
            throw new CommonException(ErrorCode.ANSWER_NOT_FOUND);
        }

        return answers.stream()
            .map(answer -> AnswerResponseDTO.from(answer))
            .collect(Collectors.toList());
    }

    // 질문 번호별 답변 상세 조회 (담당자)
    @Transactional(readOnly = true)
    public AnswerResponseDTO getAnswerByQuestionIdForManager(String token, Long questionId) {
        validateManager(token);

        Answer answer = answerRepository.findByQuestion_QuestionId(questionId)
            .orElseThrow(() -> new CommonException(ErrorCode.ANSWER_NOT_FOUND));

        return AnswerResponseDTO.from(answer);
    }

    // 질문 번호별 답변 상세 조회 (고객사)
    @Transactional(readOnly = true)
    public AnswerResponseDTO getAnswerByQuestionId(String token, Long customerId, Long questionId) {
        Customer customer = validateCustomer(token);

        if (!Objects.equals(customer.getUserId(), customerId))
            throw new CommonException(ErrorCode.USER_NOT_MATCHED);

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
        Manager manager = validateManager(token);

        Question question = questionRepository.findById(questionId)
            .orElseThrow(() -> new CommonException(ErrorCode.QUESTION_NOT_FOUND));

        if (question.getStatus() == QuestionStatus.COMPLETED) {
            throw new CommonException(ErrorCode.QUESTION_STATUS_COMPLETED);
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

        Answer answer = dto.toAnswerEntity(question, inquiry, customer, manager, fileName, filePath);
        Answer savedAnswer = answerRepository.save(answer);

        question.setStatus(QuestionStatus.COMPLETED);
        questionRepository.save(question);

        return AnswerResponseDTO.from(savedAnswer);
    }

    // 답변 수정
    @Transactional
    public AnswerResponseDTO updateAnswerById(
        String token,
        Long questionId,
        MultipartFile file,
        AnswerUpdateRequestDTO dto
    ) {
        Manager manager = validateManager(token);

        Answer answer = answerRepository.findByQuestion_QuestionId(questionId)
            .orElseThrow(() -> new CommonException(ErrorCode.ANSWER_NOT_FOUND));

        if(!Objects.equals(answer.getManager().getUserId(), manager.getUserId()))
            throw new CommonException(ErrorCode.ANSWER_NOT_MATCHED);

        if(!answer.getIsActivated())
            throw new CommonException(ErrorCode.ANSWER_ALREADY_DELETED);

        String fileName = answer.getFileName();
        String filePath = answer.getFilePath();

        if (file != null) {
            FileInfo fileInfo = fileService.uploadFile(file);
            fileName = fileInfo.getOriginName();
            filePath = fileInfo.getStoredFilePath();
        }

        answer.updateAnswer(
            dto.title(),
            dto.contents(),
            fileName,
            filePath
        );

        return AnswerResponseDTO.from(answer);
    }

    // 답변 삭제
    @Transactional
    public void deleteAnswerById(
        String token,
        Long questionId
    ) {
        validateManager(token);

        Answer answer = answerRepository.findByQuestion_QuestionId(questionId)
            .orElseThrow(()-> new CommonException(ErrorCode.ANSWER_NOT_FOUND));

        if(!answer.getIsActivated())
            throw new CommonException(ErrorCode.ANSWER_ALREADY_DELETED);

        answer.deleteAnswer();
    }

    private List<Object[]> getManagerSpecificAnswerData(
        Manager manager,
        Supplier<List<Object[]>> salesQuery,
        Supplier<List<Object[]>> qualityQuery
    ) {

        return manager.getRole() == UserRole.SALES ? salesQuery.get() : qualityQuery.get();
    }

    @Transactional(readOnly = true)
    public Map<String, List<Object[]>> getAverageCountPerMonth(String token) {
        Manager manager = validateManager(token);
        Map<String, List<Object[]>> results = new HashMap<>();

        results.put("total", answerRepository.findAverageCountPerMonth());
        results.put("manager", getManagerSpecificAnswerData(
            manager,
            () -> answerRepository.findAverageCountPerMonthBySalesManager(manager.getUserId()),
            () -> answerRepository.findAverageCountPerMonthByQualityManager(manager.getUserId())
        ));

        return results;
    }

    private Inquiry validateInquiry(Question question) {
        if (question.getInquiry() == null) {
            return null;
        }

        return inquiryRepository.findById(question.getInquiry().getInquiryId())
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

    // 모바일 - 질문 번호별 답변 상세 조회
    @Transactional(readOnly = true)
    public MobileAnswerSummaryResponseDTO getAnswerByQuestionId(Long questionId) {
        Answer answer = answerRepository.findByQuestion_QuestionId(questionId)
                .orElseThrow(() -> new CommonException(ErrorCode.ANSWER_NOT_FOUND));

        return MobileAnswerSummaryResponseDTO.from(answer);
    }
}
