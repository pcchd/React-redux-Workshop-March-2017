import React from 'react';
// eslint-disable-next-line import/no-unassigned-import, lines-around-comment
import './styles.scss';

const ProjectsBar = function ProjectsBar () {
  return (
    <div className='sidebar__container'>
      <h2 className='sidebar__heading'>Projects <i className='sidebar__add-project' /></h2>

      <ul className='sidebar__projects-list'>
        <li className='sidebar__project'>Workcave</li>
        <li className='sidebar__project'>PCCHD</li>
      </ul>
    </div>
  );
};

export default ProjectsBar;
