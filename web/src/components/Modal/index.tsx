import React, { useState, useEffect } from 'react';
import ReactModal from 'react-modal';

interface IModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
}

const Modal: React.FC<IModalProps> = ({ children, isOpen, setIsOpen }) => {
  const [modalStatus, setModalStatus] = useState(isOpen);

  useEffect(() => {
    setModalStatus(isOpen);
  }, [isOpen]);

  return (
    <ReactModal
      isOpen={modalStatus}
      ariaHideApp={false}
      onRequestClose={setIsOpen}
      style={{
        content: {
          width: '80%',
          height: '550px',
          margin: 'auto',
          border: 0,
          backgroundColor: '#2D2B2C',
        },
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
        },
      }}
    >
      {children}
    </ReactModal>
  );
};

export default Modal;
