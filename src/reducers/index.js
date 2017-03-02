const initialState = {
  activeProjectId: 2,
  activeTaskId: 2,
  projects: [{id: 1, rate: 25, title: 'Applaudience.com'},
    {id: 2, rate: 25, title: 'Showtimes App'},
    {id: 3, rate: 0, title: 'React/Redux Workshop'}],
  tasks: [
    {id: 1, title: 'Create a web app', projectId: 2, timeTracked: 0, createdAt: new Date()},
    {id: 2, title: 'Create a movie app', projectId: 2, timeTracked: 0, createdAt: new Date()},
    {id: 3, title: 'Create a mobile app', projectId: 2, timeTracked: 0, createdAt: new Date()},
    {id: 4, title: 'Create a TV app', projectId: 2, timeTracked: 0, createdAt: new Date()}
  ]
};

const findMaxId = (tasks) => {
  let max = 0;

  tasks.forEach((task) => {
    if (task.id > max) {
      max = task.id;
    }
  });

  return max;
};

export default (state, action) => {
  switch (action.type) {
  case 'SELECT_PROJECT':
    return Object.assign({}, state, {
      activeProjectId: action.payload
    });
  case 'CREATE_NEW_TASK':
    const task = {
      createdAt: new Date(),
      id: findMaxId(state.tasks) + 1,
      projectId: state.activeProjectId,
      title: action.payload
    };

    return Object.assign({}, state, {
      tasks: [task].concat(state.tasks)
    });
  }

  return state || initialState;
};
