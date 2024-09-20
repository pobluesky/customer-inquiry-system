import React, { useEffect, useState } from 'react';
import close from '../../assets/css/icons/close.svg';
import Input from '../atoms/Input';
import Button from '../atoms/Button';
import { QuestionAnswerButton } from '../atoms/VocButton';
import { Question_Inquiry_Modal } from '../../assets/css/Voc.css';
import { useAuth } from '../../hooks/useAuth';
import { getAllInquiries } from '../../apis/api/inquiry';

export default function QuestionInquirySearchModal({
    setInquiryId,
    openModal,
    setOpenModal,
}) {
    const { userId } = useAuth();
    const [inquiryData, setInquiries] = useState([]);
    const [searchId, setSearchId] = useState('');
    const [filteredInquiryData, setFilteredInquiryData] = useState([]);

    const enterKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            inqSearch();
        }
    };

    // Inquiry 전체 조회
    const fetchGetAllInquiry = async () => {
        try {
            const response = await getAllInquiries(userId);
            setInquiries(response.inquiryInfo);
            setFilteredInquiryData(response.inquiryInfo);
        } catch (error) {
            console.log('Inquiry 전체 조회 실패: ', error);
        }
    };

    const inqSearch = () => {
        const filtered = inquiryData.filter(
            (inq) => String(inq.inquiryId) === String(searchId),
        );
        setFilteredInquiryData(filtered);
    };

    useEffect(() => {
        fetchGetAllInquiry();
    }, [userId, openModal]);

    console.log(filteredInquiryData);

    return (
        <div className={Question_Inquiry_Modal}>
            <div>
                <div>
                    <Input
                        type="text"
                        value={searchId}
                        width={'196px'}
                        height={'36px'}
                        margin={'0 24px 0 0'}
                        padding={'0px 12px 0px 12px'}
                        border={'1px solid #8b8b8b'}
                        placeholder={'Inquiry 번호 조회'}
                        onChange={(e) => setSearchId(e.target.value)}
                        onKeyDown={enterKeyDown}
                    />
                    <QuestionAnswerButton
                        btnName={'검색'}
                        backgroundColor={'#1748ac'}
                        textColor={'#ffffff'}
                        margin={'0 24px 0 0'}
                        onClick={() => {
                            inqSearch(searchId);
                        }}
                    />
                    <QuestionAnswerButton
                        btnName={'전체 보기'}
                        backgroundColor={'#ffffff'}
                        textColor={'#1748ac'}
                        border={'solid 1px #1748ac'}
                        onClick={() => {
                            setFilteredInquiryData(inquiryData);
                        }}
                    />
                    <div>
                        <Button
                            width={'36px'}
                            height={'36px'}
                            backgroundColor={'transparent'}
                            border={'none'}
                            imgSrc={close}
                            onClick={() => {
                                setOpenModal(false);
                            }}
                        />
                    </div>
                </div>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th width="10%">번호</th>
                                <th width="10%">제품</th>
                                <th width="20%">판매 계약자</th>
                                <th width="20%">문의 유형</th>
                                <th width="20%">고객사</th>
                                <th width="20%">진행 현황</th>
                                <th width="10%">국가</th>
                                <th width="20%">판매 상사</th>
                                <th width="20%">법인 코드</th>
                                <th width="20%">산업 분류</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredInquiryData.map((inq) => (
                                <>
                                    <tr
                                        key={inq.inquiryId}
                                        onClick={() => {
                                            setInquiryId(inq.inquiryId);
                                            sessionStorage.setItem(
                                                'userId',
                                                userId,
                                            );
                                            window.open(
                                                `/inq-list/customer/${inq.inquiryId}`,
                                                '_blank',
                                            );
                                            setOpenModal(false);
                                        }}
                                    >
                                        <td>{inq.inquiryId}</td>
                                        <td>{inq.productType}</td>
                                        <td>{inq.salesPerson}</td>
                                        <td>{inq.inquiryType}</td>
                                        <td>{inq.customerName}</td>
                                        <td>{inq.progress}</td>
                                        <td>{inq.country}</td>
                                        <td>{inq.corporate}</td>
                                        <td>{inq.corporationCode}</td>
                                        <td>{inq.industry}</td>
                                    </tr>
                                </>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
