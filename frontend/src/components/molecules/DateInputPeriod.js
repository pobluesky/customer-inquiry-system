import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import { ko } from 'date-fns/locale';
import { DatepickerPeriod } from '../../assets/css/Form.css';

function DateInputPeriod() {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    return (
        <div style={{ display: 'flex' }}>
            <DatePicker
                className={DatepickerPeriod}
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                locale={ko}
                dateFormat="yyyy-MM-dd"
                minDate={new Date()}
                closeOnScroll={true}
                withPortal
            />
            <p
                style={{
                    margin: '3px 0 0 20px',
                    color: '#65636c',
                    fontSize: '20px',
                }}
            >
                ~
            </p>
            <DatePicker
                className={DatepickerPeriod}
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                locale={ko}
                dateFormat="yyyy-MM-dd"
                minDate={new Date()}
                closeOnScroll={true}
                withPortal
            />
        </div>
    );
}

export default DateInputPeriod;
