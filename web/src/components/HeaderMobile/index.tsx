import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiPower } from 'react-icons/fi';
import { RiHome3Line, RiAddLine, RiBarcodeLine } from 'react-icons/ri';

import { useAuth } from '../../hooks/auth';

import logoSecondary from '../../assets/kripton-logo-secondary.png';

import NavBarMobile from '../../components/NavBarMobile';

import { Container, UserInfo } from './styles';

const HeaderMobile: React.FC = () => {
  const { user, signOut } = useAuth();

  const [openMenu, setOpenMenu] = useState(false);
  const [closeMenu, setCloseMenu] = useState(false);

  const handleToggleMenu = useCallback(() => {
    setCloseMenu(openMenu);
    setOpenMenu(!openMenu);
  }, [openMenu]);

  const handleSignOut = useCallback(() => {
    signOut();
  }, [signOut]);

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

      <main>
        <button type="button" onClick={handleToggleMenu}>
          <FiMenu size={20} color="#fff" />
        </button>

        <button type="button" onClick={handleSignOut}>
          <FiPower size={20} color="#fff" />
        </button>
      </main>

      <NavBarMobile showMenu={openMenu} />
    </Container>
  );
};

export default HeaderMobile;
