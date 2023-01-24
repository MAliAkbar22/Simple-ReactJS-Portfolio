import React from 'react'
import "./ProjectCardStyle.css"
import { NavLink } from 'react-router-dom'

const ProjectCard = (props) => {
    return (
        <div className="project-card">
            <img src={props.imgsrc} alt="Project Image" />
            <h2 className="project-title">{props.title}</h2>
            <div className="project-details">{props.text}</div>
            <div className="project-btn">
                <NavLink to={props.view} className="btn">View</NavLink>
            </div>
        </div>
    )
}

export default ProjectCard