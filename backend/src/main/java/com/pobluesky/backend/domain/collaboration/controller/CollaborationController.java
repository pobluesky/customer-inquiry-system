package com.pobluesky.backend.domain.collaboration.controller;

import com.pobluesky.backend.domain.collaboration.dto.request.CollaborationCreateRequestDTO;
import com.pobluesky.backend.domain.collaboration.dto.request.CollaborationUpdateRequestDTO;
import com.pobluesky.backend.domain.collaboration.dto.response.CollaborationDetailResponseDTO;
import com.pobluesky.backend.domain.collaboration.dto.response.CollaborationResponseDTO;
import com.pobluesky.backend.domain.collaboration.service.CollaborationService;
import com.pobluesky.backend.global.util.ResponseFactory;
import com.pobluesky.backend.global.util.model.JsonResult;

import io.swagger.v3.oas.annotations.Operation;
import java.util.List;

import lombok.RequiredArgsConstructor;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/collaborations")
public class CollaborationController {
    private final CollaborationService collaborationService;

    @GetMapping
    @Operation(summary = "본인의 협업만 조회")
    public ResponseEntity<JsonResult> getAllCollaborations(
        @RequestHeader("Authorization") String token
    ) {
        List<CollaborationResponseDTO> response = collaborationService.getAllCollaborations(token);

        return ResponseEntity.status(HttpStatus.OK)
            .body(ResponseFactory.getSuccessJsonResult(response));
    }

    @GetMapping
    @Operation(summary = "협업 조회")
    public ResponseEntity<JsonResult> getCollaborations(
        @RequestHeader("Authorization") String token
    ) {
        List<CollaborationResponseDTO> response = collaborationService.getAllCollaborations(token);

        return ResponseEntity.status(HttpStatus.OK)
            .body(ResponseFactory.getSuccessJsonResult(response));
    }

    @Operation(summary = "questionId 별 협업 요청")
    @PostMapping("/{questionId}")
    public ResponseEntity<JsonResult> createCollaboration(
        @RequestHeader("Authorization") String token,
        @PathVariable Long questionId,
        @RequestBody CollaborationCreateRequestDTO requestDTO
    ) {
        CollaborationResponseDTO response = collaborationService.createCollaboration(
            token,
            questionId,
            requestDTO
        );

        return ResponseEntity.status(HttpStatus.OK)
            .body(ResponseFactory.getSuccessJsonResult(response));
    }

    @GetMapping("/{questionId}/{collaborationId}")
    @Operation(summary = "협업 단건 조회")
    public ResponseEntity<JsonResult> getCollaboration(
        @RequestHeader("Authorization") String token,
        @PathVariable Long questionId,
        @PathVariable Long collaborationId
    ) {
        CollaborationResponseDTO response = collaborationService.getCollaborationById(
            token,
            questionId,
            collaborationId
        );

        return ResponseEntity.status(HttpStatus.OK)
            .body(ResponseFactory.getSuccessJsonResult(response));
    }

    @Operation(
        summary = "collaborationId 별 협업 수락/거절 결정",
        description = "협업 요청을 받은 담당자만 수정 가능"
    )
    @PutMapping("/{collaborationId}/decision")
    public ResponseEntity<JsonResult> updateCollaborationStatus(
        @RequestHeader("Authorization") String token,
        @PathVariable Long collaborationId,
        @RequestBody CollaborationUpdateRequestDTO requestDTO
    ) {
        CollaborationDetailResponseDTO response = collaborationService.updateCollaborationStatus(
            token,
            collaborationId,
            requestDTO
        );

        return ResponseEntity.status(HttpStatus.OK)
            .body(ResponseFactory.getSuccessJsonResult(response));
    }

    @Operation(
        summary = "collaborationId 별 협업 완료 결정",
        description = "협업 요청을 받은 담당자만 수정 가능"
    )
    @PutMapping("/{collaborationId}/decision/complete")
    public ResponseEntity<JsonResult> updateCollaborationStatus(
        @RequestHeader("Authorization") String token,
        @PathVariable Long collaborationId
    ) {
        CollaborationDetailResponseDTO response = collaborationService.completeCollaboration(
            token,
            collaborationId
        );

        return ResponseEntity.status(HttpStatus.OK)
            .body(ResponseFactory.getSuccessJsonResult(response));
    }
}
