package com.pobluesky.backend.global.config;

import com.pobluesky.backend.global.security.JwtAuthenticationFilter;
import com.pobluesky.backend.global.security.JwtTokenProvider;

import lombok.RequiredArgsConstructor;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfig {

    private final JwtTokenProvider jwtTokenProvider;

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity httpSecurity) throws Exception {
        return httpSecurity
            .httpBasic().disable()
            .csrf().disable()
            .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
            .and()
            .authorizeHttpRequests()
            // 해당 API에 대해서는 모든 요청을 허가
            .requestMatchers("/api/customers/**").permitAll()
            .requestMatchers("/api/managers/**").permitAll()
            .requestMatchers("/api/reviews/**").permitAll()
            .requestMatchers("/api/line-items/**").permitAll()
            .requestMatchers("/api/inquiries/**").permitAll()
            // USER 권한이 있어야 요청할 수 있음
//            .requestMatchers("/api/reviews/**").hasRole("USER")
            // 이 밖에 모든 요청에 대해서 인증을 필요로 한다는 설정
            .anyRequest().authenticated()
            .and()
            // JWT 인증을 위하여 직접 구현한 필터를 UsernamePasswordAuthenticationFilter 전에 실행
            .addFilterBefore(new JwtAuthenticationFilter(jwtTokenProvider), UsernamePasswordAuthenticationFilter.class).build();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        // BCrypt Encoder 사용
        return PasswordEncoderFactories.createDelegatingPasswordEncoder();
    }
}
