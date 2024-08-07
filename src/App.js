import './App.css';
import Toolbar from "./components/Toolbar";
import CircularProgress from "./components/CircularProgress";
import React, {useState} from 'react';
import Content from "./components/Content";

function SkillBar({skill, percentage}) {
    return (
        <div className="skill-bar">
            <div className="skill-info">
                <span className="skill-name">{skill}</span>
                <span className="skill-percentage">{percentage} %</span>
            </div>
            <div className="progress-bar">
                <div className="progress" style={{width: `${percentage}%`}}></div>
            </div>
        </div>
    );
}

function App() {
    const [selectedSection, setSelectedSection] = useState('home');

    const handleMenuClick = (section) => {
        setSelectedSection(section);
    };
    const skills = [
        {skill: 'HTML', percentage: 90},
        {skill: 'CSS', percentage: 95},
        {skill: 'JS', percentage: 75},
        {skill: 'React', percentage: 70},
        {skill: 'Node', percentage: 80},
    ];

    return (
        <div className="App">
            <div>
                <Toolbar onMenuClick={handleMenuClick}/>
            </div>
            <div className="d-flex">
                <div className="leftSide d-flex flex-column ">
                    <div className="mainTopic p-5">
                        <img className="smallImg" src="https://scontent.fkun1-2.fna.fbcdn.net/v/t39.30808-6/430484655_7724670957566274_2614109157920535646_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=XidJhxgVONsQ7kNvgFl7iaD&_nc_ht=scontent.fkun1-2.fna&oh=00_AYDEE9ohRdfaVKAvQ5n_6iA2t_qaECfecqBd9rgD2fZTug&oe=66B7D95D" alt="mano nuotrauka"/>
                        <h6 className="text-white">Ignas Urbonas</h6>
                        <div className="d-flex flex-column">
                            <span>Full stack (junior) Developer</span>
                            <span>Physical education teacher</span>
                        </div>
                    </div>
                    <div className="personalData p-4">
                        <div>Residence: Lithuania</div>
                        <div>City: Skaistgirys</div>
                        <div>Age: 30</div>
                    </div>
                    <br/>
                    <div>
                        <CircularProgress percentage={100} label="Lithuanian"/>
                        <CircularProgress percentage={80} label="English"/>
                    </div>
                    <div>
                        {skills.map((item, index) => (
                            <SkillBar key={index} skill={item.skill} percentage={item.percentage}/>
                        ))}
                    </div>
                </div>
                <Content section={selectedSection}/>

            </div>


        </div>
    );
}

export default App;
