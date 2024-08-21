import React from 'react';
import History from '../components/History';
import Home from '../components/Home';
import Contact from "../components/Contacts";
import Portfolio from '../components/Portfolio';
import Chat from "../components/Chat";

// Import other sections if needed

function Content({ section, messages, message, setMessage, handleSendMessage, handleDeleteMessage, user, fetchMessages }) {
    return (
        <div className="content">
            {section === 'home' && <Home />}
            {section === 'portfolio' && <Portfolio />}
            {section === 'history' && <History />}
            {section === 'contact' && <Contact />}
            {section === 'chat' && (
                <Chat
                    messages={messages}
                    message={message}
                    setMessage={setMessage}
                    handleSendMessage={handleSendMessage}
                    handleDeleteMessage={handleDeleteMessage}
                    user={user} // CHANGED: Pass user to Chat
                    fetchMessages={fetchMessages}
                />
            )}
        </div>
    );
}

export default Content;