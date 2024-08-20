import React, { useState, useEffect } from 'react';
import TextEditor from '../../mocules/TextEditor';
import Category from '../../atoms/Category';
import OfferInfoInput from '../../atoms/OfferInfoInput';
import OfferInfo from '../../organisms/OfferInfo';
import OfferTable from '../../organisms/OfferTable';
import Button from '../../atoms/Button';
import { Container, Sheet, Opend, _Category, Detail, buttonWrapper } from '../../../assets/css/Form.css';
import ToggleBar from "../../mocules/ToggleBar";

function Offersheet({ inquiryId, addTask }) {
    const [originalText, setOriginalText] = useState('');
    const [isChecked, setCheck] = useState(true); // 토글 버튼 클릭 여부
    const borderRadius = isChecked ? '20px 20px 0 0' : '20px 20px 20px 20px';

    /*
    const fetchOffersheet = async () => {
        try {
            const response = await fetch(`/api/offersheet/${inquiryId}`, {
                method: 'get',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: null,
            });

            if (!response.ok) {
                throw new Error(`HTTP Error: ${response.status}`);
            }

            const json = await response.json();

            if (json.result !== 'success') {
                throw new Error(`API request Error ${json.message}`);
            } else {
                setOffersheet(json.data);
                console.log(json.data);
            }
        } catch (err) {
            console.error(err);
        }
    };
    */

    /*
    const addOffersheet = async (offersheet) => {
        try {
            const response = await fetch(`/api/offersheet/${inquiryId}`, {
                method: 'post',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(offersheet),
            });

            if (!response.ok) {
                throw new Error(`HTTP Error: ${response.status}`);
            }

            const json = await response.json();

            if (json.result !== 'success') {
                throw new Error(`API request Error ${json.message}`);
            }
            console.log(json.data);
        } catch (err) {
            console.error(err);
        }
    };
    */

    const [rows, setRows] = useState([{ id: Date.now(), items: Array(8).fill('') }]);
    const [selectedRows, setSelectedRows] = useState([]);

    const addRow = () => {
        const newRow = { id: Date.now(), items: Array(8).fill('') };
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
            return { ...rowToCopy, id: Date.now() + Math.random() }; // Create new ID
        });
        setRows([...rows, ...copiedRows]);
        setSelectedRows([]);
    };

    const handleRowSelect = (id) => {
        setSelectedRows(prevSelected =>
            prevSelected.includes(id)
                ? prevSelected.filter(rowId => rowId !== id)
                : [...prevSelected, id]
        );
    };

    const handleInputChange = (rowId, field, value) => {
        setRows(prevRows =>
            prevRows.map(row =>
                row.id === rowId
                    ? { ...row, items: { ...row.items, [field]: value } }
                    : row
            )
        );
    };


    return (
        <div className={Container} style={{ marginTop: "-2vh" }}>
            <div className={Sheet}>
              {/* 토글 바 */}
              <ToggleBar title={"Offersheet"} isChecked={isChecked} setCheck={setCheck} />

              {/* 토글 클릭 후 오퍼시트 열림 */}
                {isChecked && (
                    <div className={Opend}>
                        <div className={buttonWrapper}>
                            <Button
                                onClick={addRow}
                                btnName={"행추가"}
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
                                btnName={"행삭제"}
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
                                btnName={"행복사"}
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

                        <TextEditor originalText={originalText} setOriginalText={setOriginalText} />
                        <div className={_Category}>
                            <div className={Detail}>
                                <Category categoryName={'1. 고객사'} />
                                <OfferInfoInput margin={'0 0 0 12px'} />
                            </div>
                        </div>
                        <div className={_Category}>
                            <div className={Detail}>
                                <Category categoryName={'2. Offer-Sheet'} />
                            </div>
                        </div>
                        <OfferTable
                            rows={rows}
                            onRowSelect={handleRowSelect}
                            onInputChange={handleInputChange}
                            selectedRows={selectedRows}
                        />
                        <OfferInfo />
                    </div>
                )}
            </div>
        </div>
    );
}

export default Offersheet;
