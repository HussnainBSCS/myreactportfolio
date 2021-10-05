import React from 'react';
import Separator from '../../common/seperater';
import { ProjectData } from '../../data/projects';
import ProjectCard from './project-card';
import './projects.css'


function Projects() {
    const data=ProjectData;
    return (
        <div className="projects" id="project">
            <Separator/><br/><br/>
            <label className="section-title">Projects</label>
            <div>
                {
                    data.map((project)=>{
                        return <ProjectCard project={project}/>;

                    })
                }
                
            </div>
        </div>
    )
}

export default Projects
