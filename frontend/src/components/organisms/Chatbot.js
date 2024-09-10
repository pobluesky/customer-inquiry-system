import React, { useState, useEffect } from 'react';
import {
    chatBotIcon,
    chatBox,
    chatBoxOpen,
    chatHeader,
    title,
    closeButton,
    chatContent,
    dateHeader,
    messageBoxWrapper,
    messageBox,
    message,
    time,
    faqBox,
    faqSection,
    faqContent,
    button,
    question,
    inquiryBox,
    inquiryContent,
    inquirySection,
    buttons,
    answer,
    chatInput,
    sendButton
} from '../../assets/css/ChatbotIcon.css';
import ChatbotIcon from '../../assets/css/icons/ChatbotIcon.png';
import Poseokho from '../../assets/css/icons/Poseokho.png'; // Path to the icon
import pobluesky from '../../assets/css/icons/pobluesky.png'; // Path to the icon

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedFaq, setSelectedFaq] = useState(null);
    const [currentTime, setCurrentTime] = useState('');

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            setCurrentTime(now.toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' }));
        };

        updateTime(); // Initial time set
        const timer = setInterval(updateTime, 60000); // Update time every minute

        return () => clearInterval(timer); // Cleanup interval on component unmount
    }, []);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    const handleFaqClick = (faqType) => {
        setSelectedFaq(faqType);
    };

    const handleQuestionClick = (question) => {
        // Handle question click to display the answer
    };

    return (
        <div>
            <img
                src={ChatbotIcon}
                alt="chatbot"
                className={chatBotIcon}
                onClick={handleToggle}
            />
            <div className={`${chatBox} ${isOpen ? chatBoxOpen : ''}`}>
                <div className={chatHeader}>
                    <img src={pobluesky} alt="pobluesky" />
                    <button className={closeButton} onClick={handleClose}>X</button>
                </div>
                <div className={chatContent}>
                    <div className={dateHeader}>
                        {new Date().toLocaleDateString('ko-KR', {
                            weekday: 'long',
                            year: 'numeric',
                            month: '2-digit',
                            day: '2-digit'
                        })}
                    </div>
                    {isOpen && (
                        <>
                            <div className={messageBoxWrapper}>
                                <div className={messageBox}>
                                    <img src={Poseokho} alt="Poseokho" />
                                    <div className={message}>
                                        안녕하세요, 고객님.<br />
                                        Pobluesky입니다.<br />
                                        무엇이 궁금하신가요?<br />
                                        궁금하신 내용을 직접 입력해 주시거나,<br />
                                        아래에서 선택해 주세요.
                                    </div>
                                </div>
                                <div className={time}>{currentTime}</div>
                            </div>
                            <div className={faqSection}>
                                <div className={faqBox} onClick={() => handleFaqClick('FAQ')}>자주 묻는 질문</div>
                                <div className={inquiryBox} onClick={() => handleFaqClick('INQUIRY')}>직접 질문하기</div>
                            </div>
                            {selectedFaq === 'FAQ' && (
                                <div className={faqContent}>
                                    <div className={question}>주문 문의</div>
                                    <div className={question}>제품 종합 문의</div>
                                    <div className={question}>등록 문의</div>
                                    {/* Implement scrollable FAQ items here */}
                                </div>
                            )}
                            {selectedFaq === 'INQUIRY' && (
                                <div className={inquiryContent}>
                                    <div className={question}>채팅 시작하기</div>
                                    <div className={question}>VOC로 1:1 문의하기</div>
                                    {/* Implement scrollable inquiry items here */}
                                </div>
                            )}
                        </>
                    )}
                </div>
                <div className={chatInput}>
                    <input type="text" placeholder="메세지를 입력해 주세요." />
                    <button className={sendButton}>전송</button>
                </div>
            </div>
        </div>
    );
};

export default Chatbot;
