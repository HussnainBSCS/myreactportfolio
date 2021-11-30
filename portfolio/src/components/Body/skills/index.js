import React from 'react';
import Separator from '../../common/seperater';
import { SkillsData } from '../../data/skills';
import SkillCard from './skill-card';
import './skills.css'

const Skills = () => {
    const data=SkillsData;
    return (
        <div className="skills">
            <Separator/><br/><br/>
            <label className="section-title">Skills</label>
            <div className="skills-container">
                {data.map((item)=>{
                    return(
                        <div className="skills-section">
                            <label className="skills-section-title">{item.type}  ✔</label>
                            <div className="skills-list">
                                {item.list.map((skill)=>{
                                    return(
                                        <SkillCard skill={skill}/>
                                        )
                                })}
                            </div>

                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Skills
