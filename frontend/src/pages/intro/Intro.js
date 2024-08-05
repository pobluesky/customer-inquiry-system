import React from 'react';
import { FirstIntro, SecondIntro, ThirdIntro, FourthIntro } from './section';

function Intro() {

  return (
      <>{/*
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
        <FirstIntro/>
        <SecondIntro/>
        <ThirdIntro/>
        <FourthIntro/>
      </>
  );
}

export default Intro;
