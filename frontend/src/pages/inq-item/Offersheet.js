import React, { useState, useEffect } from 'react';
import TextEditor from '../../components/mocules/TextEditor';
import Toggle from '../../components/atoms/Toggle';
import Category from '../../components/atoms/Category';
import OfferInfoInput from '../../components/atoms/OfferInfoInput';
import OfferInfo from '../../components/organisms/OfferInfo';
import OfferTable from '../../components/organisms/OfferTable';
import { Container, Sheet, _Toggle, Opend, _Category, Detail } from '../../assets/css/Offersheet.css';

function Offersheet({ inquiryId, addTask }) {
    const [originalText, setOriginalText] = useState('');
    const [isChecked, setCheck] = useState(true); // 토글 버튼 클릭 여부
    const borderRadius = isChecked ? '20px 20px 0 0' : '20px 20px 20px 20px';

    /*
    const fetchOffersheet = async () => {
        try {
            const response = await fetch(`/api/offersheet/${inquiryId}`, {
                method: 'get',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: null,
            });

            if (!response.ok) {
                throw new Error(`HTTP Error: ${response.status}`);
            }

            const json = await response.json();

            if (json.result !== 'success') {
                throw new Error(`API request Error ${json.message}`);
            } else {
                setOffersheet(json.data);
                console.log(json.data);
            }
        } catch (err) {
            console.error(err);
        }
    };
    */

    /*
    const addOffersheet = async (offersheet) => {
        try {
            const response = await fetch(`/api/offersheet/${inquiryId}`, {
                method: 'post',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(offersheet),
            });

            if (!response.ok) {
                throw new Error(`HTTP Error: ${response.status}`);
            }

            const json = await response.json();

            if (json.result !== 'success') {
                throw new Error(`API request Error ${json.message}`);
            }
            console.log(json.data);
        } catch (err) {
            console.error(err);
        }
    };
    */

    return (
        <div>
            <div className={Container}>
                <div className={Sheet}>
                    {/* 토글 바 */}
                    <div className={_Toggle} style={{ borderRadius }}>
                        <Toggle isChecked={isChecked} setCheck={setCheck} />
                        &nbsp;&nbsp;<span style={{ color: '#ffffff', fontSize: '24px', fontWeight: 'bold' }}>OfferSheet</span>
                    </div>

                    {/* 토글 클릭 후 오퍼시트 열림 */}
                    {isChecked ? (
                        <div className={Opend}>
                            <TextEditor originalText={originalText} setOriginalText={setOriginalText} />
                            <div className={_Category}>
                                <div className={Detail}>
                                    <Category categoryName={'1. 고객사'} />
                                    <OfferInfoInput margin={'0 0 0 12px'} />
                                </div>
                            </div>
                            <div className={_Category}>
                                <div className={Detail}>
                                    <Category categoryName={'2. Offer-Sheet'} />
                                </div>
                            </div>
                            <OfferTable />
                            <OfferInfo />
                        </div>
                    ) : (
                        ''
                    )}
                </div>
            </div>
        </div>
    );
}

export default Offersheet;
