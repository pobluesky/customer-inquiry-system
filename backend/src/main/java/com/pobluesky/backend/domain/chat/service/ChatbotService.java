package com.pobluesky.backend.domain.chat.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.pobluesky.backend.domain.chat.dto.request.ChatRequestMsgDto;
import com.pobluesky.backend.domain.chat.dto.response.ChatCompletionDto;
import com.pobluesky.backend.domain.chat.entity.type.ChatInquirySubType;

import com.pobluesky.backend.domain.chat.entity.type.ChatInquiryType;
import com.pobluesky.backend.domain.user.entity.Customer;
import com.pobluesky.backend.domain.user.repository.CustomerRepository;
import com.pobluesky.backend.domain.user.service.SignService;
import com.pobluesky.backend.global.error.CommonException;
import com.pobluesky.backend.global.error.ErrorCode;
import com.pobluesky.backend.global.util.ResponseFactory;
import com.pobluesky.backend.global.util.model.JsonResult;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@Slf4j
public class ChatbotService {
    private final GptPromptService gptPromptService;
    private final SignService signService;
    private final CustomerRepository customerRepository;
    private final ObjectMapper objectMapper;

    @Value("${openai.model}")
    private String openAiModel;

    public JsonResult<?> processChatMessage(String token, Long userId, String userMessage) {
        Customer customer = validateCustomer(token);
        if (!Objects.equals(customer.getUserId(), userId)) {
            throw new CommonException(ErrorCode.USER_NOT_MATCHED);
        }
        String content = handleUserInquiry(userMessage);
        return ResponseFactory.getSuccessJsonResult(content);
    }

    private String handleUserInquiry(String userMessage) {
        ChatInquiryType inquiryType = determineInquiryType(userMessage);
        ChatInquirySubType inquirySubType = determineInquirySubType(userMessage, inquiryType);

        log.info("Inquiry Type: {}", inquiryType);
        log.info("Inquiry Sub-Type: {}", inquirySubType);

        String response = switch (inquiryType) {
            case ORDER -> handleOrderInquiry(inquirySubType, userMessage);
            case PRODUCT -> handleProductInquiry(inquirySubType, userMessage);
            case REGISTRATION -> handleRegistrationInquiry(inquirySubType, userMessage);
            case SITE_USAGE -> handleSiteUsageInquiry(inquirySubType, userMessage);
            case OTHER -> handleOtherInquiry(userMessage);
        };

        if (response == null) {
            return getGptResponseForInquiry(userMessage, inquiryType, inquirySubType);
        }
        return response;
    }
    private String handleOrderInquiry(ChatInquirySubType subType, String userMessage) {
        return switch (subType) {
            case SUBMISSION -> "inquiry 등록일 기준 최소 2주 예상됩니다.";
            case MODIFICATION -> "주문 변경은 '문의 제출' 단계에서만 가능합니다. 주문 프로세스는 문의 제출 -> 문의 접수 -> 1차검토 완료 -> 품질검토 요청 -> 품질검토 접수 -> 품질검토 완료 -> 최종 검토 순서로 진행됩니다. 내 문의 상태 확인은 'inquiry 조회'에서 확인 가능합니다.";
            case SHIPPING -> "주문 배송지 변경은 '문의 제출' 단계에서만 가능합니다. 주문 프로세스는 문의 제출 -> 문의 접수 -> 1차검토 완료 -> 품질검토 요청 -> 품질검토 접수 -> 품질검토 완료 -> 최종 검토 순서로 진행됩니다. 내 문의 상태 확인은 'inquiry 조회'에서 확인 가능합니다.";
            case PROCESS -> "주문 프로세스는 문의 제출 -> 문의 접수 -> 1차검토 완료 -> 품질검토 요청 -> 품질검토 접수 -> 품질검토 완료 -> 최종 검토 순서로 진행됩니다. 내 문의 상태 확인은 'inquiry 조회'에서 확인 가능합니다.";
            default -> null;
        };
    }

    private String handleProductInquiry(ChatInquirySubType subType, String userMessage) {
        return switch (subType) {
            case LINE_ITEM -> "제품 유형에 따라 등록되어야 할 라인아이템 내역이 달라집니다. 자세한 내용은 inquiry 등록 화면에서 확인 가능합니다.";
            case FILE_FORMAT -> "현재 라인아이템 등록 간소화 과정은 PDF 파일 형식만 지원 가능합니다. 다른 파일 형식의 업로드를 원하시면 VoC 문의로 남겨주세요.";
            case ESTIMATE -> "견적 문의는 품질 검토 단계가 필요없는 경우이며, 견적&품질 문의는 품질 담당자에 의한 품질 검토 단계가 필요한 문의 유형입니다. 고객님이 작성하신 inquiry 문의 유형은 담당자의 검토하에 변경될 수 있습니다.";
            case OFFERSHEET -> "offersheet 내역에 대한 다운로드는 inquiry > inquiry 조회 > 다운로드할 inquiry 선택 > offersheet 내역 > 엑셀로 추출 방법으로 가능합니다.";
            default -> null;
        };
    }

    private String handleRegistrationInquiry(ChatInquirySubType subType, String userMessage) {
        return switch (subType) {
            case METHOD -> "localshot:9090/inq-list/customer 접속 후 > 로그인 > inquiry 등록 단계를 통해 제품 유형별 맞춤 주문이 가능합니다.";
            case MODIFICATION -> "inquiry 수정/삭제는 '문의 제출' 단계에서만 가능합니다. 내 문의 상태 확인은 'inquiry 조회'에서 확인 가능합니다.";
            case CONTRACT -> "최종검토완료 이후, 고객님께 결과가 회신된 후 계약 협의가 진행됩니다. 이후 절차는 담당자가 추후 메일로 안내드립니다. 자세한 문의는 VoC inquiry 문의로 남겨주세요.";
            default -> null;
        };
    }

    private String handleSiteUsageInquiry(ChatInquirySubType subType, String userMessage) {
        if (subType == ChatInquirySubType.ACCOUNT_INFO) {
            return "홈페이지 상단 우측 프로필 선택 > 설정 > 변경하고 싶은 내용 수정 > 수정 완료";
        }
        return null;
    }

    private String handleOtherInquiry(String userMessage) {
        return "해당 질문은 챗봇 '차니'가 답변을 드릴 수 없으므로 VoC 문의하기를 이용해주세요.";
    }

    private ChatInquiryType determineInquiryType(String userMessage) {
        log.info("Received user message: {}", userMessage);
        if (userMessage.contains("주문")) return ChatInquiryType.ORDER;
        if (userMessage.contains("제품") || userMessage.contains("라인아이템")) return ChatInquiryType.PRODUCT;
        if (userMessage.contains("등록")) return ChatInquiryType.REGISTRATION;
        if (userMessage.contains("사이트") || userMessage.contains("마이페이지")) return ChatInquiryType.SITE_USAGE;
        return ChatInquiryType.OTHER;
    }

    private ChatInquirySubType determineInquirySubType(String userMessage, ChatInquiryType type) {
        return switch (type) {
            case ORDER -> {
                if (userMessage.contains("접수")) yield ChatInquirySubType.SUBMISSION;
                if (userMessage.contains("주문")) {
                    if(userMessage.contains("배송지")) {
                        yield ChatInquirySubType.SHIPPING;
                    } else if(userMessage.contains("변경") || userMessage.contains("수정")){
                        yield ChatInquirySubType.MODIFICATION;
                    }
                }
//                if (userMessage.contains("변경") || userMessage.contains("수정")) yield ChatInquirySubType.MODIFICATION;
//                if (userMessage.contains("배송지")) yield ChatInquirySubType.SHIPPING;
                if (userMessage.contains("프로세스") || userMessage.contains("절차")) yield ChatInquirySubType.PROCESS;
                yield ChatInquirySubType.OTHER;
            }
            case PRODUCT -> {
                // 우선순위가 높은 조건을 먼저 체크
                if (userMessage.contains("파일 형식") || userMessage.contains("파일") || userMessage.contains("형식") || userMessage.contains("등록 파일")) {
                    // "파일 형식"과 관련된 키워드가 포함된 경우
                    yield ChatInquirySubType.FILE_FORMAT;
                }
                if (userMessage.contains("라인아이템")) {
                    // "라인아이템"이 포함된 경우는 서브타입 확인
                    if (userMessage.contains("파일")) {
                        yield ChatInquirySubType.FILE_FORMAT; // 파일과 관련된 내용이 포함된 경우
                    } else {
                        yield ChatInquirySubType.LINE_ITEM; // 단순히 "라인아이템"만 포함된 경우
                    }
                }
                if (userMessage.contains("견적")) yield ChatInquirySubType.ESTIMATE;
                if (userMessage.contains("offersheet")) yield ChatInquirySubType.OFFERSHEET;
                yield ChatInquirySubType.OTHER;
            }
            case REGISTRATION -> {
                if (userMessage.contains("방법")) yield ChatInquirySubType.METHOD;
                if (userMessage.contains("수정") || userMessage.contains("삭제")) yield ChatInquirySubType.MODIFICATION;
                if (userMessage.contains("계약")) yield ChatInquirySubType.CONTRACT;
                yield ChatInquirySubType.OTHER;
            }
            case SITE_USAGE -> {
                if (userMessage.contains("전화번호") || userMessage.contains("비밀번호") || userMessage.contains("이메일")) {
                    yield ChatInquirySubType.ACCOUNT_INFO;
                }
                yield ChatInquirySubType.OTHER;
            }
            default -> ChatInquirySubType.OTHER;
        };
    }

    private String getGptResponseForInquiry(String userMessage, ChatInquiryType inquiryType, ChatInquirySubType inquirySubType) {
        List<ChatRequestMsgDto> messages = new ArrayList<>();

        String inquiryContext = generateInquiryContext(inquiryType, inquirySubType);

        messages.add(new ChatRequestMsgDto("system", "You are a helpful assistant. " + inquiryContext));
        messages.add(new ChatRequestMsgDto("user", userMessage));

        ChatCompletionDto chatCompletionDto = new ChatCompletionDto(openAiModel, messages);

        return extractContentFromGptResponse(gptPromptService.prompt(chatCompletionDto));
    }

    private String generateInquiryContext(ChatInquiryType inquiryType, ChatInquirySubType inquirySubType) {
        return "Provide a helpful response based on the customer's " + inquiryType + " inquiry, specifically about " + inquirySubType + ".";
    }

    private String extractContentFromGptResponse(String gptResponse) {
        try {
            JsonNode rootNode = objectMapper.readTree(gptResponse);

            JsonNode contentNode = rootNode
                .path("choices")
                .path(0)
                .path("message")
                .path("content");

            if (contentNode.isMissingNode()) {
                log.error("Unexpected GPT response structure: {}", gptResponse);
                throw new CommonException(ErrorCode.UNEXPECTED_GPT_RESPONSE);
            }

            return contentNode.asText();
        } catch (JsonProcessingException e) {
            log.error("Error processing GPT response: {}", gptResponse, e);
            throw new CommonException(ErrorCode.JSON_PROCESSING_ERROR);
        }
    }

    private Customer validateCustomer(String token) {
        Long userId = signService.parseToken(token);

        return customerRepository.findById(userId)
            .orElseThrow(() -> new CommonException(ErrorCode.USER_NOT_FOUND));
    }
}
