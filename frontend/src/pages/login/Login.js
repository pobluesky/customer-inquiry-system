import React from 'react';
import Button from '../../components/atoms/Button';
import Header from '../../components/mocules/Header';
import Input from '../../components/atoms/JoinInput';

function Login() {
    return (
        <div>
            <Header login={false} inq={true} voc={true} dashboard={true} />
            <div style={{ textAlign: 'center' }}>
                <div style={{ color: '#03507D', fontSize: '36px', marginTop: '8vh' }}>로그인</div>
                <div style={{ color: '#03507D', marginTop: '4vh' }}>이메일과 비밀번호를 입력해주세요.</div>

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
                <hr style={{ color: '#c1c1c1', width: '28vw' }} />
                <br />
                <a href="/join" style={{ color: '#03507D', fontSize: '12px' }}>
                    회원이 아니신가요?
                </a>
            </div>
        </div>
    );
}

export default Login;
