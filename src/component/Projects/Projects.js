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
                    <p class = "description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi at earum fuga harum alias nobis, eaque optio laudantium dolor sed eligendi consequatur distinctio aperiam accusantium, architecto exercitationem perferendis minus error.
                    Fuga dolore impedit suscipit, vero odit, sequi in deleniti, odio ipsa facere et. Consequatur modi cum ullam adipisci unde amet qui sed odio officia ipsa omnis earum quibusdam, dolor totam?</p>
                    <a className='box' href="https://shop-strangers-things.netlify.app" target="blank">
                        <p className='info'>Click to check it out</p>
                        <img src={pic1} alt = "picture of homepage for Stranger's Things" class="photo" />
                    </a>
                </div>
                <div class = "project">
                    <h3 class = "projectTitle">Fitness Tracker</h3>
                    <p class = "description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi at earum fuga harum alias nobis, eaque optio laudantium dolor sed eligendi consequatur distinctio aperiam accusantium, architecto exercitationem perferendis minus error.
                    Fuga dolore impedit suscipit, vero odit, sequi in deleniti, odio ipsa facere et. Consequatur modi cum ullam adipisci unde amet qui sed odio officia ipsa omnis earum quibusdam, dolor totam?</p>
                    <a className='box' href="https://fitness-tracker1.netlify.app" target="blank">
                        <p className='info'>Click to check it out</p>
                        <img src={pic2} alt = "picture of homepage for Fitness Tracker" class="photo" />
                    </a>
                </div>
                <div class = "project">
                    <h3 class = "projectTitle">Grace Shopper </h3>
                    <p class = "description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi at earum fuga harum alias nobis, eaque optio laudantium dolor sed eligendi consequatur distinctio aperiam accusantium, architecto exercitationem perferendis minus error.
                    Fuga dolore impedit suscipit, vero odit, sequi in deleniti, odio ipsa facere et. Consequatur modi cum ullam adipisci unde amet qui sed odio officia ipsa omnis earum quibusdam, dolor totam?</p>
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