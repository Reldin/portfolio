import React from "react";

import "./project.styles.scss";
import ProjectList from "./ProjectList";

const DUMMY_IMG = [
  {
    id: '1',
    src: "https://images.unsplash.com/photo-1617984303651-8629f678da2b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80",
    width: "284px",
    height: "426px",
    alt: "mountain"
  },
  {
    id: '2',
    src: "https://images.unsplash.com/photo-1617984303651-8629f678da2b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80",
    width: "284px",
    height: "426px",
    alt: "mountain"
  }
]

function Project() {

  return (
    <section className="project-images">
      <h2>Projects</h2>
      <ProjectList projects={DUMMY_IMG} />
    </section>
  );
}

export default Project;
