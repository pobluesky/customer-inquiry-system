import React from 'react';
import Input from '../atoms/Input';
import { User_Account_Exsisting } from '../../assets/css/Auth.css';
import { getCookie } from '../../apis/utils/cookies';

export default function ExistingUserInfo({ userDetail }) {
    const role = getCookie('userRole');

    return (
        <div className={User_Account_Exsisting}>
            {role === 'customer' ? (
                <>
                    <div>
                        <div>이름</div>
                        <Input
                            width={'336px'}
                            height={'48px'}
                            padding={'0 0 0 20px'}
                            border={'solid 1px #c1c1c1'}
                            borderRadius={'12px'}
                            fontSize={'16px'}
                            value={userDetail.name}
                        />
                    </div>
                    <div>
                        <div>이메일</div>
                        <Input
                            width={'336px'}
                            height={'48px'}
                            padding={'0 0 0 20px'}
                            border={'solid 1px #c1c1c1'}
                            borderRadius={'12px'}
                            fontSize={'16px'}
                            value={userDetail.email}
                        />
                    </div>
                    <div>
                        <div>전화번호</div>
                        <Input
                            width={'336px'}
                            height={'48px'}
                            padding={'0 0 0 20px'}
                            border={'solid 1px #c1c1c1'}
                            borderRadius={'12px'}
                            fontSize={'16px'}
                            value={userDetail.phone}
                        />
                    </div>
                    <div>
                        <div>고객 코드</div>
                        <Input
                            width={'336px'}
                            height={'48px'}
                            padding={'0 0 0 20px'}
                            border={'solid 1px #c1c1c1'}
                            borderRadius={'12px'}
                            fontSize={'16px'}
                            value={userDetail.customerCode}
                        />
                    </div>
                    <div>
                        <div>고객사명</div>
                        <Input
                            width={'336px'}
                            height={'48px'}
                            padding={'0 0 0 20px'}
                            border={'solid 1px #c1c1c1'}
                            borderRadius={'12px'}
                            fontSize={'16px'}
                            value={userDetail.customerName}
                        />
                    </div>
                </>
            ) : (
                <>
                    <div>
                        <div>이름</div>
                        <Input
                            width={'336px'}
                            height={'48px'}
                            padding={'0 0 0 20px'}
                            border={'solid 1px #c1c1c1'}
                            borderRadius={'12px'}
                            fontSize={'16px'}
                            value={userDetail.name}
                        />
                    </div>
                    <div>
                        <div>이메일</div>
                        <Input
                            width={'336px'}
                            height={'48px'}
                            padding={'0 0 0 20px'}
                            border={'solid 1px #c1c1c1'}
                            borderRadius={'12px'}
                            fontSize={'16px'}
                            value={userDetail.email}
                        />
                    </div>
                    <div>
                        <div>전화번호</div>
                        <Input
                            width={'336px'}
                            height={'48px'}
                            padding={'0 0 0 20px'}
                            border={'solid 1px #c1c1c1'}
                            borderRadius={'12px'}
                            fontSize={'16px'}
                            value={userDetail.phone}
                        />
                    </div>
                </>
            )}
        </div>
    );
}
