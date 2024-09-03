import React, { useState, useEffect } from 'react';
import dompurify from 'dompurify';
import Text from '../atoms/Text';
import Tag from '../atoms/Tag';
import Input from '../atoms/Input';
import TextEditor from '../atoms/TextEditor';
import {
    AnswerTitleInput,
    AnswerContent,
    CloseButton,
    AnswerButton,
} from '../atoms/VocButton';
import qmark from '../../assets/css/icons/voc/question_mark.svg';
import amark from '../../assets/css/icons/voc/answer_mark.svg';
import folder from '../../assets/css/icons/voc/question_folder.svg';
import {
    Question_Modal_Container,
    Question_Modal,
    Completed,
} from '../../assets/css/Voc.css';
import { getUserName } from '../../index';
import { useRecoilValue } from 'recoil';
import { getCookie } from '../../apis/utils/cookies';
import {
    WrongAnswerTitleAlert,
    WrongAnswerContentAlert,
    AnswerCompleteAlert,
} from '../../utils/actions';
import {
    validateAnswerTitle,
    validateAnswerContents,
} from '../../utils/validation';
import { postAnswerByQuestionId } from '../../apis/api/answer';
import { useNavigate } from 'react-router-dom';
import QuestionViewer from '../organisms/QuestionViewer';

export default function AnswerForm() {
    return (
        <div>
            <QuestionViewer />
        </div>
    );
}
