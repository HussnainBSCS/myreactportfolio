import React from 'react';
import Body from '../Body';
import Footer from '../footer';
import Header from '../Header';
import './home.css'
const Home = () => {
    return (
        <div className="home">
            <div>
                <Header/>
                <Body/>
                <Footer/>
            </div>
            
        </div>
    )
}
export default Home
