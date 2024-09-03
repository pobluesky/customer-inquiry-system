import React, { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import dompurify from 'dompurify';
import Text from '../atoms/Text';
import Tag from '../atoms/Tag';
import Input from '../atoms/Input';
import TextEditor from '../atoms/TextEditor';
import qmark from '../../assets/css/icons/voc/question_mark.svg';
import folder from '../../assets/css/icons/voc/question_folder.svg';
import { getCookie } from '../../apis/utils/cookies';
import {
    getQuestionByQuestionId,
    getQuestionByQuestionIdForManager,
} from '../../apis/api/question';
import { useAuth } from '../../hooks/useAuth';

// 답변 게시판에 사용될 질문 뷰어
export default function QuestionViewer(
    {
        // questionDetail,
        // questionId,
        // setStatus,
        // status,
    },
) {
    const sanitizer = dompurify.sanitize;

    const location = useLocation();
    const { questionId, status } = location.state;
    const { userId } = useAuth();
    const role = getCookie('userRole');
    const inqRole = role.toLowerCase();
    const [questionDetail, setQuestionDetail] = useState([]);

    // const questionType = () => {
    //     if (questionDetail.type === 'INQ') {
    //         setType('Inquiry 주문 문의');
    //     } else if (questionDetail.type === 'SITE') {
    //         setType('사이트 문의');
    //     } else if (questionDetail.type === 'ETC') {
    //         setType('기타 문의');
    //     }
    // };

    const filesEllipsis = {
        maxWidth: '96px',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
    };

    // Voc번호를 생성하는 인코딩 함수: questionId + hour + minute + second
    // const calDateNo = (datetime) => {
    //     const [, timePart] = datetime.split('T');
    //     const [hours, minutes, seconds] = timePart.split(':');
    //     return `${questionId}${hours}${minutes}${seconds}`;
    // };

    console.log(questionDetail);
    // 질문 상세 조회 (모달로 전달)
    const fetchGetQuestionDetail =
        role === 'customer'
            ? async (questionId, status) => {
                  try {
                      const response = await getQuestionByQuestionId(
                          userId,
                          questionId,
                      );
                      setQuestionDetail(response.data); // 질문 상세 내용 저장
                      if (status === 'COMPLETED') {
                          // 답변 완료 질문인 경우
                          //   fetchGetAnswerDetail(questionId); // 답변 상세 조회 API 호출
                      } else {
                          // 답변 대기 질문인 경우
                          //   setAnswerDetail([]); // 답변 Empty Array 전달
                          //   setOpenModal(true); // 모달 열기
                      }
                  } catch (error) {
                      console.log('고객사 질문 상세 조회 실패: ', error);
                  }
              }
            : async (questionId, status) => {
                  try {
                      const response = await getQuestionByQuestionIdForManager(
                          questionId,
                      );
                      console.log('************', response);
                      setQuestionDetail(response.data); // 질문 상세 내용 저장
                      if (status === 'COMPLETED') {
                          // 답변 완료 질문인 경우
                          //   fetchGetAnswerDetail(questionId); // 답변 상세 조회 API 호출
                      } else {
                          // 답변 대기 질문인 경우
                          //   setAnswerDetail([]); // 답변 Empty Array 전달
                          //   setOpenModal(true); // 모달 열기
                      }
                  } catch (error) {
                      console.log('담당자 질문 상세 조회 실패: ', error);
                  }
              };

    useEffect(() => {
        fetchGetQuestionDetail(questionId, status);
    }, []);

    // [To Do] Question List ==> QuestionDetail 값을 보내야 함
    return (
        <div>
            <div>
                <div>
                    {questionDetail.inquiryId && (
                        <Text
                            name={'📂 Inquiry 상세 내역'}
                            fontWeight={'600'}
                            onClick={() => {
                                window.open(
                                    `/inq-list/${inqRole}/${questionDetail.inquiryId}`,
                                    '_blank',
                                );
                            }}
                            cursor={'pointer'}
                            textColor={'#0000ff'}
                        />
                    )}
                    <Text name={'VoC 문의 번호'} textColor={'#6e6e6e'} />
                    <Text
                        name={
                            questionDetail.createdDate
                            // calDateNo(questionDetail.createdDate)
                        }
                        fontWeight={'600'}
                    />
                </div>
                <div>
                    <Tag
                        category={questionDetail.type}
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
                        <div>{questionDetail.title || ''}</div>
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
                            __html: sanitizer(
                                `${questionDetail.contents || ''}`,
                            ),
                        }}
                    />
                </div>
            </div>
        </div>
    );
}
