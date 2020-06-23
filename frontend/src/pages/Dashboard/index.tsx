import React from 'react';

import Layout from '../../components/Layout';
import calendar from '../../assets/calendar.svg';

import { Container, Header, Content, InfoQtdProduct, Calendar } from './styles';


const Dashboard: React.FC = () => {
  return (
    <Layout userName={'Leandro Guezin Jr'}>
      <Container>
        <Header>
          <InfoQtdProduct>
            <p>Total estoque</p>
            <span>2345</span>
          </InfoQtdProduct>
          <Calendar>
            <img src={calendar} alt="" />
            <strong>22/06/2020</strong>
          </Calendar>
        </Header>
        <Content>
          <table>
            <thead>
              <tr>
                <th>Data</th>
                <th>Nome</th>
                <th>Quantidade</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>19/06/2020</td>
                <td>Whey protein 100%</td>
                <td>10</td>
              </tr>
              <tr>
                <td>30/06/2020</td>
                <td>creatina</td>
                <td>10</td>
              </tr>
              <tr>
                <td>20/06/2021</td>
                <td>Animal PACK</td>
                <td>10</td>
              </tr>
              <tr>
                <td>22/06/2022</td>
                <td>BCAA</td>
                <td>10</td>
              </tr>
            </tbody>
          </table>
        </Content>
      </Container>
    </Layout>
  );
};

export default Dashboard;
