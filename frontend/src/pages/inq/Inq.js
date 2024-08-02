import React, { useState } from 'react';
import Header from '../../components/mocules/Header';
import Path from '../../components/atoms/Path';
import TextEditor from '../../components/mocules/TextEditor';
import RequestBar from '../../components/mocules/RequestBar';
import Toggle from '../../components/atoms/Toggle';
import Category from '../../components/atoms/Category';

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
                <div style={{ width: '80vw', border: 'solid #c1c1c1 1px', borderRadius: '20px' }}>
                    <div style={{ display: 'flex', alignContent: 'center', padding: '1vw 1vw 1vw 1vw', borderRadius, backgroundColor: '#88daff' }}>
                        <Toggle isChecked={isChecked} setCheck={setCheck} />
                        OfferSheet
                    </div>

                    {isChecked ? (
                        <>
                            <TextEditor originalText={originalText} setOriginalText={setOriginalText} />
                            <Category categoryName={'1. 고객사'} />
                            <Category categoryName={'2. Offersheet'} />
                            <Category categoryName={'3. Price Term'} />
                            <Category categoryName={'4. Shipment'} />
                            <Category categoryName={'5. Payment Term'} />
                            <Category categoryName={'6. Destination'} />
                            <Category categoryName={'7. Validity'} />
                        </>
                    ) : (
                        ''
                    )}
                </div>
            </div>
        </div>
    );
}

export default Inq;
