import React, { useCallback } from 'react';
import { Form } from '@unform/web';
import { format, parseISO } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

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
  const handleFormSubmit = useCallback((data: IFormData) => {
    const regex = /(-|\/)/g;
    const date = data.date.split(regex);
    const dateformatted = format(
      parseISO(`${date[4]}-${date[2]}-${date[0]}`),
      'yyyy-MM-dd',
      { locale: ptBR }
    );
  }, []);

  return (
    <Layout>
      <Container>
        <Calendar>
          <img src={calendar} alt="" />
          <strong>22/06/2020</strong>
        </Calendar>
        <Content>
          <Form onSubmit={handleFormSubmit}>
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
