import React, {
  PropTypes
} from 'react';
import {
  connect
} from 'react-redux';
import ProjectsBar from './../../components/ProjectsBar';
import TaskManager from './../../components/TaskManager';
import NewProjectModal from './../../components/NewProjectModal';
// eslint-disable-next-line import/no-unassigned-import, lines-around-comment
import './styles.scss';

const App = function App (props) {
  return (
    <div className='container'>
      <NewProjectModal dispatch={props.dispatch} showModal={props.showNewProjectModal} />

      <div className='sidebar'>
        <ProjectsBar
          activeProjectId={props.activeProjectId}
          dispatch={props.dispatch}
          projects={props.projects}
        />
      </div>
      <div className='content'>
        <TaskManager
          activeTaskId={props.activeTaskId}
          dispatch={props.dispatch}
          tasks={props.tasks}
        />
      </div>
    </div>
  );
};

App.propTypes = {
  activeProjectId: PropTypes.number.isRequired,
  activeTaskId: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired,
  projects: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    rate: PropTypes.number,
    title: PropTypes.string
  })).isRequired,
  showNewProjectModal: PropTypes.bool.isRequired,
  tasks: PropTypes.arrayOf(PropTypes.shape({
    createdAt: PropTypes.instanceOf(Date),
    id: PropTypes.number,
    projectId: PropTypes.number,
    timeTracked: PropTypes.number,
    title: PropTypes.string
  })).isRequired
};

const selector = (state) => {
  const tasks = state.tasks
    .filter((task) => {
      return task.projectId === state.activeProjectId;
    })
    .sort((task1, task2) => {
      return task1.createdAt < task2.createdAt;
    });

  return {
    activeProjectId: state.activeProjectId,
    activeTaskId: state.activeTaskId,
    projects: state.projects,
    showNewProjectModal: state.showNewProjectModal,
    tasks
  };
};

export default connect(selector)(App);
