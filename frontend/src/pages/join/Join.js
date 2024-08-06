import React, { useRef, useState } from 'react';
import Button from '../../components/atoms/Button';
import Header from '../../components/mocules/Header';
import Input from '../../components/atoms/JoinInput';
import { Container_Join, Join_Title, Join_Name_No } from '../../assets/css/Member.css';

function Join() {
    const nameRef = useRef(null);
    const noRef = useRef(null);
    const [check, setCheck] = useState(false);
    const [, setName] = useState('');
    const [no, setNo] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');

    /* 입력 값 저장 */
    const nameInput = (e) => setName(e.target.value);
    const noInput = (e) => setNo(e.target.value);
    const emailInput = (e) => setEmail(e.target.value);
    const passwordInput = (e) => setPassword(e.target.value);

    /* 입력 창 초기화 */
    const inputClear = () => {
        nameRef.current.value = null;
        noRef.current.value = null;
    };

    /* 역할 구분 [품질, 판매, 고객] */
    const findRole = () => {
        const roleMark = no.substring(0, 1);
        if (roleMark === 'Q') {
            setRole('품질관리 담당자');
        } else if (roleMark === 'S') {
            setRole('판매관리 담당자');
        } else {
            setRole('고객');
        }
    };

    return (
        <div>
            <Header login={false} inq={true} voc={true} dashboard={true} />
            <div className={Container_Join}>
                {!check ? (
                    <>
                        <div className={Join_Title}>회원가입</div>
                        {/* 이름 & 사번 입력 창 */}
                        <div style={{ marginTop: '8vh' }} />
                        <Input category={'이름'} placeholder={'김숙하'} onChange={nameInput} ref={nameRef} />
                        <Input category={'사번'} placeholder={'123456789'} onChange={noInput} ref={noRef} />

                        {/* 역할 조회 버튼 */}
                        <div style={{ marginTop: '4vh' }}>
                            <Button
                                onClick={() => {
                                    findRole();
                                    inputClear();
                                    setCheck(true);
                                }}
                                btnName={'역할 조회'}
                                width={'360px'}
                                height={'44px'}
                                margin={'12px'}
                                backgroundColor={'#03507D'}
                                textColor={'#EEEEEE'}
                                borderRadius={'12px'}
                                fontSize={'20px'}
                            />
                        </div>
                    </>
                ) : (
                    <>
                        <div className={Join_Name_No} style={{ marginTop: '8vh' }} />
                        {/* 이름 & 사번 입력 창 */}
                        <Input category={'권한'} value={`${role}`}></Input>
                        <Input category={'이메일'} placeholder={'poscodx@posco.co.kr'} onChange={emailInput} value={email} />
                        <Input category={'비밀번호'} placeholder={'********'} onChange={passwordInput} value={password} />
                        <Input category={'비밀번호 확인'} placeholder={'********'} onChange={passwordInput} value={password} />

                        {/* 회원가입 버튼 */}
                        <div style={{ marginTop: '4vh' }}>
                            <Button btnName={'회원가입'} width={'360px'} height={'44px'} margin={'12px'} backgroundColor={'#03507D'} textColor={'#EEEEEE'} fontSize={'20px'} border={'solid #c1c1c1 1px'} borderRadius={'12px'} />
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default Join;
