// 통합 후 삭제 예정
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import { ko } from 'date-fns/locale';
import { Datepicker } from '../../assets/css/Form.css';

function MyDateInput({ margin }) {
    const [startDate, setStartDate] = useState(new Date());

    return (
        <DatePicker
            style={{ margin: `${margin}` }}
            className={Datepicker}
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            locale={ko}
            dateFormat="yyyy-MM-dd"
            minDate={new Date()}
            closeOnScroll={true}
            withPortal
        />
    );
}

export default MyDateInput;
