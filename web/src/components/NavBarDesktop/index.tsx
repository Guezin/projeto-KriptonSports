import React from 'react';
import { Link } from 'react-router-dom';
import { RiHome3Line, RiAddLine, RiBarcodeLine } from 'react-icons/ri';

import { Container } from './styles';

const NavBarDesktop: React.FC = () => {
  return (
    <Container>
      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
            <RiHome3Line size={20} color="#fff" />
          </li>

          <li>
            <Link to="/create-product">Cadastrar</Link>
            <RiAddLine size={20} color="#fff" />
          </li>

          <li>
            <Link to="/products">Produtos</Link>
            <RiBarcodeLine size={20} color="#fff" />
          </li>
        </ul>
      </nav>
    </Container>
  );
};

export default NavBarDesktop;
