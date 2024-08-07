import React from 'react';
import History from '../components/History';
import Home from '../components/Home';
import Contact from "../components/Contacts";
import Portfolio from '../components/Portfolio';
// Import other sections if needed

function Content({ section }) {
    return (
        <div className="content">
            {section === 'home' && <Home/>}
            {section === 'portfolio' && <Portfolio/>}
            {section === 'history' && <History />}
            {section === 'blog' && <div>Blog Content</div>}
            {section === 'contact' && <Contact/>}
        </div>
    );
}

export default Content;
