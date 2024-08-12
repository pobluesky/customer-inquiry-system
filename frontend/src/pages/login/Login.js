import React from 'react';
import Button from '../../components/atoms/Button';
import Header from '../../components/mocules/Header';
import Input from '../../components/atoms/Input';
import { SignIn } from '../../assets/css/Auth.css';

function Login() {
    return (
        <div>
            <Header
                user={true}
                login={false}
                inq={true}
                voc={true}
                dashboard={true}
            />
            <div className={SignIn}>
                <div>
                    <div>로그인</div>
                    <div>이메일과 비밀번호를 입력해주세요.</div>

                    {/* 이메일 & 비밀번호 입력 창 */}
                    <div>
                        <Input
                            width={'336px'}
                            height={'48px'}
                            margin={'0 0 24px 0'}
                            padding={'0 0 0 20px'}
                            border={'solid 1px #c1c1c1'}
                            borderRadius={'12px'}
                            fontSize={'20px'}
                            needCategory={true}
                            categoryName={'이메일'}
                            categoryWidth={'360px'}
                            categoryColor={'#03507d'}
                            CategoryFontWeight={'600'}
                            categoryMargin={'0 auto 12px auto'}
                            categoryTextAlign={'left'}
                            placeholder={'poscodx@posco.co.kr'}
                            // onChange={onChange}
                            // ref={ref}
                        />
                    </div>
                    <div>
                        <Input
                            width={'336px'}
                            height={'48px'}
                            padding={'0 0 0 20px'}
                            border={'solid 1px #c1c1c1'}
                            borderRadius={'12px'}
                            fontSize={'20px'}
                            needCategory={true}
                            categoryName={'비밀번호'}
                            categoryWidth={'360px'}
                            categoryColor={'#03507d'}
                            CategoryFontWeight={'600'}
                            categoryMargin={'0 auto 12px auto'}
                            categoryTextAlign={'left'}
                            placeholder={'********'}
                            // onChange={onChange}
                            // ref={ref}
                        />
                    </div>

                    {/* 로그인 완료 & 비밀번호 찾기 버튼 */}
                    <div style={{ marginTop: '4vh' }}>
                        <div>
                            <Button
                                btnName={'로그인'}
                                width={'168px'}
                                height={'44px'}
                                margin={'12px'}
                                backgroundColor={'#03507D'}
                                textColor={'#EEEEEE'}
                                fontSize={'20px'}
                                border={'solid #c1c1c1 1px'}
                                borderRadius={'12px'}
                            />
                        </div>
                        <div>
                            <Button
                                btnName={'비밀번호 찾기'}
                                width={'168px'}
                                height={'44px'}
                                margin={'12px'}
                                backgroundColor={'#EEEEEE'}
                                textColor={'#03507D'}
                                fontSize={'20px'}
                                border={'solid #c1c1c1 1px'}
                                borderRadius={'12px'}
                            />
                        </div>
                    </div>

                    {/* 회원가입 링크 */}
                    <div>
                        <a href="/join">회원이 아니신가요?</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
