import React from 'react';

function Nav(props) {
const {
    contactSelected,
    setContactSelected
} = props;

    return (
        <header>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a href="#about" onClick={() => setContactSelected(false)}>
                            About Me 
                        </a>
                    </li>
                    <li className={`mx-2 ${contactSelected && 'navActive'}`}>
                    <span href="contact-form" onClick={() => setContactSelected(true)}>Contact</span>
                    </li>
                </ul>
            </nav>

        </header>
    )
}

export default Nav;