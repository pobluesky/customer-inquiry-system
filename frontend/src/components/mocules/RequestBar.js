import React from 'react';
import Button from '../atoms/Button';
import { actions } from "../../utils/actions";

function RequestBar({ requestBarTitle, role }) {

  const buttonConfig = {
    "Inquiry 등록": ["초기화", "임시저장", "삭제", "검토의뢰"],
    "Inquiry 상세조회 및 영업검토": {
      "customer": ["품질검토요청", "1차검토완료", "최종검토완료", "닫기"],
      "salesManager": ["품질검토요청", "1차검토완료", "최종검토완료", "닫기"],
      "qualitiesManager": ["품질검토완료", "닫기"]
    },
    "Inquiry 상세조회": ["닫기"]
  };

  const buttons = buttonConfig[requestBarTitle]?.[role] || buttonConfig[requestBarTitle] || [];

  return (
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2vh' }}>
        <div style={{
          width: '90vw',
          margin: '1vw',
          padding: '1vw 0',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: '#f0f8fc',
          border: 'solid #c1c1c1 1px',
          borderRadius: '20px',
          fontSize: '20px',
          fontWeight: 'bold',
          color: '#49454F'
        }}>
          <div style={{ marginLeft: '2vw' }}>{requestBarTitle}</div>
          <div>
            {buttons.map((btnName, index) => (
                <Button
                    key={index}
                    onClick={actions[btnName]}
                    btnName={btnName}
                    margin={'0 1.5vw 0 0'}
                    backgroundColor={'#03507d'}
                    textColor={'#ffffff'}
                    border={'none'}
                    borderRadius={'18px'}
                    fontSize={'17px'}
                    fontWeight={"500"}
                    padding={'10px'}
                />
            ))}
          </div>
        </div>
      </div>
  );
}

export default RequestBar;
