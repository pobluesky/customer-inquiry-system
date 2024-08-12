package com.pobluesky.backend.domain.answer.entity;

import com.pobluesky.backend.domain.inquiry.entity.Inquiry;
import com.pobluesky.backend.domain.user.entity.Customer;
import com.pobluesky.backend.domain.question.entity.Question;
import com.pobluesky.backend.global.BaseEntity;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
@Getter
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "answer")
public class Answer extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long answerId; // 답변 번호

    @OneToOne(mappedBy = "question_id")
    @JoinColumn(name = "question_id")
    private Question question; // 질문 번호

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "inquiry_id", nullable = true)
    private Inquiry inquiry; // 문의 번호

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "customer_id")
    private Customer customer; // 고객사 번호

    @Column(columnDefinition = "TEXT")
    private String answerTitle; // 답변 제목

    @Column(columnDefinition = "TEXT")
    private String answerContents; // 답변 내용

    @Builder
    private Answer(
        Question question,
        Inquiry inquiry,
        Customer customer,
        String answerTitle,
        String answerContents
    ) {
        this.question = question;
        this.inquiry = inquiry;
        this.customer = customer;
        this.answerTitle = answerTitle;
        this.answerContents = answerContents;
    }
}
