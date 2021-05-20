import React from "react";

import "./frontpage.style.scss";

import Project from "../components/projects/Project";
import ProfileElem from "../components/Profile/ProfileElem";
import SkillCard from "../components/skills/SkillCard";

const FrontPage = (props) => {
  return (
    <div className="front-page">
      <ProfileElem />
      <Project />
      <SkillCard />
    </div>
  );
};

export default FrontPage;
