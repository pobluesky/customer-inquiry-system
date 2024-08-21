package com.pobluesky.backend.domain.answer.dto.request;

import com.pobluesky.backend.domain.inquiry.entity.Inquiry;
import com.pobluesky.backend.domain.question.entity.Question;
import com.pobluesky.backend.domain.answer.entity.Answer;
import com.pobluesky.backend.domain.user.entity.Customer;

public record AnswerCreateRequestDTO(
    String answerTitle,
    String answerContents,
//    String answerFiles
    String answerFileName,
    String answerFilePath
) {
    public Answer toAnswerEntity(Question question, Inquiry inquiry, Customer customer) {
        return Answer.builder()
            .question(question)
            .inquiry(inquiry)
            .customer(customer)
            .answerTitle(answerTitle)
            .answerContents(answerContents)
//            .answerFiles(answerFiles)
            .answerFileName(answerFileName)
            .answerFilePath(answerFilePath)
            .build();
    }
}
