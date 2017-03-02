import React, {
  PropTypes
} from 'react';
import {
  connect
} from 'react-redux';
import ProjectsBar from './../../components/ProjectsBar';
import TaskManager from './../../components/TaskManager';
// eslint-disable-next-line import/no-unassigned-import, lines-around-comment
import './styles.scss';

const App = function App (props) {
  return (
    <div className='container'>
      <div className='sidebar'>
        <ProjectsBar
          activeProjectId={props.activeProjectId}
          projects={props.projects}
        />
      </div>
      <div className='content'>
        <TaskManager
          activeTaskId={props.activeTaskId}
          tasks={props.tasks}
        />
      </div>
    </div>
  );
};

App.propTypes = {
  activeProjectId: PropTypes.number.isRequired,
  activeTaskId: PropTypes.number.isRequired,
  projects: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    rate: PropTypes.number,
    title: PropTypes.string
  })).isRequired,
  tasks: PropTypes.arrayOf(PropTypes.shape({
    createdAt: PropTypes.instanceOf(Date),
    id: PropTypes.number,
    projectId: PropTypes.number,
    timeTracked: PropTypes.number,
    title: PropTypes.string
  })).isRequired
};

const selector = () => {
  const projects = [
    {id: 1, title: 'Applaudience.com', rate: 25},
    {id: 2, title: 'Showtimes App', rate: 25},
    {id: 3, title: 'React/Redux Workshop', rate: 0}
  ];
  const activeProjectId = 2;

  const tasks= [
   {id: 1, title: 'Create a web app', projectId: 2, timeTracked: 0, createdAt: new Date()},
   {id: 2, title: 'Create a movie app', projectId: 2, timeTracked: 0, createdAt: new Date()},
   {id: 3, title: 'Create a mobile app', projectId: 2, timeTracked: 0, createdAt: new Date()},
   {id: 4, title: 'Create a TV app', projectId: 2, timeTracked: 0, createdAt: new Date()}
  ];
  const activeTaskId = 2;

  return {
    activeProjectId,
    activeTaskId,
    projects,
    tasks
  };
};

export default connect(selector)(App);
