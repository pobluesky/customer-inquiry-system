package com.pobluesky.backend.domain.user.service;

import com.pobluesky.backend.domain.user.entity.Customer;
import com.pobluesky.backend.domain.user.entity.Manager;
import com.pobluesky.backend.domain.user.entity.User;
import com.pobluesky.backend.domain.user.repository.CustomerRepository;
import com.pobluesky.backend.domain.user.repository.ManagerRepository;
import com.pobluesky.backend.global.error.CommonException;
import com.pobluesky.backend.global.error.ErrorCode;
import com.pobluesky.backend.global.security.JwtToken;
import com.pobluesky.backend.global.security.JwtTokenProvider;
import io.jsonwebtoken.Claims;
import java.util.Optional;
import java.util.stream.Stream;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class SignService {

    private final CustomerRepository customerRepository;

    private final ManagerRepository managerRepository;

    private final PasswordEncoder passwordEncoder;

    private final JwtTokenProvider jwtTokenProvider;

    @Transactional
    public JwtToken signIn(String email, String password) {
        User user = Stream.of(
                customerRepository.findByEmail(email),
                managerRepository.findByEmail(email)
            )
            .flatMap(Optional::stream)
            .findFirst()
            .orElseThrow(() -> new CommonException(ErrorCode.USER_NOT_FOUND));

        if (!passwordEncoder.matches(password, user.getPassword())) {
            throw new CommonException(ErrorCode.INVALID_PASSWORD);
        }

        return jwtTokenProvider.generateToken(
            email,
            "USER",
            user.getRole(),
            user.getUserId());
    }


    public Long parseToken(String token) {
        Claims claims = jwtTokenProvider.parseClaims(token);
        String email = claims.getSubject();

        return customerRepository.findByEmail(email)
            .map(Customer::getUserId)
            .or(() -> managerRepository.findByEmail(email)
                .map(Manager::getUserId))
            .orElseThrow(() -> new CommonException(ErrorCode.USER_NOT_FOUND));
    }
}
