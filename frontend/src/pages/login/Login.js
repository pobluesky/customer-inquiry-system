import React from 'react';
import Button from '../../components/atoms/Button';
import Header from '../../components/mocules/Header';
import Input from '../../components/atoms/JoinInput';
import { Container_Login, Login_Title, Login_Email_Password, Join_Line, Join_Link } from '../../assets/css/Member.css';

function Login() {
    return (
        <div>
            <Header user={true} login={false} inq={true} voc={true} dashboard={true} />
            <div className={Container_Login}>
                <div className={Login_Title}>로그인</div>
                <div className={Login_Email_Password}>이메일과 비밀번호를 입력해주세요.</div>

                {/* 이메일 & 비밀번호 입력 창 */}
                <Input category={'이메일'} placeholder={'poscodx@posco.co.kr'} />
                <Input category={'비밀번호'} placeholder={'********'} />

                {/* 로그인 완료 & 비밀번호 찾기 버튼 */}
                <div style={{ marginTop: '4vh' }}>
                    <Button btnName={'로그인'} width={'168px'} height={'44px'} margin={'12px'} backgroundColor={'#03507D'} textColor={'#EEEEEE'} fontSize={'20px'} border={'solid #c1c1c1 1px'} borderRadius={'12px'} />
                    <Button btnName={'비밀번호 찾기'} width={'168px'} height={'44px'} margin={'12px'} backgroundColor={'#EEEEEE'} textColor={'#03507D'} fontSize={'20px'} border={'solid #c1c1c1 1px'} borderRadius={'12px'} />
                </div>

                {/* 회원가입 링크 */}
                <br />
                <hr className={Join_Line} />
                <br />
                <a href="/join" className={Join_Link}>
                    회원이 아니신가요?
                </a>
            </div>
        </div>
    );
}

export default Login;
