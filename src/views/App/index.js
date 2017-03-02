import React, {
  PropTypes
} from 'react';
import {
  connect
} from 'react-redux';
import ProjectsBar from './../../components/ProjectsBar';
// eslint-disable-next-line import/no-unassigned-import, lines-around-comment
import './styles.scss';

const App = function App(props) {
  return (
    <div className='container'>
      <div className='sidebar'>
        <ProjectsBar
          activeProjectId={props.activeProjectId}
          projects={props.projects}
        />
      </div>
      <div className='content'>
        Tasks
      </div>
    </div>
  );
};

App.propTypes = {
  activeProjectId: PropTypes.number.isRequired,
  projects: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    rate: PropTypes.number,
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

  return {
    activeProjectId,
    projects
  };
};

export default connect(selector)(App);
