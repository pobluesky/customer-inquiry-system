package com.pobluesky.backend.domain.voc.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
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
    private Long vocNo; // VoC 번호

    private Long inquiryNo; // 문의 번호

    private String title; // 제목

    @Column(nullable = false, columnDefinition = "TEXT")
    private String contents; // 내용

    @Column(columnDefinition = "TEXT")
    private String files; // 첨부파일
}
