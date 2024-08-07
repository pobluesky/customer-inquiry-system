import React from 'react';
import Header from '../../components/mocules/Header';
import Path from './../../components/atoms/Path';
import QuestionReport from '../../components/organisms/QuestionReport';
import SearchItem from '../../components/organisms/SearchItem';
import Tag from '../../components/atoms/Tag';
import QuestionCard from '../../components/mocules/QuestionCard';
import Notification from '../../components/mocules/Notification';
import { Question_Title, Question_Card, Question_Doesnt_Exist } from '../../assets/css/Voc.css';

const QuestionDoesntExist = () => {
    return <div className={Question_Doesnt_Exist}>아직 문의가 없습니다.</div>;
};

function Voc() {
    const dataSample = [
        { type: 'site', status: 'completed', createdAt: '2024-08-08', updatedAt: '2024-08-09', title: '자동차 규격 재검토 문의드립니다.' },
        { type: 'site', status: 'completed', createdAt: '2024-08-09', updatedAt: '2024-08-10', title: '재검토 아직 멀었나요?' },
        { type: 'etc', status: 'ready', createdAt: '2024-08-10', updatedAt: '2024-08-11', title: '여보세요?' },
        { type: 'etc', status: 'ready', createdAt: '2024-08-10', updatedAt: '2024-08-11', title: '네?' },
        { type: 'etc', status: 'completed', createdAt: '2024-08-10', updatedAt: '2024-08-11', title: '저기요?' },
    ];

    const inquiryItems = dataSample.filter((data) => data.type === 'inquiry');
    const siteItems = dataSample.filter((data) => data.type === 'site');
    const etcItems = dataSample.filter((data) => data.type === 'etc');

    const readyItems = dataSample.filter((data) => data.status === 'ready').length;
    const completedItems = dataSample.filter((data) => data.status === 'completed').length;
    const totalItems = readyItems + completedItems;

    return (
        <>
            <Header login={true} inq={false} voc={true} dashboard={false} />
            <Path largeCategory={'VoC'} mediumCategory={'문의 목록'} />
            <QuestionReport question_total={totalItems} question_ready={readyItems} question_completed={completedItems} />
            <SearchItem />
            <div className={Question_Title}>문의 목록</div>
            <div className={Question_Card}>
                <div>
                    <Tag category={'Inquiry 주문 문의'} width={'156px'} height={'32px'} margin={'0 0 24px 0'} backgroundColor={'#2f4f79'} textColor={'#ffffff'} borderRadius={'10px'} />
                    {inquiryItems.length > 0 ? dataSample.map((data, dataIdx) => data.type === 'inquiry' && <QuestionCard key={dataIdx} status={data.status} createdAt={data.createdAt} updatedAt={data.updatedAt} title={data.title} />) : <QuestionDoesntExist />}
                </div>
                <div>
                    <Tag category={'사이트 문의'} width={'156px'} height={'32px'} margin={'0 0 24px 0'} backgroundColor={'#2f4f79'} textColor={'#ffffff'} borderRadius={'10px'} />
                    {siteItems.length > 0 ? dataSample.map((data, dataIdx) => data.type === 'site' && <QuestionCard key={dataIdx} status={data.status} createdAt={data.createdAt} updatedAt={data.updatedAt} title={data.title} />) : <QuestionDoesntExist />}
                </div>
                <div>
                    <Tag category={'기타 문의'} width={'156px'} height={'32px'} margin={'0 0 24px 0'} backgroundColor={'#2f4f79'} textColor={'#ffffff'} borderRadius={'10px'} />
                    {etcItems.length > 0 ? dataSample.map((data, dataIdx) => data.type === 'etc' && <QuestionCard key={dataIdx} status={data.status} createdAt={data.createdAt} updatedAt={data.updatedAt} title={data.title} />) : <QuestionDoesntExist />}
                </div>
            </div>
            <Notification />
        </>
    );
}

export default Voc;
