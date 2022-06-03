import React from 'react';

function Navigation(props) {
    const tabs = ["About", "Portfolio", "Contact", "Resume"];

    return (
        <div className="tabs">
            <ul id="nav-tabs">
                {tabs.map((tab) => (
                    <li className={
                        props.currentPage === tab ? "nav-item is active" : "nav-item"
                    }
                    key={tab}>
                        <a href={"#" + tab.toLowerCase()}
                        //current page is set through handlePageChange props
                        onClick={() => props.setCurrentPage(tab)}
                        className={props.currentPage === tab ? "nav-link active" : "nav-link"}
                        >
                            {tab}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )

    
}

export default Navigation;