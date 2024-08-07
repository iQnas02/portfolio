import React from 'react';
import './Chat.css';

const Chat = ({ messages, message, setMessage, handleSendMessage, handleDeleteMessage, user }) => {
    return (
        <div className="chat-container">
            {user ? (
                <>
                    <div className="messages">
                        {messages.map(msg => (
                            <div key={msg._id} className="message">
                                <span><strong>{msg.user}:</strong> {msg.text}</span>
                                <div className="message-time">
                                    {new Date(msg.createdAt).toLocaleTimeString()}
                                </div>
                                {msg.user === user && (
                                    <button onClick={() => handleDeleteMessage(msg._id)}>Delete</button> // CHANGED: Show delete button only for user's messages
                                )}
                            </div>
                        ))}
                    </div>
                    <div className="input-container">
                        <input
                            type="text"
                            value={message}
                            onChange={e => setMessage(e.target.value)}
                            placeholder="Type your message"
                        />
                        <button onClick={handleSendMessage}>Send</button>
                    </div>
                </>
            ) : (
                <p>Please enter your username to join the chat.</p> // CHANGED: Message prompting user to enter username
            )}
        </div>
    );
};

export default Chat;