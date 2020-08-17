import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import { RiHome3Line, RiAddLine } from 'react-icons/ri';

import { useAuth } from '../../hooks/auth';

import logoSecondary from '../../assets/kripton-logo-secondary.png';

import { Container, UserInfo, Nav } from './styles';

const Header: React.FC = () => {
  const { user } = useAuth();

  const [openMenu, setOpenMenu] = useState(false);
  const [closeMenu, setCloseMenu] = useState(false);

  const handleToggleMenu = useCallback(() => {
    setOpenMenu(!openMenu);
    setCloseMenu(openMenu);
  }, [openMenu]);

  return (
    <Container showMenu={openMenu} hideMenu={closeMenu}>
      <header>
        <img src={logoSecondary} alt="Logo Kripton Sports" />

        <UserInfo>
          <span>{user.name}</span>

          <Link to="/profile">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS1DeyZNqRdLF9WiyJOo7YQW5HxbSp3F6tNQQ&usqp=CAU"
              alt="Avatar usuario"
            />
          </Link>
        </UserInfo>
      </header>

      <button type="button" onClick={handleToggleMenu}>
        <FiMenu size={20} color="#fff" />
      </button>

      <Nav showMenu={openMenu} hideMenu={closeMenu}>
        <Link to="/home">
          <RiHome3Line size={20} color="#fff" />
          <span>Home</span>
        </Link>

        <Link to="/create-product">
          <RiAddLine size={20} color="#fff" />
          <span>Cadastrar</span>
        </Link>
      </Nav>
    </Container>
  );
};

export default Header;
