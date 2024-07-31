package com.pobluesky.backend.domain.user.service;

import com.pobluesky.backend.domain.user.dto.request.ManagerCreateRequestDTO;
import com.pobluesky.backend.domain.user.dto.request.ManagerUpdateRequestDTO;
import com.pobluesky.backend.domain.user.dto.response.ManagerResponseDTO;
import com.pobluesky.backend.domain.user.entity.Manager;
import com.pobluesky.backend.domain.user.repository.ManagerRepository;
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
    public List<ManagerResponseDTO> getAllUsers() {
        List<Manager> managers = managerRepository.findAll();

        return managers.stream()
            .map(ManagerResponseDTO::from)
            .collect(Collectors.toList());
    }

    @Transactional
    public ManagerResponseDTO createUser(ManagerCreateRequestDTO dto) {
        Manager manager = dto.toManagerEntity();
        Manager savedManager = managerRepository.save(manager);

        return ManagerResponseDTO.from(savedManager);
    }

    @Transactional
    public ManagerResponseDTO updateUserByNo(Long userNo, ManagerUpdateRequestDTO managerUpdateRequestDTO) {
        Manager manager = managerRepository.findById(userNo)
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
    public void deleteUserByNo(Long userNo) {
        managerRepository.deleteById(userNo);
    }


}
