package com.pobluesky.backend.domain.quality.service;

import com.pobluesky.backend.domain.inquiry.entity.Inquiry;
import com.pobluesky.backend.domain.inquiry.repository.InquiryRepository;
import com.pobluesky.backend.domain.quality.dto.request.QualityCreateRequestDTO;
import com.pobluesky.backend.domain.quality.dto.response.QualityResponseDTO;
import com.pobluesky.backend.domain.quality.entity.Quality;
import com.pobluesky.backend.domain.quality.repository.QualityRepository;
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
public class QualityService {
    private final QualityRepository qualityRepository;
    private final InquiryRepository inquiryRepository;

    @Transactional(readOnly = true)
    public List<QualityResponseDTO> getAllQualities() {
        List<Quality> qualities = qualityRepository.findAll();

        return qualities.stream()
            .map(QualityResponseDTO::from)
            .collect(Collectors.toList());
    }

    @Transactional
    public QualityResponseDTO createQuality(QualityCreateRequestDTO dto, Long inquiryNo) {
        Inquiry inquiry = inquiryRepository.findById(inquiryNo)
            .orElseThrow(() -> new CommonException(ErrorCode.QUALITY_NOT_FOUND)); // inquiry not found 로 변경

        Quality quality = dto.toQualityEntity(inquiry);
        Quality savedQuality = qualityRepository.save(quality);

        return QualityResponseDTO.from(savedQuality);
    }

    @Transactional
    public QualityResponseDTO updateQualityByNo(Long qualityNo, QualityCreateRequestDTO qualityUpdateRequestDTO) {
        Quality quality = (Quality) qualityRepository.findById(qualityNo)
           .orElseThrow(() -> new CommonException(ErrorCode.QUALITY_NOT_FOUND));

        quality.updateQuality(
            qualityUpdateRequestDTO.qualityReviewInfo(),
            qualityUpdateRequestDTO.requireAddContents()
        );

        return QualityResponseDTO.from(quality);
    }

    @Transactional
    public void deleteQualityByNo(Long qualityNo) {
        qualityRepository.deleteById(qualityNo);
    }
}
