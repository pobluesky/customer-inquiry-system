package com.pobluesky.backend.domain.user.service;

import com.pobluesky.backend.domain.user.dto.request.ManagerCreateRequestDTO;
import com.pobluesky.backend.domain.user.dto.request.ManagerUpdateRequestDTO;
import com.pobluesky.backend.domain.user.dto.response.ManagerResponseDTO;
import com.pobluesky.backend.domain.user.entity.Manager;
import com.pobluesky.backend.domain.user.repository.ManagerRepository;
import com.pobluesky.backend.global.error.CommonException;
import com.pobluesky.backend.global.error.ErrorCode;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.ArrayList;
import java.util.stream.Collectors;

@Service
@Slf4j
@RequiredArgsConstructor
public class ManagerService {

    private final ManagerRepository managerRepository;

    private final PasswordEncoder passwordEncoder;

    @Transactional
    public ManagerResponseDTO signUp(ManagerCreateRequestDTO signUpDto) {
        if (managerRepository.existsByEmail(signUpDto.email())) {
            throw new CommonException(ErrorCode.ALREADY_EXISTS_EMAIL);
        }

        String encodedPassword = passwordEncoder.encode(signUpDto.password());

        List<String> roles = new ArrayList<>();
        roles.add("USER");

        Manager manager = signUpDto.toManagerEntity(
            encodedPassword,
            roles
        );

        return ManagerResponseDTO.from(managerRepository.save(manager));
    }

    @Transactional(readOnly = true)
    public List<ManagerResponseDTO> getAllManagers() {
        List<Manager> managers = managerRepository.findAll();

        return managers.stream()
            .map(ManagerResponseDTO::from)
            .collect(Collectors.toList());
    }

    @Transactional
    public ManagerResponseDTO updateManagerById(
        Long userId,
        ManagerUpdateRequestDTO managerUpdateRequestDTO
    ) {
        Manager manager = managerRepository.findById(userId)
            .orElseThrow(() -> new CommonException(ErrorCode.USER_NOT_FOUND));

        manager.updateManager(
            managerUpdateRequestDTO.name(),
            managerUpdateRequestDTO.email(),
            managerUpdateRequestDTO.password(),
            managerUpdateRequestDTO.phone()
        );

        return ManagerResponseDTO.from(manager);
    }

    @Transactional
    public void deleteManagerById(Long userId) {
        managerRepository.deleteById(userId);
    }
}
