/* eslint-disable react/jsx-no-bind, arrow-body-style */

import React, {
  PropTypes
} from 'react';
// eslint-disable-next-line import/no-unassigned-import, lines-around-comment
import './styles.scss';

const NewProjectModal = function NewProjectModal ({dispatch, showModal}) {
  let modalInput;

  return (
    <div
      className={'new-project-modal' + (showModal ? '' : ' hidden')}
      onClick={() => dispatch({type: 'HIDE_NEW_PROJECT_MODAL'})}
    >
      <div className='new-project-modal-content' onClick={(event) => event.stopPropagation()}>
        <form
          className='new-project-modal-form'
          onSubmit={function (event) {
            event.preventDefault();
            const title = modalInput.value.trim();

            if (!title) {
              return;
            }

            dispatch({
              payload: title,
              type: 'CREATE_NEW_PROJECT'
            });
            dispatch({type: 'HIDE_NEW_PROJECT_MODAL'});
            modalInput.value = '';
          }}
        >
          <input
            className='new-project-modal-input'
            placeholder='New Project Name'
            ref={function (node) {
              modalInput = node;
            }}
          />
        </form>
      </div>
    </div>
  );
};

NewProjectModal.propTypes = {
  dispatch: PropTypes.func.isRequired,
  showModal: PropTypes.bool.isRequired
};

export default NewProjectModal;
