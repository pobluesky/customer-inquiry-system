import React, { useState } from 'react';
import Button from '../atoms/Button';
import SearchInput from '../molecules/SearchInput';
import search from '../../assets/css/icons/voc/search.svg';
import { Col_Find_Manager_Filter_Panel } from '../../assets/css/Voc.css';

export default function ColReqFilterPannel({ setOpenModal, colResId }) {
    const [managerInfo, setManagerInfo] = useState([]);

    return (
        <>
            <div className={Col_Find_Manager_Filter_Panel}>
                <div>
                    {/* 아이콘 + 협업 요청 */}
                    <div>
                        <img src={search} />
                        <div>협업 요청</div>
                    </div>

                    {/* 담당자 조회 */}
                    <div>
                        <div>
                            <div>담당자 조회</div>
                            <SearchInput
                                width={'144px'}
                                height={'24px'}
                                border={'solid 1px #c1c1c1'}
                                borderRadius={'8px'}
                                outline={'none'}
                                padding={'0 8px 0 8px'}
                                btnHeight={'24px'}
                                value={colResId}
                                // onChange={(e) => setTempTitle(e.target.value)}
                            />
                            <Button
                                btnName={'조회'}
                                width={'84px'}
                                height={'28px'}
                                margin={'0 0 0 24px'}
                                backgroundColor={'#03507d'}
                                textColor={'#ffffff'}
                                border={'none'}
                                borderRadius={'20px'}
                                onClick={() => {setOpenModal(true)}}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
