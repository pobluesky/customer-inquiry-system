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
    faqType,
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
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import ChatbotIcon from '../../assets/css/icons/ChatbotIcon.png';
import Poseokho from '../../assets/css/icons/Poseokho.png';
import profile from '../../assets/css/icons/profile.svg';
import pobluesky from '../../assets/css/icons/pobluesky.png';
import { postChatbot } from '../../apis/api/chatbot';
import { Link } from 'react-router-dom';

const InquiryQuestionList = ({ title, onQuestionClick, questionsType }) => {
    let questions = [];
    if(questionsType === '주문 문의') {
        questions = [
            '주문 언제 접수되나요?',
            '주문 변경 가능한가요?',
            '주문 배송지 변경 가능한가요?',
            '주문 프로세스가 궁금해요.',
        ];
    } else if (questionsType === '제품 통합 문의') {
        questions = [
            '제품 유형에 따라 라인아이템 내역도 달라지나요?',
            '라인아이템 등록 파일 형식이 궁금해요. PDF만 가능한가요?',
            '견적 문의와 견적+품질 문의 차이가 뭔가요?',
            'offersheet 내용을 따로 받고 싶은데, 방법이 있을까요?',
        ];
    } else if (questionsType === '등록 문의') {
        questions = [
            'inquiry 등록 방법',
            'inquiry 수정 / 삭제 방법',
            '결과 수신 후 계약 협의는 어떻게 하나요?',
        ]
    }

    return (
        <TableContainer
            component={Paper}
            elevation={0}
            sx={{
                marginLeft: '47px',
                width: '74%',
                borderRadius: '10px',
                boxShadow: '0 1px 2px rgba(0, 0, 0, 0.2)',
            }}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell
                            colSpan={2}
                            style={{
                                textAlign: 'center',
                                fontWeight: '800',
                                fontSize: '18px',
                            }}>
                            {title}
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {questions.map((question, index) => (
                        <TableRow
                            key={index}
                            hover
                            onClick={() => onQuestionClick(question)}
                            style={{ cursor: 'pointer' }}
                        >
                            <TableCell style={{ fontSize: '16px', color: '#2F2F2F' }}>{question}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>    );
};

const FAQSection = ({ onInquiryClick }) => {
    const [inqSection, setInqSection] = useState(false);
    const [siteSection, setSiteSection] = useState(false);
    const [etcSection, setEtcSection] = useState(false);
    const faqSectionRef = useRef(null);

    useEffect(() => {
        if (inqSection && faqSectionRef.current) {
            faqSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
        }
    }, [inqSection]);

    const toggleInqSection = () => {
        setInqSection(true);
    };

    const toggleSiteSection = () => {
        setSiteSection(true);
    };

    const toggleEtcSection = () => {
        setEtcSection(true);
    };

    return (
        <div>
            <div className={faqSection}>
                <div className={faqArticle}
                     style={{ backgroundColor: '#6187E7' }}>
                    <div className={faqTitle}>자주 묻는 질문</div>
                    <div className={faqDescription}>
                        고객사들이 자주 찾는 질문과<br />
                        답변 리스트를 안내합니다.
                    </div>
                    <div className={faqPick1} onClick={toggleInqSection}>Inquiry 문의
                    </div>
                    <div className={faqPick1}>사이트 이용 문의
                    </div>
                    <div className={faqPick1}>기타 문의
                    </div>
                </div>
                <div className={faqArticle}
                     style={{ backgroundColor: '#05ADD3' }}>
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

            { inqSection ? (
                <>
                    <div className={faqSection} ref={faqSectionRef}>
                        <div className={faqType} onClick={() => onInquiryClick('주문 문의')}>
                            주문 문의
                        </div>
                        <div className={faqType} onClick={() => onInquiryClick('제품 통합 문의')}>
                            제품 통합 문의
                        </div>
                        <div className={faqType} onClick={() => onInquiryClick('등록 문의')}>
                            등록 문의
                        </div>
                    </div>
                </>
            ) : (
                ''
            )}
        </div>
    );
};

const DefaultSection = ({ onFirstComment }) => (
    <div className={faqSection}>
        <Link to={'/voc-form/question'} style={{ textDecoration: 'none' }}>
            <div className={faqBox}>
                직접 VOC 문의하기
            </div>
        </Link>
        <div className={faqBox} onClick={onFirstComment}>
            이전으로 돌아가기
        </div>
    </div>
);

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [loading, setLoading] = useState(false);
    const [selectedInquiryType, setSelectedInquiryType] = useState(null);
    const chatContentRef = useRef(null);
    const inputRef = useRef(null);

    const getCurrentTime = () => {
        const now = new Date();
        return now.toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' });
    };

    useEffect(() => {
        if (chatContentRef.current) {
            chatContentRef.current.scrollTop = chatContentRef.current.scrollHeight;
        }
    }, [messages, selectedInquiryType]);

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
                    time: getCurrentTime(),
                    component: <FAQSection onInquiryClick={handleInquiryClick} ref={chatContentRef} />
                }
            ]);
        }
    }, [messages.length]);

    const handleFirstComment = () => {
        setMessages(prevMessages => [
            ...prevMessages,
            {
                text: `
                안녕하세요, 고객님.<br />
                Pobluesky입니다.<br />
                무엇이 궁금하신가요?<br />
                궁금하신 내용을 직접 입력해 주시거나,<br />
                아래에서 선택해 주세요.
            `,
                type: 'bot',
                time: getCurrentTime(),
                component: <FAQSection onInquiryClick={handleInquiryClick} ref={chatContentRef} />
            }
        ]);
    };

    const handleInquiryClick = (inquiryType) => {
        setSelectedInquiryType(inquiryType);

        setMessages(prev => [
            ...prev,
            {
                text: `Inquiry 문의 중 '${inquiryType}' 관련 자주하는 질문 리스트를 보여드릴게요.`,
                type: 'bot',
                time: getCurrentTime(),
                component: (
                    <InquiryQuestionList
                        title={inquiryType}
                        questionsType={inquiryType}
                        onQuestionClick={handleQuestionClick}
                        ref={chatContentRef}
                    />
                ),
            },
        ]);
    };

    const handleQuestionClick = async (question) => {
        setMessages(prev => [
            ...prev,
            { text: question, type: 'user', time: getCurrentTime() },
        ]);

        setLoading(true);

        try {
            const botResponse = await new Promise((resolve) =>
                setTimeout(async () => {
                    const response = await postChatbot({ message: question });
                    resolve(response.data);
                }, 1500)
            );

            setMessages(prev => [
                ...prev,
                {
                    text: botResponse,
                    type: 'bot',
                    time: getCurrentTime(),
                    component: <DefaultSection onFirstComment={handleFirstComment} ref={chatContentRef} />,
                },
            ]);
        } catch (error) {
            console.error("Error fetching response:", error);
        } finally {
            setLoading(false);
        }
    };

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
            { text: messageToSend, type: 'user', time: getCurrentTime() }
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
                    text: botResponse, type: 'bot', time: getCurrentTime(),
                    component: <DefaultSection onFirstComment={handleFirstComment} ref={chatContentRef} />,
                }
            ]);

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
