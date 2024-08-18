import React, { useState, useRef } from 'react';
import { Container, Sheet, Opend, buttonWrapper, FileColumn } from "../../../assets/css/Form.css";
import ToggleBar from "../../mocules/ToggleBar";
import Button from "../../atoms/Button";
import FileItem from "../../mocules/FileItem";

const FileForm = ({ fileForm }) => {
  const [isChecked, setCheck] = useState(true);
  const [files, setFiles] = useState([]);
  const fileInputRef = useRef(null); // 파일 input을 참조하기 위한 ref

  const btnName = ["파일선택", "파일삭제"];

  // 파일 선택 핸들러
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      // 선택된 파일을 파일 목록에 추가
      setFiles([...files, file]);
    }
  };

  // 파일 삭제 핸들러
  const handleFileDelete = () => {
    // 마지막 파일 삭제
    setFiles(files.slice(0, -1));
  };

  // 파일 선택 input을 열기 위한 핸들러
  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  const isUploadSection = fileForm === "파일첨부" || fileForm === "첨부파일";

  return (
      <div className={Container} style={{ marginTop: "-2vh" }}>
        <div className={Sheet}>
          <ToggleBar title={fileForm} isChecked={isChecked} setCheck={setCheck} />
          {isChecked ? (
              <div className={Opend}>
                {isUploadSection ? (
                    <div>
                      <div className={buttonWrapper}>
                        <input
                            type="file"
                            ref={fileInputRef}
                            style={{ display: 'none' }}
                            onChange={handleFileChange}
                        />
                        <Button
                            onClick={triggerFileInput}
                            btnName={btnName[0]}
                            margin={'-0.5vw 0.7vw 0 0.3vw'}
                            backgroundColor={'#03507d'}
                            textColor={'#ffffff'}
                            border={'none'}
                            borderRadius={'18px'}
                            fontSize={'17px'}
                            fontWeight={"500"}
                            padding={'10px'}
                        />
                        <Button
                            onClick={handleFileDelete}
                            btnName={btnName[1]}
                            margin={'-0.5vw 0.7vw 0 0.3vw'}
                            backgroundColor={'#03507d'}
                            textColor={'#ffffff'}
                            border={'none'}
                            borderRadius={'18px'}
                            fontSize={'17px'}
                            fontWeight={"500"}
                            padding={'10px'}
                        />
                      </div>
                      {/* 컬럼 라벨 */}
                      <div className={FileColumn}>
                        <div>진행단계</div>
                        <div>첨부파일명</div>
                      </div>
                      {/* 파일 목록 */}
                      <FileItem files={files} />
                    </div>
                ) : (
                    <div>
                      {/* 협업첨부파일의 경우 */}
                      <div className={FileColumn}>
                        <div>진행단계</div>
                        <div>첨부파일명</div>
                      </div>
                      <FileItem files={files.length > 0 ? files : ["조회된 파일이 없습니다."]} />
                    </div>
                )}
              </div>
          ) : (
              ''
          )}
        </div>
      </div>
  );
};

export default FileForm;
