import React, { useCallback, useState } from 'react';
import { FiCalendar, FiTrash2, FiEdit3 } from 'react-icons/fi';

import ModalEditProduct from '../ModalEditProduct';
import ModalDeleteProduct from '../ModalDeleteProduct';

import { Container, ContainerButtons, Content } from './styles';

export interface IProduct {
  name: string;
  price: string;
  product_code: number;
  quantity: number;
}

interface IProductProps {
  product: IProduct;
  lot: number;
  expirationDate: string;
  showButtons?: boolean;
}

const Product: React.FC<IProductProps> = ({
  product,
  lot,
  expirationDate,
  showButtons,
}) => {
  const [modalEditOpen, setModalEditOpen] = useState(false);
  const [modalDeleteOpen, setModalDeleteOpen] = useState(false);

  const toggleEditModal = useCallback(() => {
    setModalEditOpen(!modalEditOpen);
  }, [modalEditOpen]);

  const toggleDeleteModal = useCallback(() => {
    setModalDeleteOpen(!modalDeleteOpen);
  }, [modalDeleteOpen]);

  return (
    <Container>
      <header>
        <h1>
          Lote
          <span>{lot}</span>
        </h1>

        {showButtons ? (
          <ContainerButtons>
            <button type="button" onClick={toggleEditModal}>
              <FiEdit3 size={20} color="#fff" />
            </button>

            <button type="button" onClick={toggleDeleteModal}>
              <FiTrash2 size={20} color="#fff" />
            </button>
          </ContainerButtons>
        ) : (
          <span>
            <FiCalendar size={20} />
            {expirationDate}
          </span>
        )}
      </header>

      <Content>
        <p>{product.name}</p>

        {showButtons ? (
          <p>
            <FiCalendar size={20} />
            {expirationDate}
          </p>
        ) : (
          <p>R${product.price}</p>
        )}

        <p>
          <span>{product.quantity}</span>
          unid.
        </p>
      </Content>

      <ModalEditProduct
        isOpen={modalEditOpen}
        setIsOpen={toggleEditModal}
        editingLot={lot}
        productInfo={{
          ...product,
          expiration_date: expirationDate,
        }}
      />

      <ModalDeleteProduct
        isOpen={modalDeleteOpen}
        setIsOpen={toggleDeleteModal}
        lotToBeDeleted={lot}
      />
    </Container>
  );
};

export default Product;
