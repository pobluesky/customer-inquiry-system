import React from 'react';
import Input from '../atoms/Input';
import Button from '../atoms/Button';
import search from '../../assets/css/icons/voc/search.svg';
import { Question_Type_Selector } from '../../assets/css/Voc.css';

function QuestionTypeSelector({ selectedType, setSelectedType }) {

    const optionSelect = (e) => {
        setSelectedType(e.target.value);
    };

    return (
        <div className={Question_Type_Selector}>
            <div>
                {/* 아이콘 + VoC 문의하기 */}
                <div>
                    <img src={search} alt="검색 아이콘" />
                    <div>VoC 문의하기</div>
                </div>
                {/* 문의 유형 */}
                <div>
                    <div>문의 유형</div>
                    <div className="radio">
                        <label>
                            <input
                                type="radio"
                                name="inquiryType"
                                value="INQ"
                                checked={selectedType === 'INQ'}
                                onChange={optionSelect}
                            />
                        </label>
                    </div>
                    <div>주문 문의</div>

                    <div className="radio">
                        <label>
                            <input
                                type="radio"
                                name="inquiryType"
                                value="SITE"
                                checked={selectedType === 'SITE'}
                                onChange={optionSelect}
                            />
                        </label>
                    </div>
                    <div>사이트 이용 문의</div>

                    <div className="radio">
                        <label>
                            <input
                                type="radio"
                                name="inquiryType"
                                value="ETC"
                                checked={selectedType === 'ETC'}
                                onChange={optionSelect}
                            />
                        </label>
                    </div>
                    <div>기타 문의</div>
                </div>
                <div>
                    {selectedType === 'INQ' && (
                        <>
                            <div>Inquiry No.</div>
                            <div>
                                <Input
                                    type="text"
                                    width={'196px'}
                                    height={'26px'}
                                    padding={'0 8px 0 8px'}
                                    border={'solid 1px #c1c1c1'}
                                    borderRadius={'8px'}
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
                                />
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default QuestionTypeSelector;
