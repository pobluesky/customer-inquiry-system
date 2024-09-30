import React, { useState, useEffect } from 'react';
import {
    Box,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Typography,
    ToggleButton,
    ToggleButtonGroup
} from '@mui/material';
import { styled } from '@mui/material/styles';
import MyStepTracker from './MyStepTracker';
import ProfileCircle from '../atoms/ProfileCircle';
import { getSalesManagerInquiriesByParameter } from '../../apis/api/inquirySearch';
import { BorderLinearProgress } from './BorderLinearProgress';
import { getUserInfoByManagers } from '../../apis/api/auth';
import { useAuth } from '../../hooks/useAuth';
import { Departments } from '../../utils/inquiry';

const MyInquiryList = () => {
    const { userId, role } = useAuth();
    const [inquiries, setInquiries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedRow, setSelectedRow] = useState(null);
    const [currentStep, setCurrentStep] = useState(0);
    const [inquiryType, setInquiryType] = useState('품질+견적 문의');
    const [userInfo, setUserInfo] = useState(null);

    useEffect(() => {
        if (userInfo) {
            fetchInquiries();
        }
    }, [inquiryType, userInfo, role]);

    useEffect(() => {
        fetchUserInfo();
    }, []);

    useEffect(() => {
        if (inquiries.length > 0) {
            const initialRow = inquiries[0];
            updateStepTracker(initialRow);
        }
    }, [inquiries]);

    const fetchInquiries = async () => {
        if (!userInfo) return;
        try {
            const params = {
                salesManagerName: userInfo.name,
                inquiryType: inquiryType === '견적 문의' ? 'QUOTE_INQUIRY' : 'COMMON_INQUIRY',
            };
            const data = await getSalesManagerInquiriesByParameter(params);
            setInquiries(data);
        } catch (error) {
            console.error('Error fetching inquiries:', error);
        } finally {
            setLoading(false);
        }
    };

    const fetchUserInfo = async () => {
        try {
            const response = await getUserInfoByManagers(userId);
            setUserInfo(response.data.data);
        } catch (error) {
            console.error('Error fetching User Info:', error);
        } finally {
            setLoading(false);
        }
    }

    const updateStepTracker = (row) => {
        const step = calculateStep(row.progress);
        setCurrentStep(step);
        setInquiryType(row.inquiryType);
    };

    const calculateStep = (progress) => {
        switch (progress) {
            case '문의제출':
                return 1;
            case '문의접수':
                return 2;
            case '1차검토완료':
                return 3;
            case '품질검토요청':
                return 4;
            case '품질검토접수':
                return 5;
            case '품질검토완료':
                return 6;
            case '최종검토완료':
                return 7;
            default:
                return 0;
        }
    };

    const calculatePercentage = (progress, inquiryType) => {
        let percentage = 0;

        if (progress === '문의제출') {
            percentage = 10;
        } else if (progress === '문의접수') {
            percentage = 20;
        } else if (progress === '1차검토완료') {
            percentage = 35;
            if (inquiryType === '견적 문의') {
                percentage = 60;
            }
        } else if (progress === '품질검토요청') {
            percentage = 45;
        } else if (progress === '품질검토접수') {
            percentage = 65;
        } else if (progress === '품질검토완료') {
            percentage = 80;
        } else if (progress === '최종검토완료') {
            percentage = 100;
        }
        return percentage;
    };

    const handleRowClick = (row) => {
        setSelectedRow(row.inquiryId);
        updateStepTracker(row);
    };

    const toggleInquiryType = (event, newType) => {
        if (newType !== null) {
            setInquiryType(newType);
        }
    };

    return (
        <Container>
            <Header>
                <Typography variant="h6" fontWeight="bold">
                    내 Inquiry 목록
                </Typography>
                <ToggleButtonGroup
                    value={inquiryType}
                    exclusive
                    onChange={toggleInquiryType}
                    aria-label="문의 유형 선택"
                >
                    <ToggleButton value="품질+견적 문의" aria-label="품질+견적 문의">
                        품질+견적 문의
                    </ToggleButton>
                    <ToggleButton value="견적 문의" aria-label="견적 문의">
                        견적 문의
                    </ToggleButton>
                </ToggleButtonGroup>
            </Header>
            <MyStepTracker currentStep={currentStep} inquiryType={inquiryType} />
            <InquiryTableContainer>
                <TableContainer component={Paper} elevation={0} sx={{ border: '1px solid #e0e0e0' }}>
                    <Table stickyHeader>
                        <TableHead>
                            <TableRow>
                                <TableCell align="left" sx={{ backgroundColor: '#E8F5E9', border: 'none', fontWeight: '700' }}>담당자</TableCell>
                                <TableCell align="left" sx={{ backgroundColor: '#E8F5E9', border: 'none', fontWeight: '700' }}>부서</TableCell>
                                <TableCell align="left" sx={{ backgroundColor: '#E8F5E9', border: 'none', fontWeight: '700' }}>진행 상태</TableCell>
                                <TableCell align="left" sx={{ backgroundColor: '#E8F5E9', border: 'none', fontWeight: '700' }}>문의 일자</TableCell>
                                <TableCell align="left" sx={{ backgroundColor: '#E8F5E9', border: 'none', fontWeight: '700' }}>고객 이름</TableCell>
                                <TableCell align="left" sx={{ backgroundColor: '#E8F5E9', border: 'none', fontWeight: '700' }}>영업 담당자</TableCell>
                                <TableCell align="center" sx={{ backgroundColor: '#E8F5E9', border: 'none', fontWeight: '700' }}>진행률</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {inquiries.map((row) => (
                                <StyledTableRow
                                    key={row.inquiryId}
                                    selected={selectedRow === row.inquiryId}
                                    onClick={() => handleRowClick(row)}
                                >
                                    <TableCell align="left">
                                        <ProfileCircle
                                            name={row.qualityManagerName === '-' ? row.salesManagerName : row.qualityManagerName}
                                            backgroundColor={row.qualityManagerName !== '-' ? '#ADE8FF' : null}
                                        />
                                    </TableCell>
                                    <TableCell align="left">
                                        <InquiryDetails>
                                            <Typography variant="body1" fontWeight="bold">
                                                {row.qualityManagerName === '-' ? row.salesManagerName : row.qualityManagerName}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {Departments[userInfo.department]}
                                            </Typography>
                                        </InquiryDetails>
                                    </TableCell>
                                    <TableCell align="left">{row.progress}</TableCell>
                                    <TableCell align="left">{row.createdDate}</TableCell>
                                    <TableCell align="left">{row.customerName}</TableCell>
                                    <TableCell align="left">{row.salesPerson}</TableCell>
                                    <TableCell align="center">
                                        <BorderLinearProgress
                                            variant="determinate"
                                            value={calculatePercentage(row.progress, inquiryType)}
                                        />
                                    </TableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </InquiryTableContainer>
        </Container>
    );
};

const Container = styled(Box)`
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  box-shadow: 2;
  padding: 20px;
  overflow: hidden;
  height: 550px;
  z-index: 0;
`;

const Header = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const InquiryTableContainer = styled(TableContainer)({
    maxHeight: '400px',
    overflowY: 'auto',
    overflowX: 'auto',
    border: '1px solid #e0e0e0',
});

const StyledTableRow = styled(TableRow)(({ selected }) => ({
    cursor: 'pointer',
    backgroundColor: selected ? '#d2faff' : 'inherit', // 선택된 행의 배경색
    border: selected ? '2px solid #1990ff' : 'none', // 선택된 경우의 border
}));

const InquiryDetails = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default MyInquiryList;
