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
  let taskInput;
  const handleCreateTask = (event) => {
    event.preventDefault();
    const title = taskInput.value.trim();

    if (!title) {
      return;
    }

    dispatch({
      payload: title,
      type: 'CREATE_TASK'
    });

    taskInput.value = '';
  };

  return (
    <div className='taskmanager'>
      <form className='taskmanager__new-task' onSubmit={handleCreateTask}>
        <input
          className='new-task__input'
          ref={function (node) {
            taskInput = node;
          }}
        />
        <button
          className='new-task__button'
          type='submit'
        />
      </form>

      <ul className='taskmanager__tasks-list'>
        {
          tasks.map((task) => {
            return (
              <li
                className={'taskmanager__task' +
                      (task.id === activeTaskId ? ' taskmanager__task--active' : '')}
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
