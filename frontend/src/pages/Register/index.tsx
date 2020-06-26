import React from 'react';
import { css } from 'styled-components';
import { Form } from '@unform/web';

import Layout from '../../components/Layout';
import calendar from '../../assets/calendar.svg';

import Input from '../../components/Input';

import { Container, Content, Calendar } from './styles';

const stylesInput = {
  width: '332px',
  border: '1px solid #bdbdbd',
  'background-color': '#F9F7F4',
};

const Register: React.FC = () => {
  return (
    <Layout>
      <Container>
        <Calendar>
          <img src={calendar} alt="" />
          <strong>22/06/2020</strong>
        </Calendar>
        <Content>
          <Form onSubmit={() => {}}>
            <Input
              type="text"
              name="product"
              containerStyle={stylesInput}
              placeholder="Nome do produto"
            />
            <Input
              type="text"
              name="product"
              containerStyle={stylesInput}
              placeholder="Código do produto"
            />
            <Input
              type="text"
              name="product"
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

export default Register;
