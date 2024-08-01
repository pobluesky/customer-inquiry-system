package com.pobluesky.backend.domain.quality.controller;

import com.pobluesky.backend.domain.quality.dto.request.QualityCreateRequestDTO;
import com.pobluesky.backend.domain.quality.dto.request.QualityUpdateRequestDTO;
import com.pobluesky.backend.domain.quality.dto.response.QualityResponseDTO;
import com.pobluesky.backend.domain.quality.service.QualityService;
import com.pobluesky.backend.global.util.ResponseFactory;
import com.pobluesky.backend.global.util.model.CommonResult;
import com.pobluesky.backend.global.util.model.JsonResult;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/quality")
public class QualityController {
    private final QualityService qualityService;

    @GetMapping
    public ResponseEntity<JsonResult> getQualities() {
        List<QualityResponseDTO> allQualities = qualityService.getAllQualities();

        return ResponseEntity.status(HttpStatus.OK)
            .body(ResponseFactory.getSuccessJsonResult(allQualities));
    }

    @PostMapping("/{inquiryId}")
    public ResponseEntity<JsonResult> createQuality(
        @RequestBody QualityCreateRequestDTO dto,
        @PathVariable Long inquiryId) {
        QualityResponseDTO response = qualityService.createQuality(dto, inquiryId);

        return ResponseEntity.status(HttpStatus.OK)
            .body(ResponseFactory.getSuccessJsonResult(response));
    }

    @PutMapping("/{qualityId}")
    public ResponseEntity<JsonResult> updateQualityById(
        @PathVariable Long qualityId,
        @RequestBody QualityUpdateRequestDTO qualityUpdateRequestDTO
    ) {
        QualityResponseDTO response = qualityService.updateQualityById(qualityId, qualityUpdateRequestDTO);

        return ResponseEntity.status(HttpStatus.OK)
            .body(ResponseFactory.getSuccessJsonResult(response));
    }

    @DeleteMapping("/{qualityId}")
    public ResponseEntity<CommonResult> deleteQualityById(@PathVariable Long qualityId) {
        qualityService.deleteQualityById(qualityId);

        return ResponseEntity.ok(ResponseFactory.getSuccessResult());
    }
}