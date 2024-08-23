// inquiry 데이터 가공
export const processInquiries = (data) => {
    return data.map((inquiry) => {
        let progressText;
        switch (inquiry.progress) {
            case 'RECEIPT':
                progressText = '문의접수';
                break;
            case 'FIRST_REVIEW':
                progressText = '1차검토중';
                break;
            case 'QUALITY_REVIEW':
                progressText = '품질검토중';
                break;
            case 'FINAL_REVIEW':
                progressText = '최종검토중';
            default:
                progressText = '-';
        }

        let inquiryTypeText;
        switch (inquiry.inquiryType) {
            case 'QUALITY_INQUIRY':
                inquiryTypeText = '품질 문의';
                break;
            case 'QUOTE_INQUIRY':
                inquiryTypeText = '견적 문의';
                break;
            case 'COMMON_INQUIRY':
                inquiryTypeText = '품질+견적 문의';
                break;
            default:
                inquiryTypeText = '-';
        }

        let productTypeText;
        switch (inquiry.productType) {
            case 'CAR':
                productTypeText = '자동차';
                break;
            case 'HOT_ROLLED':
                productTypeText = '열연';
                break;
            case 'COLD_ROLLED':
                productTypeText = '냉연';
                break;
            case 'THICK_PLATE':
                productTypeText = '후판';
                break;
            case 'WIRE_ROD':
                productTypeText = '선재';
                break;
            default:
                productTypeText = '-';
        }

        return {
            customerName: inquiry.customerName,
            inquiryId: inquiry.inquiryId,
            inquiryType: inquiryTypeText,
            productType: productTypeText,
            progress: progressText,
            salesPerson: inquiry.salesPerson,
        };
    });
};

// Inquiry 데이터 LineItem 포맷 변환 함수
export const processInquiryData = (data) => {
    const { productType, ...rest } = data;

    let formattedData;
    switch (productType) {
        case 'CAR':
            formattedData = {
                ...rest,
                productType,
                lineItemRequestDTOs: data.lineItemRequestDTOs.map((item) => ({
                    lab: item.lab,
                    kind: item.kind,
                    standardOrg: item.standardOrg,
                    pjtName: item.pjtName,
                    salesVehicleName: item.salesVehicleName,
                    partName: item.partName,
                    ixPlate: item.ixPlate,
                    thickness: item.thickness,
                    width: item.width,
                    quantity: item.quantity,
                })),
            };
            break;
        case 'COLD_ROLLED':
            formattedData = {
                ...rest,
                productType,
                lineItemRequestDTOs: data.lineItemRequestDTOs.map((item) => ({
                    kind: item.kind,
                    inqName: item.inqName,
                    orderCategory: item.orderCategory,
                    thickness: item.thickness,
                    width: item.width,
                    quantity: item.quantity,
                    expectedDeadline: item.expectedDeadline,
                    orderEdge: item.orderEdge,
                    inDiameter: item.inDiameter,
                    outDiameter: item.outDiameter,
                })),
            };
            break;
        case 'HOT_ROLLED':
            formattedData = {
                ...rest,
                productType,
                lineItemRequestDTOs: data.lineItemRequestDTOs.map((item) => ({
                    kind: item.kind,
                    inqName: item.inqName,
                    orderCategory: item.orderCategory,
                    thickness: item.thickness,
                    width: item.width,
                    hardness: item.hardness,
                    flatness: item.flatness,
                    orderEdge: item.orderEdge,
                    quantity: item.quantity,
                })),
            };
            break;
        case 'THICK_PLATE':
            formattedData = {
                ...rest,
                productType,
                lineItemRequestDTOs: data.lineItemRequestDTOs.map((item) => ({
                    generalDetails: item.generalDetails,
                    orderInfo: item.orderInfo,
                    ladleIngredient: item.ladleIngredient,
                    productIngredient: item.productIngredient,
                    seal: item.seal,
                    grainSizeAnalysis: item.grainSizeAnalysis,
                    show: item.show,
                    curve: item.curve,
                    additionalRequests: item.additionalRequests,
                })),
            };
            break;
        case 'WIRE_ROD':
            formattedData = {
                ...rest,
                productType,
                lineItemRequestDTOs: data.lineItemRequestDTOs.map((item) => ({
                    kind: item.kind,
                    inqName: item.inqName,
                    orderCategory: item.orderCategory,
                    diameter: item.diameter,
                    quantity: item.quantity,
                    expectedDeadline: item.expectedDeadline,
                    initialQuantity: item.initialQuantity,
                    customerProcessing: item.customerProcessing,
                    finalUse: item.finalUse,
                })),
            };
            break;
        default:
            throw new Error('Unknown productType');
    }
    console.log('processInquiryData: ', formattedData);
    return formattedData;
};

// FormData 객체 생성 함수 - inquiry
export const createFormInquiryData = (formData) => {
    const form = new FormData();

    const inquiryData = processInquiryData(formData);
    console.log('createFormData: ', inquiryData);
    delete inquiryData.files;
    form.append(
        'inquiry',
        new Blob([JSON.stringify(inquiryData)], { type: 'application/json' }),
    );

    if (formData.files) {
        form.append('files', formData.files);
    }
    console.log('createFormData [form]: ', form);

    return form;
};

// FormData 객체 생성 함수 - quality
export const createFormQualityData = (formData) => {
    const form = new FormData();
    console.log('createFormQualityData: ', form);

    form.append(
        'quality',
        new Blob([JSON.stringify(formData)], { type: 'application/json' }),
    );

    if (formData.qualityFiles) {
        form.append('files', formData.qualityFiles);
    }
    console.log('createFormQualityData [form]: ', form);

    return form;
};