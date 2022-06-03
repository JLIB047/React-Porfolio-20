import React from 'react';
import Project from '../Project';

const projects =[
    {
        id:0,
        title: "Chat-App",
        language: "React, Node, Express ",
        packages: "bcrypt, nodemon, dotenv, stream-chat, twilio",
        image: require("../../assets/pictures/Chat-App.jpg"),
        description: "Chat with other users in a driect message or chat with a lot of users in a Channel.  You can share text pictures, videos, and emojis. ",
        repo: "https://github.com/JLIB047/Chat-App",
        live: "textchatmessage.netlify.app",
    },
    {
        id:1,
        title: "VLD8r",
        language: "HTML, CSS, JavaScript",
        packages: "N/a",
        image: require("../../assets/pictures/VLD8r-home.jpeg"), 
        description: "Search any Ip address, email, or phone number to check for information like risk-level, location, and more! ",
        repo: "https://github.com/Chis517/VLD8R-repo",
        live: "https://chis517.github.io/VLD8R-repo/"
    },
    {
        id:2,
        title: "Your Space",
        language: "JavaScript, Handlebars, CSS",
        packages: "express.js, mysql2, bcrypt, dotenv",
        image: require("../../assets/pictures/Your-Space.png"),
        description: "An MVC powered blog that allows users to share their favorite music with friends.",
        repo: "https://github.com/JLIB047/Your-Space-project2",
        live: "https://salty-inlet-95193.herokuapp.com/"
    }
]

function Portfolio() {
    return (
        <section>
            <h1 className="content is-medium">Portfolio</h1>
            <Project projects={projects}/>
        </section>
        
    )
}

export default Portfolio;