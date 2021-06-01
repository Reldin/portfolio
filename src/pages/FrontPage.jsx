import React from "react";

import "./frontpage.style.scss";

import Project from "../components/projects/Project";
import ProfileElem from "../components/Profile/ProfileElem";
import Skills from "../components/skills/Skills";

const FrontPage = (props) => {
  return (
    <div className="front-page">
      <ProfileElem />
      <Project />
      <Skills />
    </div>
  );
};

export default FrontPage;
