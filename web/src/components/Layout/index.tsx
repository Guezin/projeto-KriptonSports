import React from 'react';

import logoSecondary from '../../assets/kripton-logo-secondary.png';

import HeaderMobile from '../HeaderMobile';
import HeaderDesktop from '../HeaderDesktop';
import NavBarDesktop from '../NavBarDesktop';

import { Container, LogoContainer, Content } from './styles';

const Layout: React.FC = ({ children }) => {
  return (
    <Container>
      <header>
        <HeaderMobile />
        <HeaderDesktop />
      </header>

      <LogoContainer>
        <img src={logoSecondary} alt="Logo Kripton Sports" />
      </LogoContainer>

      <aside>
        <NavBarDesktop />
      </aside>

      <Content>{children}</Content>
    </Container>
  );
};

export default Layout;
