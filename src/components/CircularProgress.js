import React from 'react';
import './CircularProgress.css';

const CircularProgress = ({ percentage, label }) => {
    const radius = 54;
    const strokeWidth = 8;
    const circumference = 2 * Math.PI * radius;
    const progress = circumference - (percentage / 100) * circumference;

    return (
        <div className="circular-progress-container">
            <svg
                width={radius * 2 + strokeWidth}
                height={radius * 2 + strokeWidth}
            >
                <circle
                    className="circle-bg"
                    stroke="#e6e6e6"
                    cx={radius + strokeWidth / 2}
                    cy={radius + strokeWidth / 2}
                    r={radius}
                    strokeWidth={strokeWidth}
                    fill="none"
                />
                <circle
                    className="circle-progress"
                    stroke="#ff4a4a"
                    cx={radius + strokeWidth / 2}
                    cy={radius + strokeWidth / 2}
                    r={radius}
                    strokeWidth={strokeWidth}
                    fill="none"
                    strokeDasharray={circumference}
                    strokeDashoffset={progress}
                />
                <text
                    x="50%"
                    y="50%"
                    dominantBaseline="middle"
                    textAnchor="middle"
                    className="percentage-text"
                >
                    {`${percentage}%`}
                </text>
            </svg>
            <div className="label">{label}</div>
        </div>
    );
};

export default CircularProgress;
