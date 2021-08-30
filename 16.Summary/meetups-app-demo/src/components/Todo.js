import { useState } from 'react';

import Modal from './Modal';
import Backdrop from './Backdrop';

const Todo = props => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleDelete = () => {
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className='card'>
      <h2>{props.text}</h2>
      <div className='actions'>
        <button className='btn' onClick={handleDelete}>
          Delete
        </button>
      </div>
      {modalIsOpen && (
        <Modal onConfirm={handleCloseModal} onCancel={handleCloseModal} />
      )}
      {modalIsOpen && <Backdrop onCancel={handleCloseModal} />}
    </div>
  );
};

export default Todo;
