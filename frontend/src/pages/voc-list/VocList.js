import React, { useState } from 'react';
import Header from '../../components/mocules/Header';
import QuestionReport from '../../components/organisms/QuestionReport';
import SearchItem from '../../components/organisms/SearchItem';
import Tag from '../../components/atoms/Tag';
import QuestionCard from '../../components/mocules/QuestionCard';
import QuestionModal from './../../components/organisms/QuestionModal';
import Notification from '../../components/mocules/Notification';
import { Question_Title, Question_Card, Question_Doesnt_Exist } from '../../assets/css/Voc.css';
import VocPath from "../../components/atoms/VocPath";

const QuestionDoesntExist = () => {
    return <div className={Question_Doesnt_Exist}>아직 문의가 없습니다.</div>;
};

function VocList() {
    const questionDataSample = [
        { type: 'site', status: 'completed', createdAt: '2024-08-08', updatedAt: '2024-08-09', title: '자동차 규격 재검토 문의드립니다.', contents: 'AAT380 가로 규격이 4mm인데, 왜 3mm로 나온거죠?', files: '고소장.pdf', answerContents: '누구세요?' },
        { type: 'site', status: 'completed', createdAt: '2024-08-09', updatedAt: '2024-08-10', title: '재검토 아직 멀었나요?', contents: '제가 만만하신가요?', files: '고소장.pdf', answerContents: '신고합니다!' },
        { type: 'etc', status: 'ready', createdAt: '2024-08-10', updatedAt: '2024-08-11', title: '여보세요?', contents: '싸움 잘 하세요?', files: '고소장.pdf' },
        { type: 'etc', status: 'ready', createdAt: '2024-08-10', updatedAt: '2024-08-11', title: '네?', contents: '네네?', files: '고소장.pdf' },
        { type: 'etc', status: 'completed', createdAt: '2024-08-10', updatedAt: '2024-08-11', title: '저기요?', contents: '똑똑똑', files: '고소장.pdf', answerContents: '안녕하세요.' },
    ];

    const inquiryItems = questionDataSample.filter((data) => data.type === 'inquiry');
    const siteItems = questionDataSample.filter((data) => data.type === 'site');
    const etcItems = questionDataSample.filter((data) => data.type === 'etc');

    const readyItems = questionDataSample.filter((data) => data.status === 'ready').length;
    const completedItems = questionDataSample.filter((data) => data.status === 'completed').length;
    const totalItems = readyItems + completedItems;

    const [openCard, setOpenCard] = useState(false);
    const [title, setTitle] = useState('');
    const [contents, setContents] = useState('');
    const [files, setFiles] = useState('');
    const [status, setStatus] = useState('ready');

    const cardClick = (e) => {
        setOpenCard(true);
        setTitle(e.title);
        setContents(e.contents);
        setFiles(e.files);
        setStatus(e.status);
        console.log(title, contents, files, status);
    };

    const closeModal = () => {
        setOpenCard(false);
    };

    return (
        <>
            <Header login={true} inq={false} voc={true} dashboard={false} />
            <VocPath largeCategory={'VoC'} mediumCategory={'문의 목록'} />
            <QuestionReport question_total={totalItems} question_ready={readyItems} question_completed={completedItems} />
            <SearchItem />
            <div className={Question_Title}>문의 목록</div>
            <div className={Question_Card}>
                <div>
                    <Tag category={'Inquiry 주문 문의'} width={'156px'} height={'32px'} margin={'0 0 24px 0'} backgroundColor={'#2f4f79'} textColor={'#ffffff'} borderRadius={'10px'} />
                    {inquiryItems.length > 0 ? questionDataSample.map((data, dataIdx) => data.type === 'inquiry' && <QuestionCard key={dataIdx} onClick={()=>cardClick(data)} status={data.status} createdAt={data.createdAt} updatedAt={data.updatedAt} title={data.title} />) : <QuestionDoesntExist />}
                </div>
                <div>
                    <Tag category={'사이트 문의'} width={'156px'} height={'32px'} margin={'0 0 24px 0'} backgroundColor={'#2f4f79'} textColor={'#ffffff'} borderRadius={'10px'} />
                    {siteItems.length > 0 ? questionDataSample.map((data, dataIdx) => data.type === 'site' && <QuestionCard key={dataIdx} onClick={()=>cardClick(data)} status={data.status} createdAt={data.createdAt} updatedAt={data.updatedAt} title={data.title} />) : <QuestionDoesntExist />}
                </div>
                <div>
                    <Tag category={'기타 문의'} width={'156px'} height={'32px'} margin={'0 0 24px 0'} backgroundColor={'#2f4f79'} textColor={'#ffffff'} borderRadius={'10px'} />
                    {etcItems.length > 0 ? questionDataSample.map((data, dataIdx) => data.type === 'etc' && <QuestionCard key={dataIdx} onClick={()=>cardClick(data)} status={data.status} createdAt={data.createdAt} updatedAt={data.updatedAt} title={data.title} />) : <QuestionDoesntExist />}
                </div>
            </div>
            {openCard && <QuestionModal title={title} contents={contents} files={files} status={status} onClose={closeModal} />}
            <Notification />
        </>
    );
}

export default VocList;
