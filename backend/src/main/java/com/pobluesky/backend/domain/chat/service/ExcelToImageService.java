package com.pobluesky.backend.domain.chat.service;

import java.awt.Color;
import java.text.DecimalFormat;
import java.text.SimpleDateFormat;
import org.apache.poi.ss.usermodel.*;
import java.awt.Font;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.imageio.ImageIO;
import java.awt.*;
import java.awt.image.BufferedImage;

import java.io.File;
import java.io.IOException;
import java.io.InputStream;

@Service
public class ExcelToImageService {

    public String convertExcelToImages(MultipartFile excelFile) {
        try (InputStream is = excelFile.getInputStream();
            Workbook workbook = new XSSFWorkbook(is)) {

            Sheet sheet = workbook.getSheetAt(0); // 첫 번째 시트부터 처리 필요
            int rowCount = sheet.getPhysicalNumberOfRows();
            int columnCount = sheet.getRow(0).getPhysicalNumberOfCells();

            int cellWidth = 200;
            int cellHeight = 30;
            // 이미지 크기를 설정
            int imageWidth = columnCount * cellWidth;
            int imageHeight = rowCount * cellHeight;

            BufferedImage image = new BufferedImage(imageWidth, imageHeight, BufferedImage.TYPE_INT_RGB);
            Graphics2D g2d = image.createGraphics();
            g2d.setColor(Color.WHITE);
            g2d.fillRect(0, 0, imageWidth, imageHeight);

            // 엑셀의 각 셀 내용을 이미지에 그리기
            g2d.setColor(Color.BLACK);
            Font font = new Font("Arial", Font.PLAIN, 14);
            g2d.setFont(font);

            for (int rowIndex = 0; rowIndex < rowCount; rowIndex++) {
                Row row = sheet.getRow(rowIndex);
                if (row != null) {
                    for (int colIndex = 0; colIndex < columnCount; colIndex++) {
                        Cell cell = row.getCell(colIndex);
                        String cellValue = getCellValueAsString(cell);
                        g2d.drawString(cellValue, colIndex * cellWidth + 10, rowIndex * cellHeight + 20);
                    }
                }
            }

            g2d.dispose();

            // 이미지 to 파일로 저장
            String outputPath = "output_image.png";
            File outputFile = new File(outputPath);
            ImageIO.write(image, "png", outputFile);

            return outputPath; // 저장된 이미지 경로 반환

        } catch (IOException e) {
            throw new RuntimeException("엑셀 파일 변환 중 오류 발생", e);
        }
    }

    private String getCellValueAsString(Cell cell) {
        if (cell == null) {
            return "";
        }

        switch (cell.getCellType()) {
            case STRING:
                return cell.getStringCellValue();
            case NUMERIC:
                if (DateUtil.isCellDateFormatted(cell)) {
                    SimpleDateFormat date = new SimpleDateFormat("yyyy-MM-dd");
                    return date.format(cell.getDateCellValue());
                } else {
                    return formatNumericCell(cell);
                }
            case BOOLEAN:
                return String.valueOf(cell.getBooleanCellValue());
            default:
                return "";
        }
    }

    private String formatNumericCell(Cell cell) {
        CellStyle style = cell.getCellStyle();
        String formatString = style.getDataFormatString();
        double value = cell.getNumericCellValue();

        if (formatString.contains("$") || formatString.contains("￦")) {
            // 통화 형식
            DecimalFormat df = new DecimalFormat("#,##0");
            String formattedValue = df.format(value);
            String currencySymbol = formatString.contains("￦") ? "￦" : "$";
            return currencySymbol + formattedValue;
        } else if(formatString.contains("%")) {
            // 백분율 형식 (= 열연 타입)
            DecimalFormat df = new DecimalFormat("#0.##");
            return df.format(value * 100) + "%";
        } else {
            return value == Math.floor(value) ? String.format("%.0f", value)
                : String.valueOf(value);
        }
    }
}
