import React, { useCallback } from 'react';
import { FiTrash2 } from 'react-icons/fi';
import { RiCloseLine } from 'react-icons/ri';

import { useProduct } from '../../hooks/product';

import Modal from '../Modal';

import { CloseModal, Title, DeleteButton } from './styles';

interface IModalDeleteProductProps {
  isOpen: boolean;
  setIsOpen: () => void;
  batchToBeDeleted: number;
}

const ModalDeleteProduct: React.FC<IModalDeleteProductProps> = ({
  isOpen,
  setIsOpen,
  batchToBeDeleted,
}) => {
  const { deleteBatch } = useProduct();

  const handleDeleteProduct = useCallback(async () => {
    await deleteBatch(batchToBeDeleted);

    setIsOpen();
  }, [batchToBeDeleted, deleteBatch, setIsOpen]);

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

        <DeleteButton type="button" onClick={handleDeleteProduct}>
          <p>Deletar</p>

          <FiTrash2 size={20} color="#fff" />
        </DeleteButton>
      </main>
    </Modal>
  );
};

export default ModalDeleteProduct;
