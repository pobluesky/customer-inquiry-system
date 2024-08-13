import React, { useState, useEffect } from 'react';
import Button from '../../components/atoms/Button';
import Header from '../../components/mocules/Header';
import Input from '../../components/atoms/JoinInput';
import {
    Container_Login,
    Login_Title,
    Login_Email_Password,
    Join_Line,
    Join_Link,
} from '../../assets/css/Member.css';

function Login() {
    const [auth, setAuth] = useState([]);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const emailChange = (e) => setEmail(e.target.value);
    const passwordChange = (e) => setPassword(e.target.value);

    const fetchGetAuth = async () => {
        try {
            const result = await signInApi(email, password);
            setAuth(result); //
        } catch (error) {
            console.error('로그인 실패:', error);
            Swal.fire({ icon: 'error', title: '로그인 실패' });
        }
    };

    useEffect(() => {
        if (auth.success) {
            Swal.fire({ icon: 'success', title: '로그인되었습니다.' });
        }
    }, [auth]);

    const renderInput = ({
        value,
        onChange,
        type,
        placeholder,
        categoryName,
        needCategory = true,
    }) => (
        <Input
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
                user={true}
                login={false}
                inq={true}
                voc={true}
                dashboard={true}
            />
            <div className={SignIn}>
                <div>
                    <div>로그인</div>
                    <div>이메일과 비밀번호를 입력해주세요.</div>
                    {/* 이메일, 비밀번호 입력 창 */}
                    <div>
                        {renderInput({
                            value: email,
                            onChange: emailChange,
                            type: 'email',
                            placeholder: 'poscodx@posco.co.kr',
                            categoryName: '이메일',
                        })}
                    </div>
                    <div>
                        {renderInput({
                            value: password,
                            onChange: passwordChange,
                            type: 'password',
                            placeholder: '********',
                            categoryName: '비밀번호',
                        })}
                    </div>
                    {/* 로그인 완료, 비밀번호 찾기 버튼 */}
                    <div style={{ marginTop: '4vh' }}>
                        <div>
                            <Button
                                btnName={'로그인'}
                                width={'168px'}
                                height={'44px'}
                                margin={'12px'}
                                backgroundColor={'#03507D'}
                                textColor={'#EEEEEE'}
                                fontSize={'20px'}
                                border={'solid #c1c1c1 1px'}
                                borderRadius={'12px'}
                                onClick={fetchGetAuth}
                            />
                        </div>
                        <div>
                            <Button
                                btnName={'비밀번호 찾기'}
                                width={'168px'}
                                height={'44px'}
                                margin={'12px'}
                                backgroundColor={'#EEEEEE'}
                                textColor={'#03507D'}
                                fontSize={'20px'}
                                border={'solid #c1c1c1 1px'}
                                borderRadius={'12px'}
                            />
                        </div>
                    </div>
                    {/* 회원가입 링크 */}
                    <div>
                        <a href="/join">회원이 아니신가요?</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
