import React, {
  Component
} from 'react';
import ProjectsBar from './../../components/ProjectsBar';
// eslint-disable-next-line import/no-unassigned-import, lines-around-comment
import './styles.scss';

/* eslint-disable react/prefer-stateless-function, class-methods-use-this */
class App extends Component {
  render () {
    return (
      <div className='container'>
        <div className='sidebar'>
          <ProjectsBar />
        </div>

        <div className='content'>Content</div>
      </div>
    );
  }
}

export default App;
