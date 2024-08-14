import React from 'react';
import { FirstIntro, SecondIntro, ThirdIntro, FourthIntro } from './section';
import Header from '../../components/mocules/Header';

function Intro() {
    return (
        <>
            <Header
                user={false}
                login={false}
                inq={true}
                voc={true}
                dashboard={true}
            />
            <FirstIntro />
            <SecondIntro />
            <ThirdIntro />
            <FourthIntro />
        </>
    );
}

export default Intro;
