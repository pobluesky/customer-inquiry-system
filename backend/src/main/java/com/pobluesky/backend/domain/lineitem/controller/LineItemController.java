package com.pobluesky.backend.domain.lineitem.controller;

import com.pobluesky.backend.domain.lineitem.dto.response.LineItemResponseDTO;
import com.pobluesky.backend.domain.lineitem.service.LineItemService;
import com.pobluesky.backend.global.util.ResponseFactory;
import com.pobluesky.backend.global.util.model.JsonResult;
import java.util.List;
import java.util.Map;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/line-items/{inquiryId}")
@RequiredArgsConstructor
public class LineItemController {

    private final LineItemService lineItemService;
    @GetMapping
    public ResponseEntity<JsonResult> getAllLineItemsByInquiry(@PathVariable Long inquiryId) {
        List<LineItemResponseDTO> lineItemList = lineItemService.getLineItemsByInquiry(inquiryId);

        return ResponseEntity.status(HttpStatus.OK)
            .body(ResponseFactory.getSuccessJsonResult(lineItemList));
    }

    @PostMapping
    public ResponseEntity<JsonResult> createLineItem(
        @PathVariable Long inquiryId,
        @RequestBody Map<String, Object> requestDto) {
        LineItemResponseDTO response = lineItemService.createLineItemForInquiry(
            inquiryId,
            requestDto
        );

        return ResponseEntity.status(HttpStatus.OK)
            .body(ResponseFactory.getSuccessJsonResult(response));
    }

    @PutMapping("/update")
    public ResponseEntity<JsonResult> updateLineItem(
        @PathVariable Long inquiryId,
        @RequestParam Long lineItemId,
        @RequestBody Map<String, Object> requestDto
    ) {
        LineItemResponseDTO response = lineItemService.updateLineItemById(
            inquiryId,
            lineItemId,
            requestDto
        );

        return ResponseEntity.status(HttpStatus.OK)
            .body(ResponseFactory.getSuccessJsonResult(response));
    }
}
