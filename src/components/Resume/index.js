import React from 'react';

function Resume() {
    return (
        <div className="columns">
            <div className="column">
                <p className="content is-medium">Resume</p>
                <br />

                <a className="button is-primary"
                   href={process.env.PUBLIC_URL + "/jason-libertelli-resume.pdf"}
                   target="_blank" rel="noreferrer">
                       <span className="icon">
                           <i className="fas fa-download"></i>
                       </span>
                       <span>Download My Resume</span>
                   </a>
            </div>
            <div className="column">
                <p className="content is-medium">Skills</p>
                <br />
                <ul>
                    <li>HTML, CSS, Javascript</li>
                    <li>Web Apis, Server-Side Apis</li>
                    <li>MongoDb, Express.js, React, Node</li>
                    <li>SQL, NoSql</li>
                    <li>Markdown, Git, Github Repo</li>
                </ul>

            </div>
        </div>
    );
}

export default Resume;