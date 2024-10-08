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
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .httpBasic(httpBasic -> httpBasic.disable())
            .csrf(csrf -> csrf.disable())
            .sessionManagement(sessionManagement ->
                sessionManagement.sessionCreationPolicy(SessionCreationPolicy.STATELESS)
            )
            .authorizeHttpRequests(authorizeRequests ->
                authorizeRequests
                    .requestMatchers(
                        "/swagger-ui/**",
                        "/v3/api-docs/**",
                        "/swagger-resources/**",
                        "/swagger-ui.html",
                        "/webjars/**",
                        "/h2-console/**"
                    ).permitAll()
                    .requestMatchers("/api/customers/**").permitAll()
                    .requestMatchers("/mobile/api/inquiries/**").permitAll()
                    .requestMatchers("/mobile/api/questions/**").permitAll()
                    .requestMatchers("/mobile/api/answers/**").permitAll()
                    .requestMatchers("/mobile/api/users/**").permitAll()
                    .requestMatchers("/mobile/api/notifications/**").permitAll()
                    .requestMatchers("/mobile/api/reviews/**").permitAll()
                    .requestMatchers("/api/managers/**").permitAll()
                    .requestMatchers("/api/users/**").permitAll()
                    .anyRequest().authenticated()
            )
            .addFilterBefore(new JwtAuthenticationFilter(jwtTokenProvider), UsernamePasswordAuthenticationFilter.class);

        return http.build();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        // BCrypt Encoder 사용
        return PasswordEncoderFactories.createDelegatingPasswordEncoder();
    }
}
