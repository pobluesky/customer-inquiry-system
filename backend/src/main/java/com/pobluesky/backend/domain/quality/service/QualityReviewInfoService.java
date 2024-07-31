package com.pobluesky.backend.domain.quality.service;

import com.pobluesky.backend.domain.quality.dto.request.QualityReviewInfoCreateRequestDTO;
import com.pobluesky.backend.domain.quality.dto.request.QualityReviewInfoUpdateRequestDTO;
import com.pobluesky.backend.domain.quality.dto.response.QualityReviewInfoResponseDTO;
import com.pobluesky.backend.domain.quality.entity.QualityReviewInfo;
import com.pobluesky.backend.domain.quality.repository.QualityReviewInfoRepository;
import com.pobluesky.backend.global.error.CommonException;
import com.pobluesky.backend.global.error.ErrorCode;
import java.util.List;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Slf4j
@RequiredArgsConstructor
public class QualityReviewInfoService {
    private final QualityReviewInfoRepository qualityReviewInfoRepository;

    @Transactional(readOnly = true)
    public List<QualityReviewInfoResponseDTO> getAllQualityReviewInfos() {
        List<QualityReviewInfo> qualityReviewInfos = qualityReviewInfoRepository.findAll();

        return qualityReviewInfos.stream()
            .map(QualityReviewInfoResponseDTO::from).collect(
            Collectors.toList());
    }

    @Transactional
    public QualityReviewInfoResponseDTO createQualityReviewInfo(
        QualityReviewInfoCreateRequestDTO dto) {
        QualityReviewInfo qualityReviewInfo = dto.toQualityReviewInfoEntity();
        QualityReviewInfo savedQualityReviewInfo = qualityReviewInfoRepository.save(qualityReviewInfo);

        return QualityReviewInfoResponseDTO.from(savedQualityReviewInfo);
    }

    @Transactional
    public QualityReviewInfoResponseDTO updateQualityReviewInfoByNo(Long qualityReviewInfoNo, QualityReviewInfoUpdateRequestDTO qualityReviewInfoUpdateRequestDTO) {
        QualityReviewInfo qualityReviewInfo = (QualityReviewInfo) qualityReviewInfoRepository.findById(qualityReviewInfoNo)
           .orElseThrow(() -> new CommonException(ErrorCode.QUALITY_REVIEW_INFO_NOT_FOUND));

        qualityReviewInfo.updateQualityReviewInfo(
            qualityReviewInfoUpdateRequestDTO.finalResult(),
            qualityReviewInfoUpdateRequestDTO.finalResultDetails(),
            qualityReviewInfoUpdateRequestDTO.standard(),
            qualityReviewInfoUpdateRequestDTO.orderCategory(),
            qualityReviewInfoUpdateRequestDTO.coatingMetalQuantity(),
            qualityReviewInfoUpdateRequestDTO.coatingOilQuantity(),
            qualityReviewInfoUpdateRequestDTO.thicknessTolerance(),
            qualityReviewInfoUpdateRequestDTO.orderEdge(),
            qualityReviewInfoUpdateRequestDTO.customerQReq(),
            qualityReviewInfoUpdateRequestDTO.availableLab()
        );

        return QualityReviewInfoResponseDTO.from(qualityReviewInfo);
    }

    @Transactional
    public void deleteQualityReviewInfoByNo(String qualityReviewInfoNo) {
        deleteQualityReviewInfoByNo(Long.parseLong(qualityReviewInfoNo));
    }
    public void deleteQualityReviewInfoByNo(Long qualityReviewInfoNo) {
        qualityReviewInfoRepository.deleteById(qualityReviewInfoNo);
    }
}
