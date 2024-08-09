package com.pobluesky.backend.domain.answer.controller;

import com.pobluesky.backend.domain.answer.dto.request.AnswerCreateRequestDTO;
import com.pobluesky.backend.domain.answer.dto.response.AnswerResponseDTO;
import com.pobluesky.backend.domain.answer.service.AnswerService;
import com.pobluesky.backend.global.util.ResponseFactory;
import com.pobluesky.backend.global.util.model.JsonResult;
import io.swagger.v3.oas.annotations.Operation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/answer")
public class AnswerController {
    private final AnswerService answerService;

    // 답변 등록 (담당자)
    @PostMapping("/{questionId}")
    @Operation(summary = "답변 등록", description = "담당자는 questionId로 상세 질문을 구분하여 답변을 등록한다.")
    public ResponseEntity<JsonResult> createAnswer(
        @PathVariable Long questionId,
        @RequestBody AnswerCreateRequestDTO answerCreateRequestDTO) {
        AnswerResponseDTO response = answerService.createAnswer(answerCreateRequestDTO, questionId);
        return ResponseEntity.status(HttpStatus.OK)

            .body(ResponseFactory.getSuccessJsonResult(response));
    }

    // 상세 답변 조회 (고객사)
    @GetMapping("/customer/{questionId}")
    @Operation(summary = "답변 조회", description = "고객사는 상세 답변을 questionId로 조회한다.")
    public ResponseEntity<JsonResult> getAnswerByInquiryId(@PathVariable Long questionId) {
        AnswerResponseDTO response = answerService.getAnswerById(questionId);

        return ResponseEntity
            .status(HttpStatus.OK)
            .body(ResponseFactory.getSuccessJsonResult(response));
    }
}
