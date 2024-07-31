package com.pobluesky.backend.domain.quality.controller;

import com.pobluesky.backend.domain.quality.dto.response.QualityReviewInfoResponseDTO;
import com.pobluesky.backend.domain.quality.service.QualityReviewInfoService;
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
@RequestMapping("/api/quality-review-info")
public class QualityReviewInfoController {
    private final QualityReviewInfoService qualityReviewInfoService;

    @GetMapping
    public ResponseEntity<JsonResult> getQualityReviewInfo() {
        List<QualityReviewInfoResponseDTO> allQualityReviewInfos = qualityReviewInfoService.getAllQualityReviewInfos();

        return ResponseEntity.status(HttpStatus.OK)
            .body(JsonResult.success(allQualityReviewInfos));
    }

    @PostMapping
    public ResponseEntity<JsonResult> createQualityReviewInfo(@RequestBody QualityReviewInfoResponseDTO dto) {
        QualityReviewInfoResponseDTO response = qualityReviewInfoService.createQualityReviewInfo(dto);

        return ResponseEntity.status(HttpStatus.OK)
           .body(JsonResult.success(response));
    }

    @PutMapping("/{qualityReviewInfoNo}")
    public ResponseEntity<JsonResult> updateQualityReviewInfoByNo(
        @PathVariable Long qualityReviewInfoNo,
        @RequestBody QualityReviewInfoResponseDTO qualityReviewInfoResponseDTO
    ) {
        QualityReviewInfoResponseDTO response = qualityReviewInfoService.updateQualityReviewInfoByNo(qualityReviewInfoNo, qualityReviewInfoResponseDTO);

        return ResponseEntity.status(HttpStatus.OK)
           .body(JsonResult.success(response));
    }

    @DeleteMapping("/{qualityReviewInfoNo}")
    public ResponseEntity<CommonResult> deleteQualityReviewInfoByNo(@PathVariable Long qualityReviewInfoNo) {
        qualityReviewInfoService.deleteQualityReviewInfoByNo(qualityReviewInfoNo);

        return ResponseEntity.ok(ResponseFactory.getSuccessResult());
    }
}
