import React, { useState, useEffect } from 'react';
import './style.css'
import MyPic from './MyPic'
 
const Home = () => {

    return (
        <div className="home">
            <div className="job">
               Junior Web Developer
            </div>
            <MyPic animDuration={1} />
            <div className='quote'>
               .... I never claimed to be a designer ...
            </div>
        </div>
    )
}

export default Home;