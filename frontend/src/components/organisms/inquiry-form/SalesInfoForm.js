import React, {useState} from 'react';
import { Container, Sheet, Opend, SalesInfoItem, LineItemInput, SalesInfoRow } from "../../../assets/css/Form.css";
import ToggleBar from "../../mocules/ToggleBar";
import SelectBox from "../../atoms/SelectBox";

const SalesInfoForm = () => { // 최종 검토 내용
  const [isChecked, setCheck] = useState(true);

  const items = [
    "수주배경",
    "두께특이사항"
  ];

  const options = [
    { label: 'ALL', value: 'all' },
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' }
  ];

  return (
      <div className={Container} style={{ marginTop: "-2vh" }}>
        <div className={Sheet}>
          <ToggleBar title={"영업검토정보"} isChecked={isChecked} setCheck={setCheck} />
          {isChecked ? (
              <div className={Opend}>
                <div className={SalesInfoItem}>
                  {items.map((item, index) => (
                      <div key={index}>
                        {item}
                      </div>
                  ))}
                </div>
                <div className={SalesInfoRow}>
                  <SelectBox options={options} defaultValue={"all"}/>
                  <input
                      type="text"
                      className={LineItemInput}
                      readOnly
                  />
                </div>
              </div>
          ) : (
              ''
          )}
        </div>
      </div>
  );
};

export default SalesInfoForm;