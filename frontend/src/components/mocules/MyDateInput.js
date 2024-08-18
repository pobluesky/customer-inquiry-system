import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import { ko } from 'date-fns/locale';

function MyDateInput({ className, checkDate, setCheckDate }) {
    return (
        <DatePicker
            className={className}
            selected={checkDate}
            onChange={(date) => setCheckDate(date)}
            locale={ko}
            dateFormat="yyyy-MM-dd"
            closeOnScroll={true}
            withPortal
        />
    );
}

export default MyDateInput;
