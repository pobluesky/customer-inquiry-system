package com.pobluesky.backend.domain.voc.entity;

import com.pobluesky.backend.domain.inquiry.entity.Inquiry;
import com.pobluesky.backend.domain.user.entity.Customer;
import com.pobluesky.backend.global.BaseEntity;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import jakarta.persistence.Column;
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

    @OneToOne
    @JoinColumn(name = "question_id")
    private Question question; // vos 번호

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "inquiry_id")
    private Inquiry inquiry; // 문의 번호

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "customer_id")
    private Customer customer; // 고객사 번호

    @Column(columnDefinition = "TEXT")
    private String answerContents; // 답변 내용

    @Builder
    private Answer(
        Question question,
        Inquiry inquiry,
        Customer customer,
        String answerContents
    ) {
        this.question = question;
        this.inquiry = inquiry;
        this.customer = customer;
        this.answerContents = answerContents;
    }
    public void updateAnswer(
        String answerContents
    ) {
        this.answerContents = answerContents;
    }
}
