import React, { useEffect } from 'react';
import { FirstIntro, SecondIntro, ThirdIntro, FourthIntro } from './section';

import { useRecoilValue } from 'recoil';
import { getAuthByRole, getUserEmail } from '../../index';

function Intro() {
    const currentUserRole = useRecoilValue(getAuthByRole);
    const currentUserEmail = useRecoilValue(getUserEmail);

    useEffect(() => {
        console.log(
            `현재 로그인 중인 유저 정보: *${currentUserRole}*, *${currentUserEmail}*`,
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
