import React, {useState} from 'react';
import ToggleBar from "../../mocules/ToggleBar";
import { Container, Sheet, Opend } from "../../../assets/css/Form.css";

const ReviewTextForm = () => {
  const [isChecked, setCheck] = useState(true);

  return (
      <div className={Container} style={{ marginTop: "-2vh" }}>
        <div className={Sheet}>
          <ToggleBar title={"검토내용"} isChecked={isChecked} setCheck={setCheck} />
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

export default ReviewTextForm;