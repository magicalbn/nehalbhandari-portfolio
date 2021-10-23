import React,{useEffect} from 'react';
import Fade from 'react-reveal/Fade';

import Projects from '../data/projects'

import ProjectCard from './cards/projectCard'

const Project = (props) => {
    useEffect(() => {
        !props.start?window.scrollTo({top: 300, left: 0, behavior: 'smooth' }):null
        
      }, [])

    return (
        <Fade >
            <div className="projects">
                <div className="header">
                    <h2>Projects</h2>
                    <p>Have a look at some of my projects.</p>
                </div>
                <div className="projects-list">
                    {
                        Projects.map(each => {
                            return <ProjectCard key={each.id} each={each} />
                        })
                    }
                </div>
            </div>
        </Fade>
    )
}

export default Project