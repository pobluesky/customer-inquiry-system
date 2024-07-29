import React from 'react';
import Header from '../../components/atoms/Header';
import Input from '../../components/atoms/Input';
import Button from '../../components/atoms/Button';
import mainlogo from '../../assets/image/mainlogo.svg';

function Login() {
    console.log('***Login Page Rendered***');

    return (
        <div>
            <Header />
            <div style={{ textAlign: 'center' }}>
                {/* Main Logo */}
                <img src={mainlogo} alt="posco" width="240px" style={{ marginTop: '8vh' }} />

                {/* 로그인, 이메일과 비밀번호를 입력해주세요. */}
                <div style={{ color: '#03507D', fontSize: '36px', marginTop: '4vh' }}>로그인</div>
                <div style={{ color: '#03507D', marginTop: '4vh' }}>이메일과 비밀번호를 입력해주세요.</div>

                {/* 이메일, 비밀번호 입력 창 */}
                <Input category={'이메일'} placeholder={'poscodx@posco.co.kr'} />
                <Input category={'비밀번호'} placeholder={'********'} />

                {/* 역할 구분 */}
                {/* <div style={{ width: '360px', display: 'flex', justifyContent: 'space-around', marginTop: '4vh', marginLeft: 'auto', marginRight: 'auto', color: '#03507D', fontWeight: 'bold' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}><input type="checkbox" style={{ marginRight: '1vw', width: '20px', height: '20px' }} />포스코</div>
                    <div style={{ display: 'flex', alignItems: 'center' }}><input type="checkbox" style={{ marginRight: '1vw', width: '20px', height: '20px' }} />고객사</div>
                </div> */}

                <div style={{ marginTop: '4vh' }}>
                    <Button btnName={'로그인'} backgroundColor={'#03507D'} textColor={'#EEEEEE'} />
                    <Button btnName={'비밀번호 찾기'} backgroundColor={'#EEEEEE'} textColor={'#03507D'} />
                </div>
                
                <br />
                <hr style={{ color: '#c1c1c1', width: '28vw' }} />
                <br />
                <div style={{ color: '#03507D', fontSize: '12px' }}>회원이 아니신가요?</div>
                {/* <Button btnName={'회원가입'} backgroundColor={'#EEEEEE'} textColor={'#03507D'} /> */}
            </div>
        </div>
    );
}

export default Login;
