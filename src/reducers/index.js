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

export default (state, action) => {
  if (action.type === 'UPDATE_ACTIVE_PROJECT') {
    return Object.assign({}, state, {
      activeProjectId: action.payload
    });
  }

  if (action.type === 'UPDATE_ACTIVE_TASK') {
    return Object.assign({}, state, {
      activeTaskId: action.payload
    });
  }

  return state || initialState;
};
