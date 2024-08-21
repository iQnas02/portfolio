import React, { useState, useEffect } from 'react';
import './Chat.css';

const Chat = ({ messages, message, setMessage, handleSendMessage, handleDeleteMessage, user, fetchMessages }) => {
    const [page, setPage] = useState(1);
    const [limit] = useState(10); // Number of messages per page

    useEffect(() => {
        fetchMessages(page, limit);
    }, [page, limit]);

    const handlePreviousPage = () => {
        if (page > 1) setPage(page - 1);
    };

    const handleNextPage = () => {
        if (messages.length === limit) {  // Check if there are more messages to load
            setPage(page + 1);
        }
    };
    return (
        <div className="chat-container">
            {user ? (
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
                                {msg.user === user && (
                                    <button onClick={() => handleDeleteMessage(msg._id)}>Delete</button>
                                )}
                            </div>
                        ))}
                    </div>
                    <div className="pagination">
                        <button onClick={handlePreviousPage} disabled={page === 1}>Previous</button>
                        <span className="text-white p-2">Page {page}</span>
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
                <p>Please enter your username to join the chat.</p>
            )}
        </div>
    );
};

export default Chat;
