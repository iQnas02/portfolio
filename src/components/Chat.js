import React from 'react';
import './Chat.css';

const Chat = ({ messages, message, setMessage, handleSendMessage, handleDeleteMessage }) => {
    return (
        <div className="chat-container">
            <div className="messages">
                {messages.map(msg => (
                    <div key={msg._id} className="message">
                        <span><strong>{msg.user}:</strong> {msg.text}</span>
                        <button onClick={() => handleDeleteMessage(msg._id)}>Delete</button>
                    </div>
                ))}
            </div>
            <div className="input-container">
                <input
                    type="text"
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    placeholder="Type a message"
                />
                <button onClick={handleSendMessage}>Send</button>
            </div>
        </div>
    );
};

export default Chat;
