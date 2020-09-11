import React from 'react';
import { FiTrash2 } from 'react-icons/fi';
import { RiCloseLine } from 'react-icons/ri';

import Modal from '../Modal';

import { CloseModal, Title, DeleteButton } from './styles';

interface IModalDeleteProductProps {
  isOpen: boolean;
  setIsOpen: () => void;
}

const ModalDeleteProduct: React.FC<IModalDeleteProductProps> = ({
  isOpen,
  setIsOpen,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      styles={{
        content: {
          width: '80%',
          height: '280px',
          margin: 'auto',
          border: 0,
          backgroundColor: '#2d2b2c',
        },
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
        },
      }}
    >
      <CloseModal>
        <button type="button" onClick={setIsOpen}>
          <RiCloseLine size={24} color="#fff" />
        </button>
      </CloseModal>

      <main>
        <Title>Deseja realmente excluir?</Title>

        <DeleteButton>
          <p>Deletar</p>

          <FiTrash2 size={20} color="#fff" />
        </DeleteButton>
      </main>
    </Modal>
  );
};

export default ModalDeleteProduct;
