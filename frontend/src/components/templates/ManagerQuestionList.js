import React, { useState } from 'react';
import Tag from '../atoms/Tag';
import CustomerQuestionCard from '../mocules/CustomerQuestionCard';
import CustomerQuestionModal from '../organisms/CustomerQuestionModal';
import { Question_Doesnt_Exist, Manager_Question_Card_List } from '../../assets/css/Voc.css';

const QuestionDoesntExist = () => {
    return <div className={Question_Doesnt_Exist}>아직 문의가 없습니다.</div>;
};

function CustomerQuestionList({ dataList }) {
    // [To do] 질문만 조회 API로 코드 정리 필요
    const inqItems = dataList.filter(
        (item) => item.question && item.question.type === 'INQ',
    );
    const inqCount = inqItems.map((item) => item.question).length;

    const siteItems = dataList.filter(
        (item) => item.question && item.question.type === 'SITE',
    );
    const siteCount = siteItems.map((item) => item.question).length;

    const etcItems = dataList.filter(
        (item) => item.question && item.question.type === 'ETC',
    );
    const etcCount = etcItems.map((item) => item.question).length;

    const [openCard, setOpenCard] = useState(false);
    const [title, setTitle] = useState('');
    const [contents, setContents] = useState('');
    const [files, setFiles] = useState('');
    const [status, setStatus] = useState('ready');

    const clickCard = (e) => {
        setOpenCard(true);
        setTitle(e.title);
        setContents(e.contents);
        setFiles(e.files);
        setStatus(e.status);
    };

    const closeModal = () => {
        setOpenCard(false);
    };

    return (
        <>
            <div className={Manager_Question_Card_List}>
                <div>
                    <Tag
                        category={'Inquiry 주문 문의'}
                        width={'156px'}
                        height={'32px'}
                        margin={'0 0 24px 0'}
                        backgroundColor={'#2f4f79'}
                        textColor={'#ffffff'}
                        borderRadius={'10px'}
                    />
                    {inqCount > 0 ? (
                        dataList.map(
                            (data, dataIdx) =>
                                data.question.type === 'INQ' && (
                                    <CustomerQuestionCard
                                        key={dataIdx}
                                        onClick={() => clickCard(data.question)}
                                        status={data.question.status}
                                        questionCreatedDate={
                                            data.question.createdDate.substr(0, 10)
                                        }
                                        answerCreatedDate={
                                            data.answer &&
                                            data.answer.createdDate.substr(0, 10)
                                        }
                                        title={data.question.title}
                                    />
                                ),
                        )
                    ) : (
                        <QuestionDoesntExist />
                    )}
                </div>
                <div>
                    <Tag
                        category={'사이트 문의'}
                        width={'156px'}
                        height={'32px'}
                        margin={'0 0 24px 0'}
                        backgroundColor={'#2f4f79'}
                        textColor={'#ffffff'}
                        borderRadius={'10px'}
                    />
                    {siteCount > 0 ? (
                        dataList.map(
                            (data, dataIdx) =>
                                data.question.type === 'SITE' && (
                                    <CustomerQuestionCard
                                        key={dataIdx}
                                        onClick={() => clickCard(data.question)}
                                        status={data.question.status}
                                        questionCreatedDate={
                                            data.question.createdDate.substr(0, 10)
                                        }
                                        answerCreatedDate={
                                            data.answer &&
                                            data.answer.createdDate.substr(0, 10)
                                        }
                                        title={data.question.title}
                                    />
                                ),
                        )
                    ) : (
                        <QuestionDoesntExist />
                    )}
                </div>
                <div>
                    <Tag
                        category={'기타 문의'}
                        width={'156px'}
                        height={'32px'}
                        margin={'0 0 24px 0'}
                        backgroundColor={'#2f4f79'}
                        textColor={'#ffffff'}
                        borderRadius={'10px'}
                    />
                    {etcCount > 0 ? (
                        dataList.map(
                            (data, dataIdx) =>
                                data.question.type === 'ETC' && (
                                    <CustomerQuestionCard
                                        key={dataIdx}
                                        onClick={() => clickCard(data.question)}
                                        status={data.question.status}
                                        questionCreatedDate={
                                            data.question.createdDate.substr(0, 10)
                                        }
                                        answerCreatedDate={
                                            data.answer &&
                                            data.answer.createdDate.substr(0, 10)
                                        }
                                        title={data.question.title}
                                    />
                                ),
                        )
                    ) : (
                        <QuestionDoesntExist />
                    )}
                </div>
            </div>
            {openCard && (
                <CustomerQuestionModal
                    title={title}
                    contents={contents}
                    files={files}
                    status={status}
                    onClose={closeModal}
                />
            )}
        </>
    );
}

export default CustomerQuestionList;
