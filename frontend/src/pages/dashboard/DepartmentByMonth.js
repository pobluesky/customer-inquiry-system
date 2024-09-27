import React, { useEffect, useState } from 'react';
import { Box, Grid, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import DepartmentInquiryCount from '../../components/molecules/DepartmentInquiryCount';
import { getMonthlyDepartmentCounts } from '../../apis/api/chart';
import { Departments } from '../../utils/inquiry';

const processCountInquiries = (totalCounts, previousCounts) => {
    const previousCountsMap = Object.fromEntries(previousCounts.map(([departmentName, inquiryCount]) => [departmentName, inquiryCount]));

    return totalCounts.map(([departmentName, inquiryCount]) => {
        if (!departmentName) return null;

        const koreanDepartmentName = Departments[departmentName] || departmentName;

        const previousCount = previousCountsMap[departmentName] !== undefined ? previousCountsMap[departmentName] : 0;
        const changeRate = calculateChangeRate(inquiryCount, previousCount);

        return {
            departmentName: koreanDepartmentName,
            inquiryCount,
            changeRate,
            previousCount,
        };
    }).filter(Boolean);
};

const calculateChangeRate = (currentCount, previousCount) => {
    if (previousCount === 0) {
        return currentCount > 0 ? 100 : 0;
    }
    return ((currentCount - previousCount) / previousCount) * 100;
};

const DepartmentByMonth = () => {
    const [departmentsData, setDepartmentsData] = useState([]);
    const [previousDepartmentsData, setPreviousDepartmentsData] = useState([]);
    const [selectedYear, setSelectedYear] = useState('2024');
    const [selectedMonth, setSelectedMonth] = useState('09');

    const fetchCountByDepartment = async (year, month) => {
        const date = `${year}-${month}`;
        const previousMonth = (parseInt(month, 10) === 1)
            ? { year: year - 1, month: 12 }
            : { year, month: String(parseInt(month, 10) - 1).padStart(2, '0') };

        try {
            const currentResponse = await getMonthlyDepartmentCounts(date);
            const previousDate = `${previousMonth.year}-${previousMonth.month}`;
            const previousResponse = await getMonthlyDepartmentCounts(previousDate);

            const totalCounts = currentResponse.total || [];
            const previousCounts = previousResponse.total || [];

            const newDepartmentsData = processCountInquiries(totalCounts, previousCounts);

            setDepartmentsData(newDepartmentsData);
        } catch (error) {
            console.log('부서별 Inquiry 건수 조회 실패: ', error);
        }
    };

    const handleYearChange = (event) => {
        const year = event.target.value;
        setSelectedYear(year);
        fetchCountByDepartment(year, selectedMonth);
    };

    const handleMonthChange = (event) => {
        const month = event.target.value;
        setSelectedMonth(month);
        fetchCountByDepartment(selectedYear, month);
    };

    useEffect(() => {
        fetchCountByDepartment(selectedYear, selectedMonth);
    }, [selectedYear, selectedMonth]);

    return (
        <Box sx={{ flexGrow: 1, padding: 2 }}>
            <Grid container spacing={2} justifyContent="flex-end">
                <Grid item xs={4} sm={2} sx={{ marginBottom: 2 }}>
                    <FormControl fullWidth sx={{ zIndex: 0 }}>
                        <InputLabel id="year-select-label">연도 선택</InputLabel>
                        <Select
                            labelId="year-select-label"
                            value={selectedYear}
                            onChange={handleYearChange}
                        >
                            <MenuItem value="2023">2023년</MenuItem>
                            <MenuItem value="2024">2024년</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={4} sm={2} sx={{ marginBottom: 2 }}>
                    <FormControl fullWidth sx={{ zIndex: 0 }}>
                        <InputLabel id="month-select-label">월 선택</InputLabel>
                        <Select
                            labelId="month-select-label"
                            value={selectedMonth}
                            onChange={handleMonthChange}
                        >
                            <MenuItem value="01">1월</MenuItem>
                            <MenuItem value="02">2월</MenuItem>
                            <MenuItem value="03">3월</MenuItem>
                            <MenuItem value="04">4월</MenuItem>
                            <MenuItem value="05">5월</MenuItem>
                            <MenuItem value="06">6월</MenuItem>
                            <MenuItem value="07">7월</MenuItem>
                            <MenuItem value="08">8월</MenuItem>
                            <MenuItem value="09">9월</MenuItem>
                            <MenuItem value="10">10월</MenuItem>
                            <MenuItem value="11">11월</MenuItem>
                            <MenuItem value="12">12월</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                {departmentsData.map((department, index) => (
                    <Grid item xs={12} sm={6} md={4} lg={2.4} key={index}>
                        <DepartmentInquiryCount
                            departmentName={department.departmentName}
                            inquiryCount={department.inquiryCount}
                            changeRate={department.changeRate}
                            previousCount={department.previousCount}
                        />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default DepartmentByMonth;
