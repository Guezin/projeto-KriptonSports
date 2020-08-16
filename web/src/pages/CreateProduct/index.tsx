import React, { useCallback } from 'react';
import {
  RiBarcodeLine,
  RiCoinsLine,
  RiCalendar2Line,
  RiStore3Line,
} from 'react-icons/ri';
import { TiSortNumericallyOutline } from 'react-icons/ti';
import { Form } from '@unform/web';

import Header from '../../components/Header';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container } from './styles';

const CreateProduct: React.FC = () => {
  const handleSubmit = useCallback(data => {
    console.log(data);
  }, []);

  return (
    <Container>
      <Header />

      <fieldset>
        <legend>Adicionar produto</legend>

        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="name"
            icon={RiStore3Line}
            placeholder="Nome"
          />
          <Input
            type="number"
            name="quantity"
            icon={TiSortNumericallyOutline}
            placeholder="Quantidade"
          />
          <Input
            type="text"
            name="price"
            icon={RiCoinsLine}
            placeholder="Preço R$0,00"
          />
          <Input
            type="number"
            name="product_code"
            icon={RiBarcodeLine}
            placeholder="Código de barras"
          />
          <Input
            type="text"
            name="expiration_date"
            icon={RiCalendar2Line}
            placeholder="Validade dd/mm/aaaa"
          />

          <Button type="submit">Adicionar</Button>
        </Form>
      </fieldset>
    </Container>
  );
};

export default CreateProduct;
