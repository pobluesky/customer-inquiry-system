import React, {useState} from 'react';
import ToggleBar from "../../mocules/ToggleBar";
import { Container, Sheet, Opend, Wrapper, _Input, inputWrapper } from "../../../assets/css/Form.css";

const InquiryNewForm = () => {
  const [isChecked, setCheck] = useState(true);

  return (
      <div className={Container}>
        <div className={Sheet}>
        <ToggleBar title={"Inquiry 신규 등록"} isChecked={isChecked} setCheck={setCheck} />
          {isChecked ? (
              <div className={Opend}>
                  <div className={Wrapper}>

                      {/* 1행 */}
                      <div className={inputWrapper}>
                          <label>고객사구분</label>
                          <input type="text" className={_Input}
                                 placeholder="20180829495" />
                      </div>
                      <div className={inputWrapper}>
                          <label>국가</label>
                          <select className={_Input}>
                              <option value="" disabled selected>선택</option>
                              <option value="hk">홍콩</option>
                              <option value="kr">한국</option>
                              <option value="jp">일본</option>
                              <option value="cn">중국</option>
                          </select>
                      </div>
                      <div className={inputWrapper}>
                          <label>판매상사</label>
                          <input type="text" className={_Input}
                                 placeholder="POA" />
                      </div>

                      {/* 2행 */}
                      <div className={inputWrapper}>
                          <label>판매계약자</label>
                          <input type="text" className={_Input}
                                 placeholder="POSCO Asia Co., Ltd." />
                      </div>
                      <div className={inputWrapper}>
                          <label>Inquiry 유형</label>
                          <select className={_Input}>
                              <option value="" disabled selected>문의유형</option>
                              <option value='all'>품질 + 견적</option>
                              <option value="quality">품질</option>
                              <option value="sales">견적</option>
                          </select>
                      </div>
                      <div className={inputWrapper}>
                          <label>산업분류</label>
                          <input type="text" className={_Input}
                                 placeholder="자동차산업(Automobile)" />
                      </div>

                      {/* 3행 */}
                      <div className={inputWrapper}>
                          <label>의뢰인명</label>
                          <input type="text" className={_Input}
                                 placeholder="김세윤" />
                      </div>
                      <div className={inputWrapper}>
                          <label>의뢰인 E-mail</label>
                          <input type="email" className={_Input}
                                 placeholder="zhaofeng@posco.net" />
                      </div>
                      <div className={inputWrapper}>
                          <label>의뢰인 연락처</label>
                          <input type="tel" className={_Input}
                                 placeholder="86-18901251225" />
                      </div>

                      {/* 4행 */}
                      <div className={inputWrapper}>
                          <label>법인코드</label>
                          <input type="text" className={_Input}
                                 placeholder="(주)포스코" />
                      </div>
                      <div className={inputWrapper}>
                          <label>제품</label>
                          <select className={_Input}>
                              <option value="car" disabled selected>자동차</option>
                              <option value="hotrolled">열연</option>
                              <option value="coldrolled">냉연</option>
                              <option value="thickplate">후판</option>
                              <option value="wirerod">선재</option>
                          </select>
                      </div>
                      <div className={inputWrapper}>
                          <label>고객요청일</label>
                          <input type="date" className={_Input}
                                 value="2024-07-23"
                                 placeholder="2024-07-23" />
                      </div>
                  </div>
              </div>
          ) : (
              ''
          )}
        </div>
      </div>
  );
};

export default InquiryNewForm;