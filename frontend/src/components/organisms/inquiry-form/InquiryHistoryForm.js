import React, { useState } from 'react';
import { Select, MenuItem, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, IconButton, Button } from '@mui/material';
import { Add, DeleteOutline, FileCopy } from '@mui/icons-material';
import ToggleBar from '../../mocules/ToggleBar';
import { productTypes } from '../../../utils/lineItems';

const InquiryHistoryForm = ({ productType, lineItemData, onLineItemsChange }) => { // 라인아이템 등록
  const [localData, setLocalData] = useState(lineItemData);
  const [isChecked, setChecked] = useState(true);
  const [selectedRows, setSelectedRows] = useState([]);

  const fields = productTypes[productType] || productTypes['CAR'];

  const handleFieldChange = (index, field, value) => {
    const updatedData = [...localData];
    updatedData[index] = { ...updatedData[index], [field]: value };
    setLocalData(updatedData);
    onLineItemsChange(updatedData);
  };

  const addRow = () => {
    const newRow = Object.keys(fields).reduce((acc, key) => ({ ...acc, [key]: '' }), {});
    const updatedData = [...localData, newRow];
    setLocalData(updatedData);
    onLineItemsChange(updatedData);
  };

  const deleteRow = (index) => {
    const updatedData = localData.filter((_, i) => i !== index);
    setLocalData(updatedData);
    onLineItemsChange(updatedData);
  };

  const copyRow = (index) => {
    const rowToCopy = localData[index];
    const updatedData = [...localData, { ...rowToCopy }];
    setLocalData(updatedData);
    onLineItemsChange(updatedData);
  };

  return (
      <Paper
          style={{
            overflowX: 'scroll',
            width: '90%',
            margin: '0 auto',
            borderRadius: '20px',
            marginBottom: '100px',
            backgroundColor: '#f0f8fc',
          }}>
        <ToggleBar title={"라인아이템"} isChecked={isChecked} setCheck={setChecked} />
        {isChecked ? (
            <>
              <TableContainer>
                <Table style={{ backgroundColor: '#f0f8fc' }}>
                    <TableHead style={{ backgroundColor: '#d8e1e9' }}>
                        <TableRow>
                            <TableCell style={{ minWidth: 100 }}></TableCell>
                              {Object.keys(fields).map((key) => (
                                  <TableCell key={key} style={{
                                    minWidth: 200,
                                    fontSize: '20px',
                                    fontWeight: '800',
                                    color: '#49454F',
                                    textAlign: 'center'
                                  }}>
                                    &nbsp;&nbsp;&nbsp;
                                    {fields[key].label}
                                  </TableCell>
                              ))}
                        </TableRow>
                  </TableHead>
                  <TableBody>
                    {localData.length === 0 ? (
                        <TableRow>
                        </TableRow>
                    ) : (
                        localData.map((item, index) => (
                            <TableRow key={index}>
                              <TableCell style={{ width: 100 }}>
                                <IconButton onClick={() => copyRow(index)} aria-label="copy">
                                  <FileCopy />
                                </IconButton>
                                <IconButton onClick={() => deleteRow(index)} aria-label="delete">
                                  <DeleteOutline />
                                </IconButton>
                              </TableCell>
                              {Object.keys(fields).map((key) => {
                                const field = fields[key];
                                return (
                                    <TableCell key={key}>
                                      {field.type === 'enum' ? (
                                          <Select
                                              style={{ width: '100%', backgroundColor: '#ffffff' }}
                                              value={item[key] || ''}
                                              onChange={(e) => handleFieldChange(index, key, e.target.value)}
                                          >
                                            {field.options.map(option => (
                                                <MenuItem key={option} value={option}>{option}</MenuItem>
                                            ))}
                                          </Select>
                                      ) : field.type === 'boolean' ? (
                                          <Select
                                              style={{ width: '100%', backgroundColor: '#ffffff' }}
                                              value={item[key] ? 'true' : 'false'}
                                              onChange={(e) => handleFieldChange(index, key, e.target.value === 'true')}
                                          >
                                            <MenuItem value="true">Yes</MenuItem>
                                            <MenuItem value="false">No</MenuItem>
                                          </Select>
                                      ) : (
                                          <TextField
                                              value={item[key] || ''}
                                              type={field.type}
                                              style={{ width: '100%', backgroundColor: '#ffffff' }}
                                              onChange={(e) => handleFieldChange(index, key, e.target.value)}
                                              InputProps={field.type === 'int' ? { inputProps: { min: 0 } } : {}}
                                          />
                                      )}
                                    </TableCell>
                                );
                              })}
                            </TableRow>
                        ))
                    )}
                  </TableBody>
                </Table>
              </TableContainer>
              <Button
                  variant="contained"
                  color="primary"
                  startIcon={<Add />}
                  style={{
                      margin: '20px',
                      backgroundColor: '#03507d',
                      fontWeight: '800'
                    }}
                  onClick={addRow}
              >
                행추가
              </Button>
            </>
        ) : (
            ''
        )}
      </Paper>
  );
};

export default InquiryHistoryForm;
