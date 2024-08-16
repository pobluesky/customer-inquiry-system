import React from 'react';
import { Price_Payment, Price_Payment_Std } from '../../assets/css/Form.css';

function Terms() {
    const termSample = ['CIF', 'CIP', 'FOB', 'CIP'];
    const destSample = ['Busan seaport', 'Incheon Airport'];

    return (
        <>
            <select className={Price_Payment_Std} name="selectedTerm" defaultValue="">
                {termSample.map((term, termIdx) => (
                    <option key={termIdx} value={term}>
                        {term}
                    </option>
                ))}
            </select>
            <select className={Price_Payment} name="selectedDest" defaultValue="">
                {destSample.map((dest, destIdx) => (
                    <option key={destIdx} value={dest}>
                        {dest}
                    </option>
                ))}
            </select>
        </>
    );
}

export default Terms;
