import React from 'react';
import './footerStyle.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
    return (
        <div className="footer">
            <a class="icon" href= "mailto:charles.d.suitt@gmail.com"><EmailIcon sx={{ fontSize: 30 }}/></a>
            <a href="https://github.com/kidd5630" target="_blank"><GitHubIcon sx={{ fontSize: 30 }}/></a>
            <a href="https://www.linkedin.com/in/charles-suitt-a5a3ba4b/" target="_blank"><LinkedInIcon sx={{ fontSize: 30 }}/></a>
        </div>
    )
}

export default Footer;
