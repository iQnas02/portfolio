import React from 'react';
import './History.css';

function Contact() {
    return (
        <div className="history  ">
            <div className="education d-flex flex-column">
                <h2 className="text-white p-4">Contact information</h2>
                <div className="card contactCard">
                    <h3>Country: Lithuania</h3>
                    <p>City: Skaistgirys</p>
                    <p>Streat: alyvu 12</p>
                </div>
                <div className="card contactCard">
                    <p>Email: ignasurbonas02@gmail.com</p>
                    <p>Personal: +37062921261</p>
                </div>

            </div>

        </div>
    );
}

export default Contact;
