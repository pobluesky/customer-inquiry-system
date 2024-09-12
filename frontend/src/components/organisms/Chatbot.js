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
    faqTitle,
    faqPick1,
    faqPick2,
    faqDescription,
    faqArticle,
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
import { postChatbot } from '../../apis/api/chatbot';
import { Link } from 'react-router-dom';

const FAQSection = () => (
    <div className={faqSection}>
        <div className={faqArticle} style={{ backgroundColor: '#6187E7' }}>
            <div className={faqTitle}>자주 묻는 질문</div>
            <div className={faqDescription}>
                고객사들이 자주 찾는 질문과<br />
                답변 리스트를 안내합니다.
            </div>
            <div className={faqPick1}>Inquiry 문의</div>
            <div className={faqPick1}>사이트 이용 문의</div>
            <div className={faqPick1}>기타 문의</div>
        </div>
        <div className={faqArticle} style={{ backgroundColor: '#05ADD3' }}>
            <div className={faqTitle}>직접 질문하기</div>
            <div className={faqDescription}>
                궁금한 내용을 하단<br />
                채팅창에 입력해 주세요.
            </div>
            <div className={faqPick2}>새로운 채팅 시작하기</div>
            <div className={faqPick2}>VOC로 1:1 문의하기</div>
            <div className={faqPick2}>채팅 종료하기</div>
        </div>
    </div>
);

const DefaultSection = () => (
    <div className={faqSection}>
        <Link to={'/voc-form/question'} style={{ textDecoration: 'none' }}>
            <div className={faqBox}>
                직접 VOC 문의하기
            </div>
        </Link>
        <div className={faqBox}>
            이전으로 돌아가기
        </div>
    </div>
);

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentTime, setCurrentTime] = useState('');
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [loading, setLoading] = useState(false);
    const [showInitialFAQ, setShowInitialFAQ] = useState(true);
    const [showDefaultSection, setShowDefaultSection] = useState(false);
    const [showFAQSection, setShowFAQSection] = useState(true);
    const chatContentRef = useRef(null);
    const inputRef = useRef(null);

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            setCurrentTime(now.toLocaleTimeString('ko-KR',
                { hour: '2-digit', minute: '2-digit' }));
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
            // 안내 멘트
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
                    time: currentTime,
                    component: <FAQSection />
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
            const botResponse = await new Promise(
                (resolve) => setTimeout(async () => {
                    const response = await postChatbot(
                        { message: messageToSend });
                    resolve(response.data);
                }, 1500));

            setMessages(prev => [
                ...prev,
                {
                    text: botResponse, type: 'bot', time: currentTime,
                    component: <DefaultSection />
                }
            ]);

            // FAQ 섹션을 표시
            setShowInitialFAQ(false);
            // API 호출 후 항상 FAQ 섹션을 표시
            setShowDefaultSection(true);  // (1) 여기에 바로 추가

        } catch (error) {
            console.error("Error fetching response:", error);
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

    const handleGoBack = () => {
        setMessages(prev => [
            ...prev,
            {
                text: `
            안녕하세요, 고객님.<br />
            Pobluesky입니다.<br />
            무엇이 궁금하신가요?<br />
            궁금하신 내용을 직접 입력해 주시거나,<br />
            아래에서 선택해 주세요.
            `,
                type: 'bot',
                time: currentTime,
                section: `
                        <div className={faqSection}>
                            <div className={faqArticle} style={{ backgroundColor: '#6187E7' }}>
                                <div className={faqTitle}>자주 묻는 질문</div>
                                <div className={faqDescription}>
                                    고객사들이 자주 찾는 질문과<br />
                                    답변 리스트를 안내합니다.
                                </div>
                                <div className={faqPick1}>Inquiry 문의</div>
                                <div className={faqPick1}>사이트 이용 문의</div>
                                <div className={faqPick1}>기타 문의</div>
                            </div>
                            <div className={faqArticle} style={{ backgroundColor: '#05ADD3' }}>
                                <div className={faqTitle}>직접 질문하기</div>
                                <div className={faqDescription}>
                                    궁금한 내용을 하단<br />
                                    채팅창에 입력해 주세요.
                                </div>
                                <div className={faqPick2}>새로운 채팅 시작하기</div>
                                <div className={faqPick2}>VOC로 1:1 문의하기</div>
                                <div className={faqPick2}>채팅 종료하기</div>
                            </div>
                        </div>
                `,
            }
        ]);

        setShowFAQSection(true);
        setShowInitialFAQ(true);
    };

    useEffect(() => {
        if (showDefaultSection) {
            console.log('showDefaultSection이 true로 설정되었습니다.');
        }
    }, [showDefaultSection]);
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
                    <button className={closeButton} onClick={handleClose}>X
                    </button>
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
                        <div key={index} className={messageBoxWrapper} style={{
                            display: msg.type === 'user' ? 'flex-end'
                                : 'flex-start',
                        }}>
                            <div className={messageBox} style={{
                                flexDirection: msg.type === 'user'
                                    ? 'row-reverse' : 'row',
                            }}>
                                <img src={msg.type === 'user' ? profile
                                    : Poseokho}
                                     alt={msg.type === 'user' ? 'User'
                                         : 'Poseokho'} />
                                <div className={message} style={{
                                    backgroundColor: msg.type === 'user'
                                        ? '#FFEE96' : '#FFFFFF',
                                    marginLeft: msg.type === 'user' ? 0 : '6px',
                                    marginRight: msg.type === 'bot' ? 0 : '6px',
                                }}>
                                    <div
                                        dangerouslySetInnerHTML={{ __html: msg.text }} />
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
                            {msg.component && <div>{msg.component}</div>}
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


                </div>
                <div className={chatInput}>
                    <input
                        type="text"
                        value={inputValue}
                        placeholder={'질문을 입력해 주세요.'}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={handleKeyDown}
                        ref={inputRef}
                    />
                    <button
                        className={sendButton}
                        onClick={handleSend}
                        disabled={loading}
                    >
                        전송
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Chatbot;
