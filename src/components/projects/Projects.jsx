import React from "react";
import ProjectBase from "../../utils/projects.json";
import "./project.scss";

export default function Projects() {
  return (
    <div className="ProjectsContainer">
     
        {ProjectBase.map((projects, key) => {
          return (
            <div key={key} className="ProjectCard">
              <img src={projects.imageLink} alt={projects.alt} className="projectImg"/>
              <br />
             <div className="projectTitle">{projects.ProjectName}</div> 
             <hr />
              <div className="projectButton">
              <a href={projects.github} target="blank">GitHub</a>
               <a href={projects.LiveDemo} target="blank">Live Demo</a>
              </div>
            </div>
          );
        })}
      </div>

  );
}
