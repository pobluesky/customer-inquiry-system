package com.pobluesky.backend.domain.answer.controller;

import com.pobluesky.backend.domain.answer.dto.request.AnswerCreateRequestDTO;
import com.pobluesky.backend.domain.answer.dto.request.AnswerUpdateRequestDTO;
import com.pobluesky.backend.domain.answer.dto.response.AnswerResponseDTO;
import com.pobluesky.backend.domain.answer.service.AnswerService;
import com.pobluesky.backend.global.util.ResponseFactory;
import com.pobluesky.backend.global.util.model.JsonResult;

import io.swagger.v3.oas.annotations.Operation;

import lombok.RequiredArgsConstructor;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Map;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/answers")
public class AnswerController {

    private final AnswerService answerService;

    @GetMapping("/managers")
    @Operation(summary = "답변 전체 조회(담당자)", description = "등록된 모든 답변을 조회한다. 답변 대기 및 답변 완료 현황을 알 수 있다.")
    public ResponseEntity<JsonResult> getAnswersForManager(
        @RequestHeader("Authorization") String token
    ) {
        List<AnswerResponseDTO> response = answerService.getAnswers(token);

        return ResponseEntity.status((HttpStatus.OK))
            .body(ResponseFactory.getSuccessJsonResult(response));
    }

    @GetMapping("/managers/{questionId}")
    @Operation(summary = "질문별 답변 상세 조회(담당자)", description = "질문에 대한 상세 답변을 질문 번호로 조회한다.")
    public ResponseEntity<JsonResult> getAnswerByQuestionIdForManager(
        @RequestHeader("Authorization") String token,
        @PathVariable Long questionId
    ) {
        AnswerResponseDTO response = answerService.getAnswerByQuestionIdForManager(
            token,
            questionId
        );

        return ResponseEntity
            .status(HttpStatus.OK)
            .body(ResponseFactory.getSuccessJsonResult(response));
    }

    @GetMapping("/customers/{userId}")
    @Operation(
        summary = "답변 전체 조회(고객사)",
        description = "특정 고객사의 모든 질문에 대한 모든 답변을 조회한다. 답변 대기 및 답변 완료 현황을 알 수 있다."
    )
    public ResponseEntity<JsonResult> getAnswerByUserId(
        @RequestHeader("Authorization") String token,
        @PathVariable Long userId
    ) {
        List<AnswerResponseDTO> response = answerService.getAnswerByUserId(token, userId);

        return ResponseEntity.status((HttpStatus.OK))
            .body(ResponseFactory.getSuccessJsonResult(response));
    }

    @GetMapping("/customers/{userId}/{questionId}")
    @Operation(summary = "질문별 답변 상세 조회(고객사)", description = "질문에 대한 상세 답변을 질문 번호로 조회한다.")
    public ResponseEntity<JsonResult> getAnswerByQuestionId(
        @RequestHeader("Authorization") String token,
        @PathVariable Long userId,
        @PathVariable Long questionId
    ) {
        AnswerResponseDTO response = answerService.getAnswerByQuestionId(
            token,
            userId,
            questionId
        );

        return ResponseEntity
            .status(HttpStatus.OK)
            .body(ResponseFactory.getSuccessJsonResult(response));
    }

    @PostMapping("/managers/{questionId}")
    @Operation(summary = "질문별 답변 작성(담당자)", description = "질문 번호로 질문을 검색하고 답변을 작성한다.")
    public ResponseEntity<JsonResult> createAnswer(
        @RequestHeader("Authorization") String token,
        @PathVariable Long questionId,
        @RequestPart(value = "files", required = false) MultipartFile file,
        @RequestPart("answer") AnswerCreateRequestDTO answerCreateRequestDTO) {
        AnswerResponseDTO response = answerService.createAnswer(
            token,
            questionId,
            file,
            answerCreateRequestDTO
        );

        return ResponseEntity.status(HttpStatus.OK)
            .body(ResponseFactory.getSuccessJsonResult(response));
    }

    @PutMapping("/managers/{questionId}")
    @Operation(summary = "질문별 답변 수정(담당자)", description = "질문 번호로 질문을 검색하고 답변을 수정한다.")
    public ResponseEntity<JsonResult> updateAnswer(
        @RequestHeader("Authorization") String token,
        @PathVariable Long questionId,
        @RequestPart(value = "files", required = false) MultipartFile file,
        @RequestPart("answer") AnswerUpdateRequestDTO answerUpdateRequestDTO
    ) {
        AnswerResponseDTO response = answerService.updateAnswerById(
            token,
            questionId,
            file,
            answerUpdateRequestDTO
        );

        return ResponseEntity.status(HttpStatus.OK)
            .body(ResponseFactory.getSuccessJsonResult(response));
    }

    /* [Start] Dashboard API */
    @GetMapping("/managers/voc/dashboard")
    @Operation(summary = "월별 답변 처리 건수 평균")
    public ResponseEntity<Map<String, List<Object[]>>> averageMonthlyAnswer(
        @RequestHeader("Authorization") String token
    ) {
        Map<String, List<Object[]>> response = answerService.getAverageCountPerMonth(token);

        return ResponseEntity.ok(response);
    }
    /* [End] Dashboard API */
}
