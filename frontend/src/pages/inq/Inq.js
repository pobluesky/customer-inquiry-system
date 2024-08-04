import React, { useState } from 'react';
import Header from '../../components/mocules/Header';
import Path from '../../components/atoms/Path';
import TextEditor from '../../components/mocules/TextEditor';
import RequestBar from '../../components/mocules/RequestBar';
import Toggle from '../../components/atoms/Toggle';
import Category from '../../components/atoms/Category';
import OfferTable from '../../components/organisms/OfferTable';
import DateInput from '../../components/mocules/DateInput';

function Inq() {
    const [originalText, setOriginalText] = useState('');
    const [isChecked, setCheck] = useState(true); // 토글 버튼 클릭 여부
    const borderRadius = isChecked ? '20px 20px 0 0' : '20px 20px 20px 20px';

    return (
        <div>
            <Header login={true} inq={true} voc={false} dashboard={false} />
            <Path largeCategory={'Inquiry'} mediumCategory={'Inquiry 조회'} smallCategory={'20180829495'} />
            <RequestBar />
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2vh' }}>
                <div style={{ width: '90vw', border: 'solid #c1c1c1 1px', borderRadius: '20px' }}>
                    <div style={{ display: 'flex', alignContent: 'center', padding: '1vw 1vw 1vw 1vw', borderRadius, backgroundColor: '#88daff' }}>
                        <Toggle isChecked={isChecked} setCheck={setCheck} />
                        OfferSheet
                    </div>

                    {isChecked ? (
                        <div style={{ backgroundColor: '#f0f8fc', paddingTop: '2vh' }}>
                            <TextEditor originalText={originalText} setOriginalText={setOriginalText} />
                            <div>
                                <Category categoryName={'1. 고객사'} />
                                Posco Asia
                            </div>
                            <Category categoryName={'2. Offer-Sheet'} />
                            <OfferTable />
                            <Category categoryName={'3. Price Term'} />
                            <Category categoryName={'4. Shipment'} />
                            <DateInput />
                            <Category categoryName={'5. Payment Term'} />
                            <Category categoryName={'6. Destination'} />
                            <Category categoryName={'7. Validity'} />
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
