const initialState = {
  activeProjectId: 2,
  activeTaskId: 1,
  projects: [{
    id: 1,
    title: 'Workcave'
  }, {
    id: 2,
    title: 'PCCHD'
  }, {
    id: 3,
    title: 'Applaudience'
  }],
  tasks: [{
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
    projectId: 1,
    title: 'Create TV app'
  }]
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
  switch (action.type) {
  case 'UPDATE_ACTIVE_PROJECT':
    return Object.assign({}, state, {
      activeProjectId: action.payload
    });

  case 'UPDATE_ACTIVE_TASK':
    return Object.assign({}, state, {
      activeTaskId: action.payload
    });

  case 'CREATE_TASK':
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
