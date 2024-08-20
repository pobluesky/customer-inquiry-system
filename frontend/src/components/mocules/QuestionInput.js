import React, { useState } from 'react';
import Input from '../atoms/Input';
import Button from '../atoms/Button';
import { Question_Content_Container } from '../../assets/css/Voc.css';
import TextEditor from './TextEditor';

function QuestionInput() {
    const [originalText, setOriginalText] = useState('');

    return (
        <div className={Question_Content_Container}>
            <div>
                <div>
                    <div>성명</div>
                    <div>홍길동</div>
                    <div>이메일</div>
                    <div>posco@posco.co.kr</div>
                </div>
                <div>
                    <Input
                        // ref={ref}
                        // value={value}
                        // onChange={onChange}
                        // placeholder={placeholder}
                        type="text"
                        width={'1140px'}
                        height={'32px'}
                        padding={'2px'}
                        border={'solid 1px #c1c1c1'}
                        borderRadius={'8px'}
                    />
                </div>
                <div>
                    <TextEditor
                        originalText={originalText}
                        setOriginalText={setOriginalText}
                    />
                </div>
                <div>
                    <div>첨부파일</div>
                    <div>
                        <Button
                            btnName={'파일 추가'}
                            width={'72px'}
                            height={'28px'}
                            fontSize={'12px'}
                            backgroundColor={'#ffffff'}
                            textColor={'#8b8b8b'}
                            border={'solid 1px #c1c1c1'}
                            borderRadius={'4px'}
                        />
                    </div>
                    <div>
                        <Button
                            btnName={'파일 삭제'}
                            width={'72px'}
                            height={'28px'}
                            fontSize={'12px'}
                            backgroundColor={'#ffffff'}
                            textColor={'#8b8b8b'}
                            border={'solid 1px #c1c1c1'}
                            borderRadius={'4px'}
                        />
                    </div>
                    <div>
                        * 파일은 최대 1개까지 첨부 가능하며, 최대 용량은 총
                        10MB의 용량 제한이 있습니다.
                    </div>
                </div>
                <div>
                    <div>File</div>
                </div>
                <div>
                    <Button
                        btnName={'문의 등록'}
                        width={'108px'}
                        height={'48px'}
                        fontSize={'18px'}
                        backgroundColor={'#03507d'}
                        textColor={'#ffffff'}
                        border={'solid 1px #c1c1c1'}
                        borderRadius={'12px'}
                    />
                </div>
            </div>
        </div>
    );
}

export default QuestionInput;
