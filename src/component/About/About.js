import React from 'react';
import './aboutStyle.css'
import FamPic from './FamPics'

const About = () => {
    return (
        <div className="about">
            <div className="aboutMe">
                <h2 className='title' >About Chuck</h2>
                <div className='facts'>
                <p>A little about me....<br></br>
                I am a family-first guy and proud veteran with 4 years of service United States Air Force 
                as an Electric and Environmental Technician on F-16s.
                Over the past few years, I have been searching for the profession that balances my love of
                tech and creating solutions.<br></br>
                Covid and quarantine ironically provided me with some 
                extra time and I took the opportunity to explore software development through 
                freeCodeCamp. 
                I fell deeply in (technical) love INSTANTLY. 
                My next step was researching more formal educational programs that would build upon 
                my initial learning.  I chose to apply and commit the next 6 months to an intensive 
                coding bootcamp at Virginia Tech powered by Fullstack Academy of Code. 
                In 2022, I earned my Certificate in Web Development and added another Certificate in 
                Responsive Web Design through freeCodeCamp.
                I am proud to announce I am pursuing my Bachelor's Degree in Computer Science 
                through Strayer University with a projected graduation date in 2023.
                Outside of my professional aspirations I have discovered a love for wood-working, and 
                enjoy building things around the house. I attend YouTube academy for home repairs!  
                Additional hobbies include building Legos, kayaking, crafting with my family, hiking and 
                watching movies.
                Please <a className="emailLink" href="mailto:charles.d.suitt@gmail.com">drop me a line</a> to chat more!</p>
                </div>
            </div>
            <div className="picturesSection">
               <FamPic animDuration={1.5} />
            </div>
        </div>
    )
}

export default About;

