import React, { useState, useEffect } from 'react';
import './Chat.css';

const Chat = ({
                  messages,
                  message,
                  setMessage,
                  handleSendMessage,
                  handleDeleteMessage,
                  user,
                  fetchMessages
              }) => {
    const [page, setPage] = useState(1);
    const [limit] = useState(10); // Number of messages per page
    const [userName, setUserName] = useState(user || ''); // Initialize with user prop or empty string
    const [isEditingUserName, setIsEditingUserName] = useState(!user); // Show input if user is not set

    useEffect(() => {
        fetchMessages(page, limit);
    }, [page, limit]);

    useEffect(() => {
        // Load saved user name from localStorage on mount
        const savedName = localStorage.getItem('userName');
        if (savedName) {
            setUserName(savedName);
        }
    }, []);

    useEffect(() => {
        // Save user name to localStorage whenever it changes
        if (userName) {
            localStorage.setItem('userName', userName);
        }
    }, [userName]);

    const handlePreviousPage = () => {
        if (page > 1) setPage(page - 1);
    };

    const handleNextPage = () => {
        if (messages.length === limit) {  // Check if there are more messages to load
            setPage(page + 1);
        }
    };

    const handleUserNameChange = (e) => {
        setUserName(e.target.value);
    };

    const handleUserNameSubmit = (e) => {
        e.preventDefault();
        if (userName) {
            setIsEditingUserName(false); // Hide input after submission
        }
    };

    return (
        <div className="chat-container m-5">
            {!isEditingUserName ? (
                <>
                    <div className="messages">
                        {messages.map(msg => (
                            <div key={msg._id} className="message">
                                <span><strong>{msg.user}:</strong> {msg.text}</span>
                                <div className="message-time">
                                    {new Date(msg.createdAt).toLocaleString('lt-LT', {
                                        year: 'numeric',
                                        month: 'numeric',
                                        day: 'numeric',
                                        hour: 'numeric',
                                        minute: 'numeric',
                                        second: 'numeric'
                                    })}
                                </div>
                                {msg.user === userName && (
                                    <button onClick={() => handleDeleteMessage(msg._id)}>Delete</button>
                                )}
                            </div>
                        ))}
                    </div>
                    <div className="pagination">
                        <button onClick={handlePreviousPage} disabled={page === 1}>Previous</button>
                        <span className="p-2">Page {page}</span>
                        <button onClick={handleNextPage}>Next</button>
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
                <div className="username-form">
                    <form onSubmit={handleUserNameSubmit}>
                        <label>
                            Enter your username:
                            <input
                                type="text"
                                value={userName}
                                onChange={handleUserNameChange}
                                placeholder="Enter your name"
                            />
                        </label>
                        <button type="submit">Save Name</button>
                    </form>
                </div>
            )}
            {userName && !isEditingUserName && <p>Welcome, {userName}!</p>}
        </div>
    );
};

export default Chat;
