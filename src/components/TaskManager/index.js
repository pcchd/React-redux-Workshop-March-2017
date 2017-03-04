import React, {
  PropTypes
} from 'react';
// eslint-disable-next-line import/no-unassigned-import, lines-around-comment
import './styles.scss';

const updateActiveTask = (id) => {
  return {
    payload: id,
    type: 'UPDATE_ACTIVE_TASK'
  };
};

const TaskManager = function TaskManager ({activeTaskId, dispatch, tasks}) {
  return (
    <div className='taskmanager'>
      <div className='taskmanager__new-task'>
        <input className='new-task__input' />
        <i className='new-task__button' />
      </div>

      <ul className='taskmanager__tasks-list'>
        {
          tasks.map((task) => {
            return (
              <li
                className={'taskmanager__task' + (task.id === activeTaskId ?
                                                  ' taskmanager__task--active' : '')}
                key={task.id}
                onClick={
                  function () {
                    dispatch(updateActiveTask(task.id));
                  }}
              >{task.title}</li>
            );
          })
        }
      </ul>
    </div>
  );
};

TaskManager.propTypes = {
  activeTaskId: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired,
  tasks: PropTypes.arrayOf(PropTypes.shape({
    createdAt: PropTypes.instanceOf(Date),
    id: PropTypes.number,
    projectId: PropTypes.number,
    timeTracked: PropTypes.number,
    title: PropTypes.string
  })).isRequired
};

export default TaskManager;
