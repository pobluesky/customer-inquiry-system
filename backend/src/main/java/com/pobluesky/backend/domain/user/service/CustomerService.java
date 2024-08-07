package com.pobluesky.backend.domain.user.service;

import com.pobluesky.backend.global.security.JwtToken;
import com.pobluesky.backend.global.security.JwtTokenProvider;
import com.pobluesky.backend.domain.user.dto.request.CustomerCreateRequestDTO;
import com.pobluesky.backend.domain.user.dto.request.CustomerUpdateRequestDTO;
import com.pobluesky.backend.domain.user.dto.response.CustomerResponseDTO;
import com.pobluesky.backend.domain.user.entity.Customer;
import com.pobluesky.backend.domain.user.repository.CustomerRepository;
import com.pobluesky.backend.global.error.CommonException;
import com.pobluesky.backend.global.error.ErrorCode;
import java.util.ArrayList;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@Slf4j
@RequiredArgsConstructor
public class CustomerService {
    private final CustomerRepository customerRepository;
    private final AuthenticationManagerBuilder authenticationManagerBuilder;
    private final JwtTokenProvider jwtTokenProvider;
    private final PasswordEncoder passwordEncoder;

    @Transactional
    public JwtToken signIn(String email, String password) {
        UsernamePasswordAuthenticationToken authenticationToken =
            new UsernamePasswordAuthenticationToken(email, password);

        Authentication authentication = authenticationManagerBuilder
            .getObject()
            .authenticate(authenticationToken);

        JwtToken jwtToken = jwtTokenProvider.generateToken(authentication);

        return jwtToken;
    }

    @Transactional
    public CustomerResponseDTO signUp(CustomerCreateRequestDTO signUpDto) {
        if (customerRepository.existsByEmail(signUpDto.email())) {
            throw new IllegalArgumentException("이미 사용 중인 이메일입니다.");
        }

        // Password 암호화
        String encodedPassword = passwordEncoder.encode(signUpDto.password());
        List<String> roles = new ArrayList<>();
        roles.add("USER");  // USER 권한 부여
        return CustomerResponseDTO.from(customerRepository.save(signUpDto.toCustomerEntity(encodedPassword, roles)));
    }

    /*
    전체 User 조회, readOnly=true 옵션을 주어 변경 감지 X
     */
    @Transactional(readOnly = true)
    public List<CustomerResponseDTO> getAllCustomers() {
        List<Customer> customers = customerRepository.findAll();

        return customers.stream()
            .map(CustomerResponseDTO::from)
            .collect(Collectors.toList());
    }

    @Transactional
    public CustomerResponseDTO updateCustomerById(Long userId, CustomerUpdateRequestDTO customerUpdateRequestDTO) {
        // update 할 userNo 에 해당하는 Customer 가 없다면 USER_NOT_FOUND exception
        Customer customer = customerRepository.findById(userId)
            .orElseThrow(() -> new CommonException(ErrorCode.USER_NOT_FOUND));

        // update
        customer.updateCustomer(
            customerUpdateRequestDTO.name(),
            customerUpdateRequestDTO.email(),
            customerUpdateRequestDTO.password(),
            customerUpdateRequestDTO.phone()
        );

        // entity -> dto 로 반환해서 return
        return CustomerResponseDTO.from(customer);
    }

    @Transactional
    public void deleteCustomerById(Long userId) {
        customerRepository.deleteById(userId);
    }
}
