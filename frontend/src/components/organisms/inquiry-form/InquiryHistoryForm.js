import React, { useState, useEffect } from 'react';
import ToggleBar from "../../mocules/ToggleBar";
import Button from "../../atoms/Button";
import LineItem from "../../mocules/LineItem";
import {
  Container,
  Sheet,
  Opend,
  buttonWrapper,
  LineItemColumn,
  LineItemGetColumn,
  _none
} from "../../../assets/css/Form.css";
import GetLineItem from '../../mocules/GetLineItem';

const InquiryHistoryForm = ({ productType, onLineItemsChange, lineItemData }) => {
  const [isChecked, setChecked] = useState(true);
  const [rows, setRows] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);
  const [lineItems, setLineItems] = useState([]);

  console.log("lineItemData Type: ", typeof lineItemData);
  console.log("lineItemData: ", typeof lineItemData[0] === 'undefined');

  const [lineItemsExistence, setLineItemsExistence] = useState(true);

  useEffect(() => {
    setLineItemsExistence(typeof lineItemData[0] !== 'undefined');
  }, [lineItemData]);

  console.log(productType)

  const columnFieldMappings = {
    "CAR": {
      "가능소": "lab",
      "품종": "kind",
      "규격기관": "standardOrg",
      "PJT명": "pjtName",
      "판매차종명": "salesVehicleName",
      "부품명": "partName",
      "내외판": "ixPlate",
      "두께": "thickness",
      "폭": "width",
      "수량": "quantity"
    },
    "COLD_ROLLED": {
      "품종": "kind",
      "INQ규격명": "inqName",
      "주문용도": "orderCategory",
      "두께": "thickness",
      "폭": "width",
      "수량": "quantity",
      "희망납기일": "expectedDeadline",
      "주문edge": "orderEdge",
      "내경": "inDiameter",
      "외경": "outDiameter"
    },
    "HOT_ROLLED": {
      "품종": "kind",
      "INQ규격명": "inqName",
      "주문용도": "orderCategory",
      "두께": "thickness",
      "폭": "width",
      "경도": "hardness",
      "평탄도": "flatness",
      "주문edge": "orderEdge",
      "수량": "quantity",
    },
    "THICK_PLATE": {
      "일반사항": "generalDetails",
      "주문정보": "orderInfo",
      "성분(ladle)": "ladleIngredient",
      "성분(product)": "productIngredient",
      "인장": "seal",
      "입도시험": "grainSizeAnalysis",
      "충격": "show",
      "굴곡": "curve",
      "추가요청사항": "additionalRequests"
    },
    "WIRE_ROD": {
      "품종": "kind",
      "INQ규격명": "inqName",
      "주문용도": "orderCategory",
      "직경(mm)": "diameter",
      "수량": "quantity",
      "희망납기일": "expectedDeadline",
      "초도물량": "initialQuantity",
      "고객사가공공정": "customerProcessing",
      "최종용도": "finalUse"
    }
  };

  useEffect(() => {
    const selectedItems = Object.keys(columnFieldMappings[productType] || columnFieldMappings["CAR"]);
    setLineItems(selectedItems);
  }, [productType]);

  const createRow = () => {
    const newRow = { id: Date.now(), items: Array(lineItems.length).fill('') };
    setRows([...rows, newRow]);
  };

  const deleteRows = () => {
    const remainingRows = rows.filter(row => !selectedRows.includes(row.id));
    setRows(remainingRows);
    setSelectedRows([]);
    onLineItemsChange(remainingRows.map(row => ({
      id: row.id,
      ...Object.fromEntries(lineItems.map((label, index) => [label, row.items[index]]))
    })));
  };

  const copyRows = () => {
    const copiedRows = selectedRows.map(id => {
      const rowToCopy = rows.find(row => row.id === id);
      return { ...rowToCopy, id: Date.now() + Math.random() };
    });
    setRows([...rows, ...copiedRows]);
    setSelectedRows([]);
    onLineItemsChange([...rows, ...copiedRows].map(row => ({
      id: row.id,
      ...Object.fromEntries(lineItems.map((label, index) => [label, row.items[index]]))
    })));
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

    const fieldMapping = columnFieldMappings[productType];

    onLineItemsChange(updatedRows.map(row => {
      const mappedRow = {};
      row.items.forEach((item, idx) => {
        const label = lineItems[idx];
        const field = fieldMapping[label];
        mappedRow[field] = item;
      });
      return {
        id: row.id,
        ...mappedRow
      };
    }));

    setRows(updatedRows);
  };


  useEffect(() => {
    const columnCount = lineItems.length;
    setRows(rows.map(row => ({
      ...row,
      items: row.items.slice(0, columnCount).concat(Array(columnCount - row.items.length).fill(''))
    })));
  }, [productType]);

  console.log("isChecked: ", isChecked);

  return (
      <div className={Container} style={{ marginTop: "-2vh" }}>
        <div className={Sheet}>
          <ToggleBar title={"Inquiry 내역"} isChecked={isChecked} setCheck={setChecked} />
          {isChecked ? (
              !lineItemsExistence ? (
                  <div className={Opend}>
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
                    {rows.map(row => (
                        <LineItem
                            key={row.id}
                            id={row.id}
                            lineItems={row.items}
                            onRowSelect={onRowSelected}
                            onChange={handleInputChange}
                            isChecked={isChecked}
                        />
                    ))}
                  </div>
              ) : (
                  <div>
                    <div className={LineItemGetColumn}>
                        {lineItems.map((item, index) => (
                            <div key={index}>
                              {item}
                            </div>
                        ))}
                    </div>
                    <GetLineItem lineItems={lineItemData} />
                </div>
              )
          ) : (
              ''
          )}
        </div>
      </div>
  );
};

export default InquiryHistoryForm;