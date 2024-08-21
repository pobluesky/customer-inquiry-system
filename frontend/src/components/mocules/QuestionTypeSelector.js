import React, { useState } from 'react';
import Input from '../atoms/Input';
import Button from '../atoms/Button';
import QuestionInquirySearchModal from './QuestoinInquirySearchModal';
import search from '../../assets/css/icons/voc/search.svg';
import { Question_Type_Selector } from '../../assets/css/Voc.css';

function QuestionTypeSelector() {
    const [selectedOption, setSelectedOption] = useState('INQ'); // 질문 유형
    const [openModal, setOpenModal] = useState(false);

    const optionSelect = (e) => {
        setSelectedOption(e.target.value);
    };

    return (
        <div className={Question_Type_Selector}>
            <div>
                {/* 아이콘 + VoC 문의하기 */}
                <div>
                    <img src={search} />
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
                                checked={selectedOption === 'INQ'}
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
                                checked={selectedOption === 'SITE'}
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
                                checked={selectedOption === 'ETC'}
                                onChange={optionSelect}
                            />
                        </label>
                    </div>
                    <div>기타 문의</div>
                </div>
                <div>
                    {selectedOption === 'INQ' && (
                        <>
                            <div>Inquiry No.</div>
                            <div>
                                <Input
                                    // ref={ref}
                                    // value={value}
                                    // onChange={onChange}
                                    // placeholder={placeholder}
                                    type="text"
                                    width={'204px'}
                                    height={'26px'}
                                    padding={'0 4px 0 4px'}
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
                                    onClick={() => {
                                        setOpenModal(true);
                                    }}
                                />
                            </div>
                        </>
                    )}
                </div>
            </div>
            {openModal && <QuestionInquirySearchModal />}
        </div>
    );
}

export default QuestionTypeSelector;
