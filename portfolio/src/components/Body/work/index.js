import React from 'react';
import './work.css';
import Separator from '../../common/seperater';
import { WorkData } from '../../data/work';
import WorkCard from './work-card';
const Work = () => {
    const data=WorkData;
    return (
        <div className="work">
            <Separator/><br/><br/>
            <label className="section-title">Work</label>
            <div className="work-list">
               { data.map((item)=>{
                    return(
                        <WorkCard item={item}/>
                    )
                })}

            </div>
            
        </div>
    )
}

export default Work
