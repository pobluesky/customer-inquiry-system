//package com.pobluesky.backend;
//
//import com.pobluesky.backend.domain.question.dto.response.QuestionSummaryResponseDTO;
//import com.pobluesky.backend.domain.question.service.QuestionService;
//import java.util.List;
//import org.junit.jupiter.api.Test;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.context.SpringBootTest;
//import static org.assertj.core.api.Assertions.assertThat;
//
//
//@SpringBootTest
//public class QuestionServiceTest {
//    @Autowired
//    private QuestionService questionService;
//
//    @Test
//    public void compareJPAAndQueryDSL() {
//        System.out.println("JPA Query:");
//        List<QuestionSummaryResponseDTO> jpaResult = questionService.getQuestionsWithJPA();
//        System.out.println("QueryDSL Query:");
//        List<QuestionSummaryResponseDTO> queryDslResult = questionService.getQuestionsWithQueryDSL();
//
//        assertThat(jpaResult).hasSameSizeAs(queryDslResult);
//    }
//}
