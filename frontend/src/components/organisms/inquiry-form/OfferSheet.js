import React, { useState, useEffect } from 'react';
import TextEditor from '../../mocules/TextEditor';
import Category from '../../atoms/Category';
import OfferInfoInput from '../../atoms/OfferInfoInput';
import OfferInfo from '../../organisms/OfferInfo';
import OfferTable from '../../organisms/OfferTable';
import Button from '../../atoms/Button';
import { Container, Sheet, Opend, _Category, Detail, buttonWrapper } from '../../../assets/css/Form.css';
import ToggleBar from "../../mocules/ToggleBar";

function OfferSheet({ offerSheet, setOfferSheet }) {
    const [originalText, setOriginalText] = useState('');
    const [isChecked, setCheck] = useState(true); // 토글 버튼 클릭 여부
    const borderRadius = isChecked ? '20px 20px 0 0' : '20px 20px 20px 20px';

    const [rows, setRows] = useState(offerSheet?.receipts || []);
    const [selectedRows, setSelectedRows] = useState([]);

    const addRow = () => {
        const newRow = { id: Date.now(), product: '', specification: '', surfaceFinish: '', usage: '', thickness: '', diameter: '', width: '', quantity: '', price: '', unitMinWeight: '', unitMaxWeight: '', edge: '' };
        setRows([...rows, newRow]);
        updateOfferSheet([...rows, newRow]);
    };

    const deleteRows = () => {
        const remainingRows = rows.filter(row => !selectedRows.includes(row.id));
        setRows(remainingRows);
        updateOfferSheet(remainingRows);
        setSelectedRows([]);
    };

    const copyRows = () => {
        const copiedRows = selectedRows.map(id => {
            const rowToCopy = rows.find(row => row.id === id);
            return { ...rowToCopy, id: Date.now() + Math.random() }; // Create new ID
        });
        const newRows = [...rows, ...copiedRows];
        setRows(newRows);
        updateOfferSheet(newRows);
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
                    ? { ...row, [field]: value }
                    : row
            )
        );
        updateOfferSheet(rows);
    };

    const updateOfferSheet = (newRows) => {
        setOfferSheet(prevState => ({
            ...prevState,
            receipts: newRows
        }));
    };

    return (
        <div className={Container} style={{ marginTop: "-2vh" }}>
            <div className={Sheet}>
              {/* 토글 바 */}
              <ToggleBar title={"OfferSheet"} isChecked={isChecked} setCheck={setCheck} />

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

export default OfferSheet;
