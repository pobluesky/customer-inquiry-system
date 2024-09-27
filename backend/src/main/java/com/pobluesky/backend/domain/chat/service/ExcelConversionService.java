package com.pobluesky.backend.domain.chat.service;

import com.google.cloud.storage.BlobInfo;
import com.google.cloud.storage.Storage;
import com.google.cloud.storage.StorageOptions;
import java.awt.Color;
import java.io.ByteArrayOutputStream;
import java.text.DecimalFormat;
import java.text.SimpleDateFormat;
import org.apache.poi.ss.usermodel.*;
import java.awt.Font;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import javax.imageio.ImageIO;
import java.awt.*;
import java.awt.image.BufferedImage;

import java.io.InputStream;

@Service
public class ExcelConversionService {

    private final Storage storage;

    @Value("${cloud.gcp.storage.bucket.name}")
    private String bucketName;

    public ExcelConversionService() {
        this.storage = StorageOptions.getDefaultInstance().getService();
    }

    public String convertExcelToImage(InputStream inputStream, String uniqueId) throws Exception {
        try (Workbook workbook = new XSSFWorkbook(inputStream)) {
            Sheet sheet = workbook.getSheetAt(0); // 첫 번째 시트만 처리
            BufferedImage image = convertSheetToImage(sheet);
            return uploadToGcs(image, uniqueId);
        }
    }

    private BufferedImage convertSheetToImage(Sheet sheet) {
        int rowCount = sheet.getPhysicalNumberOfRows();
        int columnCount = sheet.getRow(0).getPhysicalNumberOfCells();

        int cellWidth = 200;
        int cellHeight = 30;
        int imageWidth = columnCount * cellWidth;
        int imageHeight = rowCount * cellHeight;

        BufferedImage image = new BufferedImage(imageWidth, imageHeight, BufferedImage.TYPE_INT_RGB);
        Graphics2D g2d = image.createGraphics();
        g2d.setColor(Color.WHITE);
        g2d.fillRect(0, 0, imageWidth, imageHeight);

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
        return image;
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

    private String uploadToGcs(BufferedImage image, String uniqueId) throws Exception {
        ByteArrayOutputStream os = new ByteArrayOutputStream();
        ImageIO.write(image, "png", os);
        byte[] imageBytes = os.toByteArray();

        String gcsPath = String.format("excel_images/%s/excel.png", uniqueId);
        BlobInfo blobInfo = BlobInfo.newBuilder(bucketName, gcsPath).setContentType("image/png").build();
        storage.create(blobInfo, imageBytes);

        return String.format("gs://%s/%s", bucketName, gcsPath);
    }
}
