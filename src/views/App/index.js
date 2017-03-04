import React, {
  Component
} from 'react';
import ProjectsBar from './../../components/ProjectsBar';
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

/* eslint-disable react/prefer-stateless-function, class-methods-use-this */
class App extends Component {
  render () {
    return (
      <div className='container'>
        <div className='sidebar'>
          <ProjectsBar
            projects={projects}
          />
        </div>

        <div className='content'>Content</div>
      </div>
    );
  }
}

export default App;
