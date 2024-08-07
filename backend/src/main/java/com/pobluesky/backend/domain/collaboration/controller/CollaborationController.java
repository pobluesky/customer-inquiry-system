package com.pobluesky.backend.domain.collaboration.controller;

import com.pobluesky.backend.domain.collaboration.dto.request.CollaborationCreateRequestDTO;
import com.pobluesky.backend.domain.collaboration.dto.request.CollaborationUpdateRequestDTO;
import com.pobluesky.backend.domain.collaboration.dto.response.CollaborationDetailResponseDTO;
import com.pobluesky.backend.domain.collaboration.dto.response.CollaborationResponseDTO;
import com.pobluesky.backend.domain.collaboration.service.CollaborationService;
import com.pobluesky.backend.global.util.ResponseFactory;
import com.pobluesky.backend.global.util.model.JsonResult;

import java.util.List;

import lombok.RequiredArgsConstructor;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/collaborations")
public class CollaborationController {
    private final CollaborationService collaborationService;

    @GetMapping
    public ResponseEntity<JsonResult> getAllCollaborations() {
        List<CollaborationResponseDTO> response = collaborationService.getAllCollaborations();

        return ResponseEntity.status(HttpStatus.OK)
            .body(ResponseFactory.getSuccessJsonResult(response));
    }

    @PostMapping("/{questionId}")
    public ResponseEntity<JsonResult> createCollaboration(
        @PathVariable Long questionId,
        @RequestBody CollaborationCreateRequestDTO requestDTO
    ) {
        CollaborationResponseDTO response = collaborationService.createCollaboration(
            questionId,
            requestDTO
        );

        return ResponseEntity.status(HttpStatus.OK)
            .body(ResponseFactory.getSuccessJsonResult(response));
    }

    @GetMapping("/{questionId}/{collaborationId}")
    public ResponseEntity<JsonResult> getCollaboration(
        @PathVariable Long questionId,
        @PathVariable Long collaborationId
    ) {
        CollaborationResponseDTO response = collaborationService.getCollaborationById(
            questionId,
            collaborationId
        );

        return ResponseEntity.status(HttpStatus.OK)
            .body(ResponseFactory.getSuccessJsonResult(response));
    }

    @PutMapping("/{collaborationId}/decision")
    public ResponseEntity<JsonResult> updateCollaborationStatus(
        @PathVariable Long collaborationId,
        @RequestBody CollaborationUpdateRequestDTO requestDTO
    ) {
        CollaborationDetailResponseDTO response = collaborationService.updateCollaborationStatus(
            collaborationId,
            requestDTO
        );

        return ResponseEntity.status(HttpStatus.OK)
            .body(ResponseFactory.getSuccessJsonResult(response));
    }

    @PutMapping("/{collaborationId}/decision/complete")
    public ResponseEntity<JsonResult> updateCollaborationStatus(
        @PathVariable Long collaborationId
    ) {
        CollaborationDetailResponseDTO response = collaborationService.completeCollaboration(
            collaborationId
        );

        return ResponseEntity.status(HttpStatus.OK)
            .body(ResponseFactory.getSuccessJsonResult(response));
    }
}
