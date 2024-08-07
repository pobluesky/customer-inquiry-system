package com.pobluesky.backend.domain.voc.entity;

import com.pobluesky.backend.domain.inquiry.entity.Inquiry;
import com.pobluesky.backend.domain.user.entity.Customer;
import com.pobluesky.backend.global.BaseEntity;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
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
@Table(name = "question")
public class Question extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long questionId; // 질문 번호

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "inquiry_id")
    private Inquiry inquiry; // 문의 번호

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "customer_id")
    private Customer customer; // 고객사 번호

    private String title; // 제목

    @Column(nullable = false, columnDefinition = "TEXT")
    private String contents; // 내용

    @Column(columnDefinition = "TEXT")
    private String files; // 첨부파일

    @Enumerated(EnumType.STRING)
    private QuestionStatus status; // 질문 상태

    @Builder
    private Question(
        Inquiry inquiry,
        Customer customer,
        String title,
        String contents,
        String files,
        QuestionStatus status
    ) {
        this.inquiry = inquiry;
        this.customer = customer;
        this.title = title;
        this.contents = contents;
        this.files = files;
        this.status = status;
    }
    public void updateQuestion(
        String title,
        String contents,
        String files,
        QuestionStatus status
    ) {
        this.title = title;
        this.contents = contents;
        this.files = files;
        this.status = status;
    }
}
