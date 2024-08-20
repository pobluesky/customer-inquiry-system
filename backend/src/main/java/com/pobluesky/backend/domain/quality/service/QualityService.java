package com.pobluesky.backend.domain.quality.service;

import com.pobluesky.backend.domain.inquiry.entity.Inquiry;
import com.pobluesky.backend.domain.inquiry.repository.InquiryRepository;
import com.pobluesky.backend.domain.quality.dto.request.QualityCreateRequestDTO;
import com.pobluesky.backend.domain.quality.dto.request.QualityUpdateRequestDTO;
import com.pobluesky.backend.domain.quality.dto.response.QualityResponseDTO;
import com.pobluesky.backend.domain.quality.entity.Quality;
import com.pobluesky.backend.domain.quality.repository.QualityRepository;
import com.pobluesky.backend.domain.user.entity.Manager;
import com.pobluesky.backend.domain.user.entity.UserRole;
import com.pobluesky.backend.domain.user.repository.ManagerRepository;
import com.pobluesky.backend.domain.user.service.SignService;
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

    private final SignService signService;

    private final QualityRepository qualityRepository;

    private final InquiryRepository inquiryRepository;

    private final ManagerRepository managerRepository;

    @Transactional(readOnly = true)
    public List<QualityResponseDTO> getAllQualities(String token) {
        Long userId = signService.parseToken(token);

        managerRepository.findById(userId)
            .orElseThrow(() -> new CommonException(ErrorCode.USER_NOT_FOUND));

        List<Quality> qualities = qualityRepository.findAll();

        return qualities.stream()
            .map(QualityResponseDTO::from)
            .collect(Collectors.toList());
    }

    @Transactional
    public QualityResponseDTO createQuality(
        String token,
        QualityCreateRequestDTO dto,
        Long inquiryId
    ) {
        Long userId = signService.parseToken(token);

        Manager manager = managerRepository.findById(userId)
            .orElseThrow(() -> new CommonException(ErrorCode.USER_NOT_FOUND));

        if(manager.getRole() != UserRole.QUALITY)
            throw new CommonException(ErrorCode.UNAUTHORIZED_USER_QUALITY);

        Inquiry inquiry = inquiryRepository.findById(inquiryId)
            .orElseThrow(() -> new CommonException(ErrorCode.INQUIRY_NOT_FOUND));

        Quality quality = dto.toQualityEntity(inquiry);
        Quality savedQuality = qualityRepository.save(quality);

        return QualityResponseDTO.from(savedQuality);
    }

    @Transactional
    public QualityResponseDTO updateQualityById(
        String token,
        Long qualityId,
        QualityUpdateRequestDTO qualityUpdateRequestDTO
    ) {
        Long userId = signService.parseToken(token);

        Manager manager = managerRepository.findById(userId)
            .orElseThrow(() -> new CommonException(ErrorCode.USER_NOT_FOUND));

        if(manager.getRole() != UserRole.QUALITY)
            throw new CommonException(ErrorCode.UNAUTHORIZED_USER_QUALITY);

        Quality quality = qualityRepository.findById(qualityId)
            .orElseThrow(() -> new CommonException(ErrorCode.QUALITY_NOT_FOUND));

        quality.updateQuality(
            qualityUpdateRequestDTO.qualityReviewInfo(),
            qualityUpdateRequestDTO.qualityComments()
        );

        return QualityResponseDTO.from(quality);
    }

    @Transactional
    public void deleteQualityById(String token, Long qualityId) {
        Long userId = signService.parseToken(token);

        Manager manager = managerRepository.findById(userId)
            .orElseThrow(() -> new CommonException(ErrorCode.USER_NOT_FOUND));

        if(manager.getRole() != UserRole.QUALITY)
            throw new CommonException(ErrorCode.UNAUTHORIZED_USER_QUALITY);

        qualityRepository.deleteById(qualityId);
    }
}
