package com.pobluesky.backend.domain.collaboration.entity;

import com.pobluesky.backend.domain.question.entity.Question;
import com.pobluesky.backend.domain.user.entity.Manager;
import com.pobluesky.backend.global.BaseEntity;

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


    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "col_request_id")
    private Manager colRequestManager;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "col_response_id")
    private Manager colResponseManager;

    @Enumerated(EnumType.STRING)
    private ColStatus colStatus;

    @Column(nullable = false, columnDefinition="TEXT")
    private String colContents;

    @Column(columnDefinition="TEXT")
    private String colReply;

    private String files;

    @Builder
    public Collaboration(
        Question question,
        Manager colRequestManager,
        Manager colResponseManager,
        String colContents,
        String files
    ) {
        this.question = question;
        this.colRequestManager = colRequestManager;
        this.colResponseManager = colResponseManager;
        this.colStatus = ColStatus.READY;
        this.colContents = colContents;
        this.colReply = null;
        this.files = files;
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
}