import React, { useState } from 'react';
import Navigation from '../Navigation';
import About from '../About';
import Contact from '../Contact';
import Portfolio from '../Portfolio';
import Resume from '../Resume';

function Header() {
    const [currentPage, setCurrentPage] = useState("About");

    const renderPage = () => {
        switch (currentPage) {
            case "About":
                return <About />;
            case "Portfolio":
                return <Portfolio />;
            case "Contact":
                return <Contact />;
            case "Resume":
                return <Resume />;
            
            default:
                return <About />;
        }
    };

    return (
    <div>
        <nav className="navbar">
            <div className="navbar-brand">
                <a className="navbar-item"
                   rel="noreferrer"
                   target="_blank"
                   href="https://github.com/JLIB047">
                       <span className="content is-large">Jason Libertelli</span>
                   </a>
            </div>
        </nav>
        <Navigation 
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
        />
        <main>
            <div>{renderPage(currentPage)}</div>
        </main>
    </div>
    )
}

export default Header;