import React, { useEffect } from 'react';
import { FirstIntro, SecondIntro, ThirdIntro, FourthIntro } from './section';

import { useRecoilValue } from 'recoil';
import { getAuthByRole } from '../../index';

function Intro() {
    const currentUserRole = useRecoilValue(getAuthByRole); // selector로부터 계산된 값 읽기

    useEffect(() => {
        console.log(
            `현재 로그인 중인 유저의 권한은 *${currentUserRole}* 입니다.`,
        );
    }, [currentUserRole]);

    return (
        <>
            {/*
        <div>
          <Link to="/login">로그인</Link>
        </div>
        <div>
          <Link to="/join">회원가입</Link>
        </div>
        <div>
          <Link to="/inq">Inquiry</Link>
        </div>
        <div>
          <Link to="/voc">VoC</Link>
        </div>
        <div>
          <Link to="/dashboard">DashBoard</Link>
        </div>
        */}
            <FirstIntro />
            <SecondIntro />
            <ThirdIntro />
            <FourthIntro />
        </>
    );
}

export default Intro;
