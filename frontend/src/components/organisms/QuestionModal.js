import React, { useEffect, useState } from 'react';
import Label from '../atoms/Label';
import Text from '../atoms/Text';
import Tag from '../atoms/Tag';
import {
    AnswerTitleInput,
    AnswerContentInput,
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

function QuestionModal({ questionId, status, setStatus, onClose }) {
    const thisRole = getCookie('userRole');

    const [isAnswering, setAnswering] = useState(false);
    const [showTitleAlert, canShowTitleAlert] = useState(false);
    const [showContentAlert, canShowContentAlert] = useState(false);

    const [answerTitle, setAnswerTitle] = useState('');
    const [answerContents, setAnswerContents] = useState('');
    const [answerFiles, setAnswerFiles] = useState('기본 파일명');

    const answerTitleChange = (e) => {
        setAnswerTitle(e.target.value);
    };

    const answerContentsChange = (e) => {
        setAnswerContents(e.target.value);
    };

    const completedAnswering = () => {
        if (validateAnswerTitle(answerTitle)) {
            canShowTitleAlert(true);
            return;
        } else if (validateAnswerContents(answerContents)) {
            canShowContentAlert(true);
            return;
        } else {
            fetchPostAnswerByQuestionId(
                questionId,
                answerTitle,
                answerContents,
                answerFiles,
            );
            fetchGetQuestionDetail(questionId);
            setStatus('COMPLETED');
            AnswerCompleteAlert();
            setAnswering(false);
        }
    };

    const [questionDetail, setQuestionDetail] = useState([]);
    const [answerDetail, setAnswerDetail] = useState([]);

    const fetchGetQuestionDetail =
        getCookie('userRole') === 'CUSTOMER'
            ? async () => {
                  const result = await getQuestionByQuestionId(
                      questionId,
                      getCookie('userId'),
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
                      questionId,
                      getCookie('userId'),
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

    const fetchPostAnswerByQuestionId = async (
        questionId,
        answerTitle,
        answerContents,
        answerFiles,
    ) => {
        const answerData = {
            answerTitle,
            answerContents,
            answerFiles,
        };

        const result = await postAnswerByQuestionId(
            questionId,
            getCookie('accessToken'),
            answerData,
        );

        if (result) {
            console.log('응답받은 데이터는 다음과 같습니다.', result);
            setAnswerDetail(result);
        } else {
            console.error('Fetched data is not an array or is invalid.');
            setAnswerDetail([]);
        }
    };

    useEffect(() => {
        fetchGetQuestionDetail(questionId);
        fetchGetAnswerDetail(questionId);
    }, [questionId, status]);

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
                    {thisRole !== 'CUSTOMER' && (
                        <>
                            <Text
                                name={'VoC 문의 번호'}
                                textColor={'#6e6e6e'}
                            />
                            <Text name={'000000'} fontWeight={'600'} />
                        </>
                    )}
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
                        <div style={filesEllipsis}>{questionDetail.files}</div>
                    </div>
                    <div>{questionDetail.contents}</div>
                </div>

                {!isAnswering && status === 'READY' ? ( // 아직 답변이 없다면
                    <div>
                        <AnswerContent />
                    </div>
                ) : isAnswering &&
                  status === 'READY' &&
                  thisRole !== 'CUSTOMER' ? ( // 답변 입력 중
                    <div>
                        <AnswerTitleInput
                            answerTitleChange={answerTitleChange}
                        />
                        <AnswerContentInput
                            answerContentsChange={answerContentsChange}
                        />
                    </div>
                ) : status === 'COMPLETED' ? ( // 답변 등록
                    <div className={Completed}>
                        <div>
                            <img src={amark} />
                            <div>{answerDetail.answerTitle}</div>
                            <img src={folder} />
                            <div>담당자 첨부파일</div>
                            <div style={filesEllipsis}>
                                {answerDetail.answerFiles}
                            </div>
                        </div>
                        <div>{answerDetail.answerContents}</div>
                    </div>
                ) : (
                    ''
                )}
                <div>
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
                                        <AnswerButton
                                            btnName={'파일 업로드'}
                                            onClick={() => {}}
                                        />
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
