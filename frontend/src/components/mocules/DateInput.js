import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import { ko } from 'date-fns/locale';
import { Input_Datepicker } from '../../assets/css/Input.css';

function DateInput() {
    const [startDate, setStartDate] = useState(new Date());

    return (
        <DatePicker
            className={Input_Datepicker}
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
