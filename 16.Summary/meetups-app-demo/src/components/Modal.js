const Modal = props => {
  const handleCancel = () => {
    props.onCancel();
  };

  const handleConfirm = () => {
    props.onConfirm();
  };

  return (
    <div className='modal'>
      <p>Are you sure?</p>
      <button className='btn btn--alt' onClick={handleCancel}>
        Cancel
      </button>
      <button className='btn' onClick={handleConfirm}>
        Confirm
      </button>
    </div>
  );
};

export default Modal;
