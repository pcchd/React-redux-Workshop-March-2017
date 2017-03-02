import React from 'react';
import './styles.scss';

export default ({dispatch, showModal}) => {
  let modalInput;

  return (
    <div
      className={'new-project-modal' + (showModal ? '' : ' hidden')}
      onClick={() => dispatch({type: 'HIDE_NEW_PROJECT_MODAL'})}
    >
      <div className='new-project-modal-content' onClick={(e) => e.stopPropagation()}>
        <form
          className='new-project-modal-form'
          onSubmit={function (e) {
            e.preventDefault();
            const title = modalInput.value.trim();

            if (!title) { return; }

            dispatch({type: 'CREATE_NEW_PROJECT', payload: title});
            dispatch({type: 'HIDE_NEW_PROJECT_MODAL'});
            modalInput.value = '';
          }}
        >
          <input
            className='new-project-modal-input'
            placeholder='New Project Name'
            ref={function (node) { modalInput = node; }}
    />
        </form>
      </div>
    </div>
  );
};
