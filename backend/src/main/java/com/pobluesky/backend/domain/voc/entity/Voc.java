package com.pobluesky.backend.domain.voc.entity;

import com.pobluesky.backend.domain.inquiry.entity.Inquiry;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "voc")
public class Voc {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long vocId; // VoC 번호

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "inquiry_id")
    private Inquiry inquiry; // 문의 번호

    private String title; // 제목

    @Column(nullable = false, columnDefinition = "TEXT")
    private String contents; // 내용

    @Column(columnDefinition = "TEXT")
    private String files; // 첨부파일
    /*
      Builder Pattern
     */
    @Builder
    private Voc(
        Inquiry inquiry,
        String title,
        String contents,
        String files
    ) {
        this.inquiry = inquiry;
        this.title = title;
        this.contents = contents;
        this.files = files;
    }

    public void updateVoc(
        String title,
        String contents,
        String files
    ) {
        this.title = title;
        this.contents = contents;
        this.files = files;
    }
}
