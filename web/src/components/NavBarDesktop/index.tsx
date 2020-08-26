import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { RiHome3Line, RiAddLine, RiBarcodeLine } from 'react-icons/ri';

import { Container } from './styles';

const NavBarDesktop: React.FC = () => {
  const [selected, setSelected] = useState(0);

  const { pathname } = useLocation();

  useEffect(() => {
    switch (pathname) {
      case '/home':
        setSelected(1);
        break;
      case '/create-product':
        setSelected(2);
        break;
      case '/products':
        setSelected(3);
        break;
      default:
        setSelected(selected);
    }
  }, [pathname, selected]);

  return (
    <Container selected={selected}>
      <nav>
        <ul>
          <Link to="/home" onClick={() => setSelected(1)}>
            <li>
              Home
              <RiHome3Line size={20} color="#fff" />
            </li>
          </Link>

          <Link to="/create-product" onClick={() => setSelected(2)}>
            <li>
              Cadastrar
              <RiAddLine size={20} color="#fff" />
            </li>
          </Link>

          <Link to="/products" onClick={() => setSelected(3)}>
            <li>
              Produtos
              <RiBarcodeLine size={20} color="#fff" />
            </li>
          </Link>
        </ul>
      </nav>
    </Container>
  );
};

export default NavBarDesktop;
