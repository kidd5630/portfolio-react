import React from 'react';
import './style.css'
import pic from './me.jpg'

const Home = () => {
    return (
        <div className="home">
            <div className="job">
               Freelance Web Developer
            </div>
            <img src={pic} width='300' />
            <div className='quote'>
               .... I didn't claim to be a designer ...
            </div>
        </div>
    )
}

export default Home;