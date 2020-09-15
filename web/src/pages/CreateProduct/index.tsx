import React, { useCallback, useRef } from 'react';
import {
  RiBarcodeLine,
  RiCoinsLine,
  RiCalendar2Line,
  RiStore3Line,
} from 'react-icons/ri';
import { TiSortNumericallyOutline } from 'react-icons/ti';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import { useLot } from '../../hooks/lot';

import Layout from '../../components/Layout';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container } from './styles';

interface IFormSubmitData {
  name: string;
  quantity: number;
  price: string;
  product_code: number;
  expiration_date: string;
}

const CreateProduct: React.FC = () => {
  const lot = useLot();
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(
    async (
      { name, quantity, price, product_code, expiration_date }: IFormSubmitData,
      { reset }
    ) => {
      await lot.create({
        name,
        quantity,
        price,
        product_code,
        expiration_date,
      });

      reset();
    },
    [lot]
  );

  return (
    <Layout>
      <Container>
        <fieldset>
          <legend>Adicionar produto</legend>

          <Form ref={formRef} onSubmit={handleSubmit}>
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
              pattern="[0-9]{1,}\.[0-9]{2}"
              placeholder="Preço R$0.00"
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
    </Layout>
  );
};

export default CreateProduct;
