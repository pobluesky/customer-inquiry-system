import React, { useEffect, useState } from 'react';
import ExistingUserInfo from '../organisms/ExistingUserInfo';
import EditingUserInfo from '../organisms/EditingUserInfo';
import { CheckButton } from '../molecules/JoinButton';
import { User_Account } from '../../assets/css/Auth.css';
import { getCookie } from '../../apis/utils/cookies';
import {
    getUserInfoByCustomers,
    getUserInfoByManagers,
} from '../../apis/api/auth';

export default function UserAccountOverview() {
    const userId = getCookie('userId');
    const role = getCookie('userRole');

    const [edit, setEdit] = useState(true);
    const [completeEdit, setCompleteEdit] = useState(false);
    const [userDetail, setUserDetail] = useState([]);

    // 사용자 상세 정보 조회 API
    const fetchGetUserInfo =
        role === 'customer'
            ? async () => {
                  try {
                      const response = await getUserInfoByCustomers(userId);
                      console.log('고객사 상세 정보', response.data.data);
                      setUserDetail(response.data.data);
                  } catch (error) {
                      console.error('고객사 상세 정보 조회 실패: ', error);
                  }
              }
            : async () => {
                  try {
                      const response = await getUserInfoByManagers(userId);
                      console.log('담당자 상세 정보', response.data.data);
                      setUserDetail(response.data.data);
                  } catch (error) {
                      console.error('담당자 상세 정보 조회 실패: ', error);
                  }
              };

    useEffect(() => {
        fetchGetUserInfo();
    }, []);

    return (
        <div className={User_Account}>
            {edit ? (
                <ExistingUserInfo userDetail={userDetail} />
            ) : (
                <EditingUserInfo
                    userDetail={userDetail}
                    completeEdit={completeEdit}
                />
            )}
            {edit ? (
                <CheckButton
                    btnName={'계정 정보 수정'}
                    onClick={() => {
                        setEdit(!edit);
                    }}
                />
            ) : (
                <CheckButton
                    btnName={'수정 완료'}
                    onClick={() => {
                        setCompleteEdit(true);
                    }}
                />
            )}
        </div>
    );
}
