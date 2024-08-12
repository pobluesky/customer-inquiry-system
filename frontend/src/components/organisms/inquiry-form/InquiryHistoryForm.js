import React, { useState } from 'react';
import ToggleBar from "../../mocules/ToggleBar";
import Button from "../../atoms/Button";
import LineItem from "../../mocules/LineItem";
import {
  Container,
  Sheet,
  Opend,
  buttonWrapper,
  LineItemColumn,
  _none
} from "../../../assets/css/Form.css";

const InquiryHistoryForm = () => {
  const [isChecked, setCheck] = useState(true);
  const [rows, setRows] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);
  const btnName = ["행추가", "행삭제", "행복사"];

  const lineItems = [
    "가능소",
    "품종",
    "규격기관",
    "INQ규격명",
    "PJT명",
    "차종",
    "부품명",
    "내외판",
    "두께",
    "폭"
  ];

  // 행 추가
  const createRow = () => {
    const newRow = { id: Date.now(), items: Array(lineItems.length).fill('') };
    setRows([...rows, newRow]);
  };

  // 선택된 행 삭제
  const deleteRows = () => {
    const remainingRows = rows.filter(row => !selectedRows.includes(row.id));
    setRows(remainingRows);
    setSelectedRows([]); // 선택 초기화
  };

  // 선택된 행 복사
  const copyRows = () => {
    const copiedRows = selectedRows.map(id => {
      const rowToCopy = rows.find(row => row.id === id);
      return { ...rowToCopy, id: Date.now() + Math.random() }; // 새로운 고유 ID 생성
    });
    setRows([...rows, ...copiedRows]);
    setSelectedRows([]); // 복사 후 선택 초기화
  };

  // 행 선택 토글
  const onRowSelected = (id) => {
    setSelectedRows(prevSelected =>
        prevSelected.includes(id)
            ? prevSelected.filter(rowId => rowId !== id)
            : [...prevSelected, id]
    );
  };

  // 입력값 변경 처리
  const handleInputChange = (id, index, value) => {
    const updatedRows = rows.map(row => {
      if (row.id === id) {
        const updatedItems = [...row.items];
        updatedItems[index] = value;
        return { ...row, items: updatedItems };
      }
      return row;
    });
    setRows(updatedRows);
  };

  return (
      <div className={Container} style={{ marginTop: "-2vh" }}>
        <div className={Sheet}>
          <ToggleBar title={"Inquiry 내역"} isChecked={isChecked} setCheck={setCheck} />
          {isChecked ? (
              <div className={Opend}>
                {/* 버튼 3개 */}
                <div className={buttonWrapper}>
                  <Button
                      onClick={createRow}
                      btnName={btnName[0]}
                      margin={'-0.5vw 0.7vw 0 0.3vw'}
                      backgroundColor={'#03507d'}
                      textColor={'#ffffff'}
                      border={'none'}
                      borderRadius={'18px'}
                      fontSize={'17px'}
                      fontWeight={"500"}
                      padding={'10px'}
                  />
                  <Button
                      onClick={deleteRows}
                      btnName={btnName[1]}
                      margin={'-0.5vw 0.7vw 0 0.3vw'}
                      backgroundColor={'#03507d'}
                      textColor={'#ffffff'}
                      border={'none'}
                      borderRadius={'18px'}
                      fontSize={'17px'}
                      fontWeight={"500"}
                      padding={'10px'}
                  />
                  <Button
                      onClick={copyRows}
                      btnName={btnName[2]}
                      margin={'-0.5vw 0.7vw 0 0.3vw'}
                      backgroundColor={'#03507d'}
                      textColor={'#ffffff'}
                      border={'none'}
                      borderRadius={'18px'}
                      fontSize={'17px'}
                      fontWeight={"500"}
                      padding={'10px'}
                  />
                </div>

                {/* 컬럼 라벨 */}
                <div className={LineItemColumn}>
                  <div>
                    <input type="checkbox" className={_none} />
                  </div>
                  {lineItems.map((item, index) => (
                      <div key={index}>
                        {item}
                      </div>
                  ))}
                </div>

                {/* 행들 */}
                {rows.map(row => (
                    <LineItem
                        key={row.id}
                        id={row.id}
                        lineItems={row.items}
                        onRowSelect={onRowSelected}
                        onChange={handleInputChange}
                    />
                ))}
              </div>
          ) : (
              ''
          )}
        </div>
      </div>
  );
};

export default InquiryHistoryForm;
