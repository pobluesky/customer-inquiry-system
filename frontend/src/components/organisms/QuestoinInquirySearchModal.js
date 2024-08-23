import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Input from '../atoms/Input';
import Button from '../atoms/Button';
import close from '../../assets/css/icons/close.svg';
import {
    Question_Inquiry_Modal_Container,
    Question_Inquiry_Modal,
    Data_Doesnt_Exist,
} from '../../assets/css/Voc.css';
import { useAuth } from '../../hooks/useAuth';
import { getInquiry } from '../../apis/api/inquiry';

function QuestionInquirySearchModal({ setInquiryId, setOpenModal }) {
    const { userId } = useAuth();
    const [inquiryData, setInquiries] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const contentRef = useRef(null);

    const searchInquiry = () => {
        const filtered = inquiryData.filter(
            (data) => data.inquiryId === parseInt(searchQuery),
        );
        setFilteredData(filtered);
    };

    const enterKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            searchInquiry();
        }
    };

    const getAllInquiries = async () => {
        if (!userId) {
            return;
        }
        try {
            let allData = [];
            let page = 0;
            let totalPages = 1;

            while (page < totalPages) {
                const response = await getInquiry(userId, page);
                allData = [...allData, ...response.inquiryInfo];
                totalPages = response.totalPages;
                page++;
            }

            setInquiries(allData);
            setFilteredData(allData);
        } catch (error) {
            console.error('Error fetching Inquiry:', error);
        }
    };

    useEffect(() => {
        getAllInquiries();
    }, [userId]);

    return (
        <div className={Question_Inquiry_Modal_Container}>
            <div className={Question_Inquiry_Modal} ref={contentRef}>
                {inquiryData.length > 0 && (
                    <div>
                        <div>Inquiry No</div>
                        <div>
                            <Input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                width={'196px'}
                                height={'26px'}
                                padding={'0 8px 0 8px'}
                                border={'solid 1px #c1c1c1'}
                                borderRadius={'8px'}
                                onKeyDown={enterKeyDown}
                            />
                        </div>
                        <div>
                            <Button
                                btnName={'번호 조회'}
                                width={'96px'}
                                height={'28px'}
                                backgroundColor={'#03507d'}
                                textColor={'#ffffff'}
                                border={'none'}
                                borderRadius={'12px'}
                                onClick={searchInquiry}
                            />
                        </div>
                        <div>
                            <Button
                                width={'96px'}
                                height={'28px'}
                                backgroundColor={'transparent'}
                                border={'none'}
                                imgSrc={close}
                                onClick={() => {
                                    setOpenModal(false);
                                }}
                            />
                        </div>
                    </div>
                )}
                <div>
                    {filteredData.length > 0
                        ? filteredData.map((data) => (
                              <div key={data.inquiryId}>
                                  <div>
                                      <Button
                                          btnName={'✅'}
                                          width={'24px'}
                                          border={'none'}
                                          backgroundColor={'transparent'}
                                          onClick={() => {
                                              setInquiryId(data.inquiryId);
                                              setOpenModal(false);
                                          }}
                                      />
                                  </div>
                                  <div>
                                      <Button
                                          btnName={data.inquiryType}
                                          width={'96px'}
                                          height={'32px'}
                                          fontSize={'16px'}
                                          fontWeight={'600'}
                                          textColor={'#ffffff'}
                                          border={'none'}
                                          borderRadius={'18px'}
                                          backgroundColor={'#03507d'}
                                      />
                                  </div>
                                  <div>{data.salesPerson}</div>
                                  <div>{data.customerName}</div>
                                  <div>{data.productType}</div>
                                  {/* <div>
                                      <Button
                                          btnName={data.progress}
                                          width={'96px'}
                                          height={'32px'}
                                          fontSize={'16px'}
                                          fontWeight={'600'}
                                          textColor={'#ffffff'}
                                          border={'none'}
                                          borderRadius={'18px'}
                                          backgroundColor={
                                              data.progress === '문의 접수'
                                                  ? '#ff3b30'
                                                  : '#007aff'
                                          }
                                      />
                                  </div> */}
                                  <div>
                                      <Link
                                          style={{
                                              textDecoration: 'none',
                                              color: '#212121',
                                          }}
                                          to="/inq-item/customer"
                                          target="_blank"
                                      >
                                          <Button
                                              btnName={'상세 내역'}
                                              width={'96px'}
                                              height={'32px'}
                                              fontSize={'16px'}
                                              fontWeight={'600'}
                                              textColor={'#ffffff'}
                                              border={'none'}
                                              borderRadius={'18px'}
                                              backgroundColor={
                                                  data.progress === '문의 접수'
                                                      ? '#ff3b30'
                                                      : '#007aff'
                                              }
                                          />
                                      </Link>
                                  </div>
                              </div>
                          ))
                        : ''}
                </div>
                {inquiryData.length <= 0 ||
                    (filteredData.length <= 0 && (
                        <div className={Data_Doesnt_Exist}>
                            데이터가 없습니다.
                        </div>
                    ))}
            </div>
        </div>
    );
}

export default QuestionInquirySearchModal;
