import React from "react";

import "./frontpage.style.scss";

import Project from "../components/projects/Project";
import ProfileElem from "../components/Profile/ProfileElem";

const FrontPage = (props) => {
  return (
    <div className="front-page">
      <ProfileElem />
      <Project />
    </div>
  );
};

export default FrontPage;
