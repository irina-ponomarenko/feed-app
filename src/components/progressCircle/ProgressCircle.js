import React from "react";

import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ProgressCircle = () => {
    const percentage = 82;

    return (
        <div style={{ width: 80, height: 80 }}>
            <CircularProgressbar
                value={percentage}
                text={`${percentage}%`}
                strokeWidth={8}
                styles={{
                    path: {
                        // Path color
                        stroke: `#45b0f4`,
                        // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                        strokeLinecap: 'butt',
                        // Customize transition animation
                        transition: 'stroke-dashoffset 0.5s ease 0s',
                    },
                    text: {
                        // Text color
                        fill: '#3e3f5e',
                        // Text size
                        fontSize: '18px',
                        fontFamily: 'Roboto',
                    },
                }}
            />
        </div>
    );
};

export default ProgressCircle;