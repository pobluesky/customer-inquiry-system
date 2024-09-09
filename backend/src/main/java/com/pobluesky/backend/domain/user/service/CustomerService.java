package com.pobluesky.backend.domain.user.service;

import com.pobluesky.backend.domain.user.dto.request.CustomerCreateRequestDTO;
import com.pobluesky.backend.domain.user.dto.request.CustomerUpdateRequestDTO;
import com.pobluesky.backend.domain.user.dto.response.CustomerResponseDTO;
import com.pobluesky.backend.domain.user.entity.Customer;
import com.pobluesky.backend.domain.user.repository.CustomerRepository;
import com.pobluesky.backend.global.error.CommonException;
import com.pobluesky.backend.global.error.ErrorCode;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@Slf4j
@RequiredArgsConstructor
public class CustomerService {

    private final SignService signService;

    private final CustomerRepository customerRepository;

    private final PasswordEncoder passwordEncoder;

    @Transactional
    public CustomerResponseDTO signUp(CustomerCreateRequestDTO signUpDto) {
        if (customerRepository.existsByEmail(signUpDto.email()))
            throw new CommonException(ErrorCode.ALREADY_EXISTS_EMAIL);

        String encodedPassword = passwordEncoder.encode(signUpDto.password());

        Customer customer = signUpDto.toCustomerEntity(encodedPassword, "USER");

        return CustomerResponseDTO.from(customerRepository.save(customer));
    }

    @Transactional(readOnly = true)
    public List<CustomerResponseDTO> getCustomers() {
        List<Customer> customers = customerRepository.findAll();

        return customers.stream()
            .map(CustomerResponseDTO::from)
            .collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    public CustomerResponseDTO getCustomerById(String token, Long targetId) {
        Long userId = signService.parseToken(token);

        if (!userId.equals(targetId))
            throw new CommonException(ErrorCode.USER_NOT_MATCHED);

        Customer customer = customerRepository.findById(userId)
            .orElseThrow(() -> new CommonException(ErrorCode.USER_NOT_FOUND));

        return  CustomerResponseDTO.from(customer);
    }

    @Transactional
    public CustomerResponseDTO updateCustomerById(
        String token,
        Long targetId,
        CustomerUpdateRequestDTO customerUpdateRequestDTO
    ) {
        Long userId = signService.parseToken(token);

        Customer customer = customerRepository.findById(userId)
            .orElseThrow(() -> new CommonException(ErrorCode.USER_NOT_FOUND));

        if (!userId.equals(targetId))
            throw new CommonException(ErrorCode.USER_NOT_MATCHED);

        customer.updateCustomer(
            customerUpdateRequestDTO.name(),
            customerUpdateRequestDTO.email(),
            passwordEncoder.encode(customerUpdateRequestDTO.password()),
            customerUpdateRequestDTO.phone(),
            customerUpdateRequestDTO.customerCode(),
            customerUpdateRequestDTO.customerName()
            );

        return CustomerResponseDTO.from(customer);
    }

    @Transactional
    public void deleteCustomerById(String token, Long targetId) {
        Long userId = signService.parseToken(token);

        Customer customer = customerRepository.findById(userId)
            .orElseThrow(() -> new CommonException(ErrorCode.USER_NOT_FOUND));

        if (!userId.equals(targetId))
            throw new CommonException(ErrorCode.USER_NOT_MATCHED);

        customer.deleteUser();
    }


}
