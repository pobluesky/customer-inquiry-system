import React, { useEffect, useState } from 'react';
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

const InquiryHistoryForm = ({ userId, productType, onLineItemsChange }) => {
  const [isChecked, setChecked] = useState(true);
  const [rows, setRows] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);

  const columnLabels = {
    CAR: [
      "가능소", "품종", "규격기관", "PJT명", "판매차종명",
      "부품명", "내외판", "두께", "폭", "수량"
    ],
    COLD_ROLLED: [
      "품종", "INQ규격명", "주문용도", "두께", "폭",
      "수량", "희망납기일", "주문edge", "내경", "외경"
    ],
    HOT_ROLLED: [
      "품종", "INQ규격명", "주문용도", "두께", "폭",
      "경도", "평탄도", "주문edge", "수량"
    ],
    THICK_PLATE: [
      "일반사항", "주문정보", "성분(ladle)", "성분(product)",
      "인장", "입도시험", "충격", "굴곡", "추가요청사항"
    ],
    WIRE_ROD: [
      "품종", "INQ규격명", "주문용도", "직경(mm)",
      "수량", "희망납기일", "초도물량", "고객사가공공정", "최종용도"
    ]
  };

  const lineItems = columnLabels[productType] || columnLabels["CAR"];

  useEffect(() => {
    const lineItemsObject = rows.reduce((acc, row) => {
      acc[`lineItem${row.id}`] = row.items;
      return acc;
    }, {});
    onLineItemsChange(lineItemsObject);
  }, [rows, onLineItemsChange]);

  const createRow = () => {
    const newRow = { id: Date.now(), items: Array(lineItems.length).fill('') };
    setRows([...rows, newRow]);
  };

  const deleteRows = () => {
    const remainingRows = rows.filter(row => !selectedRows.includes(row.id));
    setRows(remainingRows);
    setSelectedRows([]);
  };

  const copyRows = () => {
    const copiedRows = selectedRows.map(id => {
      const rowToCopy = rows.find(row => row.id === id);
      return { ...rowToCopy, id: Date.now() + Math.random() };
    });
    setRows([...rows, ...copiedRows]);
    setSelectedRows([]);
  };

  const onRowSelected = (id) => {
    setSelectedRows(prevSelected =>
        prevSelected.includes(id)
            ? prevSelected.filter(rowId => rowId !== id)
            : [...prevSelected, id]
    );
  };

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
          <ToggleBar title={"Inquiry 내역"} isChecked={isChecked} setCheck={setChecked} />
          {isChecked ? (
              <div className={Opend}>
                {/* 버튼 3개 */}
                <div className={buttonWrapper}>
                  {["행추가", "행삭제", "행복사"].map((name, index) => (
                      <Button
                          key={index}
                          onClick={[createRow, deleteRows, copyRows][index]}
                          btnName={name}
                          margin={'-0.5vw 0.7vw 0 0.3vw'}
                          backgroundColor={'#03507d'}
                          textColor={'#ffffff'}
                          border={'none'}
                          borderRadius={'18px'}
                          fontSize={'17px'}
                          fontWeight={"500"}
                          padding={'10px'}
                      />
                  ))}
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
                        isChecked={true}
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
