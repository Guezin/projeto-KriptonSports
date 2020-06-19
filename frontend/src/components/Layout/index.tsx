import React from 'react';
import { FiHome, FiSearch } from 'react-icons/fi';

import logo from '../../assets/logo.png'

import { Container, Header, Aside, SideNav, Main, Footer, UserAvatar } from './styles';

import Nav from '../Nav';

interface LayoutProps {
  userName: string;
}

const Layout: React.FC<LayoutProps> = ({ children, userName }) => {
  return (
    <Container>
      <Header>
        <img src={logo} alt="Kripton Sports" />

        <UserAvatar>
          <strong>{userName}</strong>
          <a href="#">
            <img src="https://i.pinimg.com/originals/3d/b9/8b/3db98be8ce86f84ad6b49c26293874ab.jpg" alt="" />
          </a>
        </UserAvatar>
      </Header>
      <Aside>
        <SideNav>
          <Nav name="Dashboard" icon={FiHome} />
          <Nav name="Pesquisar" icon={FiSearch} />
          <Nav name="Consultar" icon={FiSearch} />
        </SideNav>
      </Aside>
      <Main>
        {children}
      </Main>
      <Footer />
    </Container>
  );
};

export default Layout;
