import React, { useState, useRef } from 'react';
import Input from '../atoms/Input';
import Button from '../atoms/Button';
import TextEditor from '../atoms/TextEditor';
import { getCookie } from '../../apis/utils/cookies';
import { useRecoilValue } from 'recoil';
import { getUserEmail } from './../../index';
import { postQuestionByUserId } from '../../apis/api/question';
import { Question_Input } from '../../assets/css/Voc.css';

function QuestionInput() {
    const [editorValue, setEditorValue] = useState('');
    console.log('텍스트 에디터 입력 값', editorValue);

    // findUserName 추가 필요
    const currentUserName = '홍길동';
    const currentUserEmail = useRecoilValue(getUserEmail);

    const titleRef = useRef(null);
    const [title, setTitle] = useState('');
    const [files, setFiles] = useState('기본 파일명');
    const [type, setType] = useState('INQ');

    const fetchPostQuestionByUserId = async (
        title,
        editorValue,
        files,
        type,
    ) => {
        const questionData = {
            title,
            editorValue,
            files,
            type,
        };

        const result = await postQuestionByUserId(
            getCookie('userId'),
            getCookie('accessToken'),
            questionData,
            'READY',
        );

        if (result) {
            console.log('응답받은 데이터는 다음과 같습니다.', result);
            resetForm();
        } else {
            console.error('Fetched data is not an array or is invalid.');
        }
    };

    // useEffect(() => {
    //     fetchPostQuestionByUserId();
    // }, []);

    const resetForm = () => {
        setTitle('');
        setEditorValue('');
        if (titleRef.current) {
            titleRef.current.value = '';
        }
        setFiles('기본 파일명');
    };

    return (
        <div className={Question_Input}>
            <div>
                <div>
                    <div>성명</div>
                    <div>{currentUserName}</div>
                    <div>이메일</div>
                    <div>{currentUserEmail}</div>
                </div>
                <div>
                    <Input
                        type="text"
                        width={'1126px'}
                        height={'32px'}
                        padding={'0 8px 0 8px'}
                        border={'solid 1px #c1c1c1'}
                        borderRadius={'8px'}
                        ref={titleRef} // ref 연결
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div>
                    <TextEditor
                        width={'1144px'}
                        inputHeight={'144px'}
                        inputMaxHeight={'144px'}
                        value={editorValue}
                        onChange={setEditorValue}
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
                            onClick={() => setFiles('기본 파일명')}
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
                        onClick={fetchPostQuestionByUserId} // 버튼 클릭 시 API 호출
                    />
                </div>
            </div>
        </div>
    );
}

export default QuestionInput;
