import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { RiHome3Line, RiAddLine, RiBarcodeLine } from 'react-icons/ri';

import { Nav } from './styles';

interface INavBarMobileProps {
  showMenu: boolean;
}

type ISelectedTypes = 'home' | 'products' | 'create-product';

const NavBarMobile: React.FC<INavBarMobileProps> = ({ showMenu }) => {
  const [selected, setSelected] = useState<ISelectedTypes>('home');

  const handleSelectName = useCallback((name: ISelectedTypes) => {
    setSelected(name);
  }, []);

  return (
    <Nav showMenu={showMenu} selected={selected}>
      <ul>
        <Link to="/home" onClick={() => handleSelectName('home')}>
          <li>
            Home
            <RiHome3Line size={20} color="#fff" />
          </li>
        </Link>

        <Link
          to="/create-product"
          onClick={() => handleSelectName('create-product')}
        >
          <li>
            Cadastrar
            <RiAddLine size={20} color="#fff" />
          </li>
        </Link>

        <Link to="/products" onClick={() => handleSelectName('products')}>
          <li>
            Produtos
            <RiBarcodeLine size={20} color="#fff" />
          </li>
        </Link>
      </ul>
    </Nav>
  );
};

export default NavBarMobile;
