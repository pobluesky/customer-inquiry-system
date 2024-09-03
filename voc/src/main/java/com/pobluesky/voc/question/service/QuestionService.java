package com.pobluesky.voc.question.service;


import com.pobluesky.config.global.error.CommonException;
import com.pobluesky.config.global.error.ErrorCode;
import com.pobluesky.voc.feign.Customer;
import com.pobluesky.voc.feign.FileClient;
import com.pobluesky.voc.feign.FileInfo;
import com.pobluesky.voc.feign.Inquiry;
import com.pobluesky.voc.feign.InquiryClient;
import com.pobluesky.voc.feign.Manager;
import com.pobluesky.voc.feign.UserClient;
import com.pobluesky.voc.question.dto.request.QuestionCreateRequestDTO;
import com.pobluesky.voc.question.dto.response.QuestionResponseDTO;
import com.pobluesky.voc.question.dto.response.QuestionSummaryResponseDTO;
import com.pobluesky.voc.question.entity.Question;
import com.pobluesky.voc.question.entity.QuestionStatus;
import com.pobluesky.voc.question.entity.QuestionType;
import com.pobluesky.voc.question.repository.QuestionRepository;
import java.time.LocalDate;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

@Service
@RequiredArgsConstructor
public class QuestionService {

    private final QuestionRepository questionRepository;

    private final InquiryClient inquiryClient;

    private final UserClient userClient;

    private final FileClient fileClient;

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

        Long userId = userClient.parseToken(token);

        Manager manager = userClient.getManagerById(userId);
        if(manager == null) {
            throw new CommonException(ErrorCode.USER_NOT_FOUND);
        }
        // Question 데이터베이스 조회
        List<QuestionSummaryResponseDTO> questions = questionRepository.findAllQuestionsByManagerWithoutPaging(
            status, type, title, questionId, null, startDate, endDate, sortBy);

        // 고객 이름을 서비스 레이어에서 필터링
        return questions.stream()
            .map(dto -> {
                Customer customer = userClient.getCustomerById(dto.customerId());
                if (customer == null) {
                    throw new CommonException(ErrorCode.USER_NOT_FOUND);
                }
                // 빌더를 사용하여 새로운 DTO 객체 생성
                return QuestionSummaryResponseDTO.builder()
                    .questionId(dto.questionId())
                    .title(dto.title())
                    .status(dto.status())
                    .type(dto.type())
                    .contents(dto.contents())
                    .customerId(dto.customerId())
                    .customerName(customerName) // 고객 이름 설정
                    .questionCreatedAt(dto.questionCreatedAt())
                    .answerCreatedAt(dto.answerCreatedAt())
                    .build();
            })
            .filter(dto -> !StringUtils.hasText(customerName) || Objects.equals(dto.customerName(), customerName))
            .collect(Collectors.toList());

//        return questionRepository.findAllQuestionsByManagerWithoutPaging(
//            status,
//            type,
//            title,
//            questionId,
//            customerName,
//            startDate,
//            endDate,
//            sortBy);
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

        Long userId = userClient.parseToken(token);

        Customer user = userClient.getCustomerById(userId);
        if(user == null) {
            throw new CommonException(ErrorCode.USER_NOT_FOUND);
        }

        if (!Objects.equals(user.getUserId(), customerId)) {
            throw new CommonException(ErrorCode.USER_NOT_MATCHED);
        }

        // Question 데이터베이스 조회
        List<QuestionSummaryResponseDTO> questions = questionRepository.findAllQuestionsByCustomerWithoutPaging(
            customerId, status, type, title, questionId, startDate, endDate, sortBy);

        // 고객 이름 설정
        return questions.stream()
            .map(dto -> {
                Customer customerDetails = userClient.getCustomerById(dto.customerId());
                if (customerDetails == null) {
                    throw new CommonException(ErrorCode.USER_NOT_FOUND);
                }
                return new QuestionSummaryResponseDTO(
                    dto.questionId(),
                    dto.title(),
                    dto.customerId(),
                    dto.status(),
                    dto.type(),
                    dto.contents(),
                    customerDetails.getName(),
                    dto.questionCreatedAt(),
                    dto.answerCreatedAt()
                );
            })
            .collect(Collectors.toList());
    }

    // 질문 번호별 질문 조회 (담당자)
    @Transactional(readOnly = true)
    public QuestionResponseDTO getQuestionByQuestionIdForManager(String token, Long questionId) {
        Long userId = userClient.parseToken(token);

        Manager manager = userClient.getManagerById(userId);
        if(manager == null) {
            throw new CommonException(ErrorCode.USER_NOT_FOUND);
        }

        Question question = questionRepository.findById(questionId)
            .orElseThrow(() -> new CommonException(ErrorCode.QUESTION_NOT_FOUND));

        return QuestionResponseDTO.from(question,userClient);
    }

    // 질문 번호별 질문 조회 (고객사)
    @Transactional(readOnly = true)
    public QuestionResponseDTO getQuestionByQuestionId(String token, Long customerId, Long questionId) {
        Long userId = userClient.parseToken(token);

        Customer customer = userClient.getCustomerById(userId);
        if(customer == null) {
            throw new CommonException(ErrorCode.USER_NOT_FOUND);
        }

        if (!Objects.equals(customer.getUserId(), customerId)) {
            throw new CommonException(ErrorCode.USER_NOT_MATCHED);
        }

        Question question = questionRepository.findById(questionId)
            .orElseThrow(() -> new CommonException(ErrorCode.QUESTION_NOT_FOUND));

        if (!Objects.equals(question.getCustomerId(), customerId)) {
            throw new CommonException(ErrorCode.USER_NOT_MATCHED);
        }

        return QuestionResponseDTO.from(question,userClient);
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
        Long userId = userClient.parseToken(token);

        Customer user = userClient.getCustomerById(userId);
        if(user == null) {
            throw new CommonException(ErrorCode.USER_NOT_FOUND);
        }

        if(!Objects.equals(user.getUserId(), customerId))
            throw new CommonException(ErrorCode.USER_NOT_MATCHED);

        Boolean inquiryExists = inquiryClient.checkInquiryExists(inquiryId);
        if (!inquiryExists) {
            throw new CommonException(ErrorCode.INQUIRY_NOT_FOUND);
        }

        String fileName = null;
        String filePath = null;

        if (file != null) {
            FileInfo fileInfo = fileClient.uploadFile(file);
            fileName = fileInfo.getOriginName();
            filePath = fileInfo.getStoredFilePath();
        }

        Question question = dto.toQuestionEntity(inquiryId, userId, fileName, filePath);
        Question savedQuestion = questionRepository.save(question);

        return QuestionResponseDTO.from(savedQuestion,userClient);
    }

    // 타입별 질문 작성 (고객사)
    @Transactional
    public QuestionResponseDTO createNotInquiryQuestion(
        String token,
        Long customerId,
        MultipartFile file,
        QuestionCreateRequestDTO dto
        ) {
        Long userId = userClient.parseToken(token);

        Customer user = userClient.getCustomerById(userId);
        if(user == null) {
            throw new CommonException(ErrorCode.USER_NOT_FOUND);
        }

        if(!Objects.equals(user.getUserId(), customerId))
            throw new CommonException(ErrorCode.USER_NOT_MATCHED);

        String fileName = null;
        String filePath = null;

        if (file != null) {
            FileInfo fileInfo = fileClient.uploadFile(file);
            fileName = fileInfo.getOriginName();
            filePath = fileInfo.getStoredFilePath();
        }

        Question question = dto.toQuestionEntity(null, userId, fileName, filePath);
        Question savedQuestion = questionRepository.save(question);

        return QuestionResponseDTO.from(savedQuestion,userClient);
    }
}
