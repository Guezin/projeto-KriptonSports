import React from 'react';
import { FiMenu } from 'react-icons/fi';

import logoSecondary from '../../assets/kripton-logo-secondary.png';

import { Container, UserInfo } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <header>
        <img src={logoSecondary} alt="Logo Kripton Sports" />

        <UserInfo>
          <span>Leandro</span>

          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS1DeyZNqRdLF9WiyJOo7YQW5HxbSp3F6tNQQ&usqp=CAU"
            alt="Avatar usuario"
          />
        </UserInfo>
      </header>

      <button type="button">
        <FiMenu size={20} color="#fff" />
      </button>
    </Container>
  );
};

export default Header;
