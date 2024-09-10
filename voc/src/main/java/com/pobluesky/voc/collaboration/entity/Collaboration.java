package com.pobluesky.voc.collaboration.entity;

import com.pobluesky.voc.global.BaseEntity;
import com.pobluesky.voc.question.entity.Question;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Collaboration extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long colId;

    @OneToOne
    @JoinColumn(name = "question_id")
    private Question question;

    @JoinColumn(name = "col_request_id")
    private Long colRequestId;

    @JoinColumn(name = "col_response_id")
    private Long colResponseId;

    @Enumerated(EnumType.STRING)
    private ColStatus colStatus;

    @Column(nullable = false, columnDefinition="TEXT")
    private String colContents;

    @Column(columnDefinition="TEXT")
    private String colReply;

    @Column(columnDefinition="TEXT")
    private String fileName;

    @Column(columnDefinition="TEXT")
    private String filePath;

    @Builder
    public Collaboration(
        Question question,
        Long colRequestId,
        Long colResponseId,
        String colContents,
        String fileName, // 협업 첨부 파일
        String filePath // 협업 첨부 파일
    ) {
        this.question = question;
        this.colRequestId = colRequestId;
        this.colResponseId = colResponseId;
        this.colStatus = ColStatus.READY;
        this.colContents = colContents;
        this.colReply = null;
        this.fileName = fileName;
        this.filePath = filePath;
    }

    public void decideCollaboration(Boolean isAccepted) {
        if (isAccepted) {
            this.colStatus = ColStatus.INPROGRESS;
        } else {
            this.colStatus = ColStatus.REFUSE;
        }
    }

    public void completeCollaboration() {
        this.colStatus = ColStatus.COMPLETE;
    }

    public void writeColReply(String reply) {
        this.colReply = reply;
    }

    public void updateFiles(String fileName, String filePath){
        this.fileName = fileName;
        this.filePath = filePath;
    }
}
