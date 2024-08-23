// import React, { useState, useEffect } from 'react';
// import InqPath from '../../components/atoms/InqPath';
// import RequestBar from "../../components/mocules/RequestBar";
// import {
//     BasicInfoForm,
//     InquiryHistoryForm,
//     AdditionalRequestForm,
//     FileForm,
//     Offersheet,
// } from '../../components/organisms/inquiry-form';
// import QualityReviewTextFormItem from '../../components/organisms/inquiry-form/quality-item/QualityReviewTextFormItem'
// import { useAuth } from '../../hooks/useAuth';
// import FinalReviewTextForm
//     from '../../components/organisms/inquiry-form/review-form/FinalReviewTextForm';
//
// function SalesManagerInqForm() {
//     const { userId } = useAuth();
//
//     return (
//         <div>
//             <InqPath largeCategory={'Inquiry'} mediumCategory={'Inquiry 조회'} />
//             <RequestBar requestBarTitle={"Inquiry 등록"} role={"customer"} />
//             <BasicInfoForm userId={userId} />
//             <InquiryHistoryForm userId={userId} />
//             {/*<SalesInfoForm />*/}
//             <AdditionalRequestForm userId={userId} />
//             {/*<ReviewTextForm />*/}
//             <FileForm fileForm={"협업첨부파일"} userId={userId} />
//             <FileForm fileForm={"첨부파일"} userId={userId} />
//             <Offersheet />
//             <QualityReviewTextFormItem />
//             <FinalReviewTextForm />
//         </div>
//     );
// }
//
// export default SalesManagerInqForm;
