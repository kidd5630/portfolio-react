import React from 'react';
import './style.css'
import pic1 from './pictures/1.png'
import pic2 from './pictures/2.png'
import pic3 from './pictures/3.png'

const Projects = () => {
    return (
        <div className="projects">
            <h2 class = "portfolio-title">Just a few samples...</h2>
            <div class= "projectList">
                <div class = "project">
                    <h3 class = "projectTitle">Stranger’s Things </h3>
                    <div className='content'>
                        <p class = "description">Message board facilitating consumer-to-consumer sales.Website connects with an API to allow for the creation, deletion, and editing of for-sale posts.Users can also message others and interact.To promote user activity, login & registration required for interactivity.React used to build out website and respond to data changes.</p>
                        <p>Technologies: React, JavaScript, Postman, Axios, CSS(viz. Styled Components)</p>
                    </div>
                    <a className='box' href="https://shop-strangers-things.netlify.app" target="blank">
                        <p className='info'>Click to check it out</p>
                        <img src={pic1} alt = "picture of homepage for Stranger's Things" class="photo" />
                    </a>
                </div>
                <div class = "project">
                    <h3 class = "projectTitle">Fitness Tracker</h3>
                    <div className='content'>
                        <p class = "description">A frontend fitness tracker application, using React framework, where the user can track exercises and routines, as well as, see other user activities. The front-end project was built within 2 week with another fellow developer. Backend can be shown upon request. </p>
                        <p>Technologies: PostgreSQL, Express, React, JavaScript, Node, Axios, CSS(viz. Material-UI)</p>
                    </div>
                    <a className='box' href="https://fitness-tracker1.netlify.app" target="blank">
                        <p className='info'>Click to check it out</p>
                        <img src={pic2} alt = "picture of homepage for Fitness Tracker" class="photo" />
                    </a>
                </div>
                <div class = "project">
                    <h3 class = "projectTitle">Grace Shopper </h3>
                    <div className='content'>
                        <p class = "description">Frontend: E-commerce website, using React framework, where the user can have a cozy, friendly experience and register/login, view all products, add to cart and checkout (logged in or not). This project was built in a group of 4 fellow developers, remotely. Backend: E-commerce website with a functional database and API with role middleware authorization, user registration/login with password hashing and salting for elevated security, using Express, Morgan, jsonwebtoken, and more. Built with 4 co-developers. Frontend available.</p>
                        <p>Technologies: PostgreSQL, Express, React, JavaScript, Node, Axios, CSS(viz. Material-UI)</p>
                    </div>
                    <a className='box' href="https://mclovins.netlify.app/" target="blank">
                        <p className='info'>Click to check it out</p>
                        <img src={pic3} alt = "picture of homepage for Grace Shopper" class="photo"/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Projects;