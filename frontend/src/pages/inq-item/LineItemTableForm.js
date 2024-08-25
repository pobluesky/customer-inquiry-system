import React, { useEffect, useState } from 'react';
import { Select, MenuItem, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField } from '@mui/material';
import { useAuth } from '../../hooks/useAuth';
import { useNavigate, useParams } from 'react-router-dom';
import { getInquiryDetail, postInquiry } from '../../apis/api/inquiry';
import { InquiryCompleteAlert } from '../../utils/actions';

const LineItemTableForm = () => {
    const { userId } = useAuth();
    const { id } = useParams();
    const navigate = useNavigate();

    const [inquiriesDataDetail, setInquiriesDataDetail] = useState(null);
    const [productType, setProductType] = useState('');
    const [lineItems, setLineItems] = useState([]);

    const [formData, setFormData] = useState({
        additionalRequests: '',
        corporate: '',
        corporationCode: '',
        country: '',
        customerCode: '',
        customerId: userId,
        customerName: '',
        customerRequestDate: '',
        industry: '',
        inquiryId: null,
        inquiryType: '',
        productType: '',
        progress: 'RECEIPT',
        salesPerson: '',
        lineItemResponseDTOs: [],
    });

    const handleProductTypeChange = (event) => {
        setProductType(event.target.value);
        setLineItems([]); // 선택된 제품 유형이 변경될 때마다 초기화
    };

    const handleInquirySubmit = async (event) => {
        if (event) {
            event.preventDefault();
        }
        try {
            const response = await postInquiry(userId, {
                ...formData,
                lineItemRequestDTOs: formData.lineItemRequestDTOs,
            });
            console.log('Inquiry posted successfully:', response);
            InquiryCompleteAlert();
            setTimeout(() => {
                navigate(`/inq-list/${role}`);
            }, '2000');
        } catch (error) {
            console.log('Error submitting inquiry:', error);
        }
    };

    const productTypes = {
        "CAR": {
            "lab": "가능소",
            "kind": "품종",
            "standardOrg": "규격기관",
            "salesVehicleName": "판매차종명",
            "partName": "부품명",
            "ixPlate": "내외판",
            "thickness": "두께(mm)",
            "width": "폭(mm)",
            "quantity": "수량(mt)",
            "expectedDeliveryDate": "희망납기일",
            "transportationDestination": "운송목적지",
            "edge": "주문(Edge)",
            "tolerance": "공차",
            "annualCost": "연소요량"
        },
        "COLD_ROLLED": {
            "kind": "품종",
            "inqName": "INQ규격명",
            "orderCategory": "주문용도",
            "thickness": "두께(mm)",
            "width": "폭(mm)",
            "quantity": "수량(mt)",
            "orderEdge": "주문(edge)",
            "inDiameter": "내경(mm)",
            "outDiameter": "외경(mm)",
            "sleeveThickness": "슬리브두께",
            "expectedDeadline": "희망납기일",
            "tensileStrength": "인장강도",
            "elongationRatio": "연신율",
            "hardness": "경도"
        },
        "HOT_ROLLED": {
            "kind": "품종",
            "inqName": "INQ규격명",
            "orderCategory": "주문용도",
            "thickness": "두께",
            "width": "폭",
            "hardness": "경도",
            "flatness": "평탄도",
            "orderEdge": "주문(edge)",
            "quantity": "수량(mt)",
            "yieldingPoint": "항복점",
            "tensileStrength": "인장강도",
            "elongationRatio": "연신율",
            "camber": "캠버",
            "annualCost": "연소요량"
        },
        "THICK_PLATE": {
            "generalDetails": "일반사항",
            "orderInfo": "주문정보",
            "ladleIngredient": "성분(ladle)",
            "productIngredient": "성분(product)",
            "seal": "인장",
            "grainSizeAnalysis": "입도시험",
            "show": "충격",
            "extraShow": "추가충격",
            "agingShow": "시효충격",
            "curve": "굴곡",
            "additionalRequests": "추가요청사항",
            "hardness": "경도",
            "dropWeightTest": "낙하충격시험",
            "ultrasonicTransducer": "초음파탐상시험"
        },
        "WIRE_ROD": {
            "kind": "품종",
            "inqName": "INQ규격명",
            "orderCategory": "주문용도",
            "diameter": "직경(mm)",
            "quantity": "수량(mt)",
            "expectedDeadline": "희망납기일",
            "initialQuantity": "초도물량",
            "customerProcessing": "고객사가공공정",
            "finalUse": "최종용도",
            "transportationDestination": "운송목적지",
            "annualCost": "연소요량",
            "legalRegulatoryReview": "법적규제사항검토",
            "legalRegulatoryReviewDetail": "법적규제사항검토상세",
            "finalCustomer": "최종고객사"
        }
    };

    return (
        <div>
            <Select
                value={productType}
                onChange={handleProductTypeChange}
                displayEmpty
            >
                <MenuItem value="" disabled>Select Product Type</MenuItem>
                {Object.keys(productTypes).map((type) => (
                    <MenuItem key={type} value={type}>{type}</MenuItem>
                ))}
            </Select>

            {productType && (
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                {Object.keys(productTypes[productType]).map((key) => (
                                    <TableCell key={key}>{productTypes[productType][key]}</TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {lineItems.map((item, index) => (
                                <TableRow key={index}>
                                    {Object.keys(productTypes[productType]).map((key) => (
                                        <TableCell key={key}>
                                            <TextField
                                                value={item[key] || ''}
                                                onChange={(e) => {
                                                    const newLineItems = [...lineItems];
                                                    newLineItems[index][key] = e.target.value;
                                                    setLineItems(newLineItems);
                                                }}
                                            />
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            )}
        </div>
    );
};

export default LineItemTableForm;
