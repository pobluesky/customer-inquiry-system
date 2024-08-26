import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import JoinInput from '../../components/molecules/JoinInput';
import {
    CheckButton,
    RoleSelectButton,
} from '../../components/molecules/JoinButton';
import { SignUp } from '../../assets/css/Auth.css';
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
import { useRecoilState, useRecoilValue } from 'recoil';
import {
    userName,
    userEmail,
    userPassword,
    joinErrorMsg,
    getJoinErrorMsg,
} from '../../index';
import {
    JoinCompleteAlert,
    JoinFailedAlert,
    ManagerRoleIsNullAlert,
} from '../../utils/actions';

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
    const [showAlert, canShowAlert] = useState(false); // 역할 미선택 시 경고

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

    const [, setJoinErrorMsg] = useRecoilState(joinErrorMsg);
    const currentJoinErrorMsg = useRecoilValue(getJoinErrorMsg);
    const [tryJoin, setTryJoin] = useState(false);
    const [resetAtom, setResetAtom] = useState(false);

    // 고유 코드를 통해 고객사와 담당자를 구분
    const getRoleAndSetNewForm = () => {
        const wrongName = validateName(name);
        const wrongCode = validateUserCode(userCode);

        if (wrongName || wrongCode) {
            return;
        }

        const roleActions = {
            EMP: () => {
                setEmpNo(userCode);
                setManager(true);
                setCustomer(false);
            },
            CUS: () => {
                setCustomerCode(userCode);
                setUserRole('고객사');
                setFirst(false);
            },
        };

        const codePrefix = userCode.substring(0, 3);
        roleActions[codePrefix]?.();

        // 입력 값 초기화: 역할 선택이 완료되기 전에는 초기화하지 않음
        if (codePrefix === 'CUS') {
            nameRef.current.value = '';
            userCodeRef.current.value = '';
            setValidationTest(false);
        }
    };

    // 엔터 키 기능 (권한 조회 버튼 클릭)
    const enterKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            setValidationTest(true);
            getRoleAndSetNewForm();
        }
    };

    // 엔터 키 기능 (권한 부여 버튼 클릭)
    const _enterKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            if (role && isManager) {
                setFirst(false);
                setValidationTest(false);
            } else if (!role && isManager) {
                canShowAlert(true);
            }
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

    // 회원가입 실패: 새로고침 시 경고 메시지 초기화
    useEffect(() => {
        setJoinErrorMsg('');
        setResetAtom(true);
    }, []);

    useEffect(() => {
        if (resetAtom && currentJoinErrorMsg) {
            canShowAlert(true);
        }
    }, [resetAtom, tryJoin]);

    useEffect(() => {
        if (resetAtom && currentJoinErrorMsg) {
            JoinFailedAlert(currentJoinErrorMsg);
        }
    }, [tryJoin]);

    // 회원가입 성공: 로그인 페이지로 이동
    const goToLogin = (result) => {
        if (result.success) {
            saveGlobalInfo();
            JoinCompleteAlert();
            setTimeout(() => {
                navigate('/login');
            }, '2000');
            return;
        }
        setTryJoin(!tryJoin);
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
            const result = await signUpApiByCustomers(
                name,
                email,
                password,
                phone,
                customerCode,
                customerName,
                setJoinErrorMsg,
            );
            console.log('고객사 회원가입 결과', result.success);
            goToLogin(result);
        } catch (error) {}
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
                setJoinErrorMsg,
            );
            console.log('담당자 회원가입 결과', result.success);
            goToLogin(result);
        } catch (error) {}
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
                                                setUserRole('품질 담당자');
                                                setRole('QUALITY');
                                            },
                                            btnName: '품질 담당자',
                                            margin: '48px 0 0 0',
                                        })}
                                        {RoleSelectButton({
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
                            <div onKeyDown={enterKeyDown}>
                                {/* 권한 조회 버튼, 해당 컴포넌트에서 '권한'은 Token에 의한 권한이 아닌 Role에 의한 권한입니다. */}
                                {!isManager &&
                                    CheckButton({
                                        btnName: '권한 조회',
                                        onClick: () => {
                                            setValidationTest(true);
                                            getRoleAndSetNewForm();
                                        },
                                    })}
                                {/* 권한 부여 버튼, 해당 컴포넌트에서 '권한'은 Token에 의한 권한이 아닌 Role에 의한 권한입니다. */}
                                {isManager &&
                                    CheckButton({
                                        btnName: '권한 부여',
                                        onClick: () => {
                                            if (role) {
                                                setFirst(false);
                                            } else {
                                                canShowAlert(true);
                                            }
                                        },
                                    })}
                            </div>
                            <ManagerRoleIsNullAlert
                                showAlert={showAlert}
                                onClose={() => {
                                    canShowAlert(false);
                                }}
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
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Join;
