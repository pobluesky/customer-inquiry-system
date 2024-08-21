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

    @OneToOne
    @JoinColumn(name = "question_id")
    private Question question; // 질문 번호

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "inquiry_id")
    private Inquiry inquiry; // 문의 번호

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private Customer customer; // 고객사 번호

    @Column(columnDefinition = "TEXT")
    private String title;

    @Column(columnDefinition = "TEXT")
    private String contents;

    @Column(columnDefinition = "TEXT")
    private String fileName;

    @Column(columnDefinition = "TEXT")
    private String filePath;

    @Builder
    private Answer(
        Question question,
        Inquiry inquiry,
        Customer customer,
        String title,
        String contents,
        String fileName,
        String filePath
    ) {
        this.question = question;
        this.inquiry = inquiry;
        this.customer = customer;
        this.title = title;
        this.contents = contents;
        this.fileName = fileName;
        this.filePath = filePath;
    }
}
