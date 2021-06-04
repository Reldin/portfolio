import { useLocation, useHistory } from "react-router-dom";
import "./ProjectHeader.styles.scss";

const ProjectHeader = () => {
  const location = useLocation();
  const history = useHistory();
  const selectHandler = (event) => {
    history.push({
      pathname: location.pathname,
      search: `?sort=${event.target.value}`,
    });

  };

  return (
    <div className="project-header">
      <label id="project"></label>
      <select id="project" onChange={selectHandler}>
        <option value="todo">todo</option>
        <option value="calculator">calculator</option>
      </select>
    </div>
  );
};

export default ProjectHeader;
