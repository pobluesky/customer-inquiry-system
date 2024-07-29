import { useEffect, useState } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function DashBoard() {
    const [percentage, setPercentage] = useState(100);
    
    const timer = () => {
        setInterval(() => {
            for (let i = 0; i < 10; i++) {
                setPercentage(percentage-10)
            }
        }, 3000);
    };

    timer();

    return (
        <div style={{ width: '200px', height: '200px' }}>
            <CircularProgressbar value={percentage} text={`${percentage}%`} />
        </div>
    );
}

export default DashBoard;
