import React from 'react';
import './mobile.css'

const  Mobile = ({isopen,setisopen}) => {
    return (
        <div className='mobile'>
            <div className='close-icon' onClick={ ()=> setisopen(!isopen)}>
              <img src="images/cancel.png" alt="closeicon" />
            </div>
            <div className="mob-options">
            <div className="mob-option">
                <a href="#project">
                    <img src="images/proj.png" className="option-icon" alt="menuicon" />Projects
                </a>
              </div>
              <div className="mob-option">
                <a href="#skills">
                    <img src="images/skill.png" className="option-icon" alt="menuicon" />Skills
                </a>
                </div>
              <div className="mob-option">
                  <a href="#work">
                    <img src="images/briefcase.png" className="option-icon" alt="menuicon" />Work
                  </a>
               </div>
                <div className="mob-option">
                 <a href="#contact">
                    <img src="images/user.png" className="option-icon" alt="menuicon" />Contact
                 </a>
               </div>
            </div>
        </div>
    )
}

export default  Mobile