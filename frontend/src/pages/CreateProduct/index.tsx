import React, { useCallback, useRef } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { format, parseISO } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import api from '../../services/api';

import Layout from '../../components/Layout';
import calendar from '../../assets/calendar.svg';

import Input from '../../components/Input';

import { Container, Content, Calendar } from './styles';

const stylesInput = {
  width: '332px',
  border: '1px solid #bdbdbd',
  backgroundColor: '#F9F7F4',
};

interface IFormData {
  name: string;
  product_code: string;
  date: string;
}

const CreateProduct: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleFormSubmit = useCallback(async (data: IFormData) => {
    const regex = /(-|\/)/g;
    const date = data.date.split(regex);
    const dateformatted = format(
      parseISO(`${date[4]}-${date[2]}-${date[0]}`),
      'yyyy-MM-dd',
      { locale: ptBR }
    );

    try {
      const { name, product_code } = data;

      await api.post('/products', {
        name,
        product_code,
        date: dateformatted,
      });

      formRef.current?.reset();
      alert('Produto cadastrado com sucesso!');
    } catch {
      alert('Erro ao registrar um produto!');
    }
  }, []);

  return (
    <Layout>
      <Container>
        <Calendar>
          <img src={calendar} alt="" />
          <strong>22/06/2020</strong>
        </Calendar>
        <Content>
          <Form ref={formRef} onSubmit={handleFormSubmit}>
            <Input
              type="text"
              name="name"
              containerStyle={stylesInput}
              placeholder="Nome do produto"
            />
            <Input
              type="text"
              name="product_code"
              containerStyle={stylesInput}
              placeholder="Código do produto"
            />
            <Input
              type="text"
              name="date"
              containerStyle={stylesInput}
              placeholder="Data de validade DD/MM/AAAA"
            />

            <button type="submit">Cadastrar</button>
          </Form>
        </Content>
      </Container>
    </Layout>
  );
};

export default CreateProduct;
