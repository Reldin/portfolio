import React from "react";

import './Skills.styles.scss';


const Skills = () => {
  return (
    <section className="skills">
      <div className="skills-programming">
        <h3>Programming Languages: </h3>
        <ul className="skills-ul">
          <li>C</li>
          <li>C#</li>
          <li>C++</li>
          <li>Java</li>
          <li>JavaScript</li>
          <li>Python</li>
        </ul>
      </div>
      <div className="skills-backend">
        <ul className="skills-ul">
          <h3>Backend: </h3>
            <li>NodeJs</li>
            <li>REST</li>
            <li>NestJs</li>
        </ul>
      </div>
      <div className="skills-frontend">
        <ul className="skills-ul">
          <h3>Frontend: </h3>
            <li>Vue</li>
            <li>React + NextJs</li>
        </ul>
      </div>
    </section>
  );
};

export default Skills;
