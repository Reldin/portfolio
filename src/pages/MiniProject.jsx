import ProjectHeader from "../components/projects/ProjectHeader";
import ToDo from "../components/projects/ToDo"

import './MiniProject.styles.scss';

const MiniProject = () => {


  return (
    <section className="mini-project">
      <ProjectHeader />
      <ToDo />
    </section>
  )

}

export default MiniProject;