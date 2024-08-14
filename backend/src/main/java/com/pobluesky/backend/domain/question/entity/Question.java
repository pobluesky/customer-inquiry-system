package com.pobluesky.backend.domain.question.entity;

import com.pobluesky.backend.domain.answer.entity.Answer;
import com.pobluesky.backend.domain.inquiry.entity.Inquiry;
import com.pobluesky.backend.domain.user.entity.Customer;
import com.pobluesky.backend.global.BaseEntity;

import jakarta.persistence.*;

import lombok.*;

@Getter
@Setter
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
    @JoinColumn(name = "user_id")
    private Customer customer; // 고객사 번호

    private String title; // 제목

    @Column(nullable = false, columnDefinition = "TEXT")
    private String contents; // 내용

    @Column(columnDefinition = "TEXT")
    private String files; // 첨부파일

    @Enumerated(EnumType.STRING)
    private QuestionStatus status;

    @Enumerated(EnumType.STRING)
    private QuestionType type;

    @OneToOne(mappedBy = "question", fetch = FetchType.LAZY)
    @JoinColumn(name = "question_id")
    private Answer answer;

    @Builder
    private Question(
        Inquiry inquiry,
        Customer customer,
        String title,
        String contents,
        String files,
        QuestionStatus status,
        QuestionType type
    ) {
        this.inquiry = inquiry;
        this.customer = customer;
        this.title = title;
        this.contents = contents;
        this.files = files;
        this.status = status;
        this.type = type;
    }

    public void updateQuestion(
        QuestionStatus status
    ) {
        this.status = status;
    }
}
