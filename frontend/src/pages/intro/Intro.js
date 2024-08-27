import React, { useEffect } from 'react';
import { FirstIntro, SecondIntro, ThirdIntro, FourthIntro } from './section';
import { getCookie } from '../../apis/utils/cookies';
import { useRecoilValue } from 'recoil';
import { getUserEmail, getUserName } from '../../index';

function Intro() {
    const currentUserRole = getCookie('userRole') || '';
    const currentUserEmail = useRecoilValue(getUserEmail);
    const currentUserName = useRecoilValue(getUserName);

    useEffect(() => {
        console.log(
            `현재 로그인 중인 유저 정보: *쿠키 역할: ${currentUserRole}*, *전역 이메일: ${currentUserEmail}*, *전역 이름: ${currentUserName}*`,
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