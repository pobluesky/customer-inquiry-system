package com.pobluesky.backend.domain.answer.controller;

import com.pobluesky.backend.domain.answer.dto.response.MobileAnswerSummaryResponseDTO;
import com.pobluesky.backend.domain.answer.service.AnswerService;

import lombok.RequiredArgsConstructor;

import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/mobile/api/answers")
public class MobileAnswerController {

    private final AnswerService answerService;

    @GetMapping("/{questionId}")
    public MobileAnswerSummaryResponseDTO getAnswerByQuestionId(@PathVariable Long questionId) {
        return answerService.getAnswerByQuestionId(questionId);
    }
}
