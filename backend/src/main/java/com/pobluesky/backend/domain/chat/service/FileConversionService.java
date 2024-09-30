package com.pobluesky.backend.domain.chat.service;

import com.pobluesky.backend.global.error.CommonException;
import com.pobluesky.backend.global.error.ErrorCode;
import java.util.Collections;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.UUID;

@Service
public class FileConversionService {

    @Autowired
    private PdfConversionService pdfConversionService;

    @Autowired
    private ExcelConversionService excelConversionService;

    public List<String> convertFileToImages(MultipartFile file) {
        try {
            String uniqueId = generateUniqueId();
            String fileName = file.getOriginalFilename();
            String fileExtension = getFileExtension(fileName);

            switch (fileExtension.toLowerCase()) {
                case "pdf":
                    return pdfConversionService.convertPdfToImages(file.getInputStream(), uniqueId);
                case "xlsx":
                case "xls":
                    return Collections.singletonList(excelConversionService.convertExcelToImage(file.getInputStream(), uniqueId));
                default:
                    throw new CommonException(ErrorCode.UNSUPPORTED_FILE_TYPE);
            }
        } catch (Exception e) {
            e.printStackTrace();
            throw new CommonException(ErrorCode.FILE_CONVERSION_ERROR);
        }
    }

    private String generateUniqueId() {
        return UUID.randomUUID().toString();
    }

    private String getFileExtension(String fileName) {
        if (fileName == null) {
            throw new CommonException(ErrorCode.UNSUPPORTED_FILE_TYPE);
        }
        int lastIndexOf = fileName.lastIndexOf(".");
        if (lastIndexOf == -1) {
            throw new CommonException(ErrorCode.UNSUPPORTED_FILE_TYPE);
        }
        return fileName.substring(lastIndexOf + 1);
    }
}