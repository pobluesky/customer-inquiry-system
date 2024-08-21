package com.pobluesky.backend.domain.quality.service;

import com.pobluesky.backend.domain.file.dto.FileInfo;
import com.pobluesky.backend.domain.file.service.FileService;
import com.pobluesky.backend.domain.inquiry.entity.Inquiry;
import com.pobluesky.backend.domain.inquiry.repository.InquiryRepository;
import com.pobluesky.backend.domain.quality.dto.request.QualityCreateRequestDTO;
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
import org.springframework.web.multipart.MultipartFile;

@Service
@Slf4j
@RequiredArgsConstructor
public class QualityService {

    private final SignService signService;

    private final QualityRepository qualityRepository;

    private final InquiryRepository inquiryRepository;

    private final ManagerRepository managerRepository;

    private final FileService fileService;

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
        MultipartFile file,
        Long inquiryId
    ) {
        Long userId = signService.parseToken(token);

        Manager manager = managerRepository.findById(userId)
            .orElseThrow(() -> new CommonException(ErrorCode.USER_NOT_FOUND));

        if(manager.getRole() != UserRole.QUALITY)
            throw new CommonException(ErrorCode.UNAUTHORIZED_USER_QUALITY);

        Inquiry inquiry = inquiryRepository.findById(inquiryId)
            .orElseThrow(() -> new CommonException(ErrorCode.INQUIRY_NOT_FOUND));

        if(qualityRepository.existsByInquiry(inquiry)) {
            throw new CommonException(ErrorCode.QUALITY_ALREADY_EXISTS);
        }

        String filePath = null;
        String fileName = null;
        if (file != null) {
            FileInfo fileInfo = fileService.uploadFile(file);
            filePath = fileInfo.getStoredFilePath();
            fileName = fileInfo.getOriginName();
        }

        Quality quality = dto.toQualityEntity(inquiry,filePath,fileName);
        Quality savedQuality = qualityRepository.save(quality);

        return QualityResponseDTO.from(savedQuality);
    }

    @Transactional(readOnly = true)
    public QualityResponseDTO getReviewByInquiry(String token, Long inquiryId) {
        Long userId = signService.parseToken(token);

        managerRepository.findById(userId)
            .orElseThrow(() -> new CommonException(ErrorCode.USER_NOT_FOUND));

        Inquiry inquiry = inquiryRepository.findById(inquiryId)
            .orElseThrow(() -> new CommonException(ErrorCode.INQUIRY_NOT_FOUND));

        Quality quality = qualityRepository.findByInquiry(inquiry)
            .orElseThrow(() -> new CommonException(ErrorCode.QUALITY_NOT_FOUND));

        return QualityResponseDTO.from(quality);
    }
}
