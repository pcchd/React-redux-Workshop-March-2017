import React, {
  Component,
  PropTypes
} from 'react';
import {
  connect
} from 'react-redux';
import ProjectsBar from './../../components/ProjectsBar';
import TaskManager from './../../components/TaskManager';
// eslint-disable-next-line import/no-unassigned-import, lines-around-comment
import './styles.scss';

/* eslint-disable react/prefer-stateless-function */
class App extends Component {
  static propTypes = {
    activeProjectId: PropTypes.number.isRequired,
    activeTaskId: PropTypes.number.isRequired,
    projects: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
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

  render () {
    return (
      <div className='container'>
        <div className='sidebar'>
          <ProjectsBar
            activeProjectId={this.props.activeProjectId}
            projects={this.props.projects}
          />
        </div>

        <div className='content'>
          <TaskManager
            activeTaskId={this.props.activeTaskId}
            tasks={this.props.tasks}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const projects = [{
    id: 1,
    title: 'Workcave'
  }, {
    id: 2,
    title: 'PCCHD'
  }, {
    id: 3,
    title: 'Applaudience'
  }];
  const tasks = [{
    createdAt: new Date(),
    id: 1,
    projectId: 2,
    title: 'Create web app'
  }, {
    createdAt: new Date(),
    id: 2,
    projectId: 2,
    title: 'Create IOS app'
  }, {
    createdAt: new Date(),
    id: 3,
    projectId: 2,
    title: 'Create TV app'
  }];
  const activeProjectId = 2;
  const activeTaskId = 2;

  return {
    activeProjectId,
    activeTaskId,
    projects,
    tasks
  };
};

export default connect(mapStateToProps)(App);
