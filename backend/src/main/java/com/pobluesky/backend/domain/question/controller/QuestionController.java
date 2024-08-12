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
@RequestMapping("/api/question")
public class QuestionController {

    private final QuestionService questionService;

    @GetMapping("/manager")
    @Operation(summary = "전체 질문 조회(담당자)", description = "담당자는 등록된 모든 질문을 찾는다.")
    public ResponseEntity<JsonResult> getQuestionForManager() {
        List<QuestionResponseDTO> response = questionService.getQuestion();

        return ResponseEntity.status((HttpStatus.OK))
            .body(ResponseFactory.getSuccessJsonResult(response));
    }

    @GetMapping("/customer/{customerId}")
    @Operation(summary = "질문 전체 조회(고객사)", description = "고객사는 본인의 모든 질문을 고객 번호로 찾는다.")
    public ResponseEntity<JsonResult> getQuestionByCustomerId(@PathVariable Long customerId) {
        List<QuestionResponseDTO> response = questionService.getQuestionByCustomerId(customerId);

        return ResponseEntity
            .status(HttpStatus.OK)
            .body(ResponseFactory.getSuccessJsonResult(response));
    }

    @PostMapping("/customer/{customerId}/{inquiryId}")
    @Operation(summary = "문의별 질문 작성(고객사)", description = "고객사는 문의에 대해 새로운 질문을 등록한다.")
    public ResponseEntity<JsonResult> createQuestion(
        @PathVariable Long customerId,
        @PathVariable Long inquiryId,
        @RequestBody QuestionCreateRequestDTO questionCreateRequestDTO) {
        QuestionResponseDTO response = questionService.createInquiryQuestion(customerId, inquiryId, questionCreateRequestDTO);

        return ResponseEntity.status(HttpStatus.OK)
            .body(ResponseFactory.getSuccessJsonResult(response));
    }

    @PostMapping("/customer/{customerId}")
    @Operation(summary = "타입별 질문 작성(고객사)", description = "고객사는 문의 외적인 새로운 질문을 등록한다.")
    public ResponseEntity<JsonResult> createQuestion(
        @PathVariable Long customerId,
        @RequestBody QuestionCreateRequestDTO questionCreateRequestDTO) {
        QuestionResponseDTO response = questionService.createNotInquiryQuestion(customerId, questionCreateRequestDTO);

        return ResponseEntity.status(HttpStatus.OK)
            .body(ResponseFactory.getSuccessJsonResult(response));
    }
}
