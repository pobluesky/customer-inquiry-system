package com.pobluesky.backend.domain.question.controller;

import com.pobluesky.backend.domain.question.dto.request.QuestionCreateRequestDTO;
import com.pobluesky.backend.domain.question.dto.request.QuestionUpdateRequestDTO;
import com.pobluesky.backend.domain.question.dto.response.QuestionResponseDTO;
import com.pobluesky.backend.domain.question.dto.response.QuestionSummaryResponseDTO;
import com.pobluesky.backend.domain.question.entity.QuestionStatus;
import com.pobluesky.backend.domain.question.entity.QuestionType;
import com.pobluesky.backend.domain.question.service.QuestionService;
import com.pobluesky.backend.global.util.ResponseFactory;
import com.pobluesky.backend.global.util.model.JsonResult;

import io.swagger.v3.oas.annotations.Operation;

import java.time.LocalDate;

import lombok.RequiredArgsConstructor;

import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

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
    @Operation(summary = "기타 질문 작성(고객사)", description = "문의 외적인 새로운 질문을 등록한다.")
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

    @Operation(summary = "문의별 질문 수정", description = "문의별 질문을 수정한다.")
    @PutMapping("/customers/{userId}/{inquiryId}/{questionId}")
    public ResponseEntity<JsonResult> updateQuestion(
        @RequestHeader("Authorization") String token,
        @PathVariable Long userId,
        @PathVariable Long inquiryId,
        @PathVariable Long questionId,
        @RequestPart(value = "files", required = false) MultipartFile file,
        @RequestPart("question") QuestionUpdateRequestDTO questionUpdateRequestDTO
    ) {
        QuestionResponseDTO response = questionService.updateInquiryQuestionById(
            token,
            userId,
            inquiryId,
            questionId,
            file,
            questionUpdateRequestDTO
        );

        return ResponseEntity.status(HttpStatus.OK)
            .body(ResponseFactory.getSuccessJsonResult(response));
    }

    @Operation(summary = "기타 질문 수정", description = "기타 질문을 수정한다.")
    @PutMapping("/customers/{userId}/{questionId}")
    public ResponseEntity<JsonResult> updateQuestion(
        @RequestHeader("Authorization") String token,
        @PathVariable Long userId,
        @PathVariable Long questionId,
        @RequestPart(value = "files", required = false) MultipartFile file,
        @RequestPart("question") QuestionUpdateRequestDTO questionUpdateRequestDTO
    ) {
        QuestionResponseDTO response = questionService.updateNotInquiryQuestionById(
            token,
            userId,
            questionId,
            file,
            questionUpdateRequestDTO
        );

        return ResponseEntity.status(HttpStatus.OK)
            .body(ResponseFactory.getSuccessJsonResult(response));
    }
}
