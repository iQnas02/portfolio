import './App.css';
import Toolbar from "./components/Toolbar";
import CircularProgress from "./components/CircularProgress";
import React, { useState, useEffect } from 'react';
import Content from "./components/Content";
import io from 'socket.io-client';
import axios from 'axios';

// Initialize socket connection
const socket = io('http://localhost:5000');

function SkillBar({ skill, percentage }) {
    return (
        <div className="skill-bar">
            <div className="skill-info">
                <span className="skill-name">{skill}</span>
                <span className="skill-percentage">{percentage} %</span>
            </div>
            <div className="progress-bar">
                <div className="progress" style={{ width: `${percentage}%` }}></div>
            </div>
        </div>
    );
}

function App() {
    const [selectedSection, setSelectedSection] = useState('home');
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');
    const [user, setUser] = useState('');
    const [showUserPrompt, setShowUserPrompt] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:5000/messages')
            .then(response => setMessages(response.data));

        socket.on('message', message => {
            setMessages(prevMessages => [message, ...prevMessages]);
        });

        socket.on('deleteMessage', id => {
            setMessages(prevMessages => prevMessages.filter(message => message._id !== id));
        });

        socket.on('username', (assignedUsername) => {
            setUser(assignedUsername); // Set the received username to state
            console.log(`Your username is: ${assignedUsername}`);
        });

        return () => {
            socket.off('message');
            socket.off('deleteMessage');
            socket.off('username');
        };
    }, []);

    const handleSendMessage = async () => {
        if (message.trim() && user.trim()) {
            await axios.post('http://localhost:5000/messages', { user, text: message });
            setMessage('');
        }
    };

    const handleDeleteMessage = async (id) => {
        await axios.delete(`http://localhost:5000/messages/${id}/${user}`);
    };

    const handleMenuClick = (section) => {
        if (section === 'chat' && !user) {
            setShowUserPrompt(true);
        } else {
            setSelectedSection(section);
        }
    };

    const handleUserSubmit = () => {
        if (user.trim()) {
            setShowUserPrompt(false);
            setSelectedSection('chat');
        }
    };

    const skills = [
        { skill: 'HTML', percentage: 90 },
        { skill: 'CSS', percentage: 95 },
        { skill: 'JS', percentage: 75 },
        { skill: 'React', percentage: 70 },
        { skill: 'Node', percentage: 80 },
    ];

    return (
        <div className="App">
            <div>
                <Toolbar onMenuClick={handleMenuClick} />
            </div>
            <div className="d-flex">
                <div className="leftSide d-flex flex-column">
                    <div className="mainTopic p-5">
                        <img className="smallImg"
                             src="https://scontent.fkun1-2.fna.fbcdn.net/v/t39.30808-6/430484655_7724670957566274_2614109157920535646_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=XidJhxgVONsQ7kNvgFl7iaD&_nc_ht=scontent.fkun1-2.fna&oh=00_AYDEE9ohRdfaVKAvQ5n_6iA2t_qaECfecqBd9rgD2fZTug&oe=66B7D95D"
                             alt="mano nuotrauka" />
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
                    <br />
                    <div>
                        <CircularProgress percentage={100} label="Lithuanian" />
                        <CircularProgress percentage={80} label="English" />
                    </div>
                    <div>
                        {skills.map((item, index) => (
                            <SkillBar key={index} skill={item.skill} percentage={item.percentage} />
                        ))}
                    </div>
                </div>
                {showUserPrompt && (
                    <div className="user-prompt">
                        <input
                            type="text"
                            value={user}
                            onChange={(e) => setUser(e.target.value)}
                            placeholder="Enter your username"
                        />
                        <button onClick={handleUserSubmit}>Join Chat</button>
                    </div>
                )}
                <Content
                    section={selectedSection}
                    messages={messages}
                    message={message}
                    setMessage={setMessage}
                    handleSendMessage={handleSendMessage}
                    handleDeleteMessage={handleDeleteMessage}
                    user={user} // Pass user to Content
                />
            </div>
        </div>
    );
}

export default App;
