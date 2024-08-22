import React, { useState } from 'react';
import ToggleBar from '../../mocules/ToggleBar';
import {
    Container,
    Sheet,
    Opend,
    _TextArea,
} from '../../../assets/css/Form.css';

const FinalReviewTextForm = ({ formData }) => {
    if(!formData) {
        return;
    }

    const [isChecked, setCheck] = useState(true);

    return (
        <div className={Container} style={{ marginTop: '-2vh' }}>
            <div className={Sheet}>
                <ToggleBar
                    title={'최종검토내용'}
                    isChecked={isChecked}
                    setCheck={setCheck}
                />
                {isChecked ? (
                    <div className={Opend}>
                        <textarea
                            className={_TextArea}
                            placeholder="내용을 입력해 주세요"
                            wrap="hard"
                            value={formData.finalReviewText}
                        />
                    </div>
                ) : (
                    ''
                )}
            </div>
        </div>
    );
};

export default FinalReviewTextForm;
