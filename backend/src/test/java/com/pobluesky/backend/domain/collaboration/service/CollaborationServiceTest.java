package com.pobluesky.backend.domain.collaboration.service;

import com.pobluesky.backend.domain.collaboration.dto.request.CollaborationCreateRequestDTO;
import com.pobluesky.backend.domain.collaboration.repository.CollaborationRepository;
import com.pobluesky.backend.global.redisson.LockKeyGenerator;

import org.junit.jupiter.api.Test;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.mock.web.MockMultipartFile;

import java.util.concurrent.CountDownLatch;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.TimeUnit;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
@AutoConfigureMockMvc
public class CollaborationServiceTest {

    @Autowired
    private CollaborationService collaborationService;

    @Autowired
    private CollaborationRepository collaborationRepository;

    @Test
    public void testConcurrentCollaborationCreation() throws InterruptedException {
        //given
        String token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhbGljZUBjb21wYW55LmNvbSIsInJvbGUiOiJVU0VSIiwiaWF0IjoxNzI4MDE4MDg2LCJleHAiOjE3MjgwMjY3MjZ9.3gmcM81b9SFRr3zPE5UNpmf99kWcOd-6fg1FOj4MYo8";
        Long questionId = 1L;
        MockMultipartFile file = new MockMultipartFile(
                "file",
                "test.txt",
                "text/plain",
                "test".getBytes()
        );

        CollaborationCreateRequestDTO requestDTO = new CollaborationCreateRequestDTO(
                2L,
                3L,
                "test"
        );

        ExecutorService executorService = Executors.newFixedThreadPool(10);
        CountDownLatch latch = new CountDownLatch(10);

        String key = LockKeyGenerator.generateCollaborationKey(
                requestDTO.colReqId(),
                requestDTO.colResId()
        );

        //when
        for (int i = 0; i < 10; i++) {
            executorService.submit(() -> {
                try {
                    System.out.println("Attempting to create collaboration...");
                    collaborationService.createCollaboration(
                            token,
                            key,
                            questionId,
                            file,
                            requestDTO
                    );
                    System.out.println("Collaboration created successfully.");
                } catch (Exception e) {
                    System.out.println("Failed to create collaboration: " + e.getMessage());
                } finally {
                    latch.countDown();
                }
            });
        }

        latch.await(60, TimeUnit.SECONDS);
        executorService.shutdown();

        // then
        long collaborationCount = collaborationRepository.count();
        assertThat(collaborationCount).isEqualTo(1);
    }
}
