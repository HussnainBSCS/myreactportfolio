import React from 'react';
import './contact.css';
import Separator from '../../common/seperater';
import SocialContact from '../../common/social-contact/index';


const Contact = () => {
    return (
        <div className="contact">
            <Separator /><br/><br/>
            <label className="section-title">Contact</label>
            <div className="contact-container">
                <div className="contact-left">
                    <p>Want to get in touch? Contact me on any of platform.</p>
                    <SocialContact/>
                </div>
                <div className="download">
                    <a download href={('images/resume.pdf ')}>
                        <img src="images/download.png" alt="downloadimg" />
                        Download Resume
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Contact
