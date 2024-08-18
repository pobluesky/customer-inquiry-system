import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import { ko } from 'date-fns/locale';

function DateInput({ className, startDate, setStartDate }) {
    return (
        <DatePicker
            className={className}
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            locale={ko}
            dateFormat="yyyy-MM-dd"
            minDate={new Date()}
            closeOnScroll={true}
            withPortal />
        );
}

export default DateInput;

