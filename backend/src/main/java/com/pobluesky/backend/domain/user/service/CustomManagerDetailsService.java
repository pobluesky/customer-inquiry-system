//package com.pobluesky.backend.domain.user.service;
//
//import com.pobluesky.backend.domain.user.entity.Manager;
//import com.pobluesky.backend.domain.user.repository.ManagerRepository;
//
//import lombok.RequiredArgsConstructor;
//
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.core.userdetails.UsernameNotFoundException;
//import org.springframework.security.crypto.password.PasswordEncoder;
//import org.springframework.stereotype.Service;
//
//@Service
//@RequiredArgsConstructor
//public class CustomManagerDetailsService implements UserDetailsService {
//
//    private final ManagerRepository managerRepository;
//
//    private final PasswordEncoder passwordEncoder;
//
//    @Override
//    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
//        return managerRepository.findByEmail(email)
//            .map(this::createUserDetails)
//            .orElseThrow(() -> new UsernameNotFoundException("해당하는 회원을 찾을 수 없습니다."));
//    }
//
//    private UserDetails createUserDetails(Manager member) {
//        return new org.springframework.security.core.userdetails.User(
//            member.getEmail(),   // email을 username 필드로 사용
//            passwordEncoder.encode(member.getPassword()), // 암호화된 비밀번호
//            member.getAuthorities() // 사용자의 권한 리스트
//        );
//    }
//
//}
