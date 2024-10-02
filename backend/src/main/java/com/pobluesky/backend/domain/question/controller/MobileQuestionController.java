package com.pobluesky.backend.domain.question.controller;

import com.pobluesky.backend.domain.inquiry.entity.Industry;
import com.pobluesky.backend.domain.inquiry.entity.InquiryType;
import com.pobluesky.backend.domain.inquiry.entity.ProductType;
import com.pobluesky.backend.domain.inquiry.entity.Progress;
import com.pobluesky.backend.domain.question.dto.response.MobileQuestionSummaryResponseDTO;
import com.pobluesky.backend.domain.question.dto.response.QuestionSummaryResponseDTO;
import com.pobluesky.backend.domain.question.entity.QuestionStatus;
import com.pobluesky.backend.domain.question.entity.QuestionType;
import com.pobluesky.backend.domain.question.service.QuestionService;

import com.pobluesky.backend.global.util.ResponseFactory;
import com.pobluesky.backend.global.util.model.JsonResult;
import io.swagger.v3.oas.annotations.Operation;
import lombok.RequiredArgsConstructor;

import org.springframework.data.domain.Page;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

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

    @GetMapping("/search")
    public List<MobileQuestionSummaryResponseDTO> getQuestionBySearch(
            @RequestParam(defaultValue = "LATEST") String sortBy,
            @RequestParam(required = false) String status,
            @RequestParam(required = false) String type,
            @RequestParam(required = false) String title,
            @RequestParam(required = false) String customerName,
            @RequestParam(required = false) @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate startDate,
            @RequestParam(required = false) @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate endDate
    ) {
        QuestionStatus statusEnum =  (status != null) ? QuestionStatus.fromString(status) : null;
        QuestionType questionTypeEnum = (type != null) ? QuestionType.fromString(type) : null;

        return questionService.getQuestionsBySearch(
                sortBy,
                statusEnum,
                questionTypeEnum,
                title,
                customerName,
                startDate,
                endDate
        );
    }
}
