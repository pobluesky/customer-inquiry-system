import React from 'react';
import Header from '../../components/atoms/Header';
import Input from '../../components/atoms/Input';
import Button from '../../components/atoms/Button';
import mainlogo from '../../assets/icon/mainlogo.svg';

function Login() {
    console.log('***Login Page Rendered***');

    return (
        <div>
            <Header />
            <div style={{ textAlign: 'center', marginTop: 'auto' }}>
                <img src={mainlogo} alt="posco" width="300px" />
                <br></br>
                로그인
                <br></br>
                이메일과 비밀번호를 입력해주세요.
                <Input category={'이메일'} placeholder={'poscodx@posco.co.kr'} />
                <Input category={'비밀번호'} placeholder={'********'} />
                <div>역할<input type="checkbox" />포스코<input type="checkbox" />고객사</div>
                <Button name={'로그인'} backgroundColor={'#03507D'} textColor={'#EEEEEE'} />
                <Button name={'비밀번호 찾기'} backgroundColor={'#EEEEEE'} textColor={'#03507D'} />
            </div>
        </div>
    );
}

export default Login;
