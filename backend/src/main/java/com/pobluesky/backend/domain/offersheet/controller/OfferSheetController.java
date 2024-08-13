package com.pobluesky.backend.domain.offersheet.controller;

import com.pobluesky.backend.domain.offersheet.dto.request.OfferSheetCreateRequestDTO;
import com.pobluesky.backend.domain.offersheet.dto.request.OfferSheetUpdateRequestDTO;
import com.pobluesky.backend.domain.offersheet.dto.response.OfferSheetResponseDTO;
import com.pobluesky.backend.domain.offersheet.service.OfferSheetService;
import com.pobluesky.backend.global.util.ResponseFactory;
import com.pobluesky.backend.global.util.model.JsonResult;
import io.swagger.v3.oas.annotations.Operation;
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
@RequestMapping("/api/offersheet")
public class OfferSheetController {
    private final OfferSheetService offerSheetService;

    @Operation(summary = "inquiryId 별 offersheet 작성")
    @PostMapping("/{inquiryId}")
    public ResponseEntity<JsonResult> createOfferSheet(
        @PathVariable Long inquiryId,
        @RequestBody OfferSheetCreateRequestDTO osCreateRequestDTO) {
        OfferSheetResponseDTO response = offerSheetService.createOfferSheet(inquiryId, osCreateRequestDTO);
        return ResponseEntity.status(HttpStatus.OK)

            .body(ResponseFactory.getSuccessJsonResult(response));
    }

    @Operation(summary = "inquiryId 별 offersheet 조회")
    @GetMapping("/{inquiryId}")
    public ResponseEntity<JsonResult> getOfferSheetByInquiryId(@PathVariable Long inquiryId) {
        OfferSheetResponseDTO response = offerSheetService.getOfferSheetByInquiryId(inquiryId);

        return ResponseEntity
                .status(HttpStatus.OK)
                .body(ResponseFactory.getSuccessJsonResult(response));
    }

    @Operation(summary = "inquiryId 별 offersheet 수정")
    @PutMapping("/{inquiryId}")
    public ResponseEntity<JsonResult> updateOfferSheetByInquiryId(
        @PathVariable Long inquiryId,
        @RequestBody OfferSheetUpdateRequestDTO offerSheetUpdateRequestDTO) {

        OfferSheetResponseDTO response = offerSheetService.updateOfferSheetByInquiryId(inquiryId, offerSheetUpdateRequestDTO);
        return ResponseEntity
            .status(HttpStatus.OK)
            .body(ResponseFactory.getSuccessJsonResult(response));
    }
}
