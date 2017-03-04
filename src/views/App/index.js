import React, {
  Component
} from 'react';
import ProjectsBar from './../../components/ProjectsBar';
import TaskManager from './../../components/TaskManager';
// eslint-disable-next-line import/no-unassigned-import, lines-around-comment
import './styles.scss';

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

/* eslint-disable react/prefer-stateless-function, class-methods-use-this */
class App extends Component {
  render () {
    return (
      <div className='container'>
        <div className='sidebar'>
          <ProjectsBar
            activeProjectId={activeProjectId}
            projects={projects}
          />
        </div>

        <div className='content'>
          <TaskManager
            activeTaskId={activeTaskId}
            tasks={tasks}
          />
        </div>
      </div>
    );
  }
}

export default App;
