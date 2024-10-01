package com.pobluesky.backend.domain.answer.entity;

import com.pobluesky.backend.domain.inquiry.entity.Inquiry;
import com.pobluesky.backend.domain.user.entity.Customer;
import com.pobluesky.backend.domain.user.entity.Manager;
import com.pobluesky.backend.domain.question.entity.Question;
import com.pobluesky.backend.global.BaseEntity;

import jakarta.persistence.*;

import lombok.*;

@Getter
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "answer")
public class Answer extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long answerId;

    @OneToOne
    @JoinColumn(name = "question_id")
    private Question question;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "inquiry_id")
    private Inquiry inquiry;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "customer_id")
    private Customer customer;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "manager_id")
    private Manager manager;

    @Column(columnDefinition = "TEXT")
    private String title;

    @Column(columnDefinition = "TEXT")
    private String contents;

    @Column(columnDefinition = "TEXT")
    private String fileName;

    @Column(columnDefinition = "TEXT")
    private String filePath;

    private Boolean isActivated;

    @Builder
    private Answer(
        Question question,
        Inquiry inquiry,
        Customer customer,
        Manager manager,
        String title,
        String contents,
        String fileName,
        String filePath
    ) {
        this.question = question;
        this.inquiry = inquiry;
        this.customer = customer;
        this.manager = manager;
        this.title = title;
        this.contents = contents;
        this.fileName = fileName;
        this.filePath = filePath;
        this.isActivated = true;
    }

    public void updateAnswer(
        String title,
        String contents,
        String fileName,
        String filePath
    ) {
        this.title = title;
        this.contents = contents;
        this.fileName = fileName;
        this.filePath = filePath;
    }
}
