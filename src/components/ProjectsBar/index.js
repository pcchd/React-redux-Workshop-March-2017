import React, {
  PropTypes
} from 'react';
// eslint-disable-next-line import/no-unassigned-import, lines-around-comment
import './styles.scss';

const ProjectsBar = function ProjectsBar (props) {
  return (
    <div className='sidebar__container'>
      <h2 className='sidebar__heading'>Projects <i className='sidebar__add-project' /></h2>

      <ul className='sidebar__projects-list'>
        {
          props.projects.map((project) => {
            return (
              <li className='sidebar__project' key={project.id}>{project.title}</li>
            );
          })
        }
      </ul>
    </div>
  );
};

ProjectsBar.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string
  })).isRequired
};

export default ProjectsBar;
