import React, { useEffect, useState } from 'react';
import Input from '../atoms/Input';
import Button from '../atoms/Button';
import { Col_Search_Input } from '../../assets/css/Voc.css';

export default function ColSearchInput({ setColNo, setColManager }) {
    const [tempColNo, setTempColNo] = useState('');
    const [tempColManager, setTempColManager] = useState('');
    const [keyword, setKeyword] = useState('no');

    const filterSend = () => {
        setColNo(tempColNo);
        setColManager(tempColManager);
    };

    const enterKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            filterSend();
        }
    };

    useEffect(() => {
        if (keyword === 'no') {
            setTempColNo('');
        } else if (keyword === 'manager') {
            setTempColManager('');
        }
    }, [keyword]);

    return (
        <div className={Col_Search_Input}>
            <select
                name="keyword"
                id="keyword"
                value={keyword}
                onChange={(e) => {
                    setKeyword(e.target.value);
                }}
            >
                <option value="manager" defaultValue>
                    협업 담당자
                </option>
                <option value="no">협업 번호</option>
            </select>
            {keyword === 'no' ? (
                <Input
                    width={'924px'}
                    height={'36px'}
                    margin={'0 auto 0 auto'}
                    padding={'0px 12px 0px 12px'}
                    border={'1px solid #8b8b8b'}
                    placeholder={'협업 번호를 검색하세요.'}
                    outline={'none'}
                    value={tempColNo}
                    onChange={(e) => setTempColNo(e.target.value)}
                    onKeyDown={enterKeyDown}
                />
            ) : (
                <Input
                    width={'924px'}
                    height={'36px'}
                    margin={'0 auto 0 auto'}
                    padding={'0px 12px 0px 12px'}
                    border={'1px solid #8b8b8b'}
                    placeholder={'요청 담당자를 검색하세요.'}
                    outline={'none'}
                    value={tempColManager}
                    onChange={(e) => setTempColManager(e.target.value)}
                    onKeyDown={enterKeyDown}
                />
            )}
            <Button
                btnName={'검색'}
                width={'144px'}
                height={'38px'}
                backgroundColor={'#8b8b8b'}
                border={'1px solid #8b8b8b'}
                textColor={'#ffffff'}
                fontWeight={'600'}
                onClick={filterSend}
            />
        </div>
    );
}
