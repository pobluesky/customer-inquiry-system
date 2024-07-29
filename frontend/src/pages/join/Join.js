import React, { useRef, useState } from 'react';
import Button from '../../components/atoms/Button';
import Header from '../../components/atoms/Header';
import Input from '../../components/atoms/Input';

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
            console.log('품질관리');
            setRole('품질관리 담당자');
        } else if (roleMark === 'S') {
            console.log('판매관리');
            setRole('판매관리 담당자');
        } else {
            console.log('고객');
            setRole('고객');
        }
    };

    return (
        <div>
            <Header />
            <div style={{ textAlign: 'center' }}>
                {!check ? (
                    <>
                        <div style={{ color: '#03507D', fontSize: '36px', marginTop: '8vh' }}>회원가입</div>
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
                        <div style={{ color: '#03507D', fontSize: '36px', marginTop: '8vh' }} />
                        {/* 이름 & 사번 입력 창 */}
                        <Input category={'권한'} value={`${role}`}></Input>
                        <Input category={'이메일'} placeholder={'poscodx@posco.co.kr'} onChange={emailInput} value={email} />
                        <Input category={'비밀번호'} placeholder={'********'} onChange={passwordInput} value={password} />
                        <Input category={'비밀번호 확인'} placeholder={'********'} onChange={passwordInput} value={password} />

                        {/* 역할 구분 */}
                        {/* <div style={{ width: '360px', display: 'flex', justifyContent: 'space-around', marginTop: '4vh', marginLeft: 'auto', marginRight: 'auto', color: '#03507D', fontWeight: 'bold' }}>
                            <div style={{ display: 'flex', alignItems: 'center' }}><input type="checkbox" style={{ marginRight: '1vw', width: '20px', height: '20px' }} />포스코</div>
                            <div style={{ display: 'flex', alignItems: 'center' }}><input type="checkbox" style={{ marginRight: '1vw', width: '20px', height: '20px' }} />고객사</div>
                        </div> */}

                        {/* 회원가입 버튼 */}
                        <div style={{ marginTop: '4vh' }}>
                            <Button btnName={'회원가입'} width={'360px'} height={'44px'} margin={'12px'} backgroundColor={'#03507D'} textColor={'#EEEEEE'} borderRadius={'12px'} fontSize={'20px'} />
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default Join;
