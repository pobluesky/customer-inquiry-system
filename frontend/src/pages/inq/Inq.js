import React, { useState } from 'react';
import Header from '../../components/mocules/Header';
import Path from '../../components/atoms/Path';
import TextEditor from '../../components/mocules/TextEditor';
import RequestBar from '../../components/mocules/RequestBar';
import Toggle from '../../components/atoms/Toggle';
import Category from '../../components/atoms/Category';
import OfferInfoInput from '../../components/atoms/OfferInfoInput';
import OfferInfo from '../../components/organisms/OfferInfo';
import OfferTable from '../../components/organisms/OfferTable';
import { Container, Sheet, _Toggle, Opend, _Category, Detail } from '../../assets/css/Offersheet.css';

function Inq() {
    const [originalText, setOriginalText] = useState('');
    const [isChecked, setCheck] = useState(true); // 토글 버튼 클릭 여부
    const borderRadius = isChecked ? '20px 20px 0 0' : '20px 20px 20px 20px';

    return (
        <div>
            <Header login={true} inq={true} voc={false} dashboard={false} />
            <Path largeCategory={'Inquiry'} mediumCategory={'Inquiry 조회'} smallCategory={'20180829495'} />
            <RequestBar />
            <div className={Container}>
                <div className={Sheet}>

                    {/* 토글 바 */}
                    <div className={_Toggle} style={{ borderRadius }}>
                        <Toggle isChecked={isChecked} setCheck={setCheck} />
                        &nbsp;&nbsp;<span style={{ color: '#ffffff', fontSize: '24px', fontWeight : 'bold' }}>OfferSheet</span>
                    </div>

                    {/* 토글 클릭 후 오퍼시트 열림 */}
                    {isChecked ? (
                        <div className={Opend}>
                            <TextEditor originalText={originalText} setOriginalText={setOriginalText} />
                            <div className={_Category}>
                                <div className={Detail}>
                                    <Category categoryName={'1. 고객사'} />
                                    <OfferInfoInput />
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

export default Inq;
