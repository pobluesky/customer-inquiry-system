package com.pobluesky.backend.domain.chat.controller;

import com.pobluesky.backend.domain.chat.service.ChatbotService;
import com.pobluesky.backend.domain.chat.service.OcrService;
import com.pobluesky.backend.global.util.ResponseFactory;
import com.pobluesky.backend.global.util.model.JsonResult;
import io.swagger.v3.oas.annotations.Operation;
import java.util.List;
import lombok.RequiredArgsConstructor;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/chat")
public class ChatController {

    private final ChatbotService chatbotService;

    private final OcrService ocrService;

    @PostMapping("/send")
    @Operation(summary = "유저 메시지에 대한 Chatbot 응답 제공")
    public ResponseEntity<JsonResult<?>> chatWithGpt(
        @RequestHeader("Authorization") String token,
        @RequestBody String userMessage
    ) {
        JsonResult<?> response = chatbotService.processChatMessage(token, userMessage);

        return ResponseEntity.ok(response);
    }

    @PostMapping("/detect-text")
    public ResponseEntity<JsonResult> processPdf(
        @RequestParam("file") MultipartFile file
    ) {
        List<String> textResults = ocrService.processFileAndDetectText(file);

        return ResponseEntity.status(HttpStatus.OK)
            .body(ResponseFactory.getSuccessJsonResult(textResults));
    }
}
