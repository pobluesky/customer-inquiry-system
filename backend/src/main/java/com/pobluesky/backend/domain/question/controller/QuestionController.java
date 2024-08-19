package com.pobluesky.backend.domain.question.controller;

import com.pobluesky.backend.domain.question.dto.request.QuestionCreateRequestDTO;
import com.pobluesky.backend.domain.question.dto.response.QuestionResponseDTO;
import com.pobluesky.backend.domain.question.dto.response.QuestionSummaryResponseDTO;
import com.pobluesky.backend.domain.question.entity.QuestionStatus;
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

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/questions")
public class QuestionController {

    private final QuestionService questionService;

    @GetMapping("/managers")
    @Operation(summary = "Question 조회(담당자)", description = "등록된 모든 Question을 조건에 맞게 조회한다.")
    public ResponseEntity<JsonResult> getQuestionByManager(
        @RequestHeader("Authorization") String token,
        @RequestParam(defaultValue = "0") int page,
        @RequestParam(defaultValue = "5") int size,
        @RequestParam(defaultValue = "LATEST") String sortBy,
        @RequestParam(required = false) QuestionStatus status,
        @RequestParam(required = false) @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate startDate,
        @RequestParam(required = false) @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate endDate) {

        QuestionSummaryResponseDTO response = questionService.getQuestionsByManager(
            token,
            page,
            size,
            sortBy,
            status,
            startDate, endDate
        );

        return ResponseEntity.status(HttpStatus.OK)
            .body(ResponseFactory.getSuccessJsonResult(response));
    }

    @GetMapping("manager/{questionId}")
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
    public ResponseEntity<JsonResult> getQuestionsByCustomer(
        @RequestHeader("Authorization") String token,
        @PathVariable Long userId,
        @RequestParam(defaultValue = "0") int page,
        @RequestParam(defaultValue = "5") int size,
        @RequestParam(defaultValue = "LATEST") String sortBy,
        @RequestParam(required = false) QuestionStatus status,
        @RequestParam(required = false) @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate startDate,
        @RequestParam(required = false) @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate endDate) {

        QuestionSummaryResponseDTO response = questionService.getQuestionsByCustomer(
            token,
            userId,
            page,
            size,
            sortBy,
            status,
            startDate,
            endDate
        );

        return ResponseEntity.status(HttpStatus.OK)
            .body(ResponseFactory.getSuccessJsonResult(response));
    }

    @GetMapping("customer/{questionId}")
    @Operation(summary = "질문별 상세 조회(고객사)", description = "등록된 질문을 질문 번호로 조회한다.")
    public ResponseEntity<JsonResult> getQuestionByQuestionId(
        @RequestHeader("Authorization") String token,
        @PathVariable Long questionId
    ) {
        QuestionResponseDTO response = questionService.getQuestionByQuestionId(
            token,
            questionId
        );

        return ResponseEntity
            .status(HttpStatus.OK)
            .body(ResponseFactory.getSuccessJsonResult(response));
    }

    @PostMapping("/customer/{userId}/{inquiryId}")
    @Operation(summary = "문의별 질문 작성(고객사)", description = "특정 문의에 대한 새로운 질문을 등록한다.")
    public ResponseEntity<JsonResult> createQuestion(
        @RequestHeader("Authorization") String token,
        @PathVariable Long userId,
        @PathVariable Long inquiryId,
        @RequestBody QuestionCreateRequestDTO questionCreateRequestDTO) {
        QuestionResponseDTO response = questionService.createInquiryQuestion(
            token,
            userId,
            inquiryId,
            questionCreateRequestDTO
        );

        return ResponseEntity.status(HttpStatus.OK)
            .body(ResponseFactory.getSuccessJsonResult(response));
    }

    @PostMapping("/customer/{userId}")
    @Operation(summary = "타입별 질문 작성(고객사)", description = "문의 외적인 새로운 질문을 등록한다.")
    public ResponseEntity<JsonResult> createQuestion(
        @RequestHeader("Authorization") String token,
        @PathVariable Long userId,
        @RequestBody QuestionCreateRequestDTO questionCreateRequestDTO) {
        QuestionResponseDTO response = questionService.createNotInquiryQuestion(
            token,
            userId,
            questionCreateRequestDTO
        );

        return ResponseEntity.status(HttpStatus.OK)
            .body(ResponseFactory.getSuccessJsonResult(response));
    }
}
