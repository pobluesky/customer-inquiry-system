import React from 'react';
import Header from '../../components/mocules/Header';
import Path from '../../components/atoms/Path';
import QuestionTypeSelectItem from '../../components/organisms/QuestionTypeSelectItem';
import QuestionContentItem from '../../components/organisms/QuestionContentItem';

function QuestionRegister() {
    return (
        <>
            <Header login={true} inq={false} voc={true} dashboard={false} />
            <Path largeCategory={'VoC'} mediumCategory={'문의하기'} />
            <QuestionTypeSelectItem />
            <QuestionContentItem />
        </>
    );
}

export default QuestionRegister;
