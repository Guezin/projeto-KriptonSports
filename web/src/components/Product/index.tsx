import React from 'react';
import { FiCalendar } from 'react-icons/fi';

import { Container, Content } from './styles';

interface IProduct {
  id: number;
  product: {
    id: string;
    name: string;
    price: number;
    product_code: number;
    quantity: number;
    expiration_date: string;
  };
}

interface IProductProps {
  product: IProduct;
}

const Product: React.FC<IProductProps> = ({ product: prod }) => {
  return (
    <Container>
      <header>
        <h1>
          Lote
          <span>{prod.id}</span>
        </h1>
        <span>
          <FiCalendar size={20} />
          {prod.product.expiration_date}
        </span>
      </header>

      <Content>
        <p>{prod.product.name}</p>
        <p>
          total:
          <span>{prod.product.quantity}</span>
          unid.
        </p>
      </Content>
    </Container>
  );
};

export default Product;
