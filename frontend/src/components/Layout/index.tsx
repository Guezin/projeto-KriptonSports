import React from 'react';
import { Link } from 'react-router-dom';
import { FiHome, FiPlus, FiPower } from 'react-icons/fi';

import { useAuth } from '../../hooks/auth';

import logo from '../../assets/logo.png';

import {
  Container,
  Header,
  ButtonPower,
  Aside,
  SideNav,
  Main,
  Footer,
  UserAvatar,
} from './styles';

import Nav from '../Nav';

const Layout: React.FC = ({ children }) => {
  const { signOut, user } = useAuth();

  return (
    <Container>
      <Header>
        <ButtonPower onClick={signOut}>
          <FiPower size={20} color="#fff" />
        </ButtonPower>

        <UserAvatar>
          <strong>{user.name}</strong>
          <Link to="/profile">
            <img
              src="data:image/jpeg;base64,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"
              alt=""
            />
          </Link>
        </UserAvatar>
      </Header>
      <Aside>
        <img src={logo} alt="Kripton Sports" />

        <SideNav>
          <Nav href="/home" name="Home" icon={FiHome} />
          <Nav href="/register-product" name="Cadastrar" icon={FiPlus} />
        </SideNav>
      </Aside>
      <Main>{children}</Main>
      <Footer />
    </Container>
  );
};

export default Layout;
