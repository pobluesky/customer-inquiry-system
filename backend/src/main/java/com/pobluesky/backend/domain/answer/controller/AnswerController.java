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

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/answer")
public class AnswerController {
    private final AnswerService answerService;

    @GetMapping("/{customerId}")
    @Operation(summary = "답변 전체 조회(고객사)", description = "고객사는 본인의 모든 질문 & 답변을 조회한다.")
    public ResponseEntity<JsonResult> getAnswerByCustomerId(@PathVariable Long customerId) {
        List<AnswerResponseDTO> response = answerService.getAnswerByCustomerId(customerId);

        return ResponseEntity.status((HttpStatus.OK))
            .body(ResponseFactory.getSuccessJsonResult(response));
    }

    @GetMapping("/customer/{questionId}")
    @Operation(summary = "질문별 답변 조회(고객사)", description = "고객사는 본인의 질문에 대한 상세 답변을 질문 번호로 조회한다.")
    public ResponseEntity<JsonResult> getAnswerByInquiryId(@PathVariable Long questionId) {
        AnswerResponseDTO response = answerService.getAnswerById(questionId);

        return ResponseEntity
            .status(HttpStatus.OK)
            .body(ResponseFactory.getSuccessJsonResult(response));
    }

    @GetMapping("/manager")
    @Operation(summary = "답변 전체 조회(담당자)", description = "담당자는 등록된 모든 답변을 조회한다.")
    public ResponseEntity<JsonResult> getAnswerForManager() {
        List<AnswerResponseDTO> response = answerService.getAnswer();

        return ResponseEntity.status((HttpStatus.OK))
            .body(ResponseFactory.getSuccessJsonResult(response));
    }

    @GetMapping("/manager/{questionId}")
    @Operation(summary = "질문별 답변 조회(담당자)", description = "담당자는 등록된 답변을 질문 번호로 조회한다.")
    public ResponseEntity<JsonResult> getAnswerByQuestionIdForManager(@PathVariable Long questionId) {
        AnswerResponseDTO response = answerService.getAnswerByQuestionId(questionId);

        return ResponseEntity
            .status(HttpStatus.OK)
            .body(ResponseFactory.getSuccessJsonResult(response));
    }

    @PostMapping("/manager/{questionId}")
    @Operation(summary = "질문별 답변 작성(담당자)", description = "담당자는 질문 번호로 질문을 검색하고 답변을 작성한다.")
    public ResponseEntity<JsonResult> createAnswer(
        @PathVariable Long questionId,
        @RequestBody AnswerCreateRequestDTO answerCreateRequestDTO) {
        AnswerResponseDTO response = answerService.createAnswer(questionId, answerCreateRequestDTO);
        return ResponseEntity.status(HttpStatus.OK)
            .body(ResponseFactory.getSuccessJsonResult(response));
    }
}
