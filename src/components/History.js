import React from 'react';
import './History.css';

function History() {
    return (
        <div className="history">
            <div className="education">
                <h2 className="text-white">Education</h2>
                <div className="card">
                    <h3>University of Šiauliai</h3>
                    <p>september 2014 - june 2018</p>
                    <p>Bachelor's Degree in Physical education</p>
                </div>
                {/* Add more education cards as needed */}
            </div>
            <div className="work-history">
                <h2 className="text-white">Work History</h2>
                <div className="card">
                    <h3>Žagarės milk factory</h3>
                    <p>2016.08 - 2017.06</p>
                    <p>Worker</p>
                </div>
                <div className="card">
                    <h3>Skaistgirio žūb</h3>
                    <p>2014.03 - 2014.08</p>
                    <p>Builder</p>
                </div>
                {/* Add more work history cards as needed */}
            </div>
        </div>
    );
}

export default History;
