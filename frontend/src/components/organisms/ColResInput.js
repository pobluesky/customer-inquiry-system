import React, { useState, useRef, useEffect } from 'react';
import Input from '../atoms/Input';
import TextEditor from '../atoms/TextEditor';
import { VocButton } from '../atoms/VocButton';
import {
    putDecisionByQuality,
    putModifyByManager,
} from '../../apis/api/collaboration';
import {
    ColDoneAlert,
    WrongColStatusAlert,
    WrongColReplyAlert,
} from '../../utils/actions';
import { validateColReply } from '../../utils/validation';
import { getCookie } from '../../apis/utils/cookies';
import { Col_Accpted_Selector, Col_Res_Input } from '../../assets/css/Voc.css';

export default function ColResInput({ colDetail, setColDetail }) {
    const userId = getCookie('userId');

    const [editorValue, setEditorValue] = useState(colDetail?.colReply || '');
    const [file, setFile] = useState('');
    const [fileName, setFileName] = useState(colDetail?.fileName || '');
    const [filePath, setFilePath] = useState(colDetail?.filePath || '');

    const [selectedType, setSelectedType] = useState(
        colDetail?.colStatus || '',
    );
    let isAccepted = selectedType === 'INPROGRESS' ? true : false;

    const [showDoneAlert, canShowDoneAlert] = useState(false);
    const [showStatusAlert, canShowStatusAlert] = useState(false);
    const [showReplyAlert, canShowReplyAlert] = useState(false);
    const [message, setMessage] = useState('');

    const fileInputRef = useRef(null);

    const fetchPutUpdateCol =
        colDetail?.colStatus === 'READY'
            ? async () => {
                  try {
                      const colData = {
                          colReqId: colDetail?.colManagerFromResponseDto.userId,
                          colResId: colDetail?.colManagerToResponseDto.userId,
                          colReply: editorValue,
                          isAccepted: isAccepted,
                      };
                      const response = await putDecisionByQuality(
                          file,
                          colDetail?.colId,
                          colData,
                      );
                      if (response.data.colStatus === 'REFUSE') {
                          setMessage('협업이 거절되었습니다.');
                      } else {
                          setMessage('협업이 수락되었습니다.');
                      }
                      setColDetail(response.data);
                      canShowDoneAlert(true);
                      setTimeout(() => {
                          window.location.reload();
                      }, '1000');
                  } catch (error) {
                      console.error('협업 수락/거절 실패: ', error);
                  }
              }
            : async () => {
                  try {
                      const colData = {
                          colReqId: colDetail?.colManagerFromResponseDto.userId,
                          colResId: colDetail?.colManagerToResponseDto.userId,
                          colContents: colDetail?.colContents,
                          isAccepted: isAccepted,
                          colReply: editorValue,
                      };
                      const response = await putModifyByManager(
                          file,
                          colDetail?.colId,
                          colData,
                      );
                      console.log(response.data);
                      setColDetail(response.data);
                      if (response.data.colStatus === 'REFUSE') {
                          setMessage('협업이 거절되었습니다.');
                      } else {
                          setMessage('협업이 수락되었습니다.');
                      }
                      canShowDoneAlert(true);
                      setTimeout(() => {
                          window.location.reload();
                      }, '1000');
                  } catch (error) {
                      console.log('협업 수락/거절 수정 실패: ', error);
                  }
              };

    const checkValidate = () => {
        if (!selectedType) {
            return canShowStatusAlert(true);
        }
        if (validateColReply(editorValue)) {
            return canShowReplyAlert(true);
        }
        fetchPutUpdateCol();
    };

    const attachFile = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            setFile(selectedFile);
        }
    };

    const optionSelect = (e) => {
        setSelectedType(e.target.value);

        useEffect(() => {
            window.scrollTo({
                top: document.body.scrollHeight,
                behavior: 'smooth',
            });
        }, [selectedType]);

        return (
            <>
                {colDetail?.colManagerToResponseDto.userId == userId ? (
                    <>
                        <div className={Col_Accpted_Selector}>
                            <div>
                                <div>
                                    <label>
                                        <input
                                            type="radio"
                                            name="inprogress"
                                            value="INPROGRESS"
                                            checked={
                                                selectedType === 'INPROGRESS'
                                            }
                                            onChange={optionSelect}
                                        />
                                    </label>
                                </div>
                                <div>상기 협업 요청에 대하여 수락합니다.</div>
                                <div>
                                    <label>
                                        <input
                                            type="radio"
                                            name="refuse"
                                            value="REFUSE"
                                            checked={selectedType === 'REFUSE'}
                                            onChange={optionSelect}
                                        />
                                    </label>
                                </div>
                                <div>상기 협업 요청에 대하여 거절합니다.</div>
                            </div>
                        </div>
                        <div className={Col_Res_Input}>
                            {selectedType !== 'READY' ? (
                                <>
                                    <TextEditor
                                        placeholder={
                                            '협업 요청 관련 피드백을 입력하세요.'
                                        }
                                        width={'1320px'}
                                        inputHeight={'240px'}
                                        inputMaxHeight={'240px'}
                                        padding={'0px'}
                                        value={editorValue}
                                        border={'1px solid #8b8b8b'}
                                        onChange={setEditorValue}
                                    />
                                    <div>
                                        <Input
                                            type="file"
                                            display={'none'}
                                            ref={fileInputRef}
                                            onChange={attachFile}
                                        />
                                        {file || fileName ? (
                                            <VocButton
                                                btnName={'파일 삭제'}
                                                backgroundColor={'#ffffff'}
                                                textColor={'#03507d'}
                                                onClick={() => {
                                                    setFile(null);
                                                    setFileName(null);
                                                }}
                                            />
                                        ) : (
                                            <VocButton
                                                btnName={'파일 업로드'}
                                                backgroundColor={'#ffffff'}
                                                textColor={'#03507d'}
                                                onClick={() =>
                                                    fileInputRef.current.click()
                                                }
                                            />
                                        )}
                                        <div>
                                            {fileName ? (
                                                <>
                                                    <a href={filePath}>
                                                        {fileName}
                                                    </a>
                                                </>
                                            ) : file ? (
                                                file.name
                                            ) : (
                                                '파일을 첨부할 수 있습니다.'
                                            )}
                                        </div>
                                        <div>
                                            {selectedType === 'INPROGRESS' ? (
                                                <VocButton
                                                    btnName={'협업 수락'}
                                                    backgroundColor={'#03507d'}
                                                    textColor={'#ffffff'}
                                                    onClick={() => {
                                                        checkValidate();
                                                    }}
                                                />
                                            ) : (
                                                <VocButton
                                                    btnName={'협업 거절'}
                                                    backgroundColor={'#03507d'}
                                                    textColor={'#ffffff'}
                                                    onClick={() => {
                                                        checkValidate();
                                                    }}
                                                />
                                            )}
                                            <VocButton
                                                btnName={'작성 취소'}
                                                backgroundColor={'#03507d'}
                                                textColor={'#ffffff'}
                                                margin={'0 0 0 24px'}
                                                onClick={() => {
                                                    window.confirm(
                                                        '지금까지 작성한 내용이 사라집니다. 정말 취소하시겠습니까?',
                                                    )
                                                        ? setSelectedType('')
                                                        : '';
                                                }}
                                            />
                                        </div>
                                    </div>
                                </>
                            ) : (
                                ''
                            )}
                        </div>
                    </>
                ) : (
                    ''
                )}
                <ColDoneAlert
                    showAlert={showDoneAlert}
                    onClose={() => {
                        canShowDoneAlert(false);
                    }}
                    message={message}
                    inert
                />
                <WrongColStatusAlert
                    showAlert={showStatusAlert}
                    onClose={() => {
                        canShowStatusAlert(false);
                    }}
                    inert
                />
                <WrongColReplyAlert
                    showAlert={showReplyAlert}
                    onClose={() => {
                        canShowReplyAlert(false);
                    }}
                    inert
                />
            </>
        );
    };
}
