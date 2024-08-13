import React, { useState, useEffect } from 'react';
import TextEditor from '../../mocules/TextEditor';
import Category from '../../atoms/Category';
import OfferInfoInput from '../../atoms/OfferInfoInput';
import OfferInfo from '../../organisms/OfferInfo';
import OfferTable from '../../organisms/OfferTable';
import { Container, Sheet, Opend, _Category, Detail } from '../../../assets/css/Form.css';
import ToggleBar from "../../mocules/ToggleBar";

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
        <div className={Container} style={{ marginTop: "-2vh" }}>
            <div className={Sheet}>
              {/* 토글 바 */}
              <ToggleBar title={"Offersheet"} isChecked={isChecked} setCheck={setCheck} />

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
    );
}

export default Offersheet;
