package com.pobluesky.backend.domain.inquiry.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.pobluesky.backend.domain.inquiry.dto.request.ChatRequestMsgDto;
import com.pobluesky.backend.domain.inquiry.dto.response.ChatCompletionDto;
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
                    "      \"lab\": \"[Lab Name]\",\n" +
                        "      \"kind\": \"[Vehicle Type]\",\n" +
                        "      \"standardOrg\": \"[Standard Organization]\",\n" +
                        "      \"salesVehicleName\": \"[Vehicle Name]\",\n" +
                        "      \"partName\": \"[Part Name]\",\n" +
                        "      \"ixPlate\": \"[Plate Type]\",\n" +
                        "      \"thickness\": \"[Thickness in mm]\",\n" +
                        "      \"width\": \"[Width in mm]\",\n" +
                        "      \"quantity\": [Quantity as a number],\n" +
                        "      \"expectedDeliveryDate\": \"[Delivery Date in yyyy-MM-dd format]\",\n" +
                        "      \"transportationDestination\": \"[Destination]\",\n" +
                        "      \"edge\": \"[Edge Type]\",\n" +
                        "      \"tolerance\": \"[Tolerance in ±mm format]\",\n" +
                        "      \"annualCost\": \"[Annual Cost in $XX,XXX format]\"\n"
                );
                break;
            case COLD_ROLLED:
                promptBuilder.append(
                    "      \"kind\": \"[COLD ROLLED Type: The type of product, such as 'CR' or 'CRC']\",\n" +
                        "      \"inqName\": \"[Inquiry Name: The name or identifier of the product, such as 'JS_SI123']\",\n" +
                        "      \"orderCategory\": \"[Order Category: The intended use of the product, such as 'Pipe Material', 'Automotive Parts']\",\n" +
                        "      \"thickness\": \"[Thickness in mm: The thickness of the product, e.g., '2.5 mm']\",\n" +
                        "      \"width\": \"[Width in mm: The width of the product, e.g., '1500 mm']\",\n" +
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
                break;
            case HOT_ROLLED:
                promptBuilder.append(
                    "      \"kind\": \"[HOT ROLLED Type]\",\n" +
                        "      \"inqName\": \"[Inquiry Name: The name or identifier of the product, such as 'JS_SI123']\",\n" +
                        "      \"orderCategory\": \"[Order Category: The intended use of the product]\",\n" +
                        "      \"thickness\": \"[TThickness in mm format]\",\n" +
                        "      \"width\": \"[Width in mm format]\",\n" +
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
                break;
            case THICK_PLATE:
                promptBuilder.append(
                    "      \"generalDetails\": \"[Each General Details]\",\n" +
                        "      \"orderInfo\": \"[Each Order Info]\",\n" +
                        "      \"ladleIngredient\": \"[Ladle Ingredient]\",\n" +
                        "      \"productIngredient\": \"[Product Ingredient]\",\n" +
                        "      \"seal\": \"[Seal in MPa range]\",\n" +
                        "      \"grainSizeAnalysis\": [Boolean],\n" +
                        "      \"show\": \"[Show, e.g. '27 J @ -20°C']\",\n" +
                        "      \"extraShow\": \"[Extra Show, e.g. '27 J @ -20°C']\",\n" +
                        "      \"agingShow\": \"[Aging Show, e.g. '27 J @ -20°C']\",\n" +
                        "      \"curve\": \"[Curve in MPa format]\",\n" +
                        "      \"additionalRequests\": \"[Additional Requests]\",\n" +
                        "      \"hardness\": \"[Hardness in HV format]\",\n" +
                        "      \"dropWeightTest\": [Boolean],\n" +
                        "      \"ultrasonicTransducer\": [Boolean]\n"
                );
                break;
            case WIRE_ROD:
                promptBuilder.append(
                    "      \"kind\": \"[WIRE ROD Type]\",\n" +
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
                break;
            default:
                throw new CommonException(ErrorCode.INQUIRY_INVALID_PRODUCTTYPE);
        }
        promptBuilder.append("    }\n  ]\n}\n\n");
        promptBuilder.append("Ensure all relevant information from the input text is included in the JSON structure.");
        promptBuilder.append("If there are multiple line items, ensure each is represented as a separate object in the lineItemResponseDTOs array.");
        promptBuilder.append("For 'inqName', replace any spaces with an underscore (_).");

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
