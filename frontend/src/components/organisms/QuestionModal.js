import React, { useEffect, useState, useRef } from 'react';
import dompurify from 'dompurify';
import Label from '../atoms/Label';
import Text from '../atoms/Text';
import Tag from '../atoms/Tag';
import Input from '../atoms/Input';
import TextEditor from '../atoms/TextEditor';
import {
    AnswerTitleInput,
    AnswerContent,
    CloseButton,
    AnswerButton,
} from '../atoms/VocButton';
import qmark from '../../assets/css/icons/voc/question_mark.svg';
import amark from '../../assets/css/icons/voc/answer_mark.svg';
import folder from '../../assets/css/icons/voc/question_folder.svg';
import {
    Question_Modal_Container,
    Question_Modal,
    Completed,
} from '../../assets/css/Voc.css';
import { useAuth } from '../../hooks/useAuth';
import { getCookie } from '../../apis/utils/cookies';
import {
    WrongAnswerTitleAlert,
    WrongAnswerContentAlert,
    AnswerCompleteAlert,
} from '../../utils/actions';
import {
    validateAnswerTitle,
    validateAnswerContents,
} from '../../utils/validation';
import {
    getQuestionByQuestionId,
    getQuestionByQuestionIdForManager,
} from '../../apis/api/question';
import {
    getAnswerByQuestionId,
    getAnswerByQuestionIdForManager,
    postAnswerByQuestionId,
} from '../../apis/api/answer';

function QuestionModal({ questionId, vocNo, status, setStatus, onClose }) {
    const sanitizer = dompurify.sanitize;

    const { userId } = useAuth();
    const thisRole = getCookie('userRole');

    const [isAnswering, setAnswering] = useState(false);
    const [showTitleAlert, canShowTitleAlert] = useState(false);
    const [showContentAlert, canShowContentAlert] = useState(false);

    const [title, setTitle] = useState('');
    const [editorValue, setEditorValue] = useState('');
    const [file, setFile] = useState('');

    const [questionDetail, setQuestionDetail] = useState([]);
    const [answerDetail, setAnswerDetail] = useState([]);

    const fileInputRef = useRef(null);

    const titleChange = (e) => {
        setTitle(e.target.value);
    };

    const completedAnswering = () => {
        if (validateAnswerTitle(title)) {
            canShowTitleAlert(true);
            return;
        } else if (validateAnswerContents(editorValue)) {
            canShowContentAlert(true);
            return;
        } else {
            fetchPostAnswerByQuestionId();
        }
    };

    const fetchGetQuestionDetail =
        getCookie('userRole') === 'CUSTOMER'
            ? async () => {
                  const result = await getQuestionByQuestionId(
                      userId,
                      questionId,
                      getCookie('accessToken'),
                  );
                  if (result) {
                      setQuestionDetail(result);
                  } else {
                      setQuestionDetail([]);
                  }
              }
            : async () => {
                  const result = await getQuestionByQuestionIdForManager(
                      questionId,
                      getCookie('accessToken'),
                  );
                  if (result) {
                      setQuestionDetail(result);
                  } else {
                      setQuestionDetail([]);
                  }
              };

    const fetchGetAnswerDetail =
        getCookie('userRole') === 'CUSTOMER'
            ? async () => {
                  const result = await getAnswerByQuestionId(
                      userId,
                      questionId,
                      getCookie('accessToken'),
                  );
                  if (result) {
                      setAnswerDetail(result);
                  } else {
                      setAnswerDetail([]);
                  }
              }
            : async () => {
                  const result = await getAnswerByQuestionIdForManager(
                      questionId,
                      getCookie('accessToken'),
                  );
                  if (result) {
                      setAnswerDetail(result);
                  } else {
                      setAnswerDetail([]);
                  }
              };

    const fetchPostAnswerByQuestionId = async () => {
        try {
            const answerData = {
                title,
                contents: editorValue,
            };
            const result = await postAnswerByQuestionId(
                file,
                answerData,
                questionId,
                getCookie('accessToken'),
            );

            if (result) {
                console.log('응답받은 데이터는 다음과 같습니다.', result);
                setAnswerDetail(result);
                fetchGetQuestionDetail();
                setStatus('COMPLETED');
                AnswerCompleteAlert();
                setAnswering(false);
            } else {
                console.error('Fetched data is not an array or is invalid.');
                setAnswerDetail([]);
            }
        } catch (error) {
            console.error('Error in posting question:', error);
        }
    };

    useEffect(() => {
        fetchGetQuestionDetail();
        fetchGetAnswerDetail();
    }, [questionId, status]);

    const attachFile = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            setFile(selectedFile);
        }
    };

    const filesEllipsis = {
        maxWidth: '96px',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
    };

    return (
        <div className={Question_Modal_Container}>
            <div>
                <Label
                    label={'문의 내용'}
                    width={'96px'}
                    height={'28px'}
                    backgroundColor={'#007aff'}
                    textColor={'#ffffff'}
                    borderRadius={'12px 12px 0 0'}
                />
            </div>
            <div className={Question_Modal}>
                <div>
                    <Text name={'VoC 문의 번호'} textColor={'#6e6e6e'} />
                    <Text name={vocNo} fontWeight={'600'} />
                </div>
                <div>
                    <Tag
                        category={'Inquiry 주문 문의'}
                        width={'156px'}
                        height={'32px'}
                        backgroundColor={'#2f4f79'}
                        textColor={'#ffffff'}
                        borderRadius={'10px'}
                    />
                </div>
                <div>
                    <div>
                        <img src={qmark} />
                        <div>{questionDetail.title}</div>
                        <img src={folder} />
                        <div>고객사 첨부파일</div>
                        <div style={filesEllipsis}>
                            <a href={questionDetail.filePath} download>
                                {questionDetail.fileName}
                            </a>
                        </div>
                        <div style={filesEllipsis}></div>
                    </div>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: sanitizer(`${questionDetail.contents}`),
                        }}
                    />
                </div>

                {!isAnswering && status === 'READY' ? ( // 아직 답변이 없다면
                    <div>
                        <AnswerContent />
                    </div>
                ) : isAnswering &&
                  status === 'READY' &&
                  thisRole !== 'CUSTOMER' ? ( // 답변 입력 중
                    <div>
                        <AnswerTitleInput titleChange={titleChange} />
                        <TextEditor
                            placeholder={'답변을 입력하세요.'}
                            width={'852px'}
                            inputHeight={'112px'}
                            inputMaxHeight={'112px'}
                            margin={'12px 0 0 20px'}
                            padding={'0px'}
                            value={editorValue}
                            onChange={setEditorValue}
                        />
                    </div>
                ) : status === 'COMPLETED' ? ( // 답변 등록
                    <div className={Completed}>
                        <div>
                            <img src={amark} />
                            <div>{answerDetail.title}</div>
                            <img src={folder} />
                            <div>담당자 첨부파일</div>
                            <div style={filesEllipsis}>
                                <a href={answerDetail.filePath} download>
                                    {answerDetail.fileName}
                                </a>
                            </div>
                        </div>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: sanitizer(
                                    `${answerDetail.contents || ''}`,
                                ),
                            }}
                        />
                    </div>
                ) : (
                    ''
                )}
                <div>
                    <div>
                        {/* 하단 버튼 좌측 첨부파일란 */}
                        {thisRole !== 'CUSTOMER' && status === 'READY' && (
                            <>
                                <img src={folder} />
                                <span>첨부파일</span>
                                <span style={filesEllipsis}>
                                    {file ? file.name : ''}
                                </span>
                            </>
                        )}
                    </div>
                    {/* [닫기] */}
                    <div>
                        <CloseButton onClick={onClose} />
                    </div>
                    {status === 'READY' && thisRole !== 'CUSTOMER' && (
                        <>
                            {/* [답변하기] */}
                            {!isAnswering && (
                                <div>
                                    <AnswerButton
                                        btnName={'답변하기'}
                                        onClick={() => {
                                            setAnswering(true);
                                        }}
                                    />
                                </div>
                            )}
                            {/* [답변 등록] */}
                            {isAnswering && (
                                <>
                                    <div>
                                        <AnswerButton
                                            btnName={'답변 등록'}
                                            onClick={() => {
                                                completedAnswering();
                                            }}
                                        />
                                    </div>
                                    <div>
                                        <Input
                                            type="file"
                                            display={'none'}
                                            ref={fileInputRef}
                                            onChange={attachFile}
                                        />
                                        <div>
                                            {file ? (
                                                <AnswerButton
                                                    btnName={'파일 삭제'}
                                                    onClick={() =>
                                                        setFile(null)
                                                    }
                                                />
                                            ) : (
                                                <AnswerButton
                                                    btnName={'파일 업로드'}
                                                    onClick={() =>
                                                        fileInputRef.current.click()
                                                    }
                                                />
                                            )}
                                        </div>
                                    </div>
                                </>
                            )}
                        </>
                    )}
                </div>
            </div>
            <WrongAnswerTitleAlert
                showAlert={showTitleAlert}
                onClose={() => {
                    canShowTitleAlert(false);
                }}
            />
            <WrongAnswerContentAlert
                showAlert={showContentAlert}
                onClose={() => {
                    canShowContentAlert(false);
                }}
            />
        </div>
    );
}

export default QuestionModal;
