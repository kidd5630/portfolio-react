import React from 'react';
import './style.css'
import pic from './me.jpg'

const Home = () => {
    return (
        <div className="home">
            <div className="job">
               Freelance Web Developer
            </div>
            <img src={pic} width='400' />
            <div className='quote'>
                "With great power comes great responsibility" - Uncle Ben
            </div>
        </div>
    )
}

export default Home;