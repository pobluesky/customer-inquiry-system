// Join.js

import React, { useRef, useState } from 'react';
import Button from '../../components/atoms/Button';
import Header from '../../components/mocules/Header';
import Input from '../../components/atoms/Input';
import { SignUp } from '../../assets/css/Auth.css';
import Swal from 'sweetalert2';

import { signUpApi } from '../../apis/api/auth/auth';

function Join() {
    const [auth, setAuth] = useState([]);

    const nameRef = useRef(null);
    const customerCodeRef = useRef(null);
    const customerNameRef = useRef(null);

    const [check, setCheck] = useState(false);

    // 고객 권한 확인
    const [name, setName] = useState('');
    const [customerCode, setCustomerCode] = useState('');
    const [customerName, setCustomerName] = useState('');

    // 고객 권한 확인 완료
    const [userRole, setUserRole] = useState(''); // 화면에 출력할 데이터
    const [roles, setRoles] = useState([]); // 서버로 전송할 데이터
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [passwordCheck, setPasswordCheck] = useState('');

    // API body
    const [data, setData] = useState([]);

    // 입력값 저장
    const nameChange = (e) => setName(e.target.value);
    const customerCodeChange = (e) => setCustomerCode(e.target.value);
    const customerNameChange = (e) => setCustomerName(e.target.value);

    const emailChange = (e) => setEmail(e.target.value);
    const phoneChange = (e) => setPhone(e.target.value);
    const passwordChange = (e) => setPassword(e.target.value);
    const passwordCheckChange = (e) => setPasswordCheck(e.target.value);

    // 입력창 초기화
    const inputClear = () => {
        nameRef.current.value = null;
        customerCodeRef.current.value = null;
        customerNameRef.current.value = null;
    };

    // 역할 구분
    const getRole = () => {
        const roleMark = customerCode.substring(0, 1);
        if (roleMark === 'Q') {
            setRoles(['sales']);
            setUserRole('품질관리 담당자');
        } else if (roleMark === 'S') {
            setRoles(['quality']);
            setUserRole('판매관리 담당자');
        } else {
            setRoles(['customer']);
            setUserRole('고객사');
        }
    };

    const fetchGetAuth = async () => {
        try {
            const result = await signUpApi(
                name,
                customerCode,
                customerName,
                roles,
                email,
                phone,
                password,
            );
            setAuth(result);
            signUpAlert(result);
        } catch (error) {
            console.error('회원가입 실패:', error);
            Swal.fire({ icon: 'error', title: '회원가입 실패' });
        }
    };

    const signUpAlert = (result) => {
        if (result.success) {
            Swal.fire({ icon: 'success', title: '회원가입 완료' });
        } else {
            Swal.fire({ icon: 'error', title: '이미 존재하는 회원입니다.' });
        }
    };

    // 반복되는 Input 생성 함수
    const renderInput = ({
        ref,
        value,
        onChange,
        type,
        placeholder,
        categoryName,
        needCategory = true,
    }) => (
        <Input
            ref={ref}
            value={value}
            onChange={onChange}
            type={type}
            placeholder={placeholder}
            width={'336px'}
            height={'48px'}
            margin={'0 0 24px 0'}
            padding={'0 0 0 20px'}
            border={'solid 1px #c1c1c1'}
            borderRadius={'12px'}
            fontSize={'20px'}
            needCategory={needCategory}
            categoryName={categoryName}
            categoryWidth={'360px'}
            categoryColor={'#03507d'}
            CategoryFontWeight={'600'}
            categoryMargin={'0 auto 12px auto'}
            categoryTextAlign={'left'}
        />
    );

    return (
        <div>
            <Header
                user={false}
                login={false}
                inq={true}
                voc={true}
                dashboard={true}
            />
            <div className={SignUp}>
                <div>
                    {!check ? (
                        <>
                            <div>회원가입</div>
                            {/* 이름 & 고객사코드 & 고객사명 입력 창 */}
                            <div>
                                {renderInput({
                                    ref: nameRef,
                                    value: name,
                                    onChange: nameChange,
                                    type: 'text',
                                    placeholder: '김숙하',
                                    categoryName: '이름',
                                })}
                                {renderInput({
                                    ref: customerCodeRef,
                                    value: customerCode,
                                    onChange: customerCodeChange,
                                    type: 'text',
                                    placeholder: 'CUST100',
                                    categoryName: '고객사 코드',
                                })}
                                {renderInput({
                                    ref: customerNameRef,
                                    value: customerName,
                                    onChange: customerNameChange,
                                    type: 'text',
                                    placeholder: '손흥민 주식회사',
                                    categoryName: '고객사명',
                                })}
                            </div>

                            {/* 역할 조회 버튼 */}
                            <div>
                                <Button
                                    onClick={() => {
                                        getRole();
                                        inputClear();
                                        setCheck(true);
                                    }}
                                    btnName={'역할 조회'}
                                    width={'360px'}
                                    height={'44px'}
                                    backgroundColor={'#03507D'}
                                    textColor={'#EEEEEE'}
                                    borderRadius={'12px'}
                                    fontSize={'20px'}
                                />
                            </div>
                        </>
                    ) : (
                        <>
                            <div />
                            {/* 이메일 & 전화번호 & 비밀번호 입력 창 */}
                            <div>
                                {renderInput({
                                    value: userRole || '',
                                    onChange: () => {}, // 권한은 변경 불가, 빈 함수 전달
                                    type: 'text',
                                    placeholder: '',
                                    categoryName: '권한',
                                    needCategory: true,
                                })}
                                {renderInput({
                                    value: email || '',
                                    onChange: emailChange,
                                    type: 'email',
                                    placeholder: 'poscodx@posco.co.kr',
                                    categoryName: '이메일',
                                })}
                                {renderInput({
                                    value: phone || '',
                                    onChange: phoneChange,
                                    type: 'text',
                                    placeholder: '01012345678',
                                    categoryName: '전화번호',
                                })}
                                {renderInput({
                                    value: password || '',
                                    onChange: passwordChange,
                                    type: 'password',
                                    placeholder: '********',
                                    categoryName: '비밀번호',
                                })}
                                {renderInput({
                                    value: passwordCheck || '',
                                    onChange: passwordCheckChange,
                                    type: 'password',
                                    placeholder: '********',
                                    categoryName: '비밀번호 확인',
                                })}
                            </div>

                            {/* 회원가입 버튼 */}
                            <div>
                                <Button
                                    btnName={'회원가입'}
                                    width={'360px'}
                                    height={'44px'}
                                    backgroundColor={'#03507D'}
                                    textColor={'#EEEEEE'}
                                    fontSize={'20px'}
                                    border={'solid #c1c1c1 1px'}
                                    borderRadius={'12px'}
                                    onClick={async () => {
                                        if (password !== passwordCheck) {
                                            Swal.fire({
                                                icon: 'error',
                                                title: '비밀번호가 일치하지 않습니다.',
                                            });
                                            return;
                                        }
                                        setData([
                                            name,
                                            customerCode,
                                            customerName,
                                            roles,
                                            email,
                                            phone,
                                            password,
                                        ]);
                                        await fetchGetAuth();
                                    }}
                                />
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Join;
