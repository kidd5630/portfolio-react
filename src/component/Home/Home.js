import React from 'react';
import './homeStyle.css'
import MyPic from './MyPic'
 
const Home = () => {

    return (
        <div className="home">
            <div className="job">
               Full Stack Web Developer
            </div>
            <MyPic animDuration={1} />
        </div>
    )
}

export default Home;