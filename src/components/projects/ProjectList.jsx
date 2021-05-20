import React from "react";

import './ProjectList.styles.scss'

const ProjectList = (props) => {
  return (
    <ul className="project-list">
      {props.projects.map((project) => (
        <li key={project.id}>
          <figure>
            <img
              src={project.src}
              width={project.width}
              height={project.height}
              alt={project.alt}
            />
          </figure>
        </li>
      ))}
    </ul>
  );
};

export default ProjectList;
