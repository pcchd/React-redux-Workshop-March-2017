import React, {
  Component,
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

/* eslint-disable react/prefer-stateless-function */
class App extends Component {
  static propTypes = {
    activeProjectId: PropTypes.number.isRequired,
    activeTaskId: PropTypes.number.isRequired,
    dispatch: PropTypes.func.isRequired,
    projects: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
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

  render () {
    return (
      <div className='container'>
        <NewProjectModal
          dispatch={this.props.dispatch}
          showModal={this.props.showNewProjectModal}
        />

        <div className='sidebar'>
          <ProjectsBar
            activeProjectId={this.props.activeProjectId}
            dispatch={this.props.dispatch}
            projects={this.props.projects}
          />
        </div>

        <div className='content'>
          <TaskManager
            activeTaskId={this.props.activeTaskId}
            dispatch={this.props.dispatch}
            tasks={this.props.tasks}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const tasks = state.tasks.filter((task) => {
    return task.projectId === state.activeProjectId;
  });

  return {
    activeProjectId: state.activeProjectId,
    activeTaskId: state.activeTaskId,
    projects: state.projects,
    showNewProjectModal: state.showNewProjectModal,
    tasks
  };
};

export default connect(mapStateToProps)(App);
