import React from 'react';

import HeaderMobile from '../HeaderMobile';
import HeaderDesktop from '../HeaderDesktop';
import NavBarDesktop from '../NavBarDesktop';

import { Container, Content } from './styles';

const Layout: React.FC = ({ children }) => {
  return (
    <Container>
      <HeaderMobile />
      <HeaderDesktop />

      <Content>
        <NavBarDesktop />

        {children}
      </Content>
    </Container>
  );
};

export default Layout;
