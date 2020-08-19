import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { FiPower } from 'react-icons/fi';

import { useAuth } from '../../hooks/auth';

import { Container, UserInfo } from './styles';

const HeaderDesktop: React.FC = () => {
  const { user, signOut } = useAuth();

  const handleSignOut = useCallback(() => {
    signOut();
  }, [signOut]);

  return (
    <Container>
      <header>
        <button type="button" onClick={handleSignOut}>
          <FiPower size={20} color="#fff" />
        </button>

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
    </Container>
  );
};

export default HeaderDesktop;
