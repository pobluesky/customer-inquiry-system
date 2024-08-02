import React from 'react';
import SearchInput from '../atoms/SearchInput';
import OfferInput from '../atoms/OfferInput';
import { Container, Can_Scroll, Table, Table_Parent, Table_Child } from '../../assets/css/Input.css';

function OfferSheet() {
    const columnSample = ['Product', 'Specification', 'Surface', 'Usage', 'Thickness', 'Diameter', 'Width', 'Quantity(mt)', 'Price', 'Max', 'Min'];
    const productSample = ['자동차', '후판(건설용)', '후판(육상플랜트)', '표면처리(일반)'];
    const countrySample = ['Austrailan Dollar', 'Japan Yen', 'Korean Won'];

    return (
        <div className={Container}>
            <div className={Can_Scroll}>
                <table className={Table}>
                    <thead className={Table_Parent}>
                        <tr>
                            {columnSample.map((column, idx) => (
                                <th key={idx}>{column}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        <tr className={Table_Child}>
                            {columnSample.map((column, idx) => (
                                <td key={idx}>
                                    {column === 'Product' && (
                                        <select name="selectedProduct" defaultValue="default">
                                            <option value="default" disabled>
                                                select
                                            </option>
                                            {productSample.map((product, idx) => (
                                                <option key={idx} value={product}>
                                                    {product}
                                                </option>
                                            ))}
                                        </select>
                                    )}
                                    {column === 'Price' && (
                                        <>
                                            <select name="selectedCountry" defaultValue="Australian Dollar">
                                                {countrySample.map((country, idx) => (
                                                    <option key={idx} value={country}>
                                                        {country}
                                                    </option>
                                                ))}
                                            </select>
                                            <OfferInput />
                                        </>
                                    )}
                                    {column === 'Specification' && <SearchInput />}
                                    {(column !== 'Product' && column !== 'Price' && column !== 'Specification') && <OfferInput />}
                                </td>
                            ))}
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default OfferSheet;
