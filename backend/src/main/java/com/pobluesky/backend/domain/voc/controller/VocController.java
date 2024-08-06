package com.pobluesky.backend.domain.voc.controller;

import com.pobluesky.backend.domain.voc.dto.request.VocQuestionCreateRequestDTO;
import com.pobluesky.backend.domain.voc.dto.request.VocAnswerCreateRequestDTO;
import com.pobluesky.backend.domain.voc.dto.response.VocQuestionResponseDTO;
import com.pobluesky.backend.domain.voc.dto.response.VocAnswerResponseDTO;
import com.pobluesky.backend.domain.voc.service.VocService;
import com.pobluesky.backend.global.util.ResponseFactory;
import com.pobluesky.backend.global.util.model.JsonResult;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/voc")
public class VocController {
    private final VocService vocService;

    @PostMapping("/question/{inquiryId}")
    public ResponseEntity<JsonResult> createQuestion(
        @PathVariable Long inquiryId,
        @RequestBody VocQuestionCreateRequestDTO vocQuestionCreateRequestDTO) {
        VocQuestionResponseDTO response = vocService.createVocQuestion(inquiryId, vocQuestionCreateRequestDTO);
        return ResponseEntity.status(HttpStatus.OK)

            .body(ResponseFactory.getSuccessJsonResult(response));
    }

    @PostMapping("/answer/{inquiryId}")
    public ResponseEntity<JsonResult> createAnswer(
        @PathVariable Long inquiryId,
        @RequestBody VocAnswerCreateRequestDTO vocAnswerCreateRequestDTO) {
        VocAnswerResponseDTO response = vocService.createVocAnswer(inquiryId, vocAnswerCreateRequestDTO);
        return ResponseEntity.status(HttpStatus.OK)

            .body(ResponseFactory.getSuccessJsonResult(response));
    }
}
