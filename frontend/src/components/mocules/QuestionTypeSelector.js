import React from 'react';
import Input from '../atoms/Input';
import Button from '../atoms/Button';
import search from '../../assets/css/icons/voc/search.svg';
import { Question_Type_Selector } from '../../assets/css/Voc.css';

function QuestionTypeSelector() {
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
                                value="option1"
                                checked={true}
                            />
                        </label>
                    </div>
                    <div>주문 문의</div>
 
                    <div className="radio">
                        <label>
                            <input type="radio" value="option2" />
                        </label>
                    </div>
                    <div>사이트 이용 문의</div>

                    <div className="radio">
                        <label>
                            <input type="radio" value="option3" />
                        </label>
                    </div>
                    <div>기타 문의</div>
                </div>
                <div>
                    <div>Inquiry No.</div>
                    <div>
                        <Input
                            // ref={ref}
                            // value={value}
                            // onChange={onChange}
                            // placeholder={placeholder}
                            type="text"
                            width={'204px'}
                            height={'20px'}
                            padding={'2px'}
                            border={'solid 1px #c1c1c1'}
                            borderRadius={'4px'}
                        />
                    </div>
                    <div>
                        <Button
                            btnName={'번호 조회'}
                            width={'96px'}
                            height={'28px'}
                            backgroundColor={'#03507d'}
                            textColor={'#ffffff'}
                            borderRadius={'4px'}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default QuestionTypeSelector;
