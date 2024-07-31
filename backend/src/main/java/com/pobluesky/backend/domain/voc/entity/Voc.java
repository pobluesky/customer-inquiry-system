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
    private Long vocNo;

    private Long inquiryNo;

    private String title;

    @Column(nullable = false, columnDefinition = "TEXT")
    private String contents;

    @Column(nullable = true, columnDefinition = "TEXT")
    private String files;
}
