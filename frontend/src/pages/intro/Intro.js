import React, { useEffect } from 'react';
import { FirstIntro, SecondIntro, ThirdIntro, FourthIntro } from './section';

import { useRecoilValue } from 'recoil';
import { getAuthByRole, getUserEmail, getUserName } from '../../index';

function Intro() {
    const currentUserRole = useRecoilValue(getAuthByRole); // selector로부터 계산된 값 읽기
    const currentUserName = useRecoilValue(getUserName); // selector로부터 계산된 값 읽기
    const currentUserEmail = useRecoilValue(getUserEmail); // selector로부터 계산된 값 읽기

    useEffect(() => {
        console.log(
            `현재 로그인 중인 유저 정보: *${currentUserRole}*, *${currentUserName}*, *${currentUserEmail}*`,
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