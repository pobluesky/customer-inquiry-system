import React from 'react';
import Category from '../atoms/Category';
import Terms from '../atoms/Terms';
import DateInput from '../mocules/DateInput';
import OfferInput from '../atoms/OfferInput';

function OfferInfo() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', padding: '12px'}}>
            <table>
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
                            <DateInput />
                        </td>
                        <td>
                            <Category categoryName={'5. Payment Term'} />
                        </td>
                        <td>
                            <Terms />
                        </td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <Category categoryName={'6. Destination'} />
                        </td>
                        <td>
                            <OfferInput />
                        </td>
                        <td>
                            <Category categoryName={'7. Validity'} />
                        </td>
                        <td>
                            <DateInput />
                        </td>
                        <td>
                            <Category categoryName={'8. Remark'} />
                        </td>
                        <td>
                            <OfferInput />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default OfferInfo;
