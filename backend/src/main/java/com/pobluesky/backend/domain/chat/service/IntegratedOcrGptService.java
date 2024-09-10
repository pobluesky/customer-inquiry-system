package com.pobluesky.backend.domain.chat.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.pobluesky.backend.domain.chat.dto.request.ChatRequestMsgDto;
import com.pobluesky.backend.domain.chat.dto.response.ChatCompletionDto;
import com.pobluesky.backend.domain.inquiry.entity.ProductType;
import com.pobluesky.backend.domain.user.entity.Customer;
import com.pobluesky.backend.domain.user.repository.CustomerRepository;
import com.pobluesky.backend.domain.user.service.SignService;
import com.pobluesky.backend.global.error.CommonException;
import com.pobluesky.backend.global.error.ErrorCode;
import com.pobluesky.backend.global.util.ResponseFactory;
import com.pobluesky.backend.global.util.model.JsonResult;
import java.util.Collections;
import java.util.Objects;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;


@Service
@RequiredArgsConstructor
public class IntegratedOcrGptService {

    private final OcrService ocrService;
    private final GptPromptService gptPromptService;
    private final SignService signService;
    private final CustomerRepository customerRepository;
    private final ObjectMapper objectMapper;

    @Value("${openai.model}")
    private String openAiModel;

    public JsonResult<?> processFileAndStructureData(
        String token,
        Long userId,
        MultipartFile file,
        ProductType productType
    ) {
        Customer customer = validateCustomer(token);

        if (!Objects.equals(customer.getUserId(), userId)) {
            throw new CommonException(ErrorCode.USER_NOT_MATCHED);
        }

        List<String> textResults = ocrService.processPdfAndDetectText(file);

        Map<String, Object> structuredData = getStructuredDataFromGPT(textResults, productType);

        return ResponseFactory.getSuccessJsonResult(structuredData);
    }

    private Map<String, Object> getStructuredDataFromGPT(List<String> textResults, ProductType productType) {
        String prompt = preparePromptByProductType(textResults, productType);

        List<ChatRequestMsgDto> messages = new ArrayList<>();
        messages.add(new ChatRequestMsgDto("system", "You are a helpful assistant that converts unstructured text to structured JSON."));
        messages.add(new ChatRequestMsgDto("user", prompt));

        ChatCompletionDto chatCompletionDto = new ChatCompletionDto(openAiModel, messages);
        String gptResponse = gptPromptService.prompt(chatCompletionDto);

        return extractJsonFromChatGptResponse(gptResponse);
    }

    private String preparePromptByProductType(List<String> textResults, ProductType productType) {
        StringBuilder promptBuilder = new StringBuilder();
        promptBuilder.append("Convert the following text data into a structured JSON format for ").append(productType);

        for (String text : textResults) {
            promptBuilder.append(text).append("\n");
        }
        promptBuilder.append("Provide only the raw JSON, without any explanatory text or code formatting.");
        promptBuilder.append("{\n  \"lineItemResponseDTOs\": [\n    {\n");

        switch (productType) {
            case CAR:
                promptBuilder.append(
                        "      \"lab\": \"[Lab Name: The name of the laboratory or testing facility]\",\n" +
                        "      \"kind\": \"[Vehicle Type: The type of vehicle, e.g., 'Sedan', 'SUV', 'Truck']\",\n" +
                        "      \"standardOrg\": \"[Standard Organization: The organization setting the standards, e.g., 'ASTM', 'ANSI']\",\n" +
                        "      \"salesVehicleName\": \"[Vehicle Name: The commercial name of the vehicle model]\",\n" +
                        "      \"partName\": \"[Part Name: The specific name of the automotive part]\",\n" +
                        "      \"ixPlate\": \"[Plate Type: The type of plate used, e.g., 'FLOOR_PANEL', 'DASH_PANEL']\",\n" +
                        "      \"thickness\": \"[Thickness in mm: The thickness of the part or material]\",\n" +
                        "      \"width\": \"[Width in mm: The width of the part or material]\",\n" +
                        "      \"quantity\": [Quantity as a number: The number of parts or units ordered],\n" +
                        "      \"expectedDeliveryDate\": \"[Expected Deadline in yyyy-MM-dd format]\",\n" +
                        "      \"transportationDestination\": \"[Destination: The final delivery location for the parts]\",\n" +
                        "      \"orderEdge\": \"[Edge Type: The type of edge treatment required]\",\n" +
                        "      \"tolerance\": \"[Tolerance in ±mm format: The acceptable deviation from the specified dimensions]\",\n" +
                        "      \"annualCost\": \"[Annual Cost in $XX,XXX format: The estimated yearly cost for the parts]\"\n"
                );
                promptBuilder.append("\nPlease adhere to the following guidelines:\n");
                promptBuilder.append("1. For CAR type, the above JSON structure represents a single complete data set.\n");
                promptBuilder.append("2. Each object in the lineItemResponseDTOs array MUST contain ALL fields listed above, even if the value is empty or null. This is crucial for maintaining a consistent data structure.\n");
                promptBuilder.append("3. Always use the exact numbers from the original data.\n");
                promptBuilder.append("4. Each object in the lineItemResponseDTOs array should contain all fields listed above, representing one complete data set.\n");
                promptBuilder.append("5. Ensure all relevant information from the input text is included across all objects in the JSON structure.\n");
                promptBuilder.append("6. For 'ixPlate', use only the following enum values: DASH_PANEL, FLOOR_PANEL, DOOR_PANEL, TRUNK_LID. Replace any spaces with an underscore (_).\n");
                promptBuilder.append("7. For 'kind', use only the following enum values: SEDAN, SUV, TRUCK.\n");
                promptBuilder.append("8. For 'lab', use only the following enum values: GWANGYANG, POHANG.\n");
                promptBuilder.append("9. For 'standardOrg', use only the following enum values: ASTM, ANSI.\n");
                promptBuilder.append("10. Keep all other fields as they appear in the input, without any modifications.\n");
                promptBuilder.append("11. If a field is missing in the input, include it in the JSON object but leave its value empty.\n");
                break;
            case COLD_ROLLED:
                promptBuilder.append(
                        "      \"kind\": \"[COLD ROLLED Type: The type of product, such as 'CR' or 'CRC']\",\n" +
                        "      \"inqName\": \"[Inquiry Name: The name or identifier of the product, such as 'JS_SI123']\",\n" +
                        "      \"orderCategory\": \"[Order Category: The intended use of the product, such as 'Pipe Material', 'Automotive Parts']\",\n" +
                        "      \"thickness\": \"[Thickness in mm: The thickness of the part or material, e.g., '2mm']\",\n" +
                        "      \"width\": \"[Width in mm: The width of the part or material, e.g., '1500 mm']\",\n" +
                        "      \"quantity\": [Quantity as a number: The number of items, e.g., 300],\n" +
                        "      \"expectedDeadline\": \"[Expected Deadline in yyyy-MM-dd format]\",\n" +
                        "      \"orderEdge\": \"[Edge Type: The edge type required for the order]\",\n" +
                        "      \"inDiameter\": \"[Inner Diameter in mm: The inner diameter of the product]\",\n" +
                        "      \"outDiameter\": \"[Outer Diameter in mm: The outer diameter of the product]\",\n" +
                        "      \"sleeveThickness\": \"[Sleeve Thickness in mm: The thickness of the sleeve]\",\n" +
                        "      \"tensileStrength\": \"[Tensile Strength in MPa: The tensile strength of the material]\",\n" +
                        "      \"elongationRatio\": \"[Elongation Ratio in %: The elongation ratio of the material]\",\n" +
                        "      \"hardness\": \"[Hardness in HV: The hardness of the material]\"\n"
                );
                promptBuilder.append("\nPlease adhere to the following guidelines:\n");
                promptBuilder.append("1. For COLD_ROLLED type, the above JSON structure represents a single complete data set.\n");
                promptBuilder.append("2. Always use the exact numbers from the original data.");
                promptBuilder.append("3. Each object in the lineItemResponseDTOs array should contain all fields listed above, representing one complete data set.\n");
                promptBuilder.append("4. Ensure all relevant information from the input text is included across all objects in the JSON structure.\n");
                break;
            case HOT_ROLLED:
                promptBuilder.append(
                        "      \"kind\": \"[HOT_ROLLED Type: The type of product, such as 'HR' or 'HRC' or 'HRPO']\",\n" +
                        "      \"inqName\": \"[Inquiry Name: The name or identifier of the product, such as 'JS_SI123']\",\n" +
                        "      \"orderCategory\": \"[Order Category: The intended use of the product]\",\n" +
                        "      \"thickness\": \"[Thickness in mm: The thickness of the part or material, e.g., '2mm']\",\n" +
                        "      \"width\": \"[Width in mm: The width of the part or material, e.g., '1500 mm']\",\n" +
                        "      \"hardness\": \"[Hardness in HV format]\",\n" +
                        "      \"flatness\": [Flatness],\n" +
                        "      \"orderEdge\": \"[Edge Type: The edge type required for the order]\",\n" +
                        "      \"quantity\": [Quantity as a number],\n" +
                        "      \"yieldingPoint\": \"[Yielding Point in MPa format]\",\n" +
                        "      \"tensileStrength\": \"[Tensile Strength in MPa format]\",\n" +
                        "      \"elongationRatio\": \"[Elongation Ratio in % format]\",\n" +
                        "      \"camber\": \"[Camber in mm format]\",\n" +
                        "      \"annualCost\": \"[Annual Cost in $XX,XXX format]\"\n"
                );
                promptBuilder.append("\nPlease adhere to the following guidelines:\n");
                promptBuilder.append("1. For HOT_ROLLED type, the above JSON structure represents a single complete data set.\n");
                promptBuilder.append("2. Always use the exact numbers from the original data.");
                promptBuilder.append("3. Each object in the lineItemResponseDTOs array should contain all fields listed above, representing one complete data set.\n");
                promptBuilder.append("4. Ensure all relevant information from the input text is included across all objects in the JSON structure.\n");
                break;
            case THICK_PLATE:
                promptBuilder.append(
                        "      \"orderPurpose\": \"[Extract from 일반사항]\",\n" +
                        "      \"orderInfo\": \"[Extract from 주문정보]\",\n" +
                        "      \"ladleIngredient\": \"[Extract from 성분(ladle)]\",\n" +
                        "      \"productIngredient\": \"[Extract from 성분(product)]\",\n" +
                        "      \"seal\": \"[Extract from 인장, format as 'X MPa ~ Y MPa']\",\n" +
                        "      \"grainSizeAnalysis\": [Boolean],\n" +
                        "      \"show\": \"[Extract from 충격, e.g. '27 J @ -20°C']\",\n" +
                        "      \"extraShow\": \"[Extract from 추가 충격, e.g. '27 J @ -20°C']\",\n" +
                        "      \"agingShow\": \"[Extract from 시효 충격, e.g. '27 J @ -20°C']\",\n" +
                        "      \"curve\": \"[Extract from 굴곡 in MPa]\",\n" +
                        "      \"additionalRequests\": \"[Additional Requests]\",\n" +
                        "      \"hardness\": \"[Hardness in HV format]\",\n" +
                        "      \"dropWeightTest\": [Boolean],\n" +
                        "      \"ultrasonicTransducer\": [Boolean]\n"
                );
                promptBuilder.append("\nPlease adhere to the following guidelines:\n");
                promptBuilder.append("1. For THICK_PLATE type, each field in a JSON object must contain only a single value, not a list or array of values.\n");
                promptBuilder.append("2. If multiple values exist for a field, create separate objects in the lineItemResponseDTOs array for each set of values.\n");
                promptBuilder.append("3. For the 'seal' field no matter what data format comes in, convert it to 'X MPa ~ Y MPa'.\n");
                promptBuilder.append("   a. Always use the exact numbers from the original data.\n");
                promptBuilder.append("4. Ensure all relevant information from the input text is included across all objects in the JSON structure.\n");
                promptBuilder.append("5. Do not make assumptions or inferences about missing data. Use only the information explicitly provided in the input.\n");
                promptBuilder.append("6. For the 'show', 'extraShow', and 'agingShow' fields:\n");
                promptBuilder.append("   a. If the data starts with 's', put it in the 'show' field.\n");
                promptBuilder.append("   b. If the data starts with 'es', put it in the 'extraShow' field.\n");
                promptBuilder.append("   c. If the data starts with 'as', put it in the 'agingShow' field.\n");
                promptBuilder.append("   d. Remove the 's', 'es', or 'as' prefix before putting the data in the respective field.\n");
                break;
            case WIRE_ROD:
                promptBuilder.append(
                        "      \"kind\": \"[WIRE_ROD Type: The type of product, such as 'SWRH' or 'SWRM' or 'SWRS']\",\n" +
                        "      \"inqName\": \"[Inquiry Name: The name or identifier of the product, such as 'JS_SI123']\",\n" +
                        "      \"orderCategory\": \"[Order Category: The intended use of the product]\",\n" +
                        "      \"diameter\": \"[Diameter in mm format]\",\n" +
                        "      \"quantity\": [Quantity as a number],\n" +
                        "      \"expectedDeadline\": \"[Expected Deadline in yyyy-MM-dd format]\",\n" +
                        "      \"initialQuantity\": [Initial Quantity as a number],\n" +
                        "      \"customerProcessing\": \"[Customer Processing]\",\n" +
                        "      \"finalUse\": \"[Final Use]\",\n" +
                        "      \"transportationDestination\": \"[Transportation Destination]\",\n" +
                        "      \"annualCost\": \"[Annual Cost in $XX,XXX format]\",\n" +
                        "      \"legalRegulatoryReview\": \"[Legal Regulatory Review]\",\n" +
                        "      \"legalRegulatoryReviewDetail\": \"[Legal Regulatory Review Detail]\",\n" +
                        "      \"finalCustomer\": \"[Final Customer]\"\n"
                );
                promptBuilder.append("\nPlease adhere to the following guidelines:\n");
                promptBuilder.append("1. For WIRE_ROD type, the above JSON structure represents a single complete data set.\n");
                promptBuilder.append("2. Always use the exact numbers from the original data.");
                promptBuilder.append("3. Each object in the lineItemResponseDTOs array should contain all fields listed above, representing one complete data set.\n");
                promptBuilder.append("4. Ensure all relevant information from the input text is included across all objects in the JSON structure.\n");
                break;
            default:
                throw new CommonException(ErrorCode.INQUIRY_INVALID_PRODUCTTYPE);
        }
        promptBuilder.append("    }\n  ]\n}\n\n");
        promptBuilder.append("Do not make assumptions or inferences about missing data. Use only the information explicitly provided in the input.\n");
        promptBuilder.append("For 'inqName', replace any spaces with an underscore (_).");
        promptBuilder.append("If a field is missing in a data set, include the field in the JSON object but leave its value empty.\n");
        promptBuilder.append("If multiple sets of data are provided, create separate objects in the lineItemResponseDTOs array for each complete set of values.\n");

        return promptBuilder.toString();
    }

    public Map<String, Object> extractJsonFromChatGptResponse(String chatGptResponse) {
        try {
            JsonNode rootNode = objectMapper.readTree(chatGptResponse);
            JsonNode contentNode = rootNode.path("choices")
                .path(0)
                .path("message")
                .path("content");

            if (contentNode.isMissingNode()) {
                return Collections.emptyMap();
            }
            return objectMapper.readValue(contentNode.asText(), new TypeReference<Map<String, Object>>() {});
        } catch (JsonProcessingException e) {
            throw new CommonException(ErrorCode.JSON_PROCESSING_ERROR);
        }
    }

    private Customer validateCustomer(String token) {
        Long userId = signService.parseToken(token);

        return customerRepository.findById(userId)
            .orElseThrow(() -> new CommonException(ErrorCode.USER_NOT_FOUND));
    }
}
