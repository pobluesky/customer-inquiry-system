import React, { useState, useEffect, useRef } from 'react';
import {
    chatBotIcon,
    chatBox,
    chatBoxOpen,
    chatHeader,
    closeButton,
    chatContent,
    dateHeader,
    messageBoxWrapper,
    messageBox,
    message,
    time,
    faqSection,
    faqBox,
    chatInput,
    sendButton,
    loadingDotsWrapper,
    loadingDot,
    loadingDot1,
    loadingDot2,
    loadingDot3,
} from '../../assets/css/ChatbotIcon.css';
import ChatbotIcon from '../../assets/css/icons/ChatbotIcon.png';
import Poseokho from '../../assets/css/icons/Poseokho.png';
import profile from '../../assets/css/icons/profile.svg';
import pobluesky from '../../assets/css/icons/pobluesky.png';

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentTime, setCurrentTime] = useState('');
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [loading, setLoading] = useState(false);
    const chatContentRef = useRef(null);
    const inputRef = useRef(null);

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            setCurrentTime(now.toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' }));
        };

        updateTime();
        const timer = setInterval(updateTime, 60000);

        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        if (chatContentRef.current) {
            chatContentRef.current.scrollTop = chatContentRef.current.scrollHeight;
        }
    }, [messages]);

    useEffect(() => {
        if (messages.length === 0) {
            setMessages([
                {
                    text: `
                        안녕하세요, 고객님.<br />
                        Pobluesky입니다.<br />
                        무엇이 궁금하신가요?<br />
                        궁금하신 내용을 직접 입력해 주시거나,<br />
                        아래에서 선택해 주세요.
                    `,
                    type: 'bot',
                    time: currentTime
                }
            ]);
        }
    }, [messages.length, currentTime]);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    const handleSend = async () => {
        if (!inputValue.trim()) return;

        const messageToSend = inputValue;

        setMessages(prev => [
            ...prev,
            { text: messageToSend, type: 'user', time: currentTime }
        ]);

        setLoading(true);

        setTimeout(() => {
            setInputValue('');
            if (inputRef.current) {
                inputRef.current.value = '';
            }
        }, 100);

        try {
            const response = await fetch('https://api.adviceslip.com/advice');
            const data = await response.json();
            const botResponse = data.slip.advice;

            setMessages(prev => [
                ...prev,
                { text: botResponse, type: 'bot', time: currentTime }
            ]);
        } catch (error) {
            console.error("Error fetching advice:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            if (!loading) {
                handleSend();
            }
        }
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
                <div className={chatContent} ref={chatContentRef}>
                    <div className={dateHeader}>
                        {new Date().toLocaleDateString('ko-KR', {
                            weekday: 'long',
                            year: 'numeric',
                            month: '2-digit',
                            day: '2-digit'
                        })}
                    </div>
                    {messages.map((msg, index) => (
                        <div key={index} className={messageBoxWrapper} style={{ display: msg.type === 'user' ? 'flex-end' : 'flex-start' }}>
                            <div className={messageBox} style={{ flexDirection: msg.type === 'user' ? 'row-reverse' : 'row' }}>
                                <img src={msg.type === 'user' ? profile : Poseokho} alt={msg.type === 'user' ? 'User' : 'Poseokho'} />
                                <div className={message} style={{
                                    backgroundColor: msg.type === 'user'
                                        ? '#FFEE96' : '#FFFFFF',
                                    marginLeft: msg.type === 'user' ? 0 : '6px',
                                    marginRight: msg.type === 'bot' ? 0 : '6px',
                                }}>
                                    <div dangerouslySetInnerHTML={{ __html: msg.text }} />
                                </div>
                                <div className={time} style={{
                                    textAlign: msg.type === 'user' ? 'right'
                                        : 'left',
                                    position: 'relative',
                                    marginTop: 'auto',
                                    marginLeft: msg.type === 'user' ? 0 : '6px',
                                    marginRight: msg.type === 'bot' ? 0 : '6px',
                                    bottom: '2px',
                                    right: msg.type === 'user' ? 0 : 'auto',
                                    left: msg.type === 'user' ? 'auto' : 0,
                                }}>
                                    {msg.time}
                                </div>
                            </div>
                        </div>
                    ))}

                    {loading && (
                        <div className={messageBox}>
                            <img src={Poseokho} alt="Poseokho" />
                            <div className={loadingDotsWrapper}>
                                <div
                                    className={`${loadingDot} ${loadingDot1}`}></div>
                                <div
                                    className={`${loadingDot} ${loadingDot2}`}></div>
                                <div
                                    className={`${loadingDot} ${loadingDot3}`}></div>
                            </div>

                        </div>
                    )}

                    {/* 항상 뜨는 버튼 */}
                    <div className={faqSection}>
                        <div className={faqBox}>
                            직접 VOC 문의하기
                        </div>
                        <div className={faqBox}>
                            이전으로 돌아가기
                        </div>
                    </div>
                </div>

                <div className={chatInput}>
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="메세지를 입력해 주세요."
                        onKeyDown={handleKeyDown}
                        ref={inputRef}
                    />
                    <button className={sendButton} onClick={handleSend}>전송</button>
                </div>
            </div>
        </div>
    );
};

export default Chatbot;
