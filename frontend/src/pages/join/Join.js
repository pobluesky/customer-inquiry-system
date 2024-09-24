import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import JoinInput from '../../components/molecules/JoinInput';
import {
    CheckButton,
    RoleSelectButton,
} from '../../components/molecules/JoinButton';
import { getCookie } from '../../apis/utils/cookies';
import { signUpApiByCustomers, signUpApiByManagers } from '../../apis/api/auth';
import {
    validateName,
    validateUserCode,
    validateEmail,
    validatePhone,
    validateCustomerName,
    validatePassword,
    validateMatch,
} from '../../utils/validation';
import { useRecoilState } from 'recoil';
import { userName, userEmail, userPassword } from '../../index';
import { SuccessAlert, WarningAlert, FailedAlert } from '../../utils/actions';
import { SignUp } from '../../assets/css/Auth.css';

function Join() {
    useEffect(() => {
        if (getCookie('userId')) {
            navigate('/');
        }
    }, []);

    // 특정 입력 필드에 포커스가 가면 스크롤
    useEffect(() => {
        if (checkValidationTest && nameRef.current) {
            nameRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [checkValidationTest]);

    useEffect(() => {
        if (checkValidationTest && userCodeRef.current) {
            userCodeRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [checkValidationTest]);

    useEffect(() => {
        if (checkValidationTest && emailRef.current) {
            emailRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [checkValidationTest]);

    useEffect(() => {
        if (checkValidationTest && phoneRef.current) {
            phoneRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [checkValidationTest]);

    useEffect(() => {
        if (checkValidationTest && customerNameRef.current) {
            customerNameRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [checkValidationTest]);

    useEffect(() => {
        if (checkValidationTest && passwordRef.current) {
            passwordRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [checkValidationTest]);

    useEffect(() => {
        if (checkValidationTest && passwordCheckRef.current) {
            passwordCheckRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [checkValidationTest]);

    useEffect(() => {
        localStorage.clear();
    }, []);

    const navigate = useNavigate();

    const [isFirstPage, setFirst] = useState(true);
    const [isCustomer, setCustomer] = useState(true);
    const [isManager, setManager] = useState(false);

    // 각 인풋 필드에 대한 ref 생성
    const nameRef = useRef(null);
    const userCodeRef = useRef(null);
    const emailRef = useRef(null);
    const phoneRef = useRef(null);
    const customerNameRef = useRef(null);
    const passwordRef = useRef(null);
    const passwordCheckRef = useRef(null);

    const [name, setName] = useState('');
    const [userCode, setUserCode] = useState('');
    const [customerCode, setCustomerCode] = useState(''); // 고객사 고유 코드 저장
    const [empNo, setEmpNo] = useState(''); // 담당자 고유 코드, 담당자 권한 저장

    const [userRole, setUserRole] = useState(''); // 화면에 출력할 권한명
    const [role, setRole] = useState(''); // 서버로 전송할 권한명
    const [roleFilter, setRoleFilter] = useState(null);

    const [showSuccessAlert, canShowSuccessAlert] = useState(false);
    const [showWarningAlert, canShowWarningAlert] = useState(false);
    const [showFailedAlert, canShowFailedAlert] = useState(false);
    const [message, setMessage] = useState('');

    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [customerName, setCustomerName] = useState('');
    const [department, setDept] = useState('IT');
    const [password, setPassword] = useState('');
    const [passwordCheck, setPasswordCheck] = useState('');

    const [checkValidationTest, setValidationTest] = useState(false);

    const [, setGlobalName] = useRecoilState(userName);
    const [, setGlobalEmail] = useRecoilState(userEmail);
    const [, setGlobalPassword] = useRecoilState(userPassword);

    const nameChange = (e) => setName(e.target.value);
    const userCodeChange = (e) => setUserCode(e.target.value);
    const customerNameChange = (e) => setCustomerName(e.target.value);
    const deptChange = (e) => setDept(e.target.value);
    const emailChange = (e) => setEmail(e.target.value);
    const phoneChange = (e) => setPhone(e.target.value);
    const passwordChange = (e) => setPassword(e.target.value);
    const passwordCheckChange = (e) => setPasswordCheck(e.target.value);

    const selectRoleFilter = (filter) => {
        setRoleFilter(filter);
    };

    const openNextStep = () => {
        nameRef.current.value = '';
        userCodeRef.current.value = '';
        setValidationTest(false);
        setFirst(false);
    };

    const setAuth = () => {
        // 담당자
        if (role) {
            if (!name) {
                setMessage('이름을 입력하세요.');
                return canShowWarningAlert(true); // 작성 중 이름 삭제한 경우
            } else if (userCode.substring(0, 3) !== 'EMP') {
                setMessage('유효하지 않은 코드입니다.');
                return canShowWarningAlert(true); // 작성 중 코드 삭제한 경우
            } else {
                openNextStep();
                return;
            }
        }

        if (isManager) {
            setMessage('권한을 선택하세요.');
            canShowWarningAlert(true);
            return;
        }

        // 고객사
        if (!role && !isManager) {
            if (!name) {
                setMessage('이름을 입력하세요.');
                return canShowWarningAlert(true); // 작성 중 이름 삭제한 경우
            } else if (!userCode) {
                setMessage('유효하지 않은 코드입니다.');
                return canShowWarningAlert(true); // 작성 중 코드 삭제한 경우
            } else if (userCode.substring(0, 3) === 'EMP') {
                setEmpNo(userCode);
                setManager(true);
                setCustomer(false);
            } else {
                setCustomerCode(userCode);
                setUserRole('고객사');
                openNextStep();
            }
        }
    };

    // 엔터 키 기능 (권한 조회 버튼 클릭)
    const enterKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            setValidationTest(true);
            setAuth();
        }
    };

    // 엔터 키 기능 (권한 부여 버튼 클릭)
    const _enterKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            setAuth();
        }
    };

    // 엔터 키 기능 (회원가입 버튼 클릭)
    const __enterKeyDown = async (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            setValidationTest(true);
            await GetAuth();
        }
    };

    // 회원가입 성공: 이름, 이메일, 비밀번호 atom에 저장
    const saveGlobalInfo = () => {
        setGlobalName(name);
        setGlobalEmail(email);
        setGlobalPassword(password);
    };

    // 고객사 회원가입 API
    const GetCustomerAuth = async () => {
        try {
            const response = await signUpApiByCustomers(
                name,
                email,
                password,
                phone,
                customerCode,
                customerName,
            );
            console.log('고객사 회원가입 성공: ', response.data);
            saveGlobalInfo();
            setMessage('회원가입이 완료되었습니다.');
            canShowSuccessAlert(true);
            setTimeout(() => {
                navigate('/login');
            }, '2000');
        } catch (error) {
            setMessage(error.response.data.message);
            canShowFailedAlert(true);
            console.log('고객사 회원가입 실패: ', error.response.data.message);
        }
    };

    // 담당자 회원가입 API
    const GetManagerAuth = async () => {
        try {
            const response = await signUpApiByManagers(
                name,
                email,
                password,
                phone,
                empNo,
                role,
                department,
            );
            console.log('담당자 회원가입 성공: ', response.data);
            saveGlobalInfo();
            setMessage('회원가입이 완료되었습니다.');
            canShowSuccessAlert(true);
            setTimeout(() => {
                navigate('/login');
            }, '2000');
        } catch (error) {
            setMessage(error.response.data.message);
            canShowFailedAlert(true);
            console.log('담당자 회원가입 실패: ', error.response.data.message);
        }
    };

    // 회원가입 API 요청
    const GetAuth = async () => {
        const wrongEmail = validateEmail(email);
        const wrongPhone = validatePhone(phone);
        const wrongCustomerName = validateCustomerName(customerName); // 고객사 전용
        const wrongPassword = validatePassword(password);
        const wrongMatch = validateMatch(password, passwordCheck);

        // 입력된 정보 중 유효하지 않은 정보가 있을 경우 경고 문구 출력
        if (role) {
            if (wrongEmail || wrongPhone || wrongPassword || wrongMatch) {
                return;
            }
            await GetManagerAuth();
            return;
        } else {
            if (
                wrongEmail ||
                wrongPhone ||
                wrongCustomerName ||
                wrongPassword ||
                wrongMatch
            ) {
                return;
            }
            await GetCustomerAuth();
            return;
        }
    };

    return (
        <div>
            <div className={SignUp}>
                <div>
                    {isFirstPage ? (
                        <>
                            <div>회원가입</div>
                            {/* 이름 & 고객사코드 & 고객사명 입력 창 */}
                            <div onKeyDown={_enterKeyDown}>
                                {JoinInput({
                                    margin: '0 0 24px 0',
                                    ref: nameRef,
                                    value: name,
                                    onChange: nameChange,
                                    onKeyDown: enterKeyDown,
                                    type: 'text',
                                    placeholder: '홍길동',
                                    categoryName: '이름',
                                    warningMsg:
                                        checkValidationTest &&
                                        validateName(name),
                                })}
                                {JoinInput({
                                    ref: userCodeRef,
                                    value: userCode,
                                    onChange: userCodeChange,
                                    onKeyDown: enterKeyDown,
                                    type: 'text',
                                    placeholder: 'ABC123',
                                    categoryName: '고유 코드',
                                    warningMsg:
                                        checkValidationTest &&
                                        validateUserCode(userCode),
                                })}
                                {isManager && (
                                    <>
                                        {RoleSelectButton({
                                            onClick: () => {
                                                selectRoleFilter('QUALITY');
                                                setUserRole('품질 담당자');
                                                setRole('QUALITY');
                                            },
                                            btnName: '품질 담당자',
                                            margin: '48px 0 0 0',
                                            backgroundColor:
                                                roleFilter === 'QUALITY'
                                                    ? '#03507d'
                                                    : '#ffffff',
                                            textColor:
                                                roleFilter === 'QUALITY'
                                                    ? '#ffffff'
                                                    : '#000000',
                                        })}
                                        {RoleSelectButton({
                                            onClick: () => {
                                                selectRoleFilter('SALES');
                                                setUserRole('판매 담당자');
                                                setRole('SALES');
                                            },
                                            btnName: '판매 담당자',
                                            margin: '48px 0 0 64px',
                                            backgroundColor:
                                                roleFilter === 'SALES'
                                                    ? '#03507d'
                                                    : '#ffffff',
                                            textColor:
                                                roleFilter === 'SALES'
                                                    ? '#ffffff'
                                                    : '#000000',
                                        })}
                                    </>
                                )}
                            </div>
                            <div onKeyDown={enterKeyDown}>
                                {/* 권한 조회 버튼, 해당 컴포넌트에서 '권한'은 Token에 의한 권한이 아닌 Role에 의한 권한입니다. */}
                                {!isManager &&
                                    CheckButton({
                                        btnName: '권한 조회',
                                        onClick: () => {
                                            setValidationTest(true);
                                            setAuth();
                                        },
                                    })}
                                {/* 권한 부여 버튼, 해당 컴포넌트에서 '권한'은 Token에 의한 권한이 아닌 Role에 의한 권한입니다. */}
                                {isManager &&
                                    CheckButton({
                                        btnName: '권한 부여',
                                        onClick: () => {
                                            setAuth();
                                        },
                                    })}
                            </div>
                            <WarningAlert
                                showAlert={showWarningAlert}
                                onClose={() => {
                                    canShowWarningAlert(false);
                                }}
                                message={message}
                                inert
                            />
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
                                    onKeyDown: __enterKeyDown,
                                    type: 'text',
                                    placeholder: '',
                                    categoryName: '권한',
                                    needCategory: true,
                                    ref: emailRef,
                                })}
                                {JoinInput({
                                    margin: '0 0 24px 0',
                                    value: email || '',
                                    onChange: emailChange,
                                    onKeyDown: __enterKeyDown,
                                    type: 'email',
                                    placeholder: 'poscodx@posco.co.kr',
                                    categoryName: '이메일',
                                    warningMsg:
                                        checkValidationTest &&
                                        validateEmail(email),
                                    ref: phoneRef,
                                })}
                                {JoinInput({
                                    margin: '0 0 24px 0',
                                    value: phone || '',
                                    onChange: phoneChange,
                                    onKeyDown: __enterKeyDown,
                                    type: 'tel',
                                    placeholder: '01012345678',
                                    categoryName: '전화번호',
                                    warningMsg:
                                        checkValidationTest &&
                                        validatePhone(phone),
                                    ref: customerNameRef,
                                })}
                                {isCustomer ? (
                                    JoinInput({
                                        margin: '0 0 24px 0',
                                        value: customerName,
                                        onChange: customerNameChange,
                                        onKeyDown: __enterKeyDown,
                                        type: 'text',
                                        placeholder: '(주)포스코',
                                        categoryName: '고객사명',
                                        warningMsg:
                                            checkValidationTest &&
                                            validateCustomerName(customerName),
                                        ref: passwordRef,
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
                                            <option value="HR">인사</option>
                                            <option value="SALES">판매</option>
                                            <option value="FINANCE">
                                                재무
                                            </option>
                                        </select>
                                    </>
                                )}
                                {JoinInput({
                                    margin: '0 0 24px 0',
                                    value: password || '',
                                    onChange: passwordChange,
                                    onKeyDown: __enterKeyDown,
                                    type: 'password',
                                    placeholder: '********',
                                    categoryName: '비밀번호',
                                    warningMsg:
                                        checkValidationTest &&
                                        validatePassword(password),
                                    ref: passwordCheckRef,
                                })}
                                {JoinInput({
                                    value: passwordCheck || '',
                                    onChange: passwordCheckChange,
                                    onKeyDown: __enterKeyDown,
                                    type: 'password',
                                    placeholder: '********',
                                    categoryName: '비밀번호 확인',
                                    warningMsg:
                                        checkValidationTest &&
                                        validateMatch(password, passwordCheck),
                                })}
                            </div>
                            {/* 회원가입 버튼 */}
                            <div>
                                {CheckButton({
                                    btnName: '회원가입',
                                    margin: '0 0 84px 0',
                                    onClick: async () => {
                                        setValidationTest(true);
                                        await GetAuth();
                                    },
                                })}
                            </div>
                            <SuccessAlert
                                showAlert={showSuccessAlert}
                                onClose={() => {
                                    canShowSuccessAlert(false);
                                }}
                                message={message}
                                inert
                            />
                            <WarningAlert
                                showAlert={showWarningAlert}
                                onClose={() => {
                                    canShowWarningAlert(false);
                                }}
                                message={message}
                                inert
                            />
                            <FailedAlert
                                showAlert={showFailedAlert}
                                onClose={() => {
                                    canShowFailedAlert(false);
                                }}
                                message={message}
                                inert
                            />
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Join;
