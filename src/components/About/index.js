import React from 'react';
import coverImage from '../../assets/pictures/IMG_0046.JPG'

function About() {
    return (
        <section className="my-5">
            <h1 id="about">About Me</h1>
            <img src={coverImage} className="my-2" style={{ width: "100%", height: "50%"}} alt="cover"/>
            <p className="content is-italic mt-4">
                My name is Jason Libertelli, I work for Sikorsky Aircraft in Stratford CT. I'm studying to become 
                a full stack web developer to learn something new and further my career. 
            </p>
            <p className="content">
                Coding has become a big part of my life in the last six months and I am excited to see where a career 
                in tech can take me.  In my freetime I like to get outdoors and go for a hike or find a nice spot to 
                camp.  I also play and coach Rugby on the weekends.  I find a good sense of belonging on a team and i've 
                found that my skills shine best in a team enviroment.  
            </p>
        </section>
       
    );
}

export default About;