import React from 'react';
import {
    _Text,
    _searchCount,
} from '../../assets/css/Inquiry.css';
import { Button } from '@mui/material';

const SearchResult = ({ searchResult }) => {
    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <p className={_Text}>
                검색 결과 : 총&nbsp;
                <span className={_searchCount}>{searchResult}</span>
                &nbsp;건
            </p>
            <Button
                variant="contained"
                color="secondary"
                sx={{
                    marginLeft: '20px',
                    backgroundColor: '#ffffff',
                    color: '#03507d',
                    width: '100px',
                    height: '40px',
                    padding: '0',
                    borderRadius: '10px',
                    fontWeight: '700',
                    border: '1px solid #03507d',
                    '&:hover': {
                        backgroundColor: '#03507d',
                        color: '#ffffff',
                    },
                }}
            >Inquiry 등록</Button>
        </div>
    );
};

export default SearchResult;
