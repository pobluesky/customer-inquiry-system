package com.pobluesky.backend.domain.user.service;

import com.pobluesky.backend.domain.user.dto.request.ManagerCreateRequestDTO;
import com.pobluesky.backend.domain.user.dto.request.ManagerUpdateRequestDTO;
import com.pobluesky.backend.domain.user.dto.response.ManagerResponseDTO;
import com.pobluesky.backend.domain.user.entity.Customer;
import com.pobluesky.backend.domain.user.entity.Manager;
import com.pobluesky.backend.domain.user.repository.ManagerRepository;
import com.pobluesky.backend.global.error.CommonException;
import com.pobluesky.backend.global.error.ErrorCode;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@Slf4j
@RequiredArgsConstructor
public class ManagerService {
    private final ManagerRepository managerRepository;

    @Transactional(readOnly = true)
    public List<ManagerResponseDTO> getAllManagers() {
        List<Manager> managers = managerRepository.findAll();

        return managers.stream()
            .map(ManagerResponseDTO::from)
            .collect(Collectors.toList());
    }

    @Transactional
    public ManagerResponseDTO createManager(ManagerCreateRequestDTO dto) {
        Manager manager = dto.toManagerEntity();
        Manager savedManager = managerRepository.save(manager);

        return ManagerResponseDTO.from(savedManager);
    }

    @Transactional
    public ManagerResponseDTO updateManagerById(Long userId, ManagerUpdateRequestDTO managerUpdateRequestDTO) {
        Manager manager = managerRepository.findById(userId)
            .orElseThrow(() -> new RuntimeException("존재하지 않는 아이디 입니다."));

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
        Manager manager = managerRepository.findById(userId)
            .orElseThrow(() -> new CommonException(ErrorCode.USER_NOT_FOUND));

        manager.deleteUser();
    }
}
