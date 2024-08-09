package com.pobluesky.backend.domain.question.controller;

import com.pobluesky.backend.domain.question.dto.request.QuestionCreateRequestDTO;
import com.pobluesky.backend.domain.question.dto.response.QuestionResponseDTO;
import com.pobluesky.backend.domain.question.service.QuestionService;
import com.pobluesky.backend.domain.user.entity.Customer;
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

    // 전체 질문 조회 (담당자)
    @GetMapping("/manager")
    @Operation(summary = "전체 질문 조회(담당자)", description = "담당자는 등록된 모든 질문을 찾는다.")
    public ResponseEntity<JsonResult> getQuestionForManager() {
        List<QuestionResponseDTO> response = questionService.getQuestion();

        return ResponseEntity.status((HttpStatus.OK))
            .body(ResponseFactory.getSuccessJsonResult(response));
    }

    // 질문 번호로 상세 질문 조회 (담당자)
    @GetMapping("/manager/{questionId}")
    @Operation(summary = "상세 질문 조회(담당자)", description = "담당자는 등록된 질문을 questionId로 상세 검색한다.")
    public ResponseEntity<JsonResult> getQuestionByInquiryIdForManager(@PathVariable Long questionId) {
        QuestionResponseDTO response = questionService.getQuestionByQuestionId(questionId);

        return ResponseEntity
            .status(HttpStatus.OK)
            .body(ResponseFactory.getSuccessJsonResult(response));
    }

    // 고객 번호로 질문 전체 조회 (고객사)
    @GetMapping("/{customerId}")
    @Operation(summary = "질문 전체 조회(담당자)", description = "고객사는 본인이 등록한 모든 질문을 customerId로 찾는다.")
    public ResponseEntity<JsonResult> getQuestionByCustomerId(@PathVariable Long customerId) {
        List<QuestionResponseDTO> response = questionService.getQuestionByCustomerId(customerId);

        return ResponseEntity
            .status(HttpStatus.OK)
            .body(ResponseFactory.getSuccessJsonResult(response));
    }

    // InquiryId로 문의를 검색하고, 이를 이용하여 질문 등록 (고객사)
    @PostMapping("/{inquiryId}/{customerId}")
    @Operation(summary = "문의 등록(고객사)", description = "고객사는 InquiryId로 문의를 검색하고 새로운 질문을 등록한다.")
    public ResponseEntity<JsonResult> createQuestion(
        @PathVariable Long inquiryId,
        @PathVariable Long customerId,
        @RequestBody QuestionCreateRequestDTO questionCreateRequestDTO) {
        QuestionResponseDTO response = questionService.createQuestion(inquiryId, customerId, questionCreateRequestDTO);
        return ResponseEntity.status(HttpStatus.OK)

            .body(ResponseFactory.getSuccessJsonResult(response));
    }
}
