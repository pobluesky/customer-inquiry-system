import React, { useEffect } from 'react';
import { FirstIntro, SecondIntro, ThirdIntro, FourthIntro } from './section';
import { getCookie } from '../../apis/utils/cookies';
import { useRecoilValue } from 'recoil';
import { getUserEmail } from '../../index';

function Intro() {
    const currentUserRole = getCookie('userRole') || '';
    const currentUserEmail = useRecoilValue(getUserEmail);

    useEffect(() => {
        console.log(
            `현재 로그인 중인 유저 정보: *${currentUserRole}*, *${currentUserEmail}*`,
        );
    }, [currentUserRole]);

    return (
        <>
            <FirstIntro />
            <SecondIntro />
            <ThirdIntro />
            <FourthIntro />
        </>
    );
}

export default Intro;