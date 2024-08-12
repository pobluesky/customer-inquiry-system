import React, {useState} from 'react';
import { Container, Sheet, Opend } from "../../../assets/css/Form.css";
import ToggleBar from "../../mocules/ToggleBar";

const SalesInfoForm = () => { // 최종 검토 내용
  const [isChecked, setCheck] = useState(true);

  return (
      <div className={Container} style={{ marginTop: "-2vh" }}>
        <div className={Sheet}>
          <ToggleBar title={"영업검토정보"} isChecked={isChecked} setCheck={setCheck} />
          {isChecked ? (
              <div className={Opend}>

              </div>
          ) : (
              ''
          )}
        </div>
      </div>
  );
};

export default SalesInfoForm;