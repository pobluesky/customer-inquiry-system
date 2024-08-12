import React, {useState} from 'react';
import { Container, Sheet, Opend } from "../../../assets/css/Form.css";
import ToggleBar from "../../mocules/ToggleBar";

const FileForm = ({ fileForm }) => { // 첨부파일, 협업 첨부파일, 파일첨부
  const [isChecked, setCheck] = useState(true);

  return (
      <div className={Container} style={{ marginTop: "-2vh" }}>
        <div className={Sheet}>
          <ToggleBar title={fileForm} isChecked={isChecked} setCheck={setCheck} />
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

export default FileForm;