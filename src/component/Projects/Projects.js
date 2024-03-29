import React from 'react';
import './projectStyle.css'
import pic1 from './pictures/1.png'
import pic2 from './pictures/2.png'
import pic3 from './pictures/3.png'

const Projects = () => {
    return (
        <div className="projects">
            <h2 class = "portfolio-title">Just a few samples...</h2>
            <div class= "projectList">
                <div class = "project">
                    <h3 class = "projectTitle">McLovin’s Scented Lair</h3>
                    <div className='content'>
                        <p className="description">Description: E-commerce website, built with 4 co-developers. using React framework, where the user can have a cozy, friendly experience and register/login, view all 
                        products, add to cart and checkout (logged in or not).
                        </p>
                        <p className='indent'>Front-end: <a href="https://mclovins.netlify.app/" target="blank">Take a look here!</a></p>
                        <p className='indent'>Back-end: Backend: E-commerce website with a functional database and 
                        API with role middleware authorization, user registration/login with 
                        password hashing and salting for elevated security, using Express, 
                        Morgan, jsonwebtoken, and more.
                        </p>
                        <p class = "description">Technologies: PostgreSQL, Express, React, JavaScript, Node, Axios, CSS(viz. Material-UI)</p>
                    </div>
                        <a className='box' href="https://mclovins.netlify.app/" target="blank">
                        <p className='info'>Click to check it out</p>
                        <img src={pic3} alt = "picture of homepage for McLovin’s Scented Lair" class="photo"/>
                    </a>
                
                </div>
                <div class = "project">
                    <h3 class = "projectTitle">Strangers Things </h3>
                    <div className='content'>
                        <p class = "description">Message board facilitating consumer-to-consumer sales.
                        </p>
                        <p className='indent'>Website connects with an API to allow for the creation, deletion, and editing of for-sale posts.</p>
                        <p className='indent'>Users can also message others and interact.To promote user activity, login & registration required for interactivity.</p>
                        <p className='indent'>React used to build out website and respond to data changes.</p>
                        <p class = "description">Technologies: React, JavaScript, Postman, Axios, CSS(viz. Styled Components)</p>
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
                        <p class = "description">Technologies: PostgreSQL, Express, React, JavaScript, Node, Axios, CSS(viz. Material-UI)</p>
                    </div>
                    <a className='box' href="https://fitness-tracker1.netlify.app" target="blank">
                        <p className='info'>Click to check it out</p>
                        <img src={pic2} alt = "picture of homepage for Fitness Tracker" class="photo" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Projects;