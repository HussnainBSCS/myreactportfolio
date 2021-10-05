import React, {useState} from 'react'
import './header.css'
import Mobile from './mobile'
import Web from './web'

const Header = () => {
     const [isopen, setisopen] = useState(false)
    return (
        <div className="header">
            <div className="logo">
                <h3>M HUSSNAIN</h3>

            </div>
            <div className="menu">
                <div className="web-menu">
                  <Web/>
                </div>
                <div className="mob-menu">
                    <div onClick={()=>setisopen(!isopen)}>
                    <img className="menu-icon"src="images/ap.png" alt="" />
                    </div>
                </div>
                {isopen && <Mobile isopen={isopen} setisopen={setisopen}/>}

            </div>
        </div>
       
    )
}

export default Header
