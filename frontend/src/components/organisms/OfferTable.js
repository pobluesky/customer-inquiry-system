import React from 'react';
import OfferTableInput from '../atoms/OfferTableInput';
import SearchInput from '../mocules/SearchInput';
import { Table_Container, Table_Scroll, Table_Table, Table_Table_Head, Table_Table_Body, Table_Colspan } from '../../assets/css/Offersheet.css';

function OfferSheet() {
    const columnSample = ['Product', 'Specification', 'Surface', 'Usage', 'Size', 'Quantity(mt)', 'Price', 'Unit Weight(kg)'];
    const sizeSample = ['Thickness', 'Diameter', 'Width'];
    const weightSample = ['Max', 'Min'];
    const productSample = ['자동차', '후판(건설용)', '후판(육상플랜트)', '표면처리(일반)'];
    const countrySample = ['Austrailan Dollar', 'Japan Yen', 'Korean Won'];

    return (
        <div className={Table_Container}>
            <div className={Table_Scroll}>
                <table className={Table_Table}>
                    <thead className={Table_Table_Head}>
                        <tr>
                            {columnSample.map((column, idx) => (
                                <React.Fragment key={idx}>
                                    {column === 'Size' ? (
                                        <th colSpan={3}>
                                            <div className={Table_Colspan}>{column}</div>
                                        </th>
                                    ) : column === 'Unit Weight(kg)' ? (
                                        <th colSpan={2}>
                                            <div className={Table_Colspan}>{column}</div>
                                        </th>
                                    ) : (
                                        <th>{column}</th>
                                    )}
                                </React.Fragment>
                            ))}
                        </tr>
                        <tr>
                            {columnSample.map((column, idx) => (
                                <React.Fragment key={idx}>
                                    {column === 'Size' ? sizeSample.map((size, sizeIdx) => 
                                        <th key={sizeIdx}>{size}</th>
                                    ) : column === 'Unit Weight(kg)' ? 
                                        weightSample.map((weight, weightIdx) => <th key={weightIdx}>{weight}</th>
                                    ) : <th />
                                    }
                                </React.Fragment>
                            ))}
                        </tr>
                    </thead>
                    <tbody className={Table_Table_Body}>
                        <tr>
                            {columnSample.map((column, idx) => (
                                <React.Fragment key={idx}>
                                    {column === 'Product' ? (
                                        <td>
                                            <select name="selectedProduct" defaultValue="default">
                                                <option value="default" disabled>
                                                    select
                                                </option>
                                                {productSample.map((product, productIdx) => (
                                                    <option key={productIdx} value={product}>
                                                        {product}
                                                    </option>
                                                ))}
                                            </select>
                                        </td>
                                    ) : column === 'Specification' ? (
                                        <td>
                                            <SearchInput />
                                        </td>
                                    ) : column === 'Price' ? (
                                        <td>
                                            <table>
                                                <thead>
                                                    <tr>
                                                        <td>
                                                            <select name="selectedCountry" defaultValue="Australian Dollar">
                                                                {countrySample.map((country, countryIdx) => (
                                                                    <option key={countryIdx} value={country}>
                                                                        {country}
                                                                    </option>
                                                                ))}
                                                            </select>
                                                        </td>
                                                        <td>
                                                            <OfferTableInput />
                                                        </td>
                                                    </tr>
                                                </thead>
                                            </table>
                                        </td>
                                    ) : column === 'Size' ? (
                                        sizeSample.map((size, sizeIdx) => (
                                            <td key={sizeIdx}>
                                                <OfferTableInput />
                                            </td>
                                        ))
                                    ) : column === 'Unit Weight(kg)' ? (
                                        weightSample.map((weight, weightIdx) => (
                                            <td key={weightIdx}>
                                                <OfferTableInput />
                                            </td>
                                        ))
                                    ) : (
                                        <td>
                                            <OfferTableInput />
                                        </td>
                                    )}
                                </React.Fragment>
                            ))}
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default OfferSheet;
