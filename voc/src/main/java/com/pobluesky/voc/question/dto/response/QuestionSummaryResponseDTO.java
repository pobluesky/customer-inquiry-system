package com.pobluesky.voc.question.dto.response;


import com.pobluesky.voc.feign.Customer;
import com.pobluesky.voc.feign.UserClient;
import com.pobluesky.voc.question.entity.Question;
import com.pobluesky.voc.question.entity.QuestionStatus;
import com.pobluesky.voc.question.entity.QuestionType;
import java.time.LocalDateTime;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@Builder
public class QuestionSummaryResponseDTO {

    private Long questionId;
    private String title;
    private QuestionStatus status;
    private QuestionType type;
    private String contents;
    private Long customerId;
    private String customerName;  // 수정 가능
    private LocalDateTime questionCreatedAt;
    private LocalDateTime answerCreatedAt;

    public static QuestionSummaryResponseDTO from(Question question, UserClient userClient) {
        Customer customer = userClient.getCustomerByIdWithoutToken(question.getCustomerId()).getData();

        return QuestionSummaryResponseDTO.builder()
            .questionId(question.getQuestionId())
            .title(question.getTitle())
            .status(question.getStatus())
            .type(question.getType())
            .contents(question.getContents())
            .customerId(customer.getUserId())
            .customerName(customer.getName())
            .questionCreatedAt(question.getCreatedDate())
            .answerCreatedAt(question.getAnswer() != null ? question.getAnswer().getCreatedDate() : null)
            .build();
    }

}