import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
    return (
        <div className="footer">
            <a href="https://www.facebook.com/charley.suitt5630/" target="_blank"><FacebookIcon /></a>
            <a href="https://github.com/kidd5630" target="_blank"><GitHubIcon /></a>
            <a href="https://www.linkedin.com/in/charles-suitt-a5a3ba4b/" target="_blank"><LinkedInIcon /></a>
        </div>
    )
}

export default Footer;