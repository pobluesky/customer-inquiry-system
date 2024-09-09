package com.pobluesky.voc.question.entity;

import com.pobluesky.voc.answer.entity.Answer;
import com.pobluesky.voc.global.BaseEntity;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

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

    @JoinColumn(name = "inquiry_id")
    private Long inquiryId; // 문의 번호

    @JoinColumn(name = "user_id")
    private Long customerId; // 고객사 번호

    private String title;

    @Column(nullable = false, columnDefinition = "TEXT")
    private String contents;

    @Column(columnDefinition = "TEXT")
    private String fileName;

    @Column(columnDefinition = "TEXT")
    private String filePath;

    @Enumerated(EnumType.STRING)
    private QuestionStatus status;

    @Enumerated(EnumType.STRING)
    private QuestionType type;

    @OneToOne(mappedBy = "question", fetch = FetchType.LAZY)
    @JoinColumn(name = "question_id")
    private Answer answer;

    private Boolean isActivated;

    @Builder
    private Question(
        Long inquiryId,
        Long customerId,
        String title,
        String contents,
        String fileName,
        String filePath,
        QuestionStatus status,
        QuestionType type
    ) {
        this.inquiryId = inquiryId;
        this.customerId = customerId;
        this.title = title;
        this.contents = contents;
        this.fileName = fileName;
        this.filePath = filePath;
        this.status = status;
        this.type = type;
        this.isActivated = true;
    }

    public void updateQuestion(
        Long inquiryId,
        String title,
        String contents,
        String fileName,
        String filePath,
        QuestionType type,
        QuestionStatus status
    ) {
        this.inquiryId = inquiryId;
        this.title = title;
        this.contents = contents;
        this.fileName = fileName;
        this.filePath = filePath;
        this.type = type;
        this.status = status;
    }

    public void deleteQuestion() {
        this.isActivated = false;
    }
}
