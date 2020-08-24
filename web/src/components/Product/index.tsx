import React, { useCallback, useState } from 'react';
import { FiCalendar, FiTrash2, FiEdit3 } from 'react-icons/fi';

import ModalEditProduct from '../ModalEditProduct';

import { Container, ContainerButtons, Content } from './styles';

interface IProduct {
  lot: number;
  product: {
    id: string;
    name: string;
    price: string;
    product_code: number;
    quantity: number;
    expiration_date: string;
  };
}

interface IProductProps {
  product: IProduct;
  showButtons?: boolean;
}

const Product: React.FC<IProductProps> = ({ product: prod, showButtons }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleEditModal = useCallback(() => {
    setModalOpen(!modalOpen);
  }, [modalOpen]);

  return (
    <Container>
      <header>
        <h1>
          Lote
          <span>{prod.lot}</span>
        </h1>

        {showButtons ? (
          <ContainerButtons>
            <button type="button" onClick={toggleEditModal}>
              <FiEdit3 size={20} color="#fff" />
            </button>

            <button type="button">
              <FiTrash2 size={20} color="#fff" />
            </button>
          </ContainerButtons>
        ) : (
          <span>
            <FiCalendar size={20} />
            {prod.product.expiration_date}
          </span>
        )}
      </header>

      <Content>
        <p>{prod.product.name}</p>

        {showButtons ? (
          <p>
            <FiCalendar size={20} />
            {prod.product.expiration_date}
          </p>
        ) : (
          <p>R${prod.product.price}</p>
        )}

        <p>
          <span>{prod.product.quantity}</span>
          unid.
        </p>
      </Content>

      <ModalEditProduct
        isOpen={modalOpen}
        setIsOpen={toggleEditModal}
        editingProduct={prod.product}
      />
    </Container>
  );
};

export default Product;
