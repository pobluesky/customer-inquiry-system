package com.pobluesky.quality.service;

import com.pobluesky.config.global.error.CommonException;
import com.pobluesky.config.global.error.ErrorCode;
import com.pobluesky.config.global.security.UserRole;
import com.pobluesky.quality.dto.request.QualityCreateRequestDTO;
import com.pobluesky.quality.dto.response.QualityResponseDTO;
import com.pobluesky.quality.entity.Quality;
import com.pobluesky.quality.feign.FileClient;
import com.pobluesky.quality.feign.FileInfo;
import com.pobluesky.quality.feign.Inquiry;
import com.pobluesky.quality.feign.InquiryClient;
import com.pobluesky.quality.feign.Manager;
import com.pobluesky.quality.feign.UserClient;
import com.pobluesky.quality.repository.QualityRepository;
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

    private final QualityRepository qualityRepository;

    private final InquiryClient inquiryClient;

    private final UserClient userClient;

    private final FileClient fileClient;

    @Transactional(readOnly = true)
    public List<QualityResponseDTO> getAllQualities(String token) {
        Long userId = userClient.parseToken(token);

        Manager manager = userClient.getManagerById(userId);
        if (manager == null) {
            throw new CommonException(ErrorCode.USER_NOT_FOUND);
        }

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
        Long userId = userClient.parseToken(token);

        Manager manager = userClient.getManagerById(userId);
        if (manager == null) {
            throw new CommonException(ErrorCode.USER_NOT_FOUND);
        }

        if(!UserRole.QUALITY.name().equals(manager.getRole()))
            throw new CommonException(ErrorCode.UNAUTHORIZED_USER_QUALITY);

        Inquiry inquiry = inquiryClient.getInquiryById(inquiryId);
        if(inquiry == null){
            throw new CommonException(ErrorCode.INQUIRY_NOT_FOUND);
        }

        if(qualityRepository.existsByInquiryId(inquiryId)) {
            throw new CommonException(ErrorCode.QUALITY_ALREADY_EXISTS);
        }

        String fileName = null;
        String filePath = null;

        if (file != null) {
            FileInfo fileInfo = fileClient.uploadFile(file);
            fileName = fileInfo.getOriginName();
            filePath = fileInfo.getStoredFilePath();
        }

        Quality quality = dto.toQualityEntity(inquiryId, fileName, filePath);
        Quality savedQuality = qualityRepository.save(quality);

        return QualityResponseDTO.from(savedQuality);
    }

    @Transactional(readOnly = true)
    public QualityResponseDTO getReviewByInquiry(String token, Long inquiryId) {
        Long userId = userClient.parseToken(token);

        Manager manager = userClient.getManagerById(userId);
        if (manager == null) {
            throw new CommonException(ErrorCode.USER_NOT_FOUND);
        }

        Inquiry inquiry = inquiryClient.getInquiryById(inquiryId);
        if(inquiry == null){
            throw new CommonException(ErrorCode.INQUIRY_NOT_FOUND);
        }

        Quality quality = qualityRepository.findByInquiryId(inquiryId)
            .orElseThrow(() -> new CommonException(ErrorCode.QUALITY_NOT_FOUND));

        return QualityResponseDTO.from(quality);
    }
}
