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
    };

    const signUpAlert = () => {
        if (auth.success) {
            Swal.fire({ icon: 'success', title: '회원가입 완료' });
        } else {
            Swal.fire({ icon: 'error', title: '이미 존재하는 회원입니다.' });
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
                            {/* 이름 & 고객사코드 & 고객사명 입력 창 */}
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
                                    onChange={nameChange}
                                    type={'text'}
                                    ref={nameRef}
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
                                    categoryName={'고객사 코드'}
                                    categoryWidth={'360px'}
                                    categoryColor={'#03507d'}
                                    CategoryFontWeight={'600'}
                                    categoryMargin={'0 auto 12px auto'}
                                    categoryTextAlign={'left'}
                                    placeholder={'CUST100'}
                                    onChange={customerCodeChange}
                                    type={'text'}
                                    ref={customerCodeRef}
                                />
                                <Input
                                    width={'336px'}
                                    height={'48px'}
                                    padding={'0 0 0 20px'}
                                    border={'solid 1px #c1c1c1'}
                                    borderRadius={'12px'}
                                    fontSize={'20px'}
                                    needCategory={true}
                                    categoryName={'고객사명'}
                                    categoryWidth={'360px'}
                                    categoryColor={'#03507d'}
                                    CategoryFontWeight={'600'}
                                    categoryMargin={'0 auto 12px auto'}
                                    categoryTextAlign={'left'}
                                    placeholder={'손흥민 주식회사'}
                                    onChange={customerNameChange}
                                    type={'text'}
                                    ref={customerNameRef}
                                />
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
                                    value={userRole || ''}
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
                                    onChange={emailChange}
                                    type={'email'}
                                    value={email || ''}
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
                                    categoryName={'전화번호'}
                                    categoryWidth={'360px'}
                                    categoryColor={'#03507d'}
                                    CategoryFontWeight={'600'}
                                    categoryMargin={'0 auto 12px auto'}
                                    categoryTextAlign={'left'}
                                    placeholder={'01012345678'}
                                    onChange={phoneChange}
                                    type={'text'}
                                    value={phone || ''}
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
                                    onChange={passwordChange}
                                    type={'password'}
                                    value={password || ''}
                                />
                                <Input
                                    width={'336px'}
                                    height={'48px'}
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
                                    onChange={passwordCheckChange}
                                    type={'password'}
                                    value={passwordCheck || ''}
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
                                    onClick={() => {{
                                        passwordCheck === password ? ('') : ('')
                                    }
                                        setData([
                                            ...data,
                                            email,
                                            phone,
                                            password,
                                        ]);
                                        fetchGetAuth(...data);
                                        signUpAlert();
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
