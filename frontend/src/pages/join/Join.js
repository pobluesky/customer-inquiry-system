import React, { useRef, useState } from 'react';
import Button from '../../components/atoms/Button';
import Header from '../../components/mocules/Header';
import JoinInput from '../../components/mocules/JoinInput';
import { SignUp } from '../../assets/css/Auth.css';

import { signUpApiByCustomers, signUpApiByManagers } from '../../apis/api/auth';
import { useNavigate } from 'react-router-dom';
import {
    validateName,
    validateUserCode,
    validateEmail,
    validatePhone,
    validatePassword,
    validatePasswordMatch,
    validateCustomerName,
} from '../../utils/validation';

function Join() {
    const navigate = useNavigate();

    const [isFirstPage, setFirst] = useState(true);
    const [isCustomer, setCustomer] = useState(true);
    const [isManager, setManager] = useState(false);

    const nameRef = useRef(null);
    const userCodeRef = useRef(null);

    const [name, setName] = useState('');
    const [userCode, setUserCode] = useState('');
    const [customerCode, setCustomerCode] = useState(''); // 고객사 고유 코드 저장
    const [empNo, setEmpNo] = useState(''); // 담당자 고유 코드, 담당자 권한 저장

    const [userRole, setUserRole] = useState(''); // 화면에 출력할 권한명
    const [role, setRole] = useState(''); // 서버로 전송할 권한명
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [customerName, setCustomerName] = useState('');
    const [department, setDept] = useState('IT');
    const [password, setPassword] = useState('');
    const [passwordCheck, setPasswordCheck] = useState('');

    const nameChange = (e) => setName(e.target.value);
    const userCodeChange = (e) => setUserCode(e.target.value);
    const customerNameChange = (e) => setCustomerName(e.target.value);
    const deptChange = (e) => setDept(e.target.value);
    const emailChange = (e) => setEmail(e.target.value);
    const phoneChange = (e) => setPhone(e.target.value);
    const passwordChange = (e) => setPassword(e.target.value);
    const passwordCheckChange = (e) => setPasswordCheck(e.target.value);

    // 고유 코드를 통해 고객사와 담당자를 구분
    const getRoleAndSetNewForm = (userCode) => {
        const data = userCode.substring(0, 3);
        if (data === 'EMP') {
            // 담당자일 경우
            setName(name);
            setEmpNo(userCode);
            setManager(true);
            setCustomer(false);
        } else if (data === 'CUS') {
            // 고객사일 경우
            setName(name);
            setCustomerCode(userCode);
            setUserRole('고객사');
            setFirst(false);
        }
        nameRef.current.value = null; // name 입력 값 초기화
        userCodeRef.current.value = null; // userCode 입력 값 초기화
    };

    // 고객사 회원가입 API
    const GetCustomerAuth = async () => {
        try {
            const result = await signUpApiByCustomers(
                name,
                email,
                password,
                phone,
                customerCode,
                customerName,
            );
            console.log('고객사 회원가입 완료', result);
            navigate('/login');
            // [Alert] 회원가입 성공
        } catch (error) {
            console.error('고객사 회원가입 실패:', error);
            // [Alert] 회원가입 실패
        }
    };

    // 담당자 회원가입 API
    const GetManagerAuth = async () => {
        try {
            const result = await signUpApiByManagers(
                name,
                email,
                password,
                phone,
                empNo,
                role,
                department,
            );
            console.log('담당자 회원가입 완료', result);
            navigate('/login');
            // [Alert] 회원가입 성공
        } catch (error) {
            console.error('담당자 회원가입 실패:', error);
            // [Alert] 회원가입 실패
        }
    };

    // 회원가입 API 요청
    const GetAuth = async () => {
        if (role) {
            await GetManagerAuth();
            return;
        } else {
            await GetCustomerAuth();
            return;
        }
        // [Alert] 비밀번호가 일치하지 않습니다.
    };

    // 역할 조회, 권한 부여, 회원가입 버튼
    const checkButton = ({ btnName, onClick, margin }) => (
        <Button
            btnName={btnName}
            onClick={onClick}
            margin={margin}
            width={'360px'}
            height={'44px'}
            backgroundColor={'#03507d'}
            textColor={'#eeeeee'}
            border={'none'}
            borderRadius={'12px'}
            fontSize={'20px'}
        />
    );

    // 역할 선택 버튼
    const selectRoleButton = ({ btnName, onClick, margin }) => (
        <Button
            btnName={btnName}
            onClick={onClick}
            margin={margin}
            width={'144px'}
            height={'44px'}
            backgroundColor={'#ffffff'}
            textColor={'#000000'}
            border={'solid 1px #c1c1c1'}
            borderRadius={'12px'}
            fontSize={'20px'}
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
                    {isFirstPage ? (
                        <>
                            <div>회원가입</div>
                            {/* 이름 & 고객사코드 & 고객사명 입력 창 */}
                            <div>
                                {JoinInput({
                                    margin: '0 0 24px 0',
                                    ref: nameRef,
                                    value: name,
                                    onChange: nameChange,
                                    type: 'text',
                                    placeholder: '김숙하',
                                    categoryName: '이름',
                                    warningMsg: `${validateName(name)}`,
                                })}
                                {JoinInput({
                                    ref: userCodeRef,
                                    value: userCode,
                                    onChange: userCodeChange,
                                    type: 'text',
                                    placeholder: 'ABC123',
                                    categoryName: '고유 코드',
                                    warningMsg: `${validateUserCode(userCode)}`,
                                })}
                                {isManager && (
                                    <>
                                        {selectRoleButton({
                                            onClick: () => {
                                                setUserRole('품질 담당자');
                                                setRole('QUALITY');
                                            },
                                            btnName: '품질 담당자',
                                            margin: '48px 0 0 0',
                                        })}
                                        {selectRoleButton({
                                            onClick: () => {
                                                setUserRole('판매 담당자');
                                                setRole('SALES');
                                            },
                                            btnName: '판매 담당자',
                                            margin: '48px 0 0 64px',
                                        })}
                                    </>
                                )}
                            </div>
                            <div>
                                {/* 역할 조회 버튼 */}
                                {!isManager &&
                                    checkButton({
                                        btnName: '역할 조회',
                                        onClick: () => {
                                            !validateName(name) &&
                                                !validateUserCode(userCode) &&
                                                getRoleAndSetNewForm(userCode);
                                        },
                                    })}
                                {/* 권한 부여 버튼 */}
                                {isManager &&
                                    checkButton({
                                        btnName: '권한 부여',
                                        onClick: () => {
                                            setFirst(false);
                                        },
                                    })}
                            </div>
                        </>
                    ) : (
                        <>
                            <div>회원가입</div>
                            {/* 이메일 & 전화번호 & 비밀번호 입력 창 */}
                            <div>
                                {JoinInput({
                                    margin: '0 0 24px 0',
                                    value: userRole || '',
                                    onChange: () => {}, // 권한은 변경 불가, 빈 함수 전달
                                    type: 'text',
                                    placeholder: '',
                                    categoryName: '권한',
                                    needCategory: true,
                                })}
                                {JoinInput({
                                    margin: '0 0 24px 0',
                                    value: email || '',
                                    onChange: emailChange,
                                    type: 'email',
                                    placeholder: 'poscodx@posco.co.kr',
                                    categoryName: '이메일',
                                    warningMsg: `${validateEmail(email)}`,
                                })}
                                {JoinInput({
                                    margin: '0 0 24px 0',
                                    value: phone || '',
                                    onChange: phoneChange,
                                    type: 'tel',
                                    placeholder: '01012345678',
                                    categoryName: '전화번호',
                                    warningMsg: `${validatePhone(phone)}`,
                                })}
                                {isCustomer ? (
                                    JoinInput({
                                        margin: '0 0 24px 0',
                                        value: customerName,
                                        onChange: customerNameChange,
                                        type: 'text',
                                        placeholder: '(주)손흥민',
                                        categoryName: '고객사명',
                                        warningMsg: `${validateCustomerName(
                                            customerName,
                                        )}`,
                                    })
                                ) : (
                                    <>
                                        <div>부서명</div>
                                        <select
                                            name="dept"
                                            id="dept"
                                            onChange={deptChange}
                                        >
                                            <option value="IT">IT</option>
                                            <option value="HR">HR</option>
                                            <option value="SALES">SALES</option>
                                            <option value="FINANCE">FIN</option>
                                        </select>
                                    </>
                                )}
                                {JoinInput({
                                    margin: '0 0 24px 0',
                                    value: password || '',
                                    onChange: passwordChange,
                                    type: 'password',
                                    placeholder: '********',
                                    categoryName: '비밀번호',
                                    warningMsg: `${validatePassword(password)}`,
                                })}
                                {JoinInput({
                                    value: passwordCheck || '',
                                    onChange: passwordCheckChange,
                                    type: 'password',
                                    placeholder: '********',
                                    categoryName: '비밀번호 확인',
                                    warningMsg: `${validatePasswordMatch(
                                        password,
                                        passwordCheck,
                                    )}`,
                                })}
                            </div>
                            {/* 회원가입 버튼 */}
                            <div>
                                {checkButton({
                                    btnName: '회원가입',
                                    margin: '0 0 84px 0',
                                    onClick: async () => {
                                        !validateEmail(email) &&
                                            !validatePhone(phone) &&
                                            !validatePassword(password) &&
                                            (await GetAuth());
                                    },
                                })}
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Join;
