package com.pobluesky.voc.question.controller;


import com.pobluesky.config.global.util.ResponseFactory;
import com.pobluesky.config.global.util.model.JsonResult;
import com.pobluesky.voc.question.dto.request.QuestionCreateRequestDTO;
import com.pobluesky.voc.question.dto.response.QuestionResponseDTO;
import com.pobluesky.voc.question.dto.response.QuestionSummaryResponseDTO;
import com.pobluesky.voc.question.entity.QuestionStatus;
import com.pobluesky.voc.question.entity.QuestionType;
import com.pobluesky.voc.question.service.QuestionService;
import io.swagger.v3.oas.annotations.Operation;
import java.time.LocalDate;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/questions")
public class QuestionController {

    private final QuestionService questionService;

    @GetMapping("/managers")
    @Operation(summary = "Question 조회(담당자)", description = "등록된 모든 Question을 조건에 맞게 조회한다.")
    public ResponseEntity<JsonResult> getAllQuestionsByManagerWithoutPaging(
        @RequestHeader("Authorization") String token,
        @RequestParam(defaultValue = "LATEST") String sortBy,
        @RequestParam(required = false) QuestionStatus status,
        @RequestParam(required = false) QuestionType type,
        @RequestParam(required = false) String title,
        @RequestParam(required = false) Long questionId,
        @RequestParam(required = false) String customerName,
        @RequestParam(required = false) @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate startDate,
        @RequestParam(required = false) @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate endDate) {

        List<QuestionSummaryResponseDTO> response = questionService.getAllQuestionsByManagerWithoutPaging(
            token,
            sortBy,
            status,
            type,
            title,
            questionId,
            customerName,
            startDate,
            endDate
        );

        return ResponseEntity.status(HttpStatus.OK)
            .body(ResponseFactory.getSuccessJsonResult(response));
    }

    @GetMapping("/managers/{questionId}")
    @Operation(summary = "질문별 상세 조회(담당자)", description = "등록된 질문을 질문 번호로 조회한다.")
    public ResponseEntity<JsonResult> getQuestionByQuestionIdForManager(
        @RequestHeader("Authorization") String token,
        @PathVariable Long questionId
    ) {
        QuestionResponseDTO response = questionService.getQuestionByQuestionIdForManager(
            token,
            questionId
        );

        return ResponseEntity
            .status(HttpStatus.OK)
            .body(ResponseFactory.getSuccessJsonResult(response));
    }

    @GetMapping("/customers/{userId}")
    @Operation(summary = "Question 조회(고객사)", description = "등록된 모든 Question을 조건에 맞게 조회한다.")
    public ResponseEntity<JsonResult> getAllQuestionsByCustomerWithoutPaging(
        @RequestHeader("Authorization") String token,
        @PathVariable Long userId,
        @RequestParam(defaultValue = "LATEST") String sortBy,
        @RequestParam(required = false) QuestionStatus status,
        @RequestParam(required = false) QuestionType type,
        @RequestParam(required = false) String title,
        @RequestParam(required = false) Long questionId,
        @RequestParam(required = false) @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate startDate,
        @RequestParam(required = false) @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate endDate) {

        List<QuestionSummaryResponseDTO> response = questionService.getAllQuestionsByCustomerWithoutPaging(
            token,
            userId,
            sortBy,
            status,
            type,
            title,
            questionId,
            startDate,
            endDate
        );

        return ResponseEntity.status(HttpStatus.OK)
            .body(ResponseFactory.getSuccessJsonResult(response));
    }

    @GetMapping("/customers/{userId}/{questionId}")
    @Operation(summary = "질문별 상세 조회(고객사)", description = "등록된 질문을 질문 번호로 조회한다.")
    public ResponseEntity<JsonResult> getQuestionByQuestionId(
        @RequestHeader("Authorization") String token,
        @PathVariable Long userId,
        @PathVariable Long questionId
    ) {
        QuestionResponseDTO response = questionService.getQuestionByQuestionId(
            token,
            userId,
            questionId
        );

        return ResponseEntity
            .status(HttpStatus.OK)
            .body(ResponseFactory.getSuccessJsonResult(response));
    }

    @PostMapping("/customers/{userId}/{inquiryId}")
    @Operation(summary = "문의별 질문 작성(고객사)", description = "특정 문의에 대한 새로운 질문을 등록한다.")
    public ResponseEntity<JsonResult> createQuestion(
        @RequestHeader("Authorization") String token,
        @PathVariable Long userId,
        @PathVariable Long inquiryId,
        @RequestPart(value = "files", required = false) MultipartFile file,
        @RequestPart("question") QuestionCreateRequestDTO questionCreateRequestDTO) {
        QuestionResponseDTO response = questionService.createInquiryQuestion(
            token,
            userId,
            inquiryId,
            file,
            questionCreateRequestDTO
        );

        return ResponseEntity.status(HttpStatus.OK)
            .body(ResponseFactory.getSuccessJsonResult(response));
    }

    @PostMapping("/customers/{userId}")
    @Operation(summary = "타입별 질문 작성(고객사)", description = "문의 외적인 새로운 질문을 등록한다.")
    public ResponseEntity<JsonResult> createQuestion(
        @RequestHeader("Authorization") String token,
        @PathVariable Long userId,
        @RequestPart(value = "files", required = false) MultipartFile file,
        @RequestPart("question") QuestionCreateRequestDTO questionCreateRequestDTO) {
        QuestionResponseDTO response = questionService.createNotInquiryQuestion(
            token,
            userId,
            file,
            questionCreateRequestDTO
            );

        return ResponseEntity.status(HttpStatus.OK)
            .body(ResponseFactory.getSuccessJsonResult(response));
    }
}
