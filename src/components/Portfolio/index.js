import React from 'react';
import Project from '../Project';

const projects =[
    {
        id:0,
        title: "RunBuddy",
        language: "HTMl, CSS, JavaScript",
        packages: "N/a",
        image: "./assets/pictures/running-shoe.jpeg",
        description: "Allows the user to hit their fitness goals by putting them in contact with a trainer.",
        repo: "https://github.com/JLIB047/run-buddy",
        live: "https://jlib047.github.io/run-buddy/",
    },
    {
        id:1,
        title: "VLD8r",
        language: "HTML, CSS, JavaScript",
        packages: "N/a",
        image: "../assets/pictures/VLD8r-home.jpeg", 
        description: "Search any Ip address, email, or phone number to check for information like risk-level, location, and more! ",
        repo: "https://github.com/Chis517/VLD8R-repo",
        live: "https://chis517.github.io/VLD8R-repo/"
    },
    {
        id:2,
        title: "Your Space",
        language: "JavaScript, Handlebars, CSS",
        packages: "express.js, mysql2, bcrypt, dotenv",
        image: "/src/assets/pictures/Screen Shot 2022-01-16 at 3.14.17.png",
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