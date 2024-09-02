import React, { useEffect, useState } from 'react';
import {
    Dialog,
    DialogContent,
    DialogTitle,
    IconButton,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Alert,
    Tabs,
    Tab,
    Box,
    Radio,
    RadioGroup,
    FormControlLabel,
    Button
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import Star from '@mui/icons-material/Star';
import StarBorder from '@mui/icons-material/StarBorder';
import { getInquiriesByProductType, putFavoriteInquiry, getFavoriteInquiriesByProductType } from '../../apis/api/inquiry';
import { useAuth } from '../../hooks/useAuth';

const Modal = ({ isOpen, onClose, productType, onSelect }) => {
    const { userId } = useAuth();
    const [inquiries, setInquiries] = useState([]);
    const [favoriteInquiries, setFavoriteInquiries] = useState([]);
    const [expandedRows, setExpandedRows] = useState({});
    const [error, setError] = useState('');
    const [tabValue, setTabValue] = useState(0); // 0: 전체, 1: 즐겨찾기
    const [selectedInquiry, setSelectedInquiry] = useState(null); // 단일 선택

    useEffect(() => {
        const fetchInquiries = async () => {
            if (productType === "") {
                setError("제품유형을 선택해 주세요.");
                return;
            }

            setError(''); // 이전 에러 메시지를 초기화
            try {
                const response = await getInquiriesByProductType(userId, productType);
                setInquiries(response.data || []);
            } catch (error) {
                console.error('Error fetching inquiries:', error);
                setError('문제가 발생했습니다. 다시 시도해 주세요.');
            }
        };

        const fetchFavoriteInquiries = async () => {
            if (productType === "") {
                setError("제품유형을 선택해 주세요.");
                return;
            }

            setError(''); // 이전 에러 메시지를 초기화
            try {
                const response = await getFavoriteInquiriesByProductType(userId, productType);
                setFavoriteInquiries(response.data || []);
            } catch (error) {
                console.error('Error fetching favorite inquiries:', error);
                setError('문제가 발생했습니다. 다시 시도해 주세요.');
            }
        };

        if (isOpen) {
            fetchInquiries();
            fetchFavoriteInquiries();
        }
    }, [isOpen, userId, productType]);

    const handleExpandToggle = (index) => {
        setExpandedRows((prev) => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    const handleFavoriteToggle = async (inquiryId, index) => {
        try {
            const updatedInquiries = inquiries.map((inquiry, i) =>
                i === index ? { ...inquiry, isFavorite: !inquiry.isFavorite } : inquiry
            );
            setInquiries(updatedInquiries);

            const updatedFavoriteInquiries = favoriteInquiries.map((inquiry) =>
                inquiry.inquiryId === inquiryId ? { ...inquiry, isFavorite: !inquiry.isFavorite } : inquiry
            );
            setFavoriteInquiries(updatedFavoriteInquiries);

            await putFavoriteInquiry(inquiryId);

            const response = await getFavoriteInquiriesByProductType(userId, productType);
            setFavoriteInquiries(response.data || []);
        } catch (error) {
            console.error('Failed to toggle favorite:', error);
            setInquiries(inquiries);
            setFavoriteInquiries(favoriteInquiries);
        }
    };

    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
    };

    const handleSelect = () => {
        if (selectedInquiry) {
            const selectedData = inquiries.find(inquiry => inquiry.inquiryId === selectedInquiry);
            onSelect([selectedData]); // 배열로 전달
            onClose();
        }
    };

    return (
        <Dialog
            open={isOpen}
            onClose={onClose}
            maxWidth="lg"
            fullWidth
        >
            <DialogTitle sx={{ position: 'relative' }}>
                과거 Inquiry 별 라인아이템 이력 조회
                <IconButton
                    edge="end"
                    color="inherit"
                    onClick={onClose}
                    aria-label="close"
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon sx={{ marginRight: '10px' }} />
                </IconButton>
            </DialogTitle>
            <DialogContent>
                {error && (
                    <Alert severity="error" sx={{ mb: 2 }}>
                        {error}
                    </Alert>
                )}
                {!error && (
                    <>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <Tabs value={tabValue} onChange={handleTabChange} aria-label="tabs">
                                <Tab label="전체" />
                                <Tab label="즐겨찾기" />
                            </Tabs>
                        </Box>
                        <TableContainer component={Paper} sx={{ maxHeight: '400px', overflowY: 'auto' }}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell style={{ backgroundColor: '#03507d', color: '#ffffff' }}>선택</TableCell>
                                        <TableCell style={{ backgroundColor: '#03507d', color: '#ffffff' }}>라인아이템 조회</TableCell>
                                        <TableCell style={{ backgroundColor: '#03507d', color: '#ffffff' }}>Inquiry 번호</TableCell>
                                        <TableCell style={{ backgroundColor: '#03507d', color: '#ffffff' }}>판매계약자</TableCell>
                                        <TableCell style={{ backgroundColor: '#03507d', color: '#ffffff' }}>산업분류</TableCell>
                                        <TableCell style={{ backgroundColor: '#03507d', color: '#ffffff' }}>고객사</TableCell>
                                        <TableCell style={{ backgroundColor: '#03507d', color: '#ffffff' }} align="right">즐겨찾기</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {(tabValue === 0 ? inquiries : favoriteInquiries).map((inquiry, inquiryIndex) => (
                                        <React.Fragment key={inquiry.inquiryId}>
                                            <TableRow>
                                                <TableCell>
                                                    <Radio
                                                        checked={selectedInquiry === inquiry.inquiryId}
                                                        onChange={() => setSelectedInquiry(inquiry.inquiryId)}
                                                        value={inquiry.inquiryId}
                                                    />
                                                </TableCell>
                                                <TableCell>
                                                    <IconButton
                                                        onClick={() => handleExpandToggle(inquiryIndex)}
                                                    >
                                                        {expandedRows[inquiryIndex] ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                                                    </IconButton>
                                                </TableCell>
                                                <TableCell>{inquiry.inquiryId}</TableCell>
                                                <TableCell>{inquiry.salesPerson}</TableCell>
                                                <TableCell>{inquiry.industry}</TableCell>
                                                <TableCell>{inquiry.customerName}</TableCell>
                                                <TableCell align="right">
                                                    <IconButton
                                                        color={inquiry.isFavorite ? 'primary' : 'default'}
                                                        onClick={() => handleFavoriteToggle(inquiry.inquiryId, inquiryIndex)}
                                                    >
                                                        {inquiry.isFavorite ? <Star /> : <StarBorder />}
                                                    </IconButton>
                                                </TableCell>
                                            </TableRow>
                                            {expandedRows[inquiryIndex] && inquiry.lineItemList && (
                                                <TableRow>
                                                    <TableCell colSpan={7} sx={{ padding: 0 }}>
                                                        <TableContainer component={Paper} sx={{ maxHeight: '150px', overflowY: 'auto' }}>
                                                            <Table>
                                                                <TableHead>
                                                                    <TableRow>
                                                                        {Object.keys(inquiry.lineItemList[0] || {}).map((key) => (
                                                                            key !== 'inquiryId' && key !== 'isActivated' && (
                                                                                <TableCell key={key}>{key}</TableCell>
                                                                            )
                                                                        ))}
                                                                    </TableRow>
                                                                </TableHead>
                                                                <TableBody>
                                                                    {inquiry.lineItemList.map((lineItem, lineIndex) => (
                                                                        <TableRow key={lineIndex}>
                                                                            {Object.entries(lineItem).map(([key, value]) => (
                                                                                key !== 'inquiryId' && key !== 'isActivated' && (
                                                                                    <TableCell key={key}>{value}</TableCell>
                                                                                )
                                                                            ))}
                                                                        </TableRow>
                                                                    ))}
                                                                </TableBody>
                                                            </Table>
                                                        </TableContainer>
                                                    </TableCell>
                                                </TableRow>
                                            )}
                                        </React.Fragment>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleSelect}
                            sx={{ mt: 2 }}
                            disabled={!selectedInquiry} // 선택되지 않은 경우 버튼 비활성화
                        >
                            확인
                        </Button>
                    </>
                )}
            </DialogContent>
        </Dialog>
    );
};

export default Modal;
