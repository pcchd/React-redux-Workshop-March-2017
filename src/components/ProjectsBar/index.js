import React, {
  PropTypes
} from 'react';
// eslint-disable-next-line import/no-unassigned-import, lines-around-comment
import './styles.scss';

const ProjectsBar = function ProjectsBar ({activeProjectId, projects}) {
  return (
    <div className='sidebar__container'>
      <h2 className='sidebar__heading'>Projects <i className='sidebar__add-project' /></h2>

      <ul className='sidebar__projects-list'>
        {
          projects.map((project) => {
            return (
              <li
                className={'sidebar__project' + (project.id === activeProjectId ?
                                                 ' sidebar__project--active' : '')}
                key={project.id}
              >{project.title}</li>
            );
          })
        }
      </ul>
    </div>
  );
};

ProjectsBar.propTypes = {
  activeProjectId: PropTypes.number.isRequired,
  projects: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string
  })).isRequired
};

export default ProjectsBar;
