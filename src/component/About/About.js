import React from 'react';
import './aboutStyle.css'
import FamPic from './FamPics'

const About = () => {
    return (
        <div className="about">
            <div className="aboutMe">
                <h2 className='title' >About Chuck</h2>
                <div className='facts'>
                    <p>I guess the first thing to know about me is I am a family man first. </p>
                    <p>I am a 33 year old Veteran and I spent 4 years in the United States Air Force as an Electric and Environmental technician on F-16s.</p> 
                    <p>I recently discovered that I love wood-working, and enjoy building things around the house. I attend Youtube academy for home repairs!!</p>
                    <p>Some of my favorite hobbies include building: Legos, kayaking, crafting with my family, hiking and watching movies</p>
                    <p>For a long time I had been trying to find what it was I wanted to do for the 'rest of my life' and I just couldn't find what I was passionate about. In November of 2020 I was diagnosed with Covid. While I was in quarantine I decided to enroll in freeCodeCamp.org and see if software development was something that called to me. I fell in love INSTANTLY. I started doing some research into bootcamps and the next thing I knew I applied to the Web Development boot camp at Virginia Tech, Powered by FullStack Academy. After a very intense and informative 6 months, I graduated the boot camp and earned my certificate in Web Development. I decided to continue my education at freeCodeCamp and earned a certificate in responsive web design. My love for software development continues to grow, and now I am enrolled with Strayer University, pursuing my Bachelor's Degree in Computer Science. I am projected to graduate in 2023!
                    </p>
                </div>
            </div>
            <div className="pictures">
               <FamPic animDuration={1.5} />
            </div>
        </div>
    )
}

export default About;

