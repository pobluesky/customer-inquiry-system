package com.pobluesky.backend.domain.question.controller;

import com.pobluesky.backend.domain.question.dto.response.MobileQuestionSummaryResponseDTO;
import com.pobluesky.backend.domain.question.service.QuestionService;

import lombok.RequiredArgsConstructor;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/mobile/api/questions")
public class MobileQuestionController {

    private final QuestionService questionService;

    @GetMapping
    public List<MobileQuestionSummaryResponseDTO> getAllQuestions() {

        return questionService.getAllQuestions();
    }

    @GetMapping("/{questionId}")
    public MobileQuestionSummaryResponseDTO getQuestionById(@PathVariable Long questionId) {

        return questionService.getQuestionById(questionId);
    }
}
