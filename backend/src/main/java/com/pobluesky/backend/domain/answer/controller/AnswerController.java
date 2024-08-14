package com.pobluesky.backend.domain.answer.controller;

import com.pobluesky.backend.domain.answer.dto.request.AnswerCreateRequestDTO;
import com.pobluesky.backend.domain.answer.dto.response.AnswerResponseDTO;
import com.pobluesky.backend.domain.answer.dto.response.AnswerWithQuestionResponseDTO;
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
@RequestMapping("/api/answers")
public class AnswerController {

    private final AnswerService answerService;

    @GetMapping("/customer/complex/{userId}")
    @Operation(
        summary = "질문 & 답변 전체 조회(고객사)",
        description = "특정 고객의 모든 질문과 해당 질문에 대한 답변을 조회한다. 답변이 없는 질문의 경우 빈 리스트를 반환한다."
    )
    public ResponseEntity<JsonResult> getQuestionsAndAnswersByuserId(
        @RequestHeader("Authorization") String token,
        @PathVariable Long userId
    ) {
        List<AnswerWithQuestionResponseDTO> response =
            answerService.getQuestionsAndAnswersByuserId(token, userId);

        return ResponseEntity.status(HttpStatus.OK)
            .body(ResponseFactory.getSuccessJsonResult(response));
    }

    @GetMapping("/manager/complex")
    @Operation(
        summary = "질문 & 답변 전체 조회(담당자)",
        description = "모든 고객사의 질문 및 답변을 조회한다. 답변이 없는 경우 빈 배열을 반환한다."
    )
    public ResponseEntity<JsonResult> getAllAnswersWithQuestions(
        @RequestHeader("Authorization") String token
    ) {
        List<AnswerWithQuestionResponseDTO> response =
            answerService.getAllAnswersWithQuestions(token);

        return ResponseEntity.status(HttpStatus.OK)
            .body(ResponseFactory.getSuccessJsonResult(response));
    }

    @GetMapping("/customer/{userId}")
    @Operation(
        summary = "답변 전체 조회(고객사)",
        description = "특정 고객사의 모든 질문에 대한 모든 답변을 조회한다."
    )
    public ResponseEntity<JsonResult> getAnswerByuserId(
        @RequestHeader("Authorization") String token,
        @PathVariable Long userId
    ) {
        List<AnswerResponseDTO> response = answerService.getAnswerByuserId(token, userId);

        return ResponseEntity.status((HttpStatus.OK))
            .body(ResponseFactory.getSuccessJsonResult(response));
    }

    @GetMapping("/manager")
    @Operation(summary = "답변 전체 조회(담당자)", description = "등록된 모든 답변을 조회한다.")
    public ResponseEntity<JsonResult> getAnswerForManager(
        @RequestHeader("Authorization") String token
    ) {
        List<AnswerResponseDTO> response = answerService.getAnswer(token);

        return ResponseEntity.status((HttpStatus.OK))
            .body(ResponseFactory.getSuccessJsonResult(response));
    }

    @PostMapping("/manager/{questionId}")
    @Operation(summary = "질문별 답변 작성(담당자)", description = "질문 번호로 질문을 검색하고 답변을 작성한다.")
    public ResponseEntity<JsonResult> createAnswer(
        @RequestHeader("Authorization") String token,
        @PathVariable Long questionId,
        @RequestBody AnswerCreateRequestDTO answerCreateRequestDTO) {
        AnswerResponseDTO response = answerService.createAnswer(
            token,
            questionId,
            answerCreateRequestDTO
        );

        return ResponseEntity.status(HttpStatus.OK)
            .body(ResponseFactory.getSuccessJsonResult(response));
    }
}
