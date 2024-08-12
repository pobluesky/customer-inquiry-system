import React, { useRef, useState } from 'react';
import Button from '../../components/atoms/Button';
import Header from '../../components/mocules/Header';
import Input from '../../components/atoms/Input';
import { SignUp } from '../../assets/css/Auth.css';

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
                            {/* 이름 & 사번 입력 창 */}
                            <div>
                                <Input
                                    width={'336px'}
                                    height={'48px'}
                                    margin={'0 0 24px 0'}
                                    padding={'0 0 0 20px'}
                                    border={'solid 1px #c1c1c1'}
                                    borderRadius={'12px'}
                                    fontSize={'20px'}
                                    needCategory={true}
                                    categoryName={'이름'}
                                    categoryWidth={'360px'}
                                    categoryColor={'#03507d'}
                                    CategoryFontWeight={'600'}
                                    categoryMargin={'0 auto 12px auto'}
                                    categoryTextAlign={'left'}
                                    placeholder={'김숙하'}
                                    onChange={nameInput}
                                    ref={nameRef}
                                />
                                <Input
                                    width={'336px'}
                                    height={'48px'}
                                    padding={'0 0 0 20px'}
                                    border={'solid 1px #c1c1c1'}
                                    borderRadius={'12px'}
                                    fontSize={'20px'}
                                    needCategory={true}
                                    categoryName={'사번'}
                                    categoryWidth={'360px'}
                                    categoryColor={'#03507d'}
                                    CategoryFontWeight={'600'}
                                    categoryMargin={'0 auto 12px auto'}
                                    categoryTextAlign={'left'}
                                    placeholder={'123456789'}
                                    onChange={noInput}
                                    ref={noRef}
                                />
                            </div>

                            {/* 역할 조회 버튼 */}
                            <div>
                                <Button
                                    onClick={() => {
                                        findRole();
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
                            {/* 이름 & 사번 입력 창 */}
                            <div>
                                <Input
                                    width={'336px'}
                                    height={'48px'}
                                    padding={'0 0 0 20px'}
                                    border={'solid 1px #c1c1c1'}
                                    borderRadius={'12px'}
                                    fontSize={'20px'}
                                    needCategory={true}
                                    categoryName={'권한'}
                                    categoryWidth={'360px'}
                                    categoryColor={'#03507d'}
                                    CategoryFontWeight={'600'}
                                    categoryMargin={'0 auto 12px auto'}
                                    categoryTextAlign={'left'}
                                    value={`${role}`}
                                />
                                <Input
                                    width={'336px'}
                                    height={'48px'}
                                    margin={'0 0 24px 0'}
                                    padding={'0 0 0 20px'}
                                    border={'solid 1px #c1c1c1'}
                                    borderRadius={'12px'}
                                    fontSize={'20px'}
                                    needCategory={true}
                                    categoryName={'이메일'}
                                    categoryWidth={'360px'}
                                    categoryColor={'#03507d'}
                                    CategoryFontWeight={'600'}
                                    categoryMargin={'0 auto 12px auto'}
                                    categoryTextAlign={'left'}
                                    placeholder={'poscodx@posco.co.kr'}
                                    onChange={emailInput}
                                    value={email}
                                />
                                <Input
                                    width={'336px'}
                                    height={'48px'}
                                    margin={'0 0 24px 0'}
                                    padding={'0 0 0 20px'}
                                    border={'solid 1px #c1c1c1'}
                                    borderRadius={'12px'}
                                    fontSize={'20px'}
                                    needCategory={true}
                                    categoryName={'비밀번호'}
                                    categoryWidth={'360px'}
                                    categoryColor={'#03507d'}
                                    CategoryFontWeight={'600'}
                                    categoryMargin={'0 auto 12px auto'}
                                    categoryTextAlign={'left'}
                                    placeholder={'********'}
                                    onChange={passwordInput}
                                    value={password}
                                />
                                <Input
                                    width={'336px'}
                                    height={'48px'}
                                    margin={'0 0 0 0'}
                                    padding={'0 0 0 20px'}
                                    border={'solid 1px #c1c1c1'}
                                    borderRadius={'12px'}
                                    fontSize={'20px'}
                                    needCategory={true}
                                    categoryName={'비밀번호 확인'}
                                    categoryWidth={'360px'}
                                    categoryColor={'#03507d'}
                                    CategoryFontWeight={'600'}
                                    categoryMargin={'0 auto 12px auto'}
                                    categoryTextAlign={'left'}
                                    placeholder={'********'}
                                    onChange={passwordInput}
                                    value={password}
                                />
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
