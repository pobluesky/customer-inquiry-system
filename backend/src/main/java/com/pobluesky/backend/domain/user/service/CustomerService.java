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

    /*
    Customer 생성
     */
    @Transactional
    public CustomerResponseDTO createCustomer(CustomerCreateRequestDTO dto) {
        // 1. 클라이언트에서 받은 dto안에 데이터를 꺼내서 Entity로 변환
        Customer customer = dto.toCustomerEntity();
        // 2. 앤티티를 리포에 저장
        Customer savedCustomer = customerRepository.save(customer);

        // 3. 저장된 객체를 반환
        return CustomerResponseDTO.from(savedCustomer);
    }

    @Transactional
    public CustomerResponseDTO updateCustomerByNo(Long userNo, CustomerUpdateRequestDTO customerUpdateRequestDTO) {
        // update 할 userNo 에 해당하는 Customer 가 없다면 USER_NOT_FOUND exception
        Customer customer = customerRepository.findById(userNo)
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
    public void deleteCustomerByNo(Long userNo) {
        customerRepository.deleteById(userNo);
    }
}
