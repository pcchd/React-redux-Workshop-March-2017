/* eslint-disable no-case-declarations */

const initialState = {
  projects: [],
  showNewProjectModal: false,
  tasks: []
};

const findMaxId = (list) => {
  let max = 0;

  list.forEach((item) => {
    if (item.id > max) {
      max = item.id;
    }
  });

  return max;
};

export default (state, action) => {
  const nextState = (update) => {
    return Object.assign({}, state, update);
  };

  switch (action.type) {
  case 'UPDATE_ACTIVE_PROJECT':
    return nextState({
      activeProjectId: action.payload
    });

  case 'UPDATE_ACTIVE_TASK':
    return nextState({
      activeTaskId: action.payload
    });

  case 'CREATE_TASK':
    if (!state.activeProjectId) {
      return state;
    }

    const task = {
      createdAt: new Date(),
      id: findMaxId(state.tasks) + 1,
      projectId: state.activeProjectId,
      title: action.payload
    };

    return nextState({
      activeTaskId: task.id,
      tasks: [task].concat(state.tasks)
    });

  case 'CREATE_NEW_PROJECT':
    const project = {
      id: findMaxId(state.projects) + 1,
      title: action.payload
    };

    return nextState({
      activeProjectId: project.id,
      projects: [project].concat(state.projects)
    });

  case 'SHOW_NEW_PROJECT_MODAL':
    return nextState({
      showNewProjectModal: true
    });

  case 'HIDE_NEW_PROJECT_MODAL':
    return nextState({
      showNewProjectModal: false
    });
  }

  return state || initialState;
};
