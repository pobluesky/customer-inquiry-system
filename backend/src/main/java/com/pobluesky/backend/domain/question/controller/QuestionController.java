package com.pobluesky.backend.domain.question.controller;

import com.pobluesky.backend.domain.question.dto.request.QuestionCreateRequestDTO;
import com.pobluesky.backend.domain.question.dto.response.QuestionResponseDTO;
import com.pobluesky.backend.domain.question.service.QuestionService;
import com.pobluesky.backend.global.util.ResponseFactory;
import com.pobluesky.backend.global.util.model.JsonResult;
import io.swagger.v3.oas.annotations.Operation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/questions")
public class QuestionController {

    private final QuestionService questionService;

    @GetMapping("/manager")
    @Operation(summary = "전체 질문 조회(담당자)", description = "등록된 모든 질문을 조회한다.")
    public ResponseEntity<JsonResult> getQuestionForManager(
        @RequestHeader("Authorization") String token
    ) {
        List<QuestionResponseDTO> response = questionService.getQuestions(token);

        return ResponseEntity.status((HttpStatus.OK))
            .body(ResponseFactory.getSuccessJsonResult(response));
    }

    @GetMapping("/manager/{questionId}")
    @Operation(summary = "질문별 상세 조회(담당자)", description = "등록된 질문을 질문 번호로 조회한다.")
    public ResponseEntity<JsonResult> getQuestionByInquiryIdForManager(
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

    @GetMapping("/customer/{customerId}")
    @Operation(summary = "질문 전체 조회(고객사)", description = "특정 고객의 모든 질문을 고객 번호로 조회한다.")
    public ResponseEntity<JsonResult> getQuestionByCustomerId(
        @RequestHeader("Authorization") String token,
        @PathVariable Long customerId
    ) {
        List<QuestionResponseDTO> response = questionService.getQuestionByCustomerId(
            token,
            customerId
        );

        return ResponseEntity
            .status(HttpStatus.OK)
            .body(ResponseFactory.getSuccessJsonResult(response));
    }

    @PostMapping("/customer/{customerId}/{inquiryId}")
    @Operation(summary = "문의별 질문 작성(고객사)", description = "특정 문의에 대한 새로운 질문을 등록한다.")
    public ResponseEntity<JsonResult> createQuestion(
        @RequestHeader("Authorization") String token,
        @PathVariable Long customerId,
        @PathVariable Long inquiryId,
        @RequestBody QuestionCreateRequestDTO questionCreateRequestDTO) {
        QuestionResponseDTO response = questionService.createInquiryQuestion(
            token,
            customerId,
            inquiryId,
            questionCreateRequestDTO
        );

        return ResponseEntity.status(HttpStatus.OK)
            .body(ResponseFactory.getSuccessJsonResult(response));
    }

    @PostMapping("/customer/{customerId}")
    @Operation(summary = "타입별 질문 작성(고객사)", description = "문의 외적인 새로운 질문을 등록한다.")
    public ResponseEntity<JsonResult> createQuestion(
        @RequestHeader("Authorization") String token,
        @PathVariable Long customerId,
        @RequestBody QuestionCreateRequestDTO questionCreateRequestDTO) {
        QuestionResponseDTO response = questionService.createNotInquiryQuestion(
            token,
            customerId,
            questionCreateRequestDTO
        );

        return ResponseEntity.status(HttpStatus.OK)
            .body(ResponseFactory.getSuccessJsonResult(response));
    }
}
