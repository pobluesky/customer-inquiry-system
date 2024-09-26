import React, { useState } from 'react';
import {
    _InquirySearch,
    _InquirySearchBox,
    _Text,
    _SearchBox,
    _Title,
    _Input,
    _Date
} from '../../../assets/css/Inquiry.css';
import SelectBox from '../../atoms/SelectBox';
import {
    Grid,
    TextField,
    Button,
    Select,
    MenuItem,
    ToggleButtonGroup,
    ToggleButton,
    Typography,
    InputLabel,
    FormControl,
    Chip,
    Autocomplete
} from '@mui/material';
import { productTypeOptions, IndustryOptions, inquiryTypeOptions, sortOptions, progressOptions } from '../../../utils/inquiry';

const InquirySearchBox = ({ onSearch, title }) => {
    const [searchParams, setSearchParams] = useState({
        productType: '',
        inquiryType: '',
        customerName: '',
        salesPerson: '',
        salesManagerName: '',
        qualityManagerName: '',
        industry: '',
        startDate: '',
        endDate: '',
        sortBy: 'LATEST',
        progress: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setSearchParams((prevParams) => ({
            ...prevParams,
            [name]: value,
        }));
    };

    const handleSelectChange = (name, value) => {
        setSearchParams((prevParams) => ({
            ...prevParams,
            [name]: value,
        }));
    };

    const handleToggleChange = (type, value) => {
        setSearchParams((prevParams) => ({
            ...prevParams,
            [type]: prevParams[type] === value ? '' : value,
        }));
    };

    const handleSortChange = (sortOrder) => {
        setSearchParams((prevParams) => ({
            ...prevParams,
            sortBy: sortOrder,
        }));
    };

    const handleSearch = () => {
        onSearch(searchParams);
    };

    return (
        <Grid container spacing={1} padding={3} margin={-1} border={1}
              borderColor="#C1C1C1" borderRadius={2} justifyContent="center"
              sx={{ marginTop: 5, marginBottom: 5 }}>
            <Grid item xs={12} padding={3}>
                <Typography variant="h5" fontWeight="bold">{title}</Typography>
            </Grid>

            {/* 1행 */}
            <Grid container item spacing={2} justifyContent="center" padding={2.5}>
                <Grid item xs={3}>
                    <Autocomplete
                        multiple
                        options={productTypeOptions}
                        getOptionLabel={(option) => option.label}
                        onChange={(event, newValue) => {
                            setSearchParams((prevParams) => ({
                                ...prevParams,
                                productType: newValue,
                            }));
                        }}
                        renderInput={(params) => (
                            <TextField {...params} label="제품구분" fullWidth />
                        )}
                    />
                </Grid>

                <Grid item xs={3}>
                    <Autocomplete
                        multiple
                        options={inquiryTypeOptions}
                        getOptionLabel={(option) => option.label}
                        onChange={(event, newValue) => {
                            setSearchParams((prevParams) => ({
                                ...prevParams,
                                inquiryType: newValue,
                            }));
                        }}
                        renderInput={(params) => (
                            <TextField {...params} label="문의유형" fullWidth />
                        )}
                    />
                </Grid>

                <Grid item xs={3}>
                    <TextField
                        fullWidth
                        label="고객사명"
                        name="customerName"
                        value={searchParams.customerName}
                        onChange={handleInputChange}
                    />
                </Grid>

                <Grid item xs={3}>
                    <TextField
                        fullWidth
                        label="판매계약자"
                        name="salesPerson"
                        value={searchParams.salesPerson}
                        onChange={handleInputChange}
                    />
                </Grid>
            </Grid>

            {/* 2행 */}
            <Grid container item spacing={2} justifyContent="center" padding={2.5}>
                <Grid item xs={3}>
                    <TextField
                        fullWidth
                        label="판매담당자"
                        name="salesManagerName"
                        value={searchParams.salesManagerName}
                        onChange={handleInputChange}
                    />
                </Grid>

                <Grid item xs={3}>
                    <TextField
                        fullWidth
                        label="품질담당자"
                        name="qualityManagerName"
                        value={searchParams.qualityManagerName}
                        onChange={handleInputChange}
                    />
                </Grid>

                <Grid item xs={3}>
                    <Autocomplete
                        multiple
                        options={IndustryOptions}
                        getOptionLabel={(option) => option.label}
                        onChange={(event, newValue) => {
                            setSearchParams((prevParams) => ({
                                ...prevParams,
                                industry: newValue,
                            }));
                        }}
                        renderInput={(params) => (
                            <TextField {...params} label="산업분류" fullWidth />
                        )}
                    />
                </Grid>

                <Grid item xs={3}>
                    <Grid container spacing={1}>
                        <Grid item xs={6}>
                            <TextField
                                fullWidth
                                label="시작일"
                                type="date"
                                name="startDate"
                                value={searchParams.startDate}
                                onChange={handleInputChange}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                fullWidth
                                label="종료일"
                                type="date"
                                name="endDate"
                                value={searchParams.endDate}
                                onChange={handleInputChange}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            <Grid container item spacing={2} justifyContent="center" alignItems="center">
                <Grid item xs={12}>
                    <Grid container alignItems="center">
                        <Grid item>
                            <ToggleButtonGroup
                                exclusive
                                value={searchParams.sortBy}
                                onChange={(e, value) => handleSortChange(value)}
                                sx={{ marginBottom: 1 }}
                            >
                                {sortOptions.map((option) => (
                                    <ToggleButton key={option.value} value={option.value} sx={{ borderRadius: 3, height: 40 }}>
                                        {option.label}
                                    </ToggleButton>
                                ))}
                            </ToggleButtonGroup>
                        </Grid>

                        <Grid item style={{ marginLeft: '20px' }}>
                            <div style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                            }}>
                                {progressOptions.map((option) => (
                                    <Chip
                                        key={option.value}
                                        label={option.label}
                                        onClick={() => handleToggleChange('progress', option.value)}
                                        variant={searchParams.progress === option.value ? 'filled' : 'outlined'}
                                        color={searchParams.progress === option.value ? 'primary' : 'default'}
                                        style={{
                                            marginRight: '8px',
                                            marginBottom: '8px',
                                        }}
                                    />
                                ))}
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            <Grid item xs={12} display="flex" justifyContent="flex-end"
                  paddingTop={2}>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSearch}
                    style={{
                        fontWeight: 'bold',
                        borderRadius: '17px',
                        width: '100px',
                        height: '35px',
                    }}
                >
                    조회
                </Button>
            </Grid>
        </Grid>
    );
};

export default InquirySearchBox;
