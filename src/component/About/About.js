import React from 'react';
import './aboutStyle.css'
import LeftPic from './LeftPic'
import RightPic from './RightPic'

const About = () => {
    return (
        <div className="about">
            <div className="personal">
                <h2 className='title' >About Me Personally</h2>
                <p className='info'>Hover to see the pups</p>
                <LeftPic />
                <div className='facts'>
                    <p>I guess the first thing to know about me is I am a family man first. </p>
                    <p>I am a 33 year old Veteran. I spent 4 years in the United States Air Force. Electric and Enviornmental technician on F-16s.</p> 
                    <p>I have 3 dogs.</p>
                    <p>I recently discovered that I love wood-working, and enjoy building things around the house.</p>
                    <p>Some of my favorite hobbies include building: Legos, kayaking, crafting with my family, hiking and watching movies</p>
                </div>
            </div>
            <div className="professional">
                <h2 className='title'>About Me Professionally</h2>
                <div className='facts'>
                    <p>I have moved around quite a bit as far as jobs and careers go. I was an AirCraft mechanic in the Air Force, I became an instructor and taught members of foreign Air Force Units how to take non-functional air craft and use the spare parts to create functional air crafts. I was in the nursing program when my first child was born and decided to dedicate more time to being with my daughter. </p>
                    <p>It was not until October of 2020 that I was introduced to the world of web development. I started doing some self paced coding classes online and was instantly drawn to how it feels like every aspect of our daily lives reside in these codes people write. I wanted to learn more. After some research I realized that this field is fluid and would not only keep my attention and keep me engaged but also provide a way that I would have the ability to be apart of my children’s lives rather than away working 2-3 jobs to provide the life I’ve envisioned for my family.</p>
                    <p>I found A boot camp held by Virginia Tech which was powered by Full Stack Academy and signed up right away. The boot camp was 100% remote.  </p>
                    <p>Check out my work under the Projects Tab!</p>
                </div>
               <RightPic />
            </div>
        </div>
    )
}

export default About;

