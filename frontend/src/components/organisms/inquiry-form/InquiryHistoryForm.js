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
  const [lineItemsExistence, setLineItemsExistence] = useState(true);

  useEffect(() => {
    setLineItemsExistence(typeof lineItemData[0] !== 'undefined');
  }, [lineItemData]);

  const columnFieldMappings = {
    "CAR": {
      "가능소": "lab",
      "품종": "kind",
      "규격기관": "standardOrg",
      "판매차종명": "salesVehicleName",
      "부품명": "partName",
      "내외판": "ixPlate",
      "두께(mm)": "thickness",
      "폭(mm)": "width",
      "수량(mt)": "quantity",
      "희망납기일": "expectedDeliveryDate",
      "운송목적지": "transportationDestination",
      "주문(Edge)": "edge",
      "공차": "tolerance",
      "연소요량": "annualCost"
    },
    "COLD_ROLLED": {
      "품종": "kind",
      "INQ규격명": "inqName",
      "주문용도": "orderCategory",
      "두께(mm)": "thickness",
      "폭(mm)": "width",
      "수량(mt)": "quantity",
      "주문(edge)": "orderEdge",
      "내경(mm)": "inDiameter",
      "외경(mm)": "outDiameter",
      "희망납기일": "expectedDeliveryDate",
      "슬리브두께": "sleeveThickness",
      "인장강도": "tensileStrength",
      "연신율": "elongationRatio",
      "경도": "hardness"
    },
    "HOT_ROLLED": {
      "품종": "kind",
      "INQ규격명": "inqName",
      "주문용도": "orderCategory",
      "두께": "thickness",
      "폭": "width",
      "경도": "hardness",
      "평탄도": "flatness",
      "주문(edge)": "orderEdge",
      "수량(mt)": "quantity",
      "항복점": "yieldingPoint",
      "인장강도": "tensileStrength",
      "연신율": "elongationRatio",
      "캠버": "camber",
      "연소요량": "annualCost"
    },
    "THICK_PLATE": {
      "일반사항": "generalDetails",
      "주문정보": "orderInfo",
      "성분(ladle)": "ladleIngredient",
      "성분(product)": "productIngredient",
      "인장": "seal",
      "입도시험": "grainSizeAnalysis",
      "충격": "show",
      "추가충격": "extraShow",
      "시효충격": "agingShow",
      "굴곡": "curve",
      "추가요청사항": "additionalRequests",
      "경도": "hardness",
      "낙하충격시험": "dropWeightTest",
      "초음파탐상시험": "ultrasonicTransducer"
    },
    "WIRE_ROD": {
      "품종": "kind",
      "INQ규격명": "inqName",
      "주문용도": "orderCategory",
      "직경(mm)": "diameter",
      "수량(mt)": "quantity",
      "희망납기일": "expectedDeadline",
      "초도물량": "initialQuantity",
      "고객사가공공정": "customerProcessing",
      "최종용도": "finalUse",
      "운송목적지": "transportationDestination",
      "연소요량": "annualCost",
      "법적규제사항검토": "legalRegulatoryReview",
      "법적규제사항검토상세": "legalRegulatoryReviewDetail",
      "최종고객사": "finalCustomer"
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

    if (!fieldMapping) {
      console.log(`No field mapping found for product type: ${productType}`);
      return;
    }

    const mappedRows = updatedRows.map(row => {
      const mappedRow = {
        id: row.id,
        ...Object.fromEntries(
            row.items.map((item, idx) => {
              const label = lineItems[idx];
              const field = fieldMapping[label];

              if (!field) {
                console.log(`No field found for label: ${label}`);
                return [label, item];
              }

              return [field, item];
            })
        )
      };
      return mappedRow;
    });

    onLineItemsChange(mappedRows);

    setRows(updatedRows);
  };

  useEffect(() => {
    const columnCount = lineItems.length;
    setRows(rows.map(row => ({
      ...row,
      items: row.items.slice(0, columnCount).concat(Array(columnCount - row.items.length).fill(''))
    })));
  }, [productType]);

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