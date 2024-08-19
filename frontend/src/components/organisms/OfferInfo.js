import React from 'react';
import Category from '../atoms/Category';
import Terms from '../atoms/Terms';
import MyDateInput from '../atoms/MyDateInput';
import OfferInfoInput from '../atoms/OfferInfoInput';
import { Info_Container, Table_Scroll, Info_Table, Border_Space } from '../../assets/css/Form.css';

function OfferInfo() {
    return (
        <div className={Info_Container}>
            <div className={Table_Scroll}>
                <table className={Info_Table}>
                    <thead>
                        <tr>
                            <td>
                                <Category categoryName={'3. Price Term'} />
                            </td>
                            <td>
                                <Terms />
                            </td>
                            <td>
                                <Category categoryName={'4. Shipment'} />
                            </td>
                            <td>
                                <MyDateInput />
                            </td>
                            <td>
                                <Category categoryName={'5. Payment Term'} />
                            </td>
                            <td>
                                <Terms />
                            </td>
                        </tr>
                    </thead>
                    <tbody style={{ borderCollapse: 'separate', borderSpacing: '0 15px' }}>
                        <tr>
                            <td className={Border_Space} colSpan={6}></td>
                        </tr>
                        <tr>
                            <td>
                                <Category categoryName={'6. Destination'} />
                            </td>
                            <td>
                                <OfferInfoInput />
                            </td>
                            <td>
                                <Category categoryName={'7. Validity'} />
                            </td>
                            <td>
                                <MyDateInput />
                            </td>
                            <td>
                                <Category categoryName={'8. Remark'} />
                            </td>
                            <td>
                                <OfferInfoInput />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default OfferInfo;
