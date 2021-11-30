import React from 'react';
import { Typewriter, useTypewriter, Cursor } from 'react-simple-typewriter'
import Socialcontact from '../../common/social-contact'
import './about.css'
function About() {
    return (
        <div className="about">
            <div className="about-top">
                <div className="about-info">
                    Hello There, I am 
                    <br/><span data-text="HUSSNAIN" className="info-name"> HUSSNAIN</span>
                    <br/> I love experimenting with the<br/>
                    <span className="typewriter">
                    <Typewriter 
                     loop
                     cursor
                     cursorStyle="_"
                     typeSpeed={70}
                     deleteSpeed={50}
                     delaySpeed={1000}
                     words={['HTML','CSS','JAVASCRIPT','BOOTSTRAP','REACTJS','ANGULAR']}
                    
                    />  
                    </span>
                    

                </div>
                <div className="my-photo">
                <img src="images/mypic2.png" alt="aboutpic" className="picture"/>

                </div>
                <div className="about-photo">
                    <img src="images/coding.png" alt="aboutpic" className="picture"/>

                </div>

            </div>
            <Socialcontact/>
        </div>
    )
}

export default About
