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

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@Slf4j
@RequiredArgsConstructor
public class CustomerService {
    private final CustomerRepository customerRepository;

    @Transactional(readOnly = true)
    public List<CustomerResponseDTO> getAllCustomers() {
        List<Customer> customers = customerRepository.findAll();

        return customers.stream()
            .map(CustomerResponseDTO::from)
            .collect(Collectors.toList());
    }

    @Transactional
    public CustomerResponseDTO createCustomer(CustomerCreateRequestDTO dto) {
        Customer customer = dto.toCustomerEntity();

        Customer savedCustomer = customerRepository.save(customer);

        return CustomerResponseDTO.from(savedCustomer);
    }

    @Transactional
    public CustomerResponseDTO updateCustomerById(Long userId, CustomerUpdateRequestDTO customerUpdateRequestDTO) {
        Customer customer = customerRepository.findById(userId)
            .orElseThrow(() -> new CommonException(ErrorCode.USER_NOT_FOUND));

        customer.updateCustomer(
            customerUpdateRequestDTO.name(),
            customerUpdateRequestDTO.email(),
            customerUpdateRequestDTO.password(),
            customerUpdateRequestDTO.phone()
        );

        return CustomerResponseDTO.from(customer);
    }

    @Transactional
    public void deleteCustomerById(Long userId) {
        Customer customer = customerRepository.findById(userId)
            .orElseThrow(() -> new CommonException(ErrorCode.USER_NOT_FOUND));

        customer.deleteUser();
    }
}
