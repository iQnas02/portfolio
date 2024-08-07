import React from 'react';
import './History.css';

function Portfolio() {
    return (
        <div className="history  ">
            <div className="education d-flex flex-column">
                <h2 className="text-white p-4">Portfolio</h2>
                <div className="card contactCard">
                    <h3>I have made games, websites, music players, you can see by clicking on link below</h3>
                    <a href="https://iqnas02.github.io/type21-music-player/">Music player</a>

                    <a href="https://iqnas02.github.io/Type21-hit-the-box/">Hit the box(game)</a>
                </div>
                <div className="card contactCard">
                    <a href="https://iqnas02.github.io/type21-seat-reservation-app/">Seat reservation app</a>
                </div>
                <div className="card contactCard">
                    <a href="https://github.com/iQnas02?tab=repositories">You can see my works code in this link</a>
                </div>

            </div>

        </div>
    );
}

export default Portfolio;
