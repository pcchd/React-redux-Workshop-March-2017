import React, {
  PropTypes
} from 'react';
// eslint-disable-next-line import/no-unassigned-import, lines-around-comment
import './styles.scss';

const updateActiveProject = (id) => {
  return {
    payload: id,
    type: 'UPDATE_ACTIVE_PROJECT'
  };
};

const ProjectsBar = function ProjectsBar ({activeProjectId, dispatch, projects}) {
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
                onClick={
                  function () {
                    dispatch(updateActiveProject(project.id));
                  }}
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
  dispatch: PropTypes.func.isRequired,
  projects: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string
  })).isRequired
};

export default ProjectsBar;
