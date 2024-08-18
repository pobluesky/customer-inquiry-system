import React, { useState } from 'react';
import { Container, Sheet, Opend, buttonWrapper, FileColumn } from "../../../assets/css/Form.css";
import ToggleBar from "../../mocules/ToggleBar";
import Button from "../../atoms/Button";
import FileItem from "../../mocules/FileItem";

const FileForm = ({ fileForm }) => {
  const [isChecked, setCheck] = useState(true);
  const [files, setFiles] = useState([]);

  const btnName = ["파일업로드", "파일삭제"];

  const handleFileUpload = () => {
    // 파일 업로드 로직 (여기서는 예시로 고정된 파일 추가)
    setFiles([...files, `파일 ${files.length + 1}`]);
  };

  const handleFileDelete = () => {
    // 선택된 파일 삭제 로직 (여기서는 예시로 마지막 파일 삭제)
    setFiles(files.slice(0, -1));
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
                        <Button
                            onClick={handleFileUpload}
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